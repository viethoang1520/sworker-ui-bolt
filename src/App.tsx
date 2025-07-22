import { Routes, Route } from 'react-router-dom';
import { FindJobsPage } from './pages/FindJobsPage';
import { BrowseCompaniesPage } from './pages/BrowseCompaniesPage';
import { SearchResultsPage } from './pages/SearchResultsPage';
import { CompanyProfilePage } from './pages/CompanyProfilePage';
import { LoginPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignUpPage';
import { LandingPage } from './pages/LandingPage';
import { JobDetailsPageNew } from './pages/JobDetailsPageNew';
import { MessagesPage } from './pages/MessagesPage';
import { DashboardPage } from './pages/DashboardPage';
import { PostJobPage } from './pages/PostJobPage';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/find-jobs" element={<FindJobsPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/job-details" element={<JobDetailsPageNew />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/post-job" element={<PostJobPage />} />
        {/* <Route path="/browse-companies" element={<BrowseCompaniesPage />} /> */}
        {/* <Route path="/search-results" element={<SearchResultsPage />} /> */}
        {/* <Route path="/job/:id" element={<JobDetailsPage />} /> */}
        <Route path="/company" element={<CompanyProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;