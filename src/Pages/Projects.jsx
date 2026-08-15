import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SEO from '../Components/SEO';
import  ProjectGrid from '../Components/projectGrid';
import PageLayout from '../Components/PageLayout'
import SMS from '../Components/SMS'
import BMSK from '../Components/BMSK'
import BlogVsn from '../Components/BlogVsn'
import This from '../Components/This'
import ToDo from '../Components/ToDovsn'
import TheMovie from '../Components/TheMovie'
import JuiceTracker from '../Components/JuiceTracker'
import Kathmandu from '../Components/Kathmandu'

const Projects = () => {
  return (
    <PageLayout>
      <Routes>
        <Route index element={<><SEO
          title="Projects | SamratVsn"
          description="Explore projects by Samrat Parajuli: ToDo Vsn App, The Movie App (TMDB API), Juice Tracker, Kathmandu My-City App, Student Management System (C), BlogVsn Platform (React), and more."
          ogUrl="https://www.samratparajuli0.com.np/projects"
        /><ProjectGrid /></>} />
        <Route path="todo" element={<ToDo />} />
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