import { NextResponse } from 'next/server';
import { MongoClient, ObjectId } from 'mongodb';

const uri = process.env.MONGODB_URI || '';
const client = new MongoClient(uri);

export async function POST(request: Request) {
  try {
    const data = await request.json();

    await client.connect();
    const db = client.db('construction-company');
    const settings = db.collection('settings');

    // Update or create settings
    await settings.updateOne(
      { _id: new ObjectId('website') },
      { $set: data },
      { upsert: true }
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating settings:', error);
    return NextResponse.json(
      { error: 'Failed to update settings' },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}

export async function GET() {
  try {
    await client.connect();
    const db = client.db('construction-company');
    const settings = db.collection('settings');

    const result = await settings.findOne({ _id: new ObjectId('website') });
    return NextResponse.json(result || {});
  } catch (error) {
    console.error('Error fetching settings:', error);
    return NextResponse.json(
      { error: 'Failed to fetch settings' },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}
