import React from 'react';
import { Code, Palette, WrenchIcon } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Code className="w-12 h-12" />,
            title: "Data Science, Machine Learning & Automation",
            description: "Dataiku, n8n, Zapier, Make.com workflow development. LLM integration (OpenAI, Gemini, LangChain). API-to-AI orchestration flows and webhook routing. AI-in-the-loop task automation systems. "
        },
        {
            icon: <Palette className="w-12 h-12" />,
            title: "DevOps & Infrastructure Engineering",
            description: "Git version control, CI/CD pipelines (GitHub Actions, Jenkins, CircleCI). Docker containerization & Kubernetes orchestration. Infrastructure as Code (Terraform, Helm, Ansible). Monitoring & logging (Prometheus, Grafana, ELK Stack). Load balancing, scaling, and high availability design."

        },
        {
            icon: <WrenchIcon className="w-12 h-12" />,
            title: "Backend, API, Database & Security Systems",
            description: "GCP, AWS EC2/EKS, Azure Container Apps. IAM policies, TLS/SSL encryption, token-based security. REST API, GraphQL, and OpenAPI spec creation. SQL & NoSQL setup (PostgreSQL, MySQL, Firebase, MongoDB). Authentication (OAuth2.0, ServiceAuth, SSO, API Keys). "
        },
    ];

    return (
        <section id="services" className="py-20 px-4 bg-black">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                    What I <span className="text-purple-500">Do</span>
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-lg hover:scale-105 transition-transform duration-300 border border-purple-500/20"
                        >
                            <div className="text-purple-500 mb-4">{service.icon}</div>
                            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                            <p className="text-gray-300">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
