import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SEO from '../Components/SEO';
import  ProjectGrid from '../Components/projectGrid';
import PageLayout from '../Components/PageLayout'
import SMS from '../Components/SMS'
import BMSK from '../Components/BMSK'
import BlogVsn from '../Components/BlogVsn'
import This from '../Components/This'

const Projects = () => {
  return (
    <PageLayout>
      <Routes>
        <Route index element={<><SEO
          title="Projects | Samrat Parajuli - Portfolio"
          description="Explore projects by Samrat Parajuli: Student Management System (C), Bank Management System (Kotlin), BlogVsn Platform (React), and more."
          ogUrl="https://www.samratparajuli0.com.np/projects"
        /><ProjectGrid /></>} />
        <Route path="sms" element={<SMS />} />
        <Route path="bmsk" element={<BMSK />}/>
        <Route path="blogvsn" element={<BlogVsn />} />
        <Route path="this" element={<This />} />
      </Routes>
    </PageLayout>
  );
};

export default Projects;