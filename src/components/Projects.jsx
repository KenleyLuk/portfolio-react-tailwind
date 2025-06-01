import React, { useEffect } from "react";
import { FaGithub, FaGooglePlay, FaApple, FaGlobe } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Projects({ 
    title = "Featured projects", 
    showViewMore = true,
    limit = null
}) {

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Projects data array
    const projectsData = [
        {
            id: 1,
            image: '/src/assets/app_logo/queenpuzzle_banner.png',
            title: 'Queens Puzzle - Logic Game',
            description: 'Challenge your mind with a colorful twist on the classic N-Queens puzzle!.',
            technologies: ['Flutter', 'Dart', 'Riverpod'],
            links: {
                googlePlay: 'https://play.google.com/store/apps/details?id=com.kenley.queenspuzzle&hl=en',
                appStore: 'https://apps.apple.com/us/app/queens-puzzle-logic-game/id6745198624'
            }
        },
        {
            id: 2,
            image: '/src/assets/app_logo/remember_banner.png',
            title: 'Remember - Expense and Income',
            description: 'Track income & expenses effortlessly with Remember!',
            technologies: ['Kotlin', 'AWS Lambda', 'AWS RDS', 'Github Action(CICD)'],
            links: {
                googlePlay: 'https://play.google.com/store/apps/details?id=com.kenley.remember&hl=en',
                appStore: 'https://apps.apple.com/us/app/remember-expense-tracker/id6478380073'
            }
        },
        {
            id: 3,
            image: '/src/assets/app_logo/clover_banner.png',
            title: 'Clover - Daily Affirmations',
            description: 'This daily affirmations app is designed to help you shift your mindset, build self-esteem, and reframe limiting beliefs.',
            technologies: ['Jetpack Compose', 'AWS S3', 'AWS', 'Room Database'],
            links: {
                googlePlay: 'https://play.google.com/store/apps/details?id=com.kenley.talkbeforesleep&hl=en'
            }
        },
        {
            id: 4,
            image: '/src/assets/hket_banner.png',
            title: 'Hong Kong Economic Times(HKET)',
            description: 'A multimedia application provides financial information.',
            technologies: ['Kotlin', 'Flow', 'GraphQL', 'Jetpack Compose'],
            links: {
                googlePlay:'https://play.google.com/store/search?q=hket&c=apps&hl=en'
            }
        },
        {
            id: 5,
            image: '/src/assets/chief_group.jpeg',
            title: 'Chief Trader - Stock & Funds',
            description: 'A stock trading platform that includes trading for US stocks, options, Hong Kong stocks and China stocks.',
            technologies: ['Kotlin', 'Jetpack Compose', 'Redux', 'Redis', 'Clear Architecture'],
            links: {
                googlePlay:'https://play.google.com/store/apps/details?id=com.megahub.chief.mtrader.activity&hl=en_US'
            }
        },
        {
            id: 6,
            image: '/src/assets/app_logo/ztore.png',
            title: 'Ztore App',
            description: 'Ztore is a comprehensive online shopping platform that offers seamless product browsing and efficient checkout services.',
            technologies: ['Kotlin', 'Jave', 'Rest API', 'Credit Card Payment'],
            links: {
                googlePlay:'https://play.google.com/store/apps/details?id=com.ztore.app&hl=en_US'
            }
        },
        {
            id: 7,
            image: '/src/assets/app_logo/spu.png',
            title: 'Self-pickup App',
            description: 'I independently developed an application for store staff that utilizes a local payment system to process charges and allows for scanning tickets to retrieve purchases.',
            technologies: ['Kotlin', 'MVVM', 'Octopus Payment', 'Firebase Authentication', ],
            links: {
               
            }
        },
        {
            id: 8,
            image: '/src/assets/app_logo/lms.png',
            title: 'Logistic Managmement Application',
            description: 'I independently developed a logistic mobile application, which provides management and tracking capabilities.',
            technologies: ['Flutter', 'Provider', 'GPS location'],
            links: {
              
            }
        }
    ];

    // Link button component to avoid repetition
    const LinkButton = ({ href, icon, text }) => (
        <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 bg-white text-xs text-black px-2.5 py-1.5 rounded-full hover:bg-gray-200 transition-colors"
        >
            {icon}
            {text}
        </a>
    );

    // Project card component
    const ProjectCard = ({ project }) => {
        const { links } = project;
        
        return (
            <div className="border p-6 border-gray-700 rounded-3xl hover:border-gray-500 transition-colors h-full">
                <div className="flex justify-center">
                    <img 
                        className="h-40 object-contain rounded-xl" 
                        src={project.image} 
                        alt={project.title} 
                    />
                </div>
                
                <h2 className="text-base text-white mt-2 font-medium">{project.title}</h2>
                
                <p className="text-xs mt-2 text-gray-200 h-12">{project.description}</p>
                
                <div className="flex flex-wrap items-start justify-start gap-2 mt-4 mb-6">
                    {project.technologies.map((tech, index) => (
                        <span 
                            key={index} 
                            className="px-2 py-1 bg-[#222233] text-gray-300 rounded-full text-xs"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex flex-wrap gap-3">
                    {links?.github && (
                        <LinkButton 
                            href={links.github} 
                            icon={<FaGithub />} 
                            text="GitHub" 
                        />
                    )}
                    
                    {links?.googlePlay && (
                        <LinkButton 
                            href={links.googlePlay} 
                            icon={<FaGooglePlay />} 
                            text="Google Play" 
                        />
                    )}
                    
                    {links?.appStore && (
                        <LinkButton 
                            href={links.appStore} 
                            icon={<FaApple />} 
                            text="App Store" 
                        />
                    )}
                    
                    {links?.website && (
                        <LinkButton 
                            href={links.website} 
                            icon={<FaGlobe />} 
                            text="Website" 
                        />
                    )}
                </div>
            </div>
        );
    };

     // Filter projects based on limit
     const filteredProjects = limit ? projectsData.slice(0, limit) : projectsData;


    return (
        <div>
            <div className="flex justify-between items-center mb-10">
                <h1 className="text-3xl text-white font-bold">{title}</h1>
                {showViewMore && (
                    <button 
                    onClick={() => navigate('/projects')}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-500 rounded-lg text-white hover:bg-gray-800 transition-colors">
                    View More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto max-w-4xl">
                {filteredProjects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}