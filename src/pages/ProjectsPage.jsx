import React from 'react';
import Projects from '../components/Projects';

export default function ProjectsPage() {
  return (
    <div className="pt-28 min-h-screen bg-custom-background text-white pb-20">
      <div className=" max-w-3xl px-8 container mx-auto">
        {/* <h1 className="text-3xl font-bold mb-8">My Projects</h1> */}
        <Projects title='My projects' showViewMore={false} limit={null} />
      </div>
    </div>
  );
}
