'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { fetchSettings } from '@/utils/api';

interface HeroSettings {
  heroImage: string;
  heroTitle: string;
  heroDescription: string;
}

export default function Hero() {
  const [settings, setSettings] = useState<HeroSettings>({
    heroImage: '',
    heroTitle: 'Quality Construction You Can Trust',
    heroDescription:
      'Building dreams into reality with expert craftsmanship and attention to detail.',
  });

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const data = await fetchSettings();
        if (data) {
          setSettings({
            heroImage: data.heroImage || '',
            heroTitle: data.heroTitle || settings.heroTitle,
            heroDescription: data.heroDescription || settings.heroDescription,
          });
        }
      } catch (error) {
        console.error('Error fetching settings:', error);
      }
    };

    loadSettings();
  }, []);

  return (
    <section className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {settings.heroImage ? (
          <Image
            src={settings.heroImage}
            alt="Construction Site"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        ) : (
          <div className="absolute inset-0 bg-gray-800" />
        )}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container h-full flex flex-col justify-center">
        <div className="max-w-2xl">
          <h1 className="heading-1 text-white mb-6">{settings.heroTitle}</h1>
          <p className="text-xl text-white/90 mb-8">
            {settings.heroDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn btn-primary">
              Get a Quote
            </Link>
            <Link href="/portfolio" className="btn btn-secondary">
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
