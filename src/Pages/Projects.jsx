import React from 'react';
import { Routes, Route } from 'react-router-dom';
import  ProjectGrid from '../Components/projectGrid';
import PageLayout from '../Components/PageLayout'
import SMS from '../Components/SMS'
import More from '../Components/More'
import AllioVsn from '../Components/AllioVsn'
import BlogVsn from '../Components/BlogVsn'
import This from '../Components/This'

const Projects = () => {
  return (
    <PageLayout>
      <Routes>
        <Route index element={<ProjectGrid />} />
        <Route path="/sms" element={<SMS />} />
        <Route path="/blogvsn" element={<BlogVsn />} />
        <Route path="/alliovsn" element={<AllioVsn />} />
        <Route path="/this" element={<This />} />
        <Route path="/more" element={<More />} />
      </Routes>
    </PageLayout>
  );
};

export default Projects;