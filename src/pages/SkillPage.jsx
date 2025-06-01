import React from 'react';

export default function SkillPage() {
    const skillCategories = [
        {
            title: "Languages",
            skills: ["Kotlin", "Java", "Swift", "Dart", "JaveScript", "Node.js"],
            bgColor: "bg-[#1a365d]",
            textColor: "text-[#60a5fa]"
        },
        {
            title: "Frameworks",
            skills: ["Android", "iOS", "Flutter", "React", "Express", "TailwindCSS"],
            bgColor: "bg-[#1c4829]",
            textColor: "text-[#22c55d]"
        },
        {
            title: "Backend",
            skills: ["Node.js","REST API", "GraphQL API", "AWS Lambda"],
            bgColor: "bg-[#322659]",
            textColor: "text-[#9f7aea]"
        },
        {
            title: "Databases",
            skills: ["NoSQL", "SQL", "MongoDB", "Amazon RDS", "AWS DynamoDB", "AWS S3"],
            bgColor: "bg-[#771d1d]",
            textColor: "text-[#fc8181]"
        },
        {
            title: "Practices",
            skills: ["Agile", "Git", "CI/CD Pipelines", "Github Actions"],
            bgColor: "bg-[#744210]",
            textColor: "text-[#f6e05e]"
        }
    ];

    return (
        <div className="min-h-screen bg-[#0a0a0a] px-8 pt-28">
            <div className=" max-w-3xl px-8 container mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-white">Skills</h1>
                
                <div className="space-y-6">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="space-y-4">
                            <h2 className="text-xl font-semibold text-white mb-2">{category.title}</h2>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className={`px-3 py-1 rounded-full ${category.bgColor} ${category.textColor} text-sm font-medium`}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} 