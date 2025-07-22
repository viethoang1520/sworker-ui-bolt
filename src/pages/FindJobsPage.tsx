import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { SearchIcon, MapPinIcon, ChevronDownIcon } from 'lucide-react';

export const FindJobsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('Thanh Pho Ho Chi Minh, Viet Nam');

  const jobTypes = [
    { name: 'Part-Time', count: 5 },
    { name: 'Remote', count: 2 },
    { name: 'Internship', count: 24 },
    { name: 'Contract', count: 3 },
  ];

  const categories = [
    { name: 'Design', count: 24 },
    { name: 'Sales', count: 3 },
    { name: 'Marketing', count: 3 },
    { name: 'Business', count: 3, checked: true },
    { name: 'Human Resource', count: 6 },
    { name: 'Finance', count: 4 },
    { name: 'Engineering', count: 4 },
    { name: 'Technology', count: 5, checked: true },
  ];

  const jobLevels = [
    { name: 'Entry Level', count: 57 },
    { name: 'Mid Level', count: 3 },
    { name: 'Senior Level', count: 5 },
    { name: 'Director', count: 12, checked: true },
    { name: 'VP or Above', count: 8 },
  ];

  const salaryRanges = [
    { name: '$700 - $1000', count: 4 },
    { name: '$100 - $1500', count: 6 },
    { name: '$1500 - $2000', count: 10 },
    { name: '$3000 or above', count: 4, checked: true },
  ];

  const jobs = [
    {
      id: 1,
      title: 'Social Media Assistant',
      company: 'Nomad',
      location: 'Paris, France',
      type: 'Part-Time',
      tags: ['Marketing', 'Design'],
      applied: 5,
      capacity: 10,
      logo: '/api/placeholder/40/40'
    },
    {
      id: 2,
      title: 'Brand Designer',
      company: 'Dropbox',
      location: 'San Francisco, USA',
      type: 'Part-Time',
      tags: ['Marketing', 'Design'],
      applied: 2,
      capacity: 10,
      logo: '/api/placeholder/40/40'
    },
    {
      id: 3,
      title: 'Interactive Developer',
      company: 'Terraform',
      location: 'Hamburg, Germany',
      type: 'Part-Time',
      tags: ['Marketing', 'Design'],
      applied: 8,
      capacity: 12,
      logo: '/api/placeholder/40/40'
    },
    {
      id: 4,
      title: 'Email Marketing',
      company: 'Revolut',
      location: 'Madrid, Spain',
      type: 'Part-Time',
      tags: ['Marketing', 'Design'],
      applied: 0,
      capacity: 10,
      logo: '/api/placeholder/40/40'
    },
    {
      id: 5,
      title: 'Lead Engineer',
      company: 'Canva',
      location: 'Ankara, Turkey',
      type: 'Part-Time',
      tags: ['Marketing', 'Design'],
      applied: 5,
      capacity: 10,
      logo: '/api/placeholder/40/40'
    },
    {
      id: 6,
      title: 'Product Designer',
      company: 'ClassPass',
      location: 'Berlin, Germany',
      type: 'Part-Time',
      tags: ['Marketing', 'Design'],
      applied: 5,
      capacity: 10,
      logo: '/api/placeholder/40/40'
    },
    {
      id: 7,
      title: 'Customer Manager',
      company: 'Pitch',
      location: 'Berlin, Germany',
      type: 'Part-Time',
      tags: ['Marketing', 'Design'],
      applied: 5,
      capacity: 10,
      logo: '/api/placeholder/40/40'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Find your <span className="text-blue-600 relative">
                dream job
                <svg className="absolute -bottom-2 left-0 w-full h-2" viewBox="0 0 200 8" fill="none">
                  <path d="M2 6C60 2 140 2 198 6" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Find your next career at companies like HubSpot, Nike, and Dropbox
            </p>

            {/* Search Bar */}
            <div className="flex max-w-3xl mx-auto gap-3 mb-6">
              <div className="flex-1 relative">
                <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Job title or keyword"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-12 text-base border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="flex-1 relative">
                <MapPinIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select className="w-full h-12 pl-12 pr-10 text-base border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none appearance-none bg-white">
                  <option>{location}</option>
                </select>
                <ChevronDownIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
              <Button className="h-12 px-6 text-base bg-blue-600 hover:bg-blue-700">
                Search
              </Button>
            </div>

            <div className="text-gray-500 text-sm">
              <span className="font-medium">Popular:</span> UI Designer, UX Researcher, Android, Admin
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-6">
          {/* Sidebar Filters */}
          <aside className="w-72 space-y-6">
            <Card className="p-5 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Filters</h2>

              {/* Type of Employment */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-4 text-sm flex items-center justify-between">
                  Type of Employment
                  <ChevronDownIcon className="w-4 h-4" />
                </h3>
                <div className="space-y-2">
                  {jobTypes.map((type) => (
                    <label key={type.name} className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-2 border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 checked:bg-blue-600 checked:border-blue-600"
                      />
                      <span className="text-gray-700 text-sm flex-1">{type.name}</span>
                      <span className="text-gray-400 text-xs">({type.count})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-4 text-sm flex items-center justify-between">
                  Categories
                  <ChevronDownIcon className="w-4 h-4" />
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category.name} className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-2 border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 checked:bg-blue-600 checked:border-blue-600"
                        defaultChecked={category.checked}
                      />
                      <span className="text-gray-700 text-sm flex-1">{category.name}</span>
                      <span className="text-gray-400 text-xs">({category.count})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Job Level */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-4 text-sm flex items-center justify-between">
                  Job Level
                  <ChevronDownIcon className="w-4 h-4" />
                </h3>
                <div className="space-y-2">
                  {jobLevels.map((level) => (
                    <label key={level.name} className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-2 border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 checked:bg-blue-600 checked:border-blue-600"
                        defaultChecked={level.checked}
                      />
                      <span className="text-gray-700 text-sm flex-1">{level.name}</span>
                      <span className="text-gray-400 text-xs">({level.count})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Salary Range */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 text-sm flex items-center justify-between">
                  Salary Range
                  <ChevronDownIcon className="w-4 h-4" />
                </h3>
                <div className="space-y-2">
                  {salaryRanges.map((range) => (
                    <label key={range.name} className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-2 border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 checked:bg-blue-600 checked:border-blue-600"
                        defaultChecked={range.checked}
                      />
                      <span className="text-gray-700 text-sm flex-1">{range.name}</span>
                      <span className="text-gray-400 text-xs">({range.count})</span>
                    </label>
                  ))}
                </div>
              </div>
            </Card>
          </aside>

          {/* Job Listings */}
          <main className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">All Jobs</h2>
                <p className="text-gray-600 text-sm">Showing 73 results</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-600 text-sm">Sort by:</span>
                <select className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:border-blue-500 focus:outline-none">
                  <option>Most relevant</option>
                  <option>Newest</option>
                  <option>Salary</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              {jobs.map((job) => (
                <Card key={job.id} className="hover:shadow-md transition-all duration-200 border border-gray-200 hover:border-blue-300">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between">
                      <div className="flex gap-4 flex-1">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">
                            {job.company.charAt(0)}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <Link
                            to={`/job-details`}
                            className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors block mb-1"
                          >
                            {job.title}
                          </Link>
                          <p className="text-gray-600 mb-3 text-sm">
                            {job.company} • {job.location}
                          </p>
                          <div className="flex items-center gap-2 mb-3 flex-wrap">
                            <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
                              {job.type}
                            </Badge>
                            {job.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="text-orange-600 border-orange-200 text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span>
                              <span className="text-green-600 font-medium">{job.applied} applied</span> of {job.capacity} capacity
                            </span>
                            <div className="w-full bg-gray-200 rounded-full h-1.5 max-w-32">
                              <div
                                className="bg-green-500 h-1.5 rounded-full"
                                style={{ width: `${(job.applied / job.capacity) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-sm px-4 py-2 flex-shrink-0">
                        Apply
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-10">
              <Button variant="outline" size="sm" className="text-sm">
                <ChevronDownIcon className="w-4 h-4 rotate-90" />
              </Button>
              <Button className="bg-blue-600 text-white text-sm" size="sm">1</Button>
              <Button variant="outline" size="sm" className="text-sm">2</Button>
              <Button variant="outline" size="sm" className="text-sm">3</Button>
              <Button variant="outline" size="sm" className="text-sm">4</Button>
              <Button variant="outline" size="sm" className="text-sm">5</Button>
              <span className="px-2 text-gray-400">...</span>
              <Button variant="outline" size="sm" className="text-sm">33</Button>
              <Button variant="outline" size="sm" className="text-sm">
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