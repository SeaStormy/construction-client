import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || '';
const client = new MongoClient(uri);

export async function POST(request: Request) {
  try {
    const data = await request.json();

    await client.connect();
    const db = client.db('construction-company');
    const settings = db.collection('settings');

    // Create a new settings document
    const result = await settings.insertOne(data);

    return NextResponse.json({
      success: true,
      id: result.insertedId,
    });
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

    // Get the most recent settings
    const result = await settings.find().sort({ _id: -1 }).limit(1).toArray();

    return NextResponse.json(result[0] || {});
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
