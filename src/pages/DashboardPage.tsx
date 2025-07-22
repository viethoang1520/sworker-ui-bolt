import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Briefcase,
  Users,
  Settings,
  LogOut,
  Search,
  Filter,
  Plus,
  Edit,
  Trash2,
  Eye,
  Calendar,
  Building,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Activity,
  BarChart3,
  PieChart,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { Avatar, AvatarFallback } from '../components/ui/avatar';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  status: 'active' | 'paused' | 'closed' | 'draft';
  applicants: number;
  postedDate: string;
  category: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  joinDate: string;
  avatar?: string;
}

type TabType = 'dashboard' | 'jobs' | 'users' | 'settings';

export const DashboardPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample data
  const jobs: Job[] = [
    {
      id: '1',
      title: 'Senior Frontend Developer',
      company: 'TechCorp',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120,000 - $160,000',
      status: 'active',
      applicants: 24,
      postedDate: '2024-01-15',
      category: 'Engineering'
    },
    {
      id: '2',
      title: 'Product Manager',
      company: 'InnovateCo',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$110,000 - $140,000',
      status: 'active',
      applicants: 18,
      postedDate: '2024-01-12',
      category: 'Product'
    },
    {
      id: '3',
      title: 'UX Designer',
      company: 'DesignStudio',
      location: 'Remote',
      type: 'Contract',
      salary: '$80,000 - $100,000',
      status: 'paused',
      applicants: 12,
      postedDate: '2024-01-10',
      category: 'Design'
    },
    {
      id: '4',
      title: 'Backend Engineer',
      company: 'DataFlow',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$100,000 - $130,000',
      status: 'active',
      applicants: 31,
      postedDate: '2024-01-08',
      category: 'Engineering'
    }
  ];

  const users: User[] = [
    {
      id: '1',
      name: 'John Smith',
      email: 'john.smith@email.com',
      role: 'Job Seeker',
      status: 'active',
      joinDate: '2024-01-01'
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      email: 'sarah.j@email.com',
      role: 'Employer',
      status: 'active',
      joinDate: '2024-01-05'
    },
    {
      id: '3',
      name: 'Mike Davis',
      email: 'mike.davis@email.com',
      role: 'Job Seeker',
      status: 'inactive',
      joinDate: '2024-01-03'
    }
  ];

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'jobs', label: 'Jobs', icon: Briefcase },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'paused':
        return 'bg-yellow-100 text-yellow-800';
      case 'closed':
        return 'bg-red-100 text-red-800';
      case 'draft':
        return 'bg-gray-100 text-gray-800';
      case 'inactive':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleLogout = () => {
    // Handle logout logic
    navigate('/');
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-1">Dashboard</h1>
        <p className="text-gray-500 text-sm">Welcome back! Here's what's happening with your job platform.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-white shadow-sm border border-gray-200 rounded-lg">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Total Jobs</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">156</p>
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-blue-600" />
              </div>
            </div>
            <div className="mt-3 flex items-center">
              <ArrowUpRight className="w-3 h-3 text-green-600 mr-1" />
              <span className="text-xs text-green-600 font-medium">+12% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm border border-gray-200 rounded-lg">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Active Users</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">2,543</p>
              </div>
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-green-600" />
              </div>
            </div>
            <div className="mt-3 flex items-center">
              <ArrowUpRight className="w-3 h-3 text-green-600 mr-1" />
              <span className="text-xs text-green-600 font-medium">+8% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm border border-gray-200 rounded-lg">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Applications</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">1,892</p>
              </div>
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-purple-600" />
              </div>
            </div>
            <div className="mt-3 flex items-center">
              <ArrowUpRight className="w-3 h-3 text-green-600 mr-1" />
              <span className="text-xs text-green-600 font-medium">+15% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm border border-gray-200 rounded-lg">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Revenue</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">$45.2K</p>
              </div>
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-orange-600" />
              </div>
            </div>
            <div className="mt-3 flex items-center">
              <ArrowDownRight className="w-3 h-3 text-red-600 mr-1" />
              <span className="text-xs text-red-600 font-medium">-2% from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Job Applications Over Time */}
        <Card className="bg-white shadow-sm border border-gray-200 rounded-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Job Applications</h3>
              <BarChart3 className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">This month</span>
                <span className="font-medium">1,892</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Last month</span>
                <span className="font-medium">1,645</span>
              </div>
            </div>
            {/* Simple Bar Chart Visualization */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-500 w-8">Jan</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
                <span className="text-xs text-gray-600 w-8">1.2K</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-500 w-8">Feb</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '78%' }}></div>
                </div>
                <span className="text-xs text-gray-600 w-8">1.5K</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-500 w-8">Mar</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
                <span className="text-xs text-gray-600 w-8">1.9K</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-500 w-8">Apr</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '88%' }}></div>
                </div>
                <span className="text-xs text-gray-600 w-8">1.7K</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-500 w-8">May</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
                <span className="text-xs text-gray-600 w-8">2.1K</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Job Categories Distribution */}
        <Card className="bg-white shadow-sm border border-gray-200 rounded-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Job Categories</h3>
              <PieChart className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">Technology</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">42%</span>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '42%' }}></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">Design</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">28%</span>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '28%' }}></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">Marketing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">18%</span>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '18%' }}></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">Sales</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">12%</span>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-600 h-2 rounded-full" style={{ width: '12%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-white shadow-sm border border-gray-200 rounded-lg">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Success Rate</p>
                <p className="text-xl font-bold text-gray-900">87.5%</p>
                <p className="text-xs text-green-600">+3.2% this week</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm border border-gray-200 rounded-lg">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Activity className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Avg. Response Time</p>
                <p className="text-xl font-bold text-gray-900">2.4h</p>
                <p className="text-xs text-green-600">-12min this week</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm border border-gray-200 rounded-lg">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Building className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Active Companies</p>
                <p className="text-xl font-bold text-gray-900">89</p>
                <p className="text-xs text-green-600">+5 this month</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="bg-white shadow-sm border border-gray-200 rounded-lg">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
            <Button variant="outline" size="sm" className="text-blue-600 border-blue-200 hover:bg-blue-50">
              View All
            </Button>
          </div>
          <div className="space-y-3">
            {jobs.slice(0, 4).map((job, index) => (
              <div key={job.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{job.title}</p>
                    <p className="text-xs text-gray-500">{job.applicants} new applications • {job.company}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${job.status === 'active' ? 'bg-green-100 text-green-800' :
                      job.status === 'paused' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                    }`}>
                    {job.status}
                  </span>
                  <span className="text-xs text-gray-400">{index + 1}h ago</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderJobs = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-1">Jobs List</h1>
          <p className="text-gray-500 text-sm">Manage and monitor all job postings on your platform.</p>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white rounded-lg shadow-sm border p-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">Filter By</span>
          </div>
          <select className="border border-gray-200 rounded-md px-3 py-1 text-sm">
            <option>Categories</option>
            <option>Design</option>
            <option>IT</option>
            <option>Engineering</option>
          </select>
          <select className="border border-gray-200 rounded-md px-3 py-1 text-sm">
            <option>Job Status</option>
            <option>Active</option>
            <option>Paused</option>
            <option>Closed</option>
          </select>
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search product name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-gray-200"
            />
          </div>
          <Button variant="outline" className="text-red-500 border-red-200 hover:bg-red-50">
            Reset Filter
          </Button>
        </div>
      </div>

      {/* Jobs Table */}
      <Card className="bg-white shadow-sm border border-gray-200 rounded-lg">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Job Name</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Employer</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {jobs.map((job, index) => (
                  <tr key={job.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {String(index + 1).padStart(5, '0')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{job.title}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-600">
                        We are seeking a creative...
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {job.company}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {job.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${job.status === 'active' ? 'bg-green-100 text-green-800' :
                        job.status === 'paused' ? 'bg-purple-100 text-purple-800' :
                          job.status === 'closed' ? 'bg-red-100 text-red-800' :
                            'bg-yellow-100 text-yellow-800'
                        }`}>
                        {job.status === 'active' ? 'Completed' :
                          job.status === 'paused' ? 'Processing' :
                            job.status === 'closed' ? 'Rejected' : 'On Hold'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="bg-white px-6 py-3 flex items-center justify-between border-t border-gray-200">
            <div className="flex-1 flex justify-between items-center">
              <p className="text-sm text-gray-700">
                Showing 1-09 of 78
              </p>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="border-gray-200">
                  <span>‹</span>
                </Button>
                <Button variant="outline" size="sm" className="border-gray-200">
                  <span>›</span>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderUsers = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Users Management</h1>
          <p className="text-gray-600">Manage all users on your platform.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Add New User
        </Button>
      </div>

      {/* Search */}
      <div className="flex items-center space-x-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Users Table */}
      <Card className="bg-white shadow-lg border-0">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left p-4 font-semibold text-gray-900">User</th>
                  <th className="text-left p-4 font-semibold text-gray-900">Email</th>
                  <th className="text-left p-4 font-semibold text-gray-900">Role</th>
                  <th className="text-left p-4 font-semibold text-gray-900">Status</th>
                  <th className="text-left p-4 font-semibold text-gray-900">Join Date</th>
                  <th className="text-left p-4 font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">
                            {user.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <span className="font-medium text-gray-900">{user.name}</span>
                      </div>
                    </td>
                    <td className="p-4 text-gray-700">{user.email}</td>
                    <td className="p-4 text-gray-700">{user.role}</td>
                    <td className="p-4">
                      <Badge className={getStatusColor(user.status)}>
                        {user.status}
                      </Badge>
                    </td>
                    <td className="p-4 text-gray-700">{user.joinDate}</td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-600">Manage your platform settings and preferences.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white shadow-lg border-0">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">General Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Platform Name</label>
                <Input defaultValue="Sworker" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
                <Input defaultValue="admin@sworker.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Support Email</label>
                <Input defaultValue="support@sworker.com" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-lg border-0">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Notification Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">Email Notifications</label>
                <input type="checkbox" className="rounded" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">SMS Notifications</label>
                <input type="checkbox" className="rounded" />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">Push Notifications</label>
                <input type="checkbox" className="rounded" defaultChecked />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end">
        <Button className="bg-blue-600 hover:bg-blue-700">
          Save Settings
        </Button>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return renderDashboard();
      case 'jobs':
        return renderJobs();
      case 'users':
        return renderUsers();
      case 'settings':
        return renderSettings();
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 flex flex-col">
        {/* Logo */}
        <div className="p-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">J</span>
            </div>
            <div>
              <h2 className="font-semibold text-lg text-white">JobBoost</h2>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4">
          <ul className="space-y-1">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveTab(item.id as TabType)}
                    className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${activeTab === item.id
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                      }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium text-sm">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Logout */}
        <div className="p-3">
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium text-sm">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-white">
        <div className="p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};
