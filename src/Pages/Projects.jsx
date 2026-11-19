import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SEO from '../Components/SEO';
import ProjectGrid from '../Components/projectGrid';
import PageLayout from '../Components/PageLayout';
import SMS from '../Components/SMS';
import BMSK from '../Components/BMSK';
import BlogVsn from '../Components/BlogVsn';
import This from '../Components/This';
import Tasks from '../Components/Tasks';
import TheMovie from '../Components/TheMovie';
import JuiceTracker from '../Components/JuiceTracker';
import Kathmandu from '../Components/Kathmandu';
import Avalokan from '../Components/Avalokan';
import { PROJECT_ROUTES } from '../content/routes';

const PROJECT_COMPONENTS = {
  avalokan: Avalokan,
  todo: Tasks,
  themovie: TheMovie,
  juicetracker: JuiceTracker,
  kathmandu: Kathmandu,
  sms: SMS,
  bmsk: BMSK,
  blogvsn: BlogVsn,
  this: This,
};

const Projects = () => {
  const projectsSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://www.samratparajuli0.com.np/projects#webpage',
    'url': 'https://www.samratparajuli0.com.np/projects',
    'name': 'Android & Software Projects | Samrat Parajuli',
    'description': 'Android, web, and systems projects by Samrat Parajuli — shipped native Android apps in Kotlin and Jetpack Compose, alongside earlier C and web work.',
    'isPartOf': { '@id': 'https://www.samratparajuli0.com.np/#website' },
    'about': { '@id': 'https://www.samratparajuli0.com.np/#person' },
  }

  return (
    <PageLayout>
      <Routes>
        <Route index element={<><SEO
          title="Android & Software Projects | Samrat Parajuli"
          description="Android, web, and systems projects by Samrat Parajuli — shipped native Android apps in Kotlin and Jetpack Compose, alongside earlier C and web work."
          ogUrl="https://www.samratparajuli0.com.np/projects"
          schema={[projectsSchema]}
        /><ProjectGrid /></>} />
        {PROJECT_ROUTES.map((route) => {
          const Project = PROJECT_COMPONENTS[route.id];
          return <Route key={route.id} path={route.slug} element={<Project />} />;
        })}
      </Routes>
    </PageLayout>
  );
};

export default Projects;
