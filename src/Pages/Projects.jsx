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
import Avalokan from '../Components/Avalokan'

const Projects = () => {
  const projectsSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://www.samratparajuli0.com.np/projects#webpage',
    'url': 'https://www.samratparajuli0.com.np/projects',
    'name': 'Android & Software Projects | Samrat Parajuli',
    'description': 'Android, web, and C projects by Samrat Parajuli — built while learning and experimenting with Kotlin, Jetpack Compose, React, and C.',
    'isPartOf': { '@id': 'https://www.samratparajuli0.com.np/#website' },
    'about': { '@id': 'https://www.samratparajuli0.com.np/#person' },
  }

  return (
    <PageLayout>
      <Routes>
        <Route index element={<><SEO
          title="Android & Software Projects | Samrat Parajuli"
          description="Android, web, and C projects by Samrat Parajuli — built while learning and experimenting with Kotlin, Jetpack Compose, React, and C."
          ogUrl="https://www.samratparajuli0.com.np/projects"
          schema={[projectsSchema]}
        /><ProjectGrid /></>} />
        <Route path="todo" element={<Tasks />} />
        <Route path="sms" element={<SMS />} />
        <Route path="bmsk" element={<BMSK />}/>
        <Route path="blogvsn" element={<BlogVsn />} />
        <Route path="this" element={<This />} />
        <Route path="themovie" element={<TheMovie />} />
        <Route path="juicetracker" element={<JuiceTracker />} />
        <Route path="kathmandu" element={<Kathmandu />} />
        <Route path="avalokan" element={<Avalokan />} />
      </Routes>
    </PageLayout>
  );
};

export default Projects;