import React from 'react';
import { FaAndroid, FaApple, FaAws, FaDatabase, FaGithub, FaJava, FaReact } from 'react-icons/fa';
import { SiKotlin, SiFlutter, SiFirebase, SiGraphql, SiJetpackcompose } from 'react-icons/si';

export default function Skills() {
    const skillCategories = [
        {
            title: "Mobile Development",
            skills: [
                { name: "Android (Kotlin)", icon: <SiKotlin className="w-6 h-6" />, level: 95 },
                { name: "Flutter", icon: <SiFlutter className="w-6 h-6" />, level: 90 },
                { name: "iOS (Swift)", icon: <FaApple className="w-6 h-6" />, level: 75 },
                { name: "Jetpack Compose", icon: <SiJetpackcompose className="w-6 h-6" />, level: 90 },
                { name: "Java", icon: <FaJava className="w-6 h-6" />, level: 85 },
            ]
        },
        {
            title: "Backend & Cloud",
            skills: [
                { name: "AWS Services", icon: <FaAws className="w-6 h-6" />, level: 85 },
                { name: "Firebase", icon: <SiFirebase className="w-6 h-6" />, level: 90 },
                { name: "GraphQL", icon: <SiGraphql className="w-6 h-6" />, level: 80 },
                { name: "SQL/NoSQL", icon: <FaDatabase className="w-6 h-6" />, level: 85 },
            ]
        },
        {
            title: "Web Development",
            skills: [
                { name: "React", icon: <FaReact className="w-6 h-6" />, level: 85 },
                { name: "Git/GitHub", icon: <FaGithub className="w-6 h-6" />, level: 90 },
            ]
        }
    ];

    const SkillBar = ({ level }) => (
        <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div 
                className="bg-blue-500 h-2.5 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${level}%` }}
            />
        </div>
    );

    return (
        <div className="px-8 max-w-3xl mx-auto mt-20">
            <h1 className="text-3xl font-bold mb-12">Technical Skills</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skillCategories.map((category, index) => (
                    <div 
                        key={index}
                        className="border border-gray-700 rounded-3xl p-6 hover:border-gray-500 transition-colors"
                    >
                        <h2 className="text-xl font-semibold mb-6">{category.title}</h2>
                        <div className="space-y-6">
                            {category.skills.map((skill, skillIndex) => (
                                <div key={skillIndex}>
                                    <div className="flex items-center gap-3 mb-2">
                                        {skill.icon}
                                        <span className="text-sm">{skill.name}</span>
                                    </div>
                                    <SkillBar level={skill.level} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
