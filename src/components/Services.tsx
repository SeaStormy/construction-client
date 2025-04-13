'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { fetchSettings } from '@/utils/api';

interface Service {
  image: string;
  title: string;
  description: string;
}

interface ServicesSettings {
  newConstruction: Service;
  renovations: Service;
  commercial: Service;
}

export default function Services() {
  const [services, setServices] = useState<ServicesSettings>({
    newConstruction: {
      image: '',
      title: 'New Construction',
      description:
        'From ground-up construction to custom home building, we handle every detail with precision.',
    },
    renovations: {
      image: '',
      title: 'Renovations',
      description:
        'Transform your existing space with our expert renovation services.',
    },
    commercial: {
      image: '',
      title: 'Commercial Projects',
      description:
        'Professional construction services for commercial and industrial projects.',
    },
  });

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const data = await fetchSettings();
        if (data?.services) {
          setServices(data.services);
        }
      } catch (error) {
        console.error('Error fetching settings:', error);
      }
    };

    loadSettings();
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(services).map(([key, service]) => (
            <div
              key={key}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                {service.image ? (
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                ) : (
                  <div className="h-full w-full bg-gray-200" />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
