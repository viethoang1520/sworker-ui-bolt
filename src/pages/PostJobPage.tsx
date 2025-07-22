import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import {
  MapPin,
  DollarSign,
  Clock,
  Building,
  Users,
  Calendar,
  Plus,
  X,
  Save,
  Eye,
  Send
} from 'lucide-react';

interface JobData {
  title: string;
  company: string;
  location: string;
  jobType: string;
  experience: string;
  salary: {
    min: string;
    max: string;
    currency: string;
    period: string;
  };
  description: string;
  requirements: string;
  benefits: string;
  category: string;
  skills: string[];
  applicationDeadline: string;
  isRemote: boolean;
  isUrgent: boolean;
}

export const PostJobPage = () => {
  const navigate = useNavigate();
  const [jobData, setJobData] = useState<JobData>({
    title: '',
    company: '',
    location: '',
    jobType: 'full-time',
    experience: 'mid-level',
    salary: {
      min: '',
      max: '',
      currency: 'USD',
      period: 'annual'
    },
    description: '',
    requirements: '',
    benefits: '',
    category: 'technology',
    skills: [],
    applicationDeadline: '',
    isRemote: false,
    isUrgent: false
  });

  const [newSkill, setNewSkill] = useState('');
  const [previewMode, setPreviewMode] = useState(false);

  const jobTypes = [
    { value: 'full-time', label: 'Full-time' },
    { value: 'part-time', label: 'Part-time' },
    { value: 'contract', label: 'Contract' },
    { value: 'internship', label: 'Internship' },
    { value: 'freelance', label: 'Freelance' }
  ];

  const experienceLevels = [
    { value: 'entry-level', label: 'Entry Level (0-2 years)' },
    { value: 'mid-level', label: 'Mid Level (3-5 years)' },
    { value: 'senior-level', label: 'Senior Level (5+ years)' },
    { value: 'executive', label: 'Executive Level' }
  ];

  const categories = [
    { value: 'technology', label: 'Technology' },
    { value: 'design', label: 'Design' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'sales', label: 'Sales' },
    { value: 'finance', label: 'Finance' },
    { value: 'operations', label: 'Operations' },
    { value: 'hr', label: 'Human Resources' },
    { value: 'customer-service', label: 'Customer Service' }
  ];

  const handleInputChange = (field: string, value: any) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setJobData(prev => ({
        ...prev,
        [parent]: {
          ...(prev[parent as keyof JobData] as Record<string, any>),
          [child]: value
        }
      }));
    } else {
      setJobData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const addSkill = () => {
    if (newSkill.trim() && !jobData.skills.includes(newSkill.trim())) {
      setJobData(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()]
      }));
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setJobData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  const handleSaveDraft = () => {
    // Handle save as draft logic
    console.log('Saving draft:', jobData);
    alert('Job saved as draft!');
  };

  const handlePublish = () => {
    // Handle publish logic
    console.log('Publishing job:', jobData);
    alert('Job published successfully!');
    navigate('/dashboard');
  };

  const handlePreview = () => {
    setPreviewMode(!previewMode);
  };

  if (previewMode) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />

        {/* Preview Header */}
        <div className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <Badge className="bg-blue-100 text-blue-800 mb-2">Preview Mode</Badge>
                <h1 className="text-lg font-semibold text-gray-900">Job Preview</h1>
              </div>
              <div className="flex items-center space-x-3">
                <Button variant="outline" onClick={handlePreview}>
                  <X className="w-4 h-4 mr-2" />
                  Exit Preview
                </Button>
                <Button onClick={handlePublish} className="bg-blue-600 hover:bg-blue-700">
                  <Send className="w-4 h-4 mr-2" />
                  Publish Job
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Job Preview */}
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8">
              {/* Job Header */}
              <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{jobData.title || 'Job Title'}</h1>
                    <div className="flex items-center text-gray-600 mb-2">
                      <Building className="w-4 h-4 mr-2" />
                      <span className="font-medium">{jobData.company || 'Company Name'}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{jobData.location || 'Location'}</span>
                      {jobData.isRemote && <Badge className="ml-2 bg-green-100 text-green-800">Remote</Badge>}
                    </div>
                  </div>
                  {jobData.isUrgent && (
                    <Badge className="bg-red-100 text-red-800">Urgent Hiring</Badge>
                  )}
                </div>

                {/* Job Details */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-gray-400 mr-2" />
                    <div>
                      <p className="text-xs text-gray-500">Job Type</p>
                      <p className="font-medium capitalize">{jobData.jobType}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 text-gray-400 mr-2" />
                    <div>
                      <p className="text-xs text-gray-500">Experience</p>
                      <p className="font-medium capitalize">{jobData.experience.replace('-', ' ')}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="w-4 h-4 text-gray-400 mr-2" />
                    <div>
                      <p className="text-xs text-gray-500">Salary</p>
                      <p className="font-medium">
                        {jobData.salary.min && jobData.salary.max
                          ? `${jobData.salary.currency} ${jobData.salary.min} - ${jobData.salary.max}`
                          : 'Negotiable'
                        }
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                    <div>
                      <p className="text-xs text-gray-500">Deadline</p>
                      <p className="font-medium">{jobData.applicationDeadline || 'Open'}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills */}
              {jobData.skills.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Required Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {jobData.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Job Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Job Description</h3>
                <div className="prose max-w-none text-gray-700">
                  {jobData.description ? (
                    <p className="whitespace-pre-wrap">{jobData.description}</p>
                  ) : (
                    <p className="text-gray-500 italic">No description provided</p>
                  )}
                </div>
              </div>

              {/* Requirements */}
              {jobData.requirements && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Requirements</h3>
                  <div className="prose max-w-none text-gray-700">
                    <p className="whitespace-pre-wrap">{jobData.requirements}</p>
                  </div>
                </div>
              )}

              {/* Benefits */}
              {jobData.benefits && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
                  <div className="prose max-w-none text-gray-700">
                    <p className="whitespace-pre-wrap">{jobData.benefits}</p>
                  </div>
                </div>
              )}

              {/* Apply Button */}
              <div className="pt-6 border-t">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                  Apply for this Position
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Page Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Post a New Job</h1>
              <p className="text-gray-600">Create and publish job opportunities for candidates</p>
            </div>
            <Button variant="outline" onClick={() => navigate('/dashboard')}>
              <X className="w-4 h-4 mr-2" />
              Cancel
            </Button>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <form className="space-y-8">
          {/* Basic Information */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Basic Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Title *
                  </label>
                  <Input
                    placeholder="e.g. Senior Frontend Developer"
                    value={jobData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <Input
                    placeholder="e.g. TechCorp Inc."
                    value={jobData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location *
                  </label>
                  <Input
                    placeholder="e.g. San Francisco, CA"
                    value={jobData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    value={jobData.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:border-blue-500 focus:outline-none"
                  >
                    {categories.map(category => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Type *
                  </label>
                  <select
                    value={jobData.jobType}
                    onChange={(e) => handleInputChange('jobType', e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:border-blue-500 focus:outline-none"
                  >
                    {jobTypes.map(type => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Experience Level *
                  </label>
                  <select
                    value={jobData.experience}
                    onChange={(e) => handleInputChange('experience', e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:border-blue-500 focus:outline-none"
                  >
                    {experienceLevels.map(level => (
                      <option key={level.value} value={level.value}>
                        {level.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Checkboxes */}
              <div className="mt-6 space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={jobData.isRemote}
                    onChange={(e) => handleInputChange('isRemote', e.target.checked)}
                    className="rounded border-gray-300 mr-3"
                  />
                  <label className="text-sm text-gray-700">Remote work available</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={jobData.isUrgent}
                    onChange={(e) => handleInputChange('isUrgent', e.target.checked)}
                    className="rounded border-gray-300 mr-3"
                  />
                  <label className="text-sm text-gray-700">Urgent hiring</label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Salary Information */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Salary Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Currency
                  </label>
                  <select
                    value={jobData.salary.currency}
                    onChange={(e) => handleInputChange('salary.currency', e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:border-blue-500 focus:outline-none"
                  >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="VND">VND</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Minimum Salary
                  </label>
                  <Input
                    type="number"
                    placeholder="50000"
                    value={jobData.salary.min}
                    onChange={(e) => handleInputChange('salary.min', e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Maximum Salary
                  </label>
                  <Input
                    type="number"
                    placeholder="80000"
                    value={jobData.salary.max}
                    onChange={(e) => handleInputChange('salary.max', e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Period
                  </label>
                  <select
                    value={jobData.salary.period}
                    onChange={(e) => handleInputChange('salary.period', e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:border-blue-500 focus:outline-none"
                  >
                    <option value="annual">Annual</option>
                    <option value="monthly">Monthly</option>
                    <option value="hourly">Hourly</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Required Skills</h2>

              <div className="flex items-center gap-2 mb-4">
                <Input
                  placeholder="Add a skill (e.g. React, JavaScript)"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                  className="flex-1"
                />
                <Button type="button" onClick={addSkill} className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>

              <div className="flex flex-wrap gap-2">
                {jobData.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="flex items-center gap-1">
                    {skill}
                    <button
                      type="button"
                      onClick={() => removeSkill(skill)}
                      className="text-gray-500 hover:text-red-500"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Job Details */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Job Details</h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Description *
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Describe the role, responsibilities, and what the candidate will be working on..."
                    value={jobData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:border-blue-500 focus:outline-none resize-vertical"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="List the qualifications, experience, and skills required..."
                    value={jobData.requirements}
                    onChange={(e) => handleInputChange('requirements', e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:border-blue-500 focus:outline-none resize-vertical"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Benefits & Perks
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Health insurance, flexible hours, remote work, etc..."
                    value={jobData.benefits}
                    onChange={(e) => handleInputChange('benefits', e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:border-blue-500 focus:outline-none resize-vertical"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Application Deadline
                  </label>
                  <Input
                    type="date"
                    value={jobData.applicationDeadline}
                    onChange={(e) => handleInputChange('applicationDeadline', e.target.value)}
                    className="w-full md:w-auto"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex items-center justify-between bg-white p-6 rounded-lg border border-gray-200">
            <Button variant="outline" onClick={() => navigate('/dashboard')}>
              Cancel
            </Button>

            <div className="flex items-center space-x-3">
              <Button variant="outline" onClick={handlePreview}>
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
              <Button variant="outline" onClick={handleSaveDraft}>
                <Save className="w-4 h-4 mr-2" />
                Save Draft
              </Button>
              <Button onClick={handlePublish} className="bg-blue-600 hover:bg-blue-700">
                <Send className="w-4 h-4 mr-2" />
                Publish Job
              </Button>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};
