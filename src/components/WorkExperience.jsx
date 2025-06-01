// src/components/WorkExperience.jsx
import React, { useState} from "react";
import hketLogo from '../assets/hket_logo.jpg';
import chiefGroupLogo from '../assets/chief_group_logo.jpeg';
import ztoreLogo from '../assets/ztore_logo.png';
import universityLogo from '../assets/education_logo/university_logo.jpg';
import iveLogo from '../assets/education_logo/ive_logo.jpg';

export default function WorkExperience() {

  const [activeTab, setActiveTab] = useState("work");

  const workExperiences = [
    {
      company: "Freelance",
      logoText: "F",
      logoColor: "bg-green-600",
      title: "Mobile App Developer",
      duration: "Mar 2023 - Present",
      description: [
        'Fully handled the end-to-end development process, including UI/UX design, frontend/backend integration, data storage, and cloud deployment.',
        'Utilized services such as AWS Lambda, Firebase, and DynamoDB to implement notifications, cloud syncing, and scalable backend logic.',
        'Experienced in app store submission, user feedback handling, version updates, and bug fixes.'
      ]
    },
    {
      company: "Hong Kong Economic Times",
      logoImage: hketLogo,
      title: "Senior Developer",
      duration: "Dec 2022 - Mar 2023",
      description: [
        'Develop Mobile App with Financial & Lifestyle feature with 100,000+ users base.',
        'Implemented the Android Jetpack including Hilt, Room, Coroutines and Flow to simplify the development process and enhance the onboarding speed of new team members.',
        'Responsible for implementing the system and documenting its functionality using Confluence software.'
      ]
    },
    {
      company: "Chief Group Limited",
      logoImage: chiefGroupLogo,
      title: "Senior Mobile Apps Developer",
      duration: "Sep 2021 - Nov 2022",
      description: [
        'Develop and maintain a mobile application for the financial trading platform.',
        'Revamped the application with MVVM architecture and designed the application\'s new features. including showing real-time stock data using Redis client.',
      ]
    },
    {
      company: "Ztore HK Limited",
      logoImage: ztoreLogo,
      title: "Senior Mobile Apps Developer",
      duration: "Aug 2018 - Sep 2021",
      description: [
        'Develop a logistics application (LMS) using Flutter and a Self-pickup application (SPU) using Kotlin independently.',
        'Revamped the application with MVVM architecture from MVC and designed the application\'s new features. including integrating Octopus payment, Atome payment (Buy now, pay later) platform.',
        'Develop and maintain Ztore online shopping application and Neigbuy shopping application.'
      ]
    },
  ]

  const educationExperiences = [
    {
      company: "Coventry University",
      logoImage: universityLogo,
      title: "Bachelor\s degree, Computer Science",
      duration: "Sep 2016 - Jun 2017",
      description: [
        'Graduated with a Computer Science.',
        'Focus on software development, data structures, and system design.'
      ]
    },
    {
      company: "Hong Kong Institute of Vocational Education",
      logoImage: iveLogo,
      title: "Higher Diploma, Software Engineering",
      duration: "Sep 2014 - Jun 2016",
      description: [
        'Covered core subjects such as Java and C# programming, database systems (SQL, MySQL), and mobile app development (Android).'
      ]
    }
  ]

  const activeExperiences = activeTab === "work" ? workExperiences : educationExperiences;

  return (
    <div className="max-w-4xl w-full mt-10 overflow-hidden">
      {/* 標籤切換 */}
      <div className="flex p-0.5 border border-gray-700 bg-gray-700 rounded-lg">
        <button 
          className={`flex-1 py-0.8 text-sm font-medium text-center ${activeTab === 'work' ? 'bg-[#111] text-white' : 'text-gray-500 bg-gray-700'}`}
          onClick={() => setActiveTab('work')}>
          Work
        </button>
        <button 
          className={`flex-1 py-0.8 text-sm font-medium text-center ${activeTab === 'education' ? 'bg-[#111] text-white' : 'text-gray-500 bg-gray-700'}`}
          onClick={() => setActiveTab('education')}>
          Education
        </button>
      </div>
      
      {/* 經驗列表 */}
      <div className="p-6 mt-4 rounded-lg border border-gray-700 relative">

        <div className="absolute top-0 bottom-0 left-[3.2rem] w-[1px] bg-gray-700 z-0" />

        {activeExperiences.map((exp, index) => (
          <div key={index} className="flex mb-10 relative">
            
            {/* logo */}
            <div className="mr-4 z-10">
              {exp.logoImage ? (
                <div className="w-14 h-14 rounded-full overflow-hidden">
                  <img 
                    src={exp.logoImage} 
                    alt={exp.company} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className={`w-14 h-14 rounded-full ${exp.logoColor} flex items-center justify-center overflow-hidden`}>
                  <span className="text-white font-bold text-xl">{exp.logoText}</span>
                </div>
              )}
            </div>

            
            <div>
              <div className="text-xs text-gray-400">{exp.duration}</div>
              <h3 className="text-lg text-white font-bold ">{exp.company}</h3>
              <div className="text-sm text-gray-400 mb-2">{exp.title}</div>
              <ul className="list-disc text-sm text-gray-300 pl-5 space-y-0.5">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}