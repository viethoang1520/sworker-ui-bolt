import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { SearchIcon, MapPinIcon, ChevronDownIcon } from 'lucide-react';

export const SearchResultsPage = () => {
  const [searchTerm, setSearchTerm] = useState('Fintech');
  const [location, setLocation] = useState('Thanh Pho Ho Chi Minh, Viet Nam');

  const industries = [
    { name: 'Advertising', count: 43 },
    { name: 'Business Service', count: 4 },
    { name: 'Blockchain', count: 5 },
    { name: 'Cloud', count: 15 },
    { name: 'Consumer Tech', count: 6 },
    { name: 'Education', count: 34 },
    { name: 'Fintech', count: 45 },
    { name: 'Gaming', count: 33 },
    { name: 'Food & Beverage', count: 5 },
    { name: 'Healthcare', count: 3 },
    { name: 'Hosting', count: 5 },
    { name: 'Media', count: 4 },
  ];

  const companies = [
    {
      id: 1,
      name: 'Stripe',
      description: 'Stripe is a software platform for starting and running internet businesses. Millions of businesses rely on Stripe\'s software tools...',
      jobs: 7,
      tags: ['Business', 'Payment gateway'],
      logo: '/api/placeholder/60/60'
    },
    {
      id: 2,
      name: 'Truebill',
      description: 'Take control of your money. Truebill develops a mobile app that helps consumers take control of their financial...',
      jobs: 7,
      tags: ['Business'],
      logo: '/api/placeholder/60/60'
    },
    {
      id: 3,
      name: 'Square',
      description: 'Square builds common business tools in unconventional ways so more people can start, run, and grow their businesses.',
      jobs: 7,
      tags: ['Business', 'Blockchain'],
      logo: '/api/placeholder/60/60'
    },
    {
      id: 4,
      name: 'Coinbase',
      description: 'Coinbase is a digital currency wallet and platform where merchants and consumers can transact with new digital currencies.',
      jobs: 7,
      tags: ['Business', 'Blockchain'],
      logo: '/api/placeholder/60/60'
    },
    {
      id: 5,
      name: 'Robinhood',
      description: 'Robinhood is lowering barriers, removing fees, and providing greater access to financial information.',
      jobs: 7,
      tags: ['Business'],
      logo: '/api/placeholder/60/60'
    },
    {
      id: 6,
      name: 'Kraken',
      description: 'Based in San Francisco, Kraken is the world\'s largest global bitcoin exchange in euro volume and liquidity.',
      jobs: 7,
      tags: ['Business', 'Blockchain'],
      logo: '/api/placeholder/60/60'
    },
    {
      id: 7,
      name: 'Revolut',
      description: 'When Revolut was founded in 2015, we had a vision to build a sustainable, digital alternative to traditional big banks.',
      jobs: 7,
      tags: ['Business'],
      logo: '/api/placeholder/60/60'
    },
    {
      id: 8,
      name: 'Divvy',
      description: 'Divvy is a secure financial platform for businesses to manage payments and subscriptions.',
      jobs: 7,
      tags: ['Business', 'Blockchain'],
      logo: '/api/placeholder/60/60'
    },
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
                placeholder="Job title or keyword"
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside className="w-80">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Industry</h3>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {industries.map((industry) => (
                  <label key={industry.name} className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span className="text-gray-700">{industry.name}</span>
                    <span className="text-gray-400 text-sm">({industry.count})</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Company Listings */}
          <main className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">All Jobs</h2>
                <p className="text-gray-600">Showing 73 results</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-600">Sort by:</span>
                <select className="border border-gray-300 rounded-md px-3 py-2">
                  <option>Most relevant</option>
                  <option>Newest</option>
                  <option>Company Size</option>
                </select>
                <div className="flex border border-gray-300 rounded-md">
                  <button className="p-2 border-r border-gray-300">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V4z" />
                    </svg>
                  </button>
                  <button className="p-2 bg-blue-600 text-white">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 000 2h11a1 1 0 100-2H3zM3 8a1 1 0 000 2h6a1 1 0 100-2H3zM3 12a1 1 0 100 2h4a1 1 0 100-2H3z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {companies.map((company) => (
                <Card key={company.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <img src={company.logo} alt={company.name} className="w-16 h-16 rounded-lg flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <Link 
                            to={`/company/${company.id}`}
                            className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                          >
                            {company.name}
                          </Link>
                          <span className="text-blue-600 text-sm font-medium whitespace-nowrap ml-2">
                            {company.jobs} Jobs
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                          {company.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {company.tags.map((tag) => (
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

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-12">
              <Button variant="outline" size="sm">
                <ChevronDownIcon className="w-4 h-4 rotate-90" />
              </Button>
              <Button variant="outline" size="sm">1</Button>
              <Button className="bg-blue-600 text-white" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <span className="px-2">...</span>
              <Button variant="outline" size="sm">10</Button>
              <Button variant="outline" size="sm">
                <ChevronDownIcon className="w-4 h-4 -rotate-90" />
              </Button>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};