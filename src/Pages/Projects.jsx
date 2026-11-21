import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import SEO from '../Components/SEO';
import ProjectGrid from '../Components/projectGrid';
import PageLayout from '../Components/PageLayout';
import RouteFallback from '../Components/RouteFallback';
import { lazyPage } from '../routes/lazyPages';
import { PROJECT_ROUTES } from '../content/routes';

// One lazy component per case study. The registry resolves these through the
// same preload path used by the prerenderer and hydration.
const PROJECT_COMPONENTS = Object.fromEntries(
  PROJECT_ROUTES.map((route) => [route.id, lazyPage(route.id)])
);

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
      <Suspense fallback={<RouteFallback />}>
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
      </Suspense>
    </PageLayout>
  );
};

export default Projects;
