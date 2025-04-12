'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from 'axios';

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
    const fetchSettings = async () => {
      try {
        const response = await axios.get('/api/settings');
        if (response.data?.services) {
          setServices(response.data.services);
        }
      } catch (error) {
        console.error('Error fetching settings:', error);
      }
    };

    fetchSettings();
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* New Construction */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48">
              {services.newConstruction.image ? (
                <Image
                  src={services.newConstruction.image}
                  alt={services.newConstruction.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 bg-gray-200" />
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                {services.newConstruction.title}
              </h3>
              <p className="text-gray-600">
                {services.newConstruction.description}
              </p>
            </div>
          </div>

          {/* Renovations */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48">
              {services.renovations.image ? (
                <Image
                  src={services.renovations.image}
                  alt={services.renovations.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 bg-gray-200" />
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                {services.renovations.title}
              </h3>
              <p className="text-gray-600">
                {services.renovations.description}
              </p>
            </div>
          </div>

          {/* Commercial Projects */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48">
              {services.commercial.image ? (
                <Image
                  src={services.commercial.image}
                  alt={services.commercial.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 bg-gray-200" />
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                {services.commercial.title}
              </h3>
              <p className="text-gray-600">{services.commercial.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
