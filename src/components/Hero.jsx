// src/components/Hero.jsx
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Hero() {
    return (
          <div className=" w-full">
            <div className="flex flex-row  pt-8">
                <div className="max-w-[500px] flex flex-col items-left justify-top ">
                    <p className="text-4xl font-bold text-white">
                        Hi, I'm Kenley. 👋
                    </p>
                    <p className="text-base font-medium mt-2 text-gray-300">
                        Mobile App Developer with 5+ years of experience delivering high-performance apps across Android, IOS and Flutter platforms.
                    </p>
                    <p className="text-base font-medium mt-6 text-gray-300">
                        I specialize in transforming ideas into polished apps—from architecture design and UI/UX to backend integration using AWS and Firebase.
                    </p>
                    <p className="text-base mt-10 text-white">
                        Have a project or question? Let's connect.
                    </p>

                    <div className="flex flex-row items-center mt-10"> 
                        <a href="/resume.pdf" 
                           download="Kenley_Luk_resume.pdf"
                           className="flex w-fit items-center gap-2 px-4 py-2 border border-gray-500 rounded-lg text-white hover:bg-gray-800 transition-colors">
                            Resume
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                            </span>
                        </a>

                        <div className="flex flex-row gap-4 ms-6">
                            <a href="https://www.linkedin.com/in/kenley-luk-14a573181/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={24} className="text-gray-400 cursor-pointer hover:text-gray-200" />
                            </a>
                            <a href="https://github.com/KenleyLuk" target="_blank" rel="noopener noreferrer">
                                <FaGithub size={24} className="text-gray-400 cursor-pointer hover:text-gray-200" />
                            </a>
                            <a href="mailto:kentyhung@gmail.com" target="_blank" rel="noopener noreferrer">
                                <MdEmail size={24} className="text-gray-400 cursor-pointer hover:text-grey-200" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex items-center justify-end p-0 m-0" style={{ minHeight: '300px' }}>
                    <img 
                        src="/src/assets/person_image.jpg" alt="Kenley's photo"
                        className="max-h-[240px] object-contain rounded-[20px]"/>
                </div>
            </div>
        </div>
    );
  }