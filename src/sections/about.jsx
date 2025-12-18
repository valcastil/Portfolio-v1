import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 px-4 bg-gradient-to-b from-black to-purple-900/20">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                    About <span className="text-purple-500">Me</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                        <img
                            src="https://res.cloudinary.com/dccjycgn1/image/upload/v1761204907/val_airport_ua7kd0.jpg"
                            alt="Profile"
                            className="relative rounded-lg w-full"
                        />
                    </div>
                    <div>
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            Innovative AI Automation Developer specializing in building scalable, intelligent workflow systems that bridge human creativity with automated precision. With hands-on expertise in visual automation platforms like Dataiku, n8n, Zapier, and Make.com, I design, orchestrate, and deploy interconnected systems that transform complex business operations into seamless, autonomous ecosystems.
                        </p>
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            My mission is to empower teams by pioneering AI-first workflows that address painstaking and repetitive tasks with innovative solutions. I am dedicated to driving enterprise digital transformations that convert routine operations into agile, automated processes seamlessly integrated within cloud-native, containerized environments. Leveraging Infrastructure as Code (IaC) principles, I ensure these solutions deliver unparalleled reliability, scalability, and efficiency.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/valcastil"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-500 hover:text-purple-400 transition-colors"
                                aria-label="GitHub"
                            >
                                <Github className="w-6 h-6" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/val-amor-castil-9952b332/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-500 hover:text-purple-400 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a  href="mailto:castilv@gmail.com"
                                className="text-purple-500 hover:text-purple-400 transition-colors"
                                aria-label="Email"
                            >
                                <Mail className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
