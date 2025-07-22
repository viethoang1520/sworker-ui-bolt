import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Share2, Bookmark, Heart, Coffee, Car, Award, Laptop, Globe, Users, ChevronRight, MapPin, Clock, DollarSign, Building } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const JobDetailsPageNew = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const responsibilities = [
    "Community engagement to ensure that is supported and actively represented online",
    "Focus on social media content development and publication",
    "Marketing and strategy support",
    "Stay on top of trends on social media platforms, and suggest content ideas to the team",
    "Engage with online communities"
  ];

  const requirements = [
    "You get energy from people and building the ideal work environment",
    "You have a sense for beautiful spaces and office experiences",
    "You're a confident office manager, ready for added responsibilities",
    "You're detail-oriented and creative",
    "You're a growth marketer and know how to run campaigns"
  ];

  const niceToHaves = [
    "Fluent in English",
    "Project management skills",
    "Copy editing skills"
  ];

  const perks = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Full Healthcare",
      description: "We believe in thriving communities and that starts with our team being happy and healthy."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Unlimited Vacation",
      description: "We believe you should have a flexible schedule that makes space for family, wellness, and fun."
    },
    {
      icon: <Laptop className="h-6 w-6" />,
      title: "Skill Development",
      description: "We believe in always learning and leveling up our skills. Whether it's a conference or online course."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Summits",
      description: "Every 6 months we have a full team summit where we have fun, reflect, and plan for the upcoming quarter."
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "Remote Working",
      description: "You know how you perform your best. Work from home, coffee shop or anywhere when you feel like it."
    },
    {
      icon: <Car className="h-6 w-6" />,
      title: "Commuter Benefits",
      description: "We're grateful for all the time and energy each team member puts into getting to work every day."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "We give back",
      description: "We anonymously match any donations our employees make (up to $/€ 600) so they can support the organizations they care about most—times two."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex items-center space-x-2 text-xs text-gray-500 mb-4">
            <span>Jobs</span>
            <ChevronRight className="h-3 w-3" />
            <span>Design</span>
            <ChevronRight className="h-3 w-3" />
            <span className="text-gray-900">Social Media Assistant</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  S
                </div>
                <div className="flex-1">
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">Social Media Assistant</h1>
                  <div className="flex items-center space-x-4 text-gray-600 mb-3 text-sm">
                    <div className="flex items-center space-x-1">
                      <Building className="h-4 w-4" />
                      <span className="font-medium">Stripe</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>Paris, France</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>Part-Time</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="h-4 w-4" />
                      <span>$75k-$85k</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 text-xs">Marketing</Badge>
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-200 text-xs">Design</Badge>
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 text-xs">Remote</Badge>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3 mb-6">
                <Button size="default" className="bg-blue-600 hover:bg-blue-700 px-6">
                  Apply Now
                </Button>
                <Button variant="outline" size="default">
                  <Bookmark className="h-4 w-4 mr-2" />
                  Save Job
                </Button>
                <Button variant="outline" size="default">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {/* Application Progress */}
            <div className="lg:col-span-1">
              <Card className="p-4 shadow-sm">
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-blue-600 mb-1">5 / 10</div>
                  <p className="text-gray-600 text-sm">Applications received</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '50%' }}></div>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Apply Before:</span>
                    <span className="font-medium">July 31, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Posted:</span>
                    <span className="font-medium">July 1, 2025</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Job Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Description */}
            <Card className="p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Description</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Stripe is looking for Social Media Marketing expert to help manage our online networks. You will be
                responsible for monitoring our social media channels, creating content, finding effective ways to
                engage the community and incentivize others to engage on our channels.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Responsibilities</h3>
                  <ul className="space-y-3">
                    {responsibilities.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Who You Are</h3>
                  <ul className="space-y-3">
                    {requirements.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Nice-To-Haves</h3>
                  <ul className="space-y-3">
                    {niceToHaves.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>

            {/* Perks & Benefits */}
            <Card className="p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Perks & Benefits</h3>
              <p className="text-gray-700 mb-6">This job comes with several perks and benefits</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {perks.map((perk, index) => (
                  <div key={index} className="space-y-2 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className="text-blue-600">
                      {perk.icon}
                    </div>
                    <h4 className="font-semibold text-gray-900">{perk.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{perk.description}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Company Info */}
            <Card className="p-6 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  S
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-3">
                    <h4 className="text-xl font-bold text-gray-900">Stripe</h4>
                    <Button variant="link" size="sm" className="text-blue-600 p-0">
                      Read more about Stripe
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Stripe is a technology company that builds economic infrastructure for the internet. Businesses of every size—from new startups to public companies—use our software to accept payments and manage their businesses online.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Job Details Card */}
            <Card className="p-4 shadow-sm">
              <h3 className="text-lg font-bold mb-4 text-gray-900">Job Details</h3>
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-gray-900">Apply Before</span>
                    <span className="text-gray-600">July 31, 2025</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-gray-900">Job Posted On</span>
                    <span className="text-gray-600">July 1, 2025</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-gray-900">Job Type</span>
                    <span className="text-gray-600">Part-Time</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-gray-900">Salary</span>
                    <span className="text-gray-600">$75k-$85k USD</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-gray-900">Experience</span>
                    <span className="text-gray-600">2-4 years</span>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium mb-3 text-gray-900">Categories</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 text-xs">Marketing</Badge>
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-200 text-xs">Design</Badge>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium mb-3 text-gray-900">Required Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-gray-300 text-xs">Project Management</Badge>
                    <Badge variant="outline" className="border-gray-300 text-xs">Copywriting</Badge>
                    <Badge variant="outline" className="border-gray-300 text-xs">English</Badge>
                    <Badge variant="outline" className="border-gray-300 text-xs">Social Media Marketing</Badge>
                    <Badge variant="outline" className="border-gray-300 text-xs">Copy Editing</Badge>
                  </div>
                </div>
              </div>
            </Card>

            {/* Similar Jobs */}
            <Card className="p-4 shadow-sm">
              <h3 className="text-lg font-bold mb-4 text-gray-900">Similar Jobs</h3>
              <div className="space-y-3">
                <div className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                      D
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 mb-1 text-sm">Digital Marketing Manager</h4>
                      <p className="text-gray-600 text-xs mb-2">Dropbox • Remote</p>
                      <Badge className="bg-blue-100 text-blue-700 text-xs">Full-Time</Badge>
                    </div>
                  </div>
                </div>

                <div className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                      C
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 mb-1 text-sm">Content Creator</h4>
                      <p className="text-gray-600 text-xs mb-2">Canva • London, UK</p>
                      <Badge className="bg-green-100 text-green-700 text-xs">Contract</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Contact Person */}
            <Card className="p-4 shadow-sm">
              <h3 className="text-lg font-bold mb-4 text-gray-900">Contact Person</h3>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white font-bold">
                  JG
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">Jake Gyll</h4>
                  <p className="text-gray-600 text-xs mb-1">Hiring Manager</p>
                  <p className="text-gray-500 text-xs">jakeGyll@stripe.com</p>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-3 text-sm">
                Send Message
              </Button>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
