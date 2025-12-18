import React from 'react';

const Skills = () => {
    const skills = [
        { name: "Dataiku", level: 90 },
        { name: "n8n", level: 95 },
        { name: "Zapier", level: 95 },
        { name: "RESTful APIs", level: 95 },
        { name: "Make.com", level: 88 },
        { name: "Google Cloud", level: 85 },
        { name: "Tailwind CSS", level: 92 },
        { name: "React", level: 90 },
        { name: "Github", level: 85 },
        { name: "Docker", level: 85 },
        { name: "Kubernetes", level: 80 },
        { name: "Terraform", level: 80 },
    ];

    return (
        <section id="skills" className="py-20 px-4 bg-black">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                    My <span className="text-purple-500">Skills</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {skills.map((skill, index) => (
                        <div key={index}>
                            <div className="flex justify-between mb-2">
                                <span className="font-semibold">{skill.name}</span>
                                <span className="text-purple-500">{skill.level}%</span>
                            </div>
                            <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
