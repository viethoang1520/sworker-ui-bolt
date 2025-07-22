// filepath: f:\Sworker-bolt\project\src\pages\LandingPage.tsx
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Users, Code2, Palette, TrendingUp, Briefcase, Building, Bot, Calculator, GraduationCap } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const LandingPage = () => {
  const navigate = useNavigate();

  // Reduced to 8 job categories for 4x2 grid layout
  const jobCategories = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Development & IT",
      count: "842 jobs available",
      color: "bg-blue-100 text-blue-700"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Design & Creative",
      count: "236 jobs available",
      color: "bg-purple-100 text-purple-700"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Sales & Marketing",
      count: "756 jobs available",
      color: "bg-green-100 text-green-700"
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Engineering",
      count: "203 jobs available",
      color: "bg-teal-100 text-teal-700"
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "AI Services",
      count: "158 jobs available",
      color: "bg-indigo-100 text-indigo-700"
    },
    {
      icon: <Calculator className="h-8 w-8" />,
      title: "Finance & Accounting",
      count: "287 jobs available",
      color: "bg-emerald-100 text-emerald-700"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Admin & Support",
      count: "445 jobs available",
      color: "bg-gray-100 text-gray-700"
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "HR & Training",
      count: "178 jobs available",
      color: "bg-pink-100 text-pink-700"
    }
  ];

  const featuredJobs = [
    {
      id: 1,
      title: "Email Marketing",
      company: "Revolut",
      location: "Madrid, Spain",
      type: "Full Time",
      logo: "R",
      tags: ["Marketing", "Senior"],
      color: "bg-red-500"
    },
    {
      id: 2,
      title: "Brand Designer",
      company: "Dropbox",
      location: "San Francisco, US",
      type: "Full Time",
      logo: "📦",
      tags: ["Designer", "Business"],
      color: "bg-blue-500"
    },
    {
      id: 3,
      title: "Email Marketing",
      company: "Pitch",
      location: "Berlin, Germany",
      type: "Full Time",
      logo: "●",
      tags: ["Marketing", "Senior"],
      color: "bg-black"
    },
    {
      id: 4,
      title: "Visual Designer",
      company: "ClassPass",
      location: "Hamburg, Germany",
      type: "Full Time",
      logo: "💚",
      tags: ["Designer", "Junior"],
      color: "bg-green-500"
    },
    {
      id: 5,
      title: "Product Designer",
      company: "Canva",
      location: "Sacramento, US",
      type: "Full Time",
      logo: "🎨",
      tags: ["Marketing", "Senior"],
      color: "bg-blue-400"
    },
    {
      id: 6,
      title: "Lead Designer",
      company: "Carrd",
      location: "Ontario, Canada",
      type: "Full Time",
      logo: "🔵",
      tags: ["Designer", "Business"],
      color: "bg-teal-500"
    },
    {
      id: 7,
      title: "Brand Strategist",
      company: "Godaddy",
      location: "Melbourne, AU",
      type: "Full Time",
      logo: "🌐",
      tags: ["Marketing", "Senior"],
      color: "bg-orange-500"
    },
    {
      id: 8,
      title: "Data Analyst",
      company: "Twitch",
      location: "San Francisco, US",
      type: "Full Time",
      logo: "🎮",
      tags: ["Business", "Technology"],
      color: "bg-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Component */}
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 px-6 py-20 min-h-screen">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Discover
                <br />
                more than
                <br />
                <span className="text-blue-600 relative">
                  5000+ Jobs
                  <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 10" fill="none">
                    <path d="M2 8C60 2 140 2 198 8" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              <p className="text-gray-600 text-lg mb-8 max-w-md font-medium">
                Great platform for the job seeker that searching for new career heights and passionate about startups.
              </p>

              {/* Search Bar */}
              <div className="bg-white rounded-lg shadow-lg p-4 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2">
                    <Search className="h-5 w-5 text-gray-400" />
                    <Input
                      placeholder="Search category"
                      className="border-0 focus:ring-0"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <Input
                      placeholder="Florence, Italy"
                      className="border-0 focus:ring-0"
                    />
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Search my job
                  </Button>
                </div>
              </div>

              <div className="text-sm text-gray-500">
                Popular: UI Designer, UX Researcher, Android, Admin
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative flex justify-center">
              <img src="/landing_man.png" alt="Landing Man" className="w-full max-w-sm" />
            </div>
          </div>
        </div>
      </section>

      {/* Job Categories - Updated to show 4 categories per row */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Explore millions of <span className="text-blue-600">pros</span>
            </h2>
            <Button variant="outline" className="flex items-center space-x-2">
              <span>All Categories</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </div>

          {/* Updated grid: 4 columns on desktop, 2 on tablet, 1 on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {jobCategories.map((category, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow p-6">
                <div className={`w-16 h-16 rounded-lg ${category.color} flex items-center justify-center mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
                <p className="text-gray-600 text-sm font-medium">{category.count}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Redesigned */}
      <section className="bg-blue-600 px-6 py-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 20" fill="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="20" fill="url(#grid)" />
          </svg>
        </div>

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="text-white">
              <h2 className="text-5xl font-semibold mb-6 leading-tight">
                Start posting jobs
                <br />
                for hirings
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-md">
                Start posting jobs for millions of people to browse. Get qualified applicants quickly.
              </p>

              {/* Features list */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-blue-100">Reach millions of job seekers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-blue-100">Advanced candidate filtering</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-blue-100">Real-time analytics & reports</span>
                </div>
              </div>

              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3">
                Start for free
              </Button>
            </div>

            {/* Right side - Dashboard Preview */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="bg-white rounded-xl p-6 shadow-2xl">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm font-bold">S</span>
                      </div>
                      <span className="font-semibold text-gray-900">Employer Dashboard</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Live</span>
                    </div>
                  </div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-blue-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-blue-900">43</div>
                      <div className="text-sm text-blue-600 font-medium">Active Jobs</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-green-900">2,847</div>
                      <div className="text-sm text-green-600 font-medium">Applications</div>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-orange-900">67</div>
                      <div className="text-sm text-orange-600 font-medium">Hired</div>
                    </div>
                  </div>

                  {/* Chart Preview */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-gray-700">Application Analytics</span>
                      <span className="text-xs text-gray-500">Last 30 days</span>
                    </div>
                    <div className="flex items-end space-x-2 h-16">
                      <div className="bg-blue-400 w-4 h-8 rounded-t"></div>
                      <div className="bg-blue-500 w-4 h-12 rounded-t"></div>
                      <div className="bg-blue-600 w-4 h-16 rounded-t"></div>
                      <div className="bg-blue-500 w-4 h-10 rounded-t"></div>
                      <div className="bg-blue-400 w-4 h-6 rounded-t"></div>
                      <div className="bg-blue-500 w-4 h-14 rounded-t"></div>
                      <div className="bg-blue-600 w-4 h-12 rounded-t"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full opacity-20 animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Featured <span className="text-blue-600">jobs</span>
            </h2>
            <Button variant="outline">
              Show all jobs →
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredJobs.map((job) => (
              <Card key={job.id} className="cursor-pointer hover:shadow-lg transition-shadow p-6" onClick={() => navigate(`/job-details/${job.id}`)}>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg ${job.color} flex items-center justify-center text-white font-bold`}>
                    {job.logo}
                  </div>
                  <Button variant="ghost" size="sm" onClick={(e) => {
                    e.stopPropagation();
                    // Handle bookmark
                  }}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                  </Button>
                </div>
                <h3 className="font-semibold text-lg mb-1">{job.title}</h3>
                <p className="text-gray-600 mb-2">{job.company} • {job.location}</p>
                <p className="text-sm text-gray-500 mb-4">{job.type}</p>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="px-6 py-20 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What our <span className="text-blue-600">clients say</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover how professionals across different industries have found success through our platform
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 - DEV & IT */}
            <div className="relative">
              <Card className="p-8 h-full bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                <div className="flex items-center space-x-2 mb-6">
                  <Code2 className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-semibold text-green-700 uppercase tracking-wide">DEV & IT</span>
                </div>

                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "Haris came in and helped us transfer knowledge from our departing developer, meeting a serious deadline, without fail. His knowledge and experience are exceptional."
                </blockquote>

                {/* Star Rating */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                <div>
                  <div className="font-semibold text-gray-900">Work done by Haris S.</div>
                  <div className="text-sm text-gray-600">Full-Stack Developer</div>
                  <div className="text-xs text-gray-500">Apr 7, 2025</div>
                </div>
              </Card>

              {/* Green accent shape */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-400 rounded-full opacity-20 -z-10"></div>
            </div>

            {/* Testimonial 2 - DESIGN & CREATIVE */}
            <div className="relative">
              <Card className="p-8 h-full bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
                <div className="flex items-center space-x-2 mb-6">
                  <Palette className="h-5 w-5 text-purple-600" />
                  <span className="text-sm font-semibold text-purple-700 uppercase tracking-wide">DESIGN & CREATIVE</span>
                </div>

                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "Ezzan did an amazing job editing my videos—fast turnaround, great attention to detail, and very easy to work with. He follows directions well and delivers high-quality work consistently. Highly recommend him!"
                </blockquote>

                {/* Star Rating */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                <div>
                  <div className="font-semibold text-gray-900">Work done by Ezzan S.</div>
                  <div className="text-sm text-gray-600">Short form and long form video editor needed!</div>
                  <div className="text-xs text-gray-500">Mar 14, 2025</div>
                </div>
              </Card>

              {/* Purple accent shape */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-400 rounded-full opacity-20 -z-10"></div>
            </div>

            {/* Testimonial 3 - AI SERVICES */}
            <div className="relative">
              <Card className="p-8 h-full bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
                <div className="flex items-center space-x-2 mb-6">
                  <Bot className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-semibold text-blue-700 uppercase tracking-wide">AI SERVICES</span>
                </div>

                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "Rick is a fantastic AI/ML engineer with specialization in LLMs, delivering end-to-end solutions. We had a few concepts when we started the work; ultimately, he delivered a working solution. Looking forward to working with him again."
                </blockquote>

                {/* Star Rating */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                <div>
                  <div className="font-semibold text-gray-900">Work done by Richard C.</div>
                  <div className="text-sm text-gray-600">LLM/RAG agent system development</div>
                  <div className="text-xs text-gray-500">Mar 28, 2025</div>
                </div>
              </Card>

              {/* Blue accent shape */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-400 rounded-full opacity-20 -z-10"></div>
            </div>

            {/* Testimonial 4 - SALES & MARKETING */}
            <div className="relative">
              <Card className="p-8 h-full bg-gradient-to-br from-green-50 to-teal-50 border-green-200">
                <div className="flex items-center space-x-2 mb-6">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-semibold text-green-700 uppercase tracking-wide">SALES & MARKETING</span>
                </div>

                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "We loved working with Jibran and his team. They are very professional and know what they are doing. Very responsive and actually take the time to understand the project and are very methodical and thoughtful about how to approach each project. They are very knowledgeable and creative. We will definitely be hiring them again!"
                </blockquote>

                {/* Star Rating */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                <div>
                  <div className="font-semibold text-gray-900">Work done by Jibran</div>
                  <div className="text-sm text-gray-600">Marketing Strategy & Implementation</div>
                  <div className="text-xs text-gray-500">Feb 15, 2025</div>
                </div>
              </Card>

              {/* Green accent shape */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-400 rounded-full opacity-20 -z-10"></div>
            </div>

            {/* Testimonial 5 - WRITING & TRANSLATION */}
            <div className="relative">
              <Card className="p-8 h-full bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200">
                <div className="flex items-center space-x-2 mb-6">
                  <svg className="h-5 w-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                  <span className="text-sm font-semibold text-orange-700 uppercase tracking-wide">WRITING & TRANSLATION</span>
                </div>

                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "Michael is very skilled and highly professional. Understood the assignment, followed instructions, and was also able to be flexible and creative. One of the rare copywriters I've worked with who can come up with something outside the box, but still on brand. Would definitely hire him again!"
                </blockquote>

                {/* Star Rating */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                <div>
                  <div className="font-semibold text-gray-900">Work done by Michael</div>
                  <div className="text-sm text-gray-600">Creative Content & Copywriting</div>
                  <div className="text-xs text-gray-500">Jan 22, 2025</div>
                </div>
              </Card>

              {/* Orange accent shape */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-400 rounded-full opacity-20 -z-10"></div>
            </div>

            {/* Testimonial 6 - ADMIN & CUSTOMER SUPPORT */}
            <div className="relative">
              <Card className="p-8 h-full bg-gradient-to-br from-gray-50 to-slate-50 border-gray-200">
                <div className="flex items-center space-x-2 mb-6">
                  <Users className="h-5 w-5 text-gray-600" />
                  <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">ADMIN & CUSTOMER SUPPORT</span>
                </div>

                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "Ahmed was a great asset to our team. He brought a keen eye for inefficiencies, applied process rigor, and expertly configured ClickUp to ensure sustainable usage and management moving forward. His insights and structured approach have had a lasting impact on our workflow."
                </blockquote>

                {/* Star Rating */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                <div>
                  <div className="font-semibold text-gray-900">Work done by Ahmed</div>
                  <div className="text-sm text-gray-600">Process Optimization & Admin Support</div>
                  <div className="text-xs text-gray-500">Dec 18, 2024</div>
                </div>
              </Card>

              {/* Gray accent shape */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gray-400 rounded-full opacity-20 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};