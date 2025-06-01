import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import WorkExperience from '../components/WorkExperience';

export default function HomePage() {
  return (
    <div className="pt-20 pb-20 bg-custom-background text-white">
      <div className="max-w-3xl mx-auto px-8">
        <Hero />
        <div id="work-experience" className='mt-16'>
          <WorkExperience />
        </div>
        <div id="projects" className='mt-16'>
          <Projects limit={4} />
        </div>
      </div>
    </div>
  );
}
