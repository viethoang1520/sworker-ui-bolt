import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { SearchIcon, MapPinIcon, ChevronDownIcon, ArrowRightIcon } from 'lucide-react';

export const BrowseCompaniesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('Thanh Pho Ho Chi Minh, Viet Nam');

  const recommendedEmployers = [
    {
      id: 1,
      name: 'Nomad',
      description: 'Nomad is located in Paris, France. Nomad has generated $728,000 in sales (USD).',
      jobs: 3,
      tags: ['Business Service'],
      logo: '/api/placeholder/60/60'
    },
    {
      id: 2,
      name: 'Discord',
      description: "We'd love to work with someone like you. We care about creating a delightful experience.",
      jobs: 3,
      tags: ['Business Service'],
      logo: '/api/placeholder/60/60'
    },
    {
      id: 3,
      name: 'Maze',
      description: "We're a passionate bunch working from all over the world to build the future of rapid testing together.",
      jobs: 3,
      tags: ['Business Service'],
      logo: '/api/placeholder/60/60'
    },
    {
      id: 4,
      name: 'Udacity',
      description: 'Udacity is a new type of online university that teaches the actual programming skills.',
      jobs: 3,
      tags: ['Business Service'],
      logo: '/api/placeholder/60/60'
    },
    {
      id: 5,
      name: 'Webflow',
      description: 'Webflow is the first design and hosting platform built from the ground up for the mobile age.',
      jobs: 3,
      tags: ['Business Service', 'Technology'],
      logo: '/api/placeholder/60/60'
    },
    {
      id: 6,
      name: 'Foundation',
      description: 'Foundation helps creators mint and auction their digital artworks as NFTs on the Ethereum blockchain.',
      jobs: 3,
      tags: ['Business Service', 'Crypto'],
      logo: '/api/placeholder/60/60'
    },
  ];

  const categories = [
    { name: 'Design', icon: '🎨', active: true },
    { name: 'Fintech', icon: '💳' },
    { name: 'Hosting', icon: '🌐' },
    { name: 'Developer', icon: '</>' },
  ];

  const companies = [
    { name: 'Pentagram', jobs: 3, logo: '/api/placeholder/80/80' },
    { name: 'Wolff Olins', jobs: 3, logo: '/api/placeholder/80/80' },
    { name: 'Clay', jobs: 3, logo: '/api/placeholder/80/80' },
    { name: 'MediaMonks', jobs: 3, logo: '/api/placeholder/80/80' },
    { name: 'Packer', jobs: 3, logo: '/api/placeholder/80/80' },
    { name: 'Square', jobs: 3, logo: '/api/placeholder/80/80' },
    { name: 'Divy', jobs: 3, logo: '/api/placeholder/80/80' },
    { name: 'WebFlow', jobs: 3, logo: '/api/placeholder/80/80' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Find your <span className="text-blue-600 relative">
              dream jobs
              <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C60 2 140 2 198 10" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Find the dream jobs you dream work for
          </p>

          {/* Search Bar */}
          <div className="flex max-w-4xl mx-auto gap-4 mb-8">
            <div className="flex-1 relative">
              <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Employer name or keyword"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-14 text-lg border-gray-300 focus:border-blue-500"
              />
            </div>
            <div className="flex-1 relative">
              <MapPinIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select className="w-full h-14 pl-12 pr-10 text-lg border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none appearance-none bg-white">
                <option>{location}</option>
              </select>
              <ChevronDownIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
            <Button className="h-14 px-8 text-lg bg-blue-600 hover:bg-blue-700">
              Search
            </Button>
          </div>

          <div className="text-gray-500">
            <span className="font-medium">Popular:</span> Twitter, Microsoft, Apple, Facebook
          </div>
        </div>
      </section>

      {/* Recommended Employers */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Recommended Employers</h2>
          <p className="text-gray-600">Based on your profile, Employer preferences, and recent activity</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {recommendedEmployers.map((employer) => (
            <Card key={employer.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <img src={employer.logo} alt={employer.name} className="w-12 h-12 rounded-lg" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{employer.name}</h3>
                      <span className="text-blue-600 text-sm font-medium">{employer.jobs} Jobs</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {employer.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {employer.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Employers by Category */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Employers by Category</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {categories.map((category) => (
              <Card key={category.name} className={`cursor-pointer transition-all ${category.active ? 'bg-blue-600 text-white' : 'hover:shadow-md'}`}>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <h3 className="font-semibold">{category.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎨</span>
              <span className="font-semibold text-gray-900">24 Results</span>
            </div>
            <Button variant="ghost" className="text-blue-600 hover:text-blue-700">
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {companies.map((company) => (
              <Link key={company.name} to={`/company/${company.name.toLowerCase()}`}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <img src={company.logo} alt={company.name} className="w-16 h-16 mx-auto mb-4 rounded-lg" />
                    <h3 className="font-semibold text-gray-900 mb-2">{company.name}</h3>
                    <p className="text-blue-600 text-sm font-medium">{company.jobs} Jobs</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
              View more Employers
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};