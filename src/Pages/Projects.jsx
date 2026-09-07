import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SEO from '../Components/SEO';
import  ProjectGrid from '../Components/projectGrid';
import PageLayout from '../Components/PageLayout'
import SMS from '../Components/SMS'
import BMSK from '../Components/BMSK'
import BlogVsn from '../Components/BlogVsn'
import This from '../Components/This'
import Tasks from '../Components/Tasks'
import TheMovie from '../Components/TheMovie'
import JuiceTracker from '../Components/JuiceTracker'
import Kathmandu from '../Components/Kathmandu'

const Projects = () => {
  return (
    <PageLayout>
      <Routes>
        <Route index element={<><SEO
          title="Projects | SamratVsn"
          description="Android, web, and C projects built by Samrat Parajuli while learning, experimenting, and solving problems with software."
          ogUrl="https://www.samratparajuli0.com.np/projects"
        /><ProjectGrid /></>} />
        <Route path="todo" element={<Tasks />} />
        <Route path="sms" element={<SMS />} />
        <Route path="bmsk" element={<BMSK />}/>
        <Route path="blogvsn" element={<BlogVsn />} />
        <Route path="this" element={<This />} />
        <Route path="themovie" element={<TheMovie />} />
        <Route path="juicetracker" element={<JuiceTracker />} />
        <Route path="kathmandu" element={<Kathmandu />} />
      </Routes>
    </PageLayout>
  );
};

export default Projects;