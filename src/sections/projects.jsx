import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "WhatsApp AI Agent",
            description: "I build intelligent WhatsApp AI agents powered by n8n that can understand and respond to voice, text, and image messages seamlessly. These agents combine the power of OpenAI and automation workflows to analyze images, transcribe and reply to audio, and maintain natural chat-like conversations — all in real time. The result is a smart, multimodal assistant that makes WhatsApp interactions feel human, responsive, and automated.",
            tech: ["n8n", "meta", "OpenAI", "Google Drive", "Structured Parser"],
            image: "https://res.cloudinary.com/dccjycgn1/image/upload/v1761281140/wa_ai_agent_i3xxy6.jpg",
            link: "#"
        },
        {
            title: "Dataiku Core Designing & Machine Learning",
            description: "Visual & Code-Based Development: Build ML models through intuitive visual workflows or write custom Python/R code—all in one platform. Accelerate AutoML model development. Build collaborative workflows and seamlessly move models from development to production pipelines. Track model performance, detect drift, and maintain governance with built-in monitoring and explainability tools.",
            tech: ["Dataiku", "n8n", "Snowflake", "Python", "Supabase", "OpenAI"],
            image: "https://res.cloudinary.com/dccjycgn1/image/upload/v1761331776/Screenshot_2025-10-24_220214_blalse.png",
            link: "#"
        },
        {
            title: "Retrieval Augmented Generation (RAG)",
            description: "I build Retrieval-Augmented Generation (RAG) AI agents on WhatsApp using n8n—systems that can understand and respond to voice, text, and image messages intelligently. These agents connect with Google Drive for document retrieval, use Pinecone for vector search, and combine Google Gemini and OpenAI GPT models for reasoning and response generation.",
            tech: ["n8n", "meta", "Pinecone", "Google Gemini","OpenAI", "PostgreSQL"],
            image: "https://res.cloudinary.com/dccjycgn1/image/upload/v1761281598/2024_ega_sustainability_report_RAG_AI_agent_mhvskq.png",
            link: "#"
        },
        {
            title: "DevOps Engineer",
            description: "Results-driven DevOps Engineer experience in designing, implementing, and maintaining robust cloud infrastructure and CI/CD pipelines. Expert in container orchestration, infrastructure automation, and cloud-native technologies.",
            tech: ["Kubernetes", "Docker", "Azure/Google Cloud Platform", "Terraform", "Github", "Infrastructure as Code","Linux/Bash"],
            image: "https://res.cloudinary.com/dccjycgn1/image/upload/v1761326921/Devops1-2048x1338_ya2d7t.jpg",
            link: "#"
        }
    ];

    return (
        <section id="projects" className="py-20 px-4 bg-gradient-to-b from-black to-purple-900/20">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                    Featured <span className="text-purple-500">Projects</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                                <p className="text-gray-300 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.link}
                                    className="inline-flex items-center gap-2 text-purple-500 hover:text-purple-400 transition-colors"
                                >
                                    View Project <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
