'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Modern Residential Complex',
    description:
      'A contemporary residential development featuring sustainable design and modern amenities.',
    image: '/images/projects/residential-1.jpg',
    category: 'residential',
    date: '2023-06-15',
  },
  {
    id: '2',
    title: 'Commercial Office Building',
    description:
      'State-of-the-art office space with innovative architectural design and energy-efficient systems.',
    image: '/images/projects/commercial-1.jpg',
    category: 'commercial',
    date: '2023-08-20',
  },
  {
    id: '3',
    title: 'Luxury Villa Development',
    description:
      'Exclusive luxury villas with premium finishes and private amenities.',
    image: '/images/projects/residential-2.jpg',
    category: 'residential',
    date: '2023-10-05',
  },
  {
    id: '4',
    title: 'Shopping Mall Renovation',
    description:
      'Complete renovation of a shopping mall with modern retail spaces and improved customer experience.',
    image: '/images/projects/commercial-2.jpg',
    category: 'commercial',
    date: '2023-11-12',
  },
  {
    id: '5',
    title: 'Sustainable Housing Project',
    description:
      'Eco-friendly housing development with renewable energy systems and green spaces.',
    image: '/images/projects/residential-3.jpg',
    category: 'residential',
    date: '2023-12-01',
  },
  {
    id: '6',
    title: 'Corporate Headquarters',
    description:
      'Modern corporate headquarters with advanced technology integration and collaborative workspaces.',
    image: '/images/projects/commercial-3.jpg',
    category: 'commercial',
    date: '2024-01-15',
  },
];

const categories = ['all', 'residential', 'commercial'];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Our Portfolio</h1>

      {/* Category Filter */}
      <div className="flex justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative h-64">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  {new Date(project.date).toLocaleDateString()}
                </span>
                <span className="text-sm font-medium text-indigo-600">
                  {project.category.charAt(0).toUpperCase() +
                    project.category.slice(1)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Back to Home Link */}
      <div className="text-center mt-12">
        <Link
          href="/"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
        >
          <span>Back to Home</span>
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
