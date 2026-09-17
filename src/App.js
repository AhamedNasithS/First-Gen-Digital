import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/pages/Home';
import { ToastContainer } from 'react-toastify';
import StudentPortfolio from './components/pages/LandingPages/StudentProtfolio';
import PersonalPortfolio from './components/pages/LandingPages/PersonalProtfolio';
import BusinessProtfolio from './components/pages/LandingPages/BusinessProtfolio';
import RedesignProtfolio from './components/pages/LandingPages/RedesignProtfolio';
import PrivacyPolicy from './components/pages/LeagalPages/PrivacyPolicy';
import TermsConditions from './components/pages/LeagalPages/TermsConditions';
import RefundPolicy from './components/pages/LeagalPages/RefundPolicy';
import StudentSampleWebsite from './components/pages/SampleProjects/StudentSampleWebsite';
import PersonalSampleWebsite from './components/pages/SampleProjects/PersonalSampleWebsite';
import BusinessSampleWebsite from './components/pages/SampleProjects/BusinessSampleWebsite';
import RedesignSampleWebsite from './components/pages/SampleProjects/RedesignSampleWebsite';
import NotFound from './components/pages/NotFound';

export default function App() {
  const [location, setLocation] = useState({ country: "IN" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(window.location.hostname === "localhost"
      ? "https://www.firstgendigital.in//api/location"
      : "/api/location")
      .then(res => res.json())
      .then(data => {
        setLocation(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home country={location.country} loading={loading} />} />
        <Route path='/student-protfolio' element={<StudentPortfolio country={location.country} loading={loading} />} />
        <Route path='/personal-protfolio' element={<PersonalPortfolio country={location.country} loading={loading} />} />
        <Route path='/business-protfolio' element={<BusinessProtfolio country={location.country} loading={loading} />} />
        <Route path='/redesign-protfolio' element={<RedesignProtfolio country={location.country} loading={loading} />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy country={location.country} />} />
        <Route path="/terms-and-conditions" element={<TermsConditions country={location.country} />} />
        <Route path="/refund-policy" element={<RefundPolicy country={location.country} />} />
        <Route path="/sample-project/student-website" element={<StudentSampleWebsite />} />
        <Route path="/sample-project/personal-website" element={<PersonalSampleWebsite />} />
        <Route path="/sample-project/business-website" element={<BusinessSampleWebsite />} />
        <Route path="/sample-project/redesign-website" element={<RedesignSampleWebsite />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </Router>
  )
}
