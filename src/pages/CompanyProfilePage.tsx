import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';
import {
  TwitterIcon,
  FacebookIcon,
  ArrowRightIcon,
  Globe,
  MapPin,
  Users,
  Calendar,
  Building2,
  Mail,
  Phone,
  Star
} from 'lucide-react';

export const CompanyProfilePage = () => {
  const { id } = useParams();

  const companyInfo = {
    name: 'Stripe',
    website: 'https://stripe.com',
    founded: 'July 31, 2011',
    employees: '4000+',
    location: '20 countries',
    industry: 'Payment Gateway',
    logo: '/api/placeholder/80/80'
  };

  const techStack = [
    { name: 'HTML 5', logo: '/api/placeholder/40/40' },
    { name: 'CSS 3', logo: '/api/placeholder/40/40' },
    { name: 'JavaScript', logo: '/api/placeholder/40/40' },
    { name: 'Ruby', logo: '/api/placeholder/40/40' },
    { name: 'MongoDB', logo: '/api/placeholder/40/40' },
    { name: 'Figma', logo: '/api/placeholder/40/40' }
  ];

  const officeLocations = [
    { country: 'United States', flag: '🇺🇸' },
    { country: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
    { country: 'Japan', flag: '🇯🇵' },
    { country: 'Australia', flag: '🇦🇺' },
    { country: 'China', flag: '🇨🇳' }
  ];

  const teamMembers = [
    {
      name: 'Célestin Gardinier',
      role: 'CEO & Co-Founder',
      avatar: '/api/placeholder/60/60'
    },
    {
      name: 'Reynaud Colbert',
      role: 'Co-Founder',
      avatar: '/api/placeholder/60/60'
    },
    {
      name: 'Arienne Lyon',
      role: 'Managing Director',
      avatar: '/api/placeholder/60/60'
    },
    {
      name: 'Bernard Arnault',
      role: 'Managing Director',
      avatar: '/api/placeholder/60/60'
    },
    {
      name: 'Christine Dior',
      role: 'Managing Director',
      avatar: '/api/placeholder/60/60'
    }
  ];

  const perksAndBenefits = [
    {
      icon: '🏥',
      title: 'Full Healthcare',
      description: 'We believe in thriving communities and that starts with our team being happy and healthy.'
    },
    {
      icon: '🏖️',
      title: 'Unlimited Vacation',
      description: 'We believe you should have a flexible schedule that makes space for family, wellness, and fun.'
    },
    {
      icon: '📚',
      title: 'Skill Development',
      description: 'We believe in always learning and leveling up our skills. Whether it\'s a conference or online course.'
    },
    {
      icon: '🏔️',
      title: 'Team Summits',
      description: 'Every 6 months we have a full team summit where we have fun, reflect, and plan for the upcoming quarter.'
    },
    {
      icon: '🏠',
      title: 'Remote Working',
      description: 'You know how you perform your best. Work from home, coffee shop or anywhere when you feel like it.'
    },
    {
      icon: '💰',
      title: 'Commuter Benefits',
      description: 'We\'re grateful for all the time and energy each team member puts into getting to work every day.'
    },
    {
      icon: '💼',
      title: 'We give back.',
      description: 'We anonymously match any donation our employees make (up to $/€ 600) so they can support the organizations they care about most.'
    }
  ];

  const openJobs = [
    {
      id: 1,
      title: 'Social Media Assistant',
      company: 'Nomad',
      location: 'Paris, France',
      type: 'Part-Time',
      tags: ['Marketing', 'Design'],
      logo: '/api/placeholder/40/40'
    },
    {
      id: 2,
      title: 'Social Media Assistant',
      company: 'Netlify',
      location: 'Paris, France',
      type: 'Part-Time',
      tags: ['Marketing', 'Design'],
      logo: '/api/placeholder/40/40'
    },
    {
      id: 3,
      title: 'Brand Designer',
      company: 'Dropbox',
      location: 'San Francisco, USA',
      type: 'Part-Time',
      tags: ['Marketing', 'Design'],
      logo: '/api/placeholder/40/40'
    },
    {
      id: 4,
      title: 'Brand Designer',
      company: 'Maze',
      location: 'San Francisco, USA',
      type: 'Part-Time',
      tags: ['Marketing', 'Design'],
      logo: '/api/placeholder/40/40'
    },
    {
      id: 5,
      title: 'Interactive Developer',
      company: 'Terraform',
      location: 'Hamburg, Germany',
      type: 'Part-Time',
      tags: ['Marketing', 'Design'],
      logo: '/api/placeholder/40/40'
    },
    {
      id: 6,
      title: 'Interactive Developer',
      company: 'Udacity',
      location: 'Hamburg, Germany',
      type: 'Part-Time',
      tags: ['Marketing', 'Design'],
      logo: '/api/placeholder/40/40'
    },
    {
      id: 7,
      title: 'HR Manager',
      company: 'Packer',
      location: 'Lucern, Switzerland',
      type: 'Part-Time',
      tags: ['Marketing', 'Design'],
      logo: '/api/placeholder/40/40'
    },
    {
      id: 8,
      title: 'HR Manager',
      company: 'WebFlow',
      location: 'Lucern, Switzerland',
      type: 'Part-Time',
      tags: ['Marketing', 'Design'],
      logo: '/api/placeholder/40/40'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/20">
      <Header />

      {/* Enhanced Breadcrumb */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600 transition-colors font-medium">Home</Link>
            <ArrowRightIcon className="w-4 h-4 mx-2 text-gray-400" />
            <Link to="/browse-companies" className="hover:text-blue-600 transition-colors font-medium">Companies</Link>
            <ArrowRightIcon className="w-4 h-4 mx-2 text-gray-400" />
            <span className="text-gray-900 font-semibold">Stripe</span>
          </nav>
        </div>
      </div>

      {/* Enhanced Company Header */}
      <section className="bg-white/90 backdrop-blur-sm shadow-lg border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Company Logo */}
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-4 shadow-lg">
                <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                  <span className="text-xl font-bold text-blue-600">S</span>
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 bg-green-500 w-6 h-6 rounded-full border-3 border-white flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>
            </div>

            {/* Company Info */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                <h1 className="text-2xl font-bold text-gray-900">{companyInfo.name}</h1>
                <div className="flex items-center gap-2">
                  <Badge className="bg-blue-600 text-white hover:bg-blue-700 px-3 py-1 text-xs font-semibold">
                    73 Open Jobs
                  </Badge>
                  <Badge className="bg-yellow-100 text-yellow-800 px-2 py-1 text-xs font-medium">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    4.8 Rating
                  </Badge>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-6">
                <Globe className="w-4 h-4 text-blue-600" />
                <a href={companyInfo.website} className="text-blue-600 hover:text-blue-700 font-medium transition-colors text-sm">
                  {companyInfo.website}
                </a>
              </div>

              {/* Enhanced Company Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-gray-200/60 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="font-semibold text-gray-900 text-sm">Founded</span>
                  </div>
                  <span className="text-gray-700 font-medium text-sm">{companyInfo.founded}</span>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-gray-200/60 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <Users className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="font-semibold text-gray-900 text-sm">Employees</span>
                  </div>
                  <span className="text-gray-700 font-medium text-sm">{companyInfo.employees}</span>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-gray-200/60 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-purple-600" />
                    </div>
                    <span className="font-semibold text-gray-900 text-sm">Locations</span>
                  </div>
                  <span className="text-gray-700 font-medium text-sm">{companyInfo.location}</span>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-gray-200/60 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Building2 className="w-4 h-4 text-orange-600" />
                    </div>
                    <span className="font-semibold text-gray-900 text-sm">Industry</span>
                  </div>
                  <span className="text-gray-700 font-medium text-sm">{companyInfo.industry}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Left Column - Enhanced */}
          <div className="xl:col-span-2 space-y-6">
            {/* Enhanced Employer Profile */}
            <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">About Stripe</h2>
                </div>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed">
                    Stripe is a software platform for starting and running internet businesses. Millions of businesses rely on Stripe's software tools to accept payments, expand globally, and manage their businesses online. Stripe has been at the forefront of expanding internet commerce, powering new business models, and supporting the latest platforms, from marketplaces to mobile commerce sites.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    We believe that growing the GDP of the internet is a problem rooted in code and design, not finance. Stripe is built for developers, makers, and creators. We work on solving the hard problems necessary to build global economic infrastructure—from designing highly reliable systems to developing advanced machine learning algorithms to prevent fraud.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Contact Section */}
            <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Get in Touch</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start h-10 border-2 border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all text-sm">
                      <TwitterIcon className="w-4 h-4 mr-2 text-blue-500" />
                      <span className="font-medium">twitter.com/stripe</span>
                    </Button>
                    <Button variant="outline" className="w-full justify-start h-10 border-2 border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all text-sm">
                      <FacebookIcon className="w-4 h-4 mr-2 text-blue-600" />
                      <span className="font-medium">facebook.com/stripe</span>
                    </Button>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Mail className="w-4 h-4 text-gray-600" />
                      <div>
                        <p className="font-medium text-gray-900 text-sm">Email</p>
                        <p className="text-xs text-gray-600">stripe.com/contact/email</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Phone className="w-4 h-4 text-gray-600" />
                      <div>
                        <p className="font-medium text-gray-900 text-sm">Support</p>
                        <p className="text-xs text-gray-600">24/7 Customer Support</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Office Photos */}
            <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Our Workspace</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative group overflow-hidden rounded-lg">
                    <img src="/ws-1.jpg" alt="Office" className="w-full h-32 object-cover transition-transform group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="relative group overflow-hidden rounded-lg">
                    <img src="/ws-2.jpg" alt="Office" className="w-full h-32 object-cover transition-transform group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="relative group overflow-hidden rounded-lg">
                    <img src="/ws-2.jpg" alt="Office" className="w-full h-32 object-cover transition-transform group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="relative group overflow-hidden rounded-lg">
                    <img src="/ws-1.jpg" alt="Office" className="w-full h-32 object-cover transition-transform group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Team Section */}
            <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">Leadership Team</h2>
                  </div>
                  <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50 font-semibold text-sm px-3 py-1">
                    View All Team (47)
                  </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="text-center group">
                      <div className="relative mb-3">
                        <Avatar className="w-16 h-16 mx-auto ring-2 ring-white shadow-lg group-hover:ring-blue-200 transition-all">
                          <AvatarImage src={member.avatar} alt={member.name} />
                          <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold text-sm">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <h3 className="font-semibold text-gray-900 text-xs mb-1">{member.name}</h3>
                      <p className="text-gray-600 text-xs">{member.role}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Perks & Benefits */}
            <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3">Perks & Benefits</h2>
                <p className="text-gray-600 mb-6">We believe in taking care of our team with comprehensive benefits and perks</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {perksAndBenefits.map((perk, index) => (
                    <div key={index} className="flex gap-3 p-4 bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-lg hover:shadow-lg transition-all border border-gray-200/60">
                      <div className="text-2xl">{perk.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2">{perk.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">{perk.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Right Column */}
          <div className="space-y-6">
            {/* Enhanced Tech Stack */}
            <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0 hover:shadow-2xl transition-all">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">⚡</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">Tech Stack</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm">Discover the cutting-edge technologies powering Stripe's platform</p>

                <div className="grid grid-cols-3 gap-3 mb-4">
                  {techStack.map((tech, index) => (
                    <div key={index} className="group">
                      <div className="flex flex-col items-center p-3 border-2 border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-lg transition-all bg-gradient-to-br from-white to-gray-50">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-md flex items-center justify-center mb-2">
                          <span className="text-white font-bold text-xs">{tech.name.charAt(0)}</span>
                        </div>
                        <span className="text-xs text-gray-700 text-center font-medium group-hover:text-blue-600 transition-colors">{tech.name}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow-lg hover:shadow-xl transition-all text-sm">
                  <span>Explore Tech Stack</span>
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Enhanced Office Locations */}
            <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0 hover:shadow-2xl transition-all">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">Global Offices</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm">Join our international team across 20+ countries worldwide</p>

                <div className="space-y-3 mb-4">
                  {officeLocations.map((location, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gradient-to-r from-gray-50 to-blue-50/30 rounded-lg hover:shadow-md transition-all border border-gray-200/60">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <span className="text-lg">{location.flag}</span>
                      </div>
                      <span className="text-gray-800 font-medium flex-1 text-sm">{location.country}</span>
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="w-full text-blue-600 border-2 border-blue-600 hover:bg-blue-50 font-semibold py-2 rounded-lg text-sm">
                  <span>View All Locations</span>
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Company Stats Card */}
            <Card className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-xl border-0">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 text-center">Company Highlights</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">73</div>
                    <div className="text-blue-100 text-xs">Open Positions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">4.8</div>
                    <div className="text-blue-100 text-xs">Employee Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">98%</div>
                    <div className="text-blue-100 text-xs">Satisfaction Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">12+</div>
                    <div className="text-blue-100 text-xs">Years Growing</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Enhanced Open Jobs Section */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Open Opportunities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join our team and help shape the future of internet commerce
            </p>
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Badge className="bg-blue-100 text-blue-800 px-3 py-1 font-semibold text-sm">
                {openJobs.length} Open Positions
              </Badge>
              <Badge className="bg-green-100 text-green-800 px-3 py-1 font-semibold text-sm">
                Remote Friendly
              </Badge>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all text-sm">
              <span>View All Jobs</span>
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {openJobs.map((job) => (
              <Card key={job.id} className="bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all border-0 group overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg p-2 shadow-lg">
                        <div className="w-full h-full bg-white rounded-md flex items-center justify-center">
                          <span className="text-blue-600 font-bold text-sm">{job.company.charAt(0)}</span>
                        </div>
                      </div>
                      <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <Link
                        to={`/job/${job.id}`}
                        className="block group-hover:text-blue-600 transition-colors"
                      >
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {job.title}
                        </h3>
                      </Link>
                      <div className="flex items-center gap-2 text-gray-600 mb-3 text-sm">
                        <Building2 className="w-4 h-4" />
                        <span className="font-medium">{job.company}</span>
                        <span>•</span>
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium px-2 py-1 text-xs">
                          {job.type}
                        </Badge>
                        {job.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-blue-600 border-blue-200 hover:bg-blue-50 font-medium text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Job Actions */}
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      Posted 2 days ago
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-3 py-1 rounded-md text-xs">
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};