import React, { useState, useEffect, useRef } from 'react';
import {
    Menu,
    X,
    Github,
    Linkedin,
    Mail,
    ExternalLink,
    ChevronDown,
    Code,
    Palette,
    Zap,
    ArrowUp,
    WrenchIcon,
    Lock,
} from 'lucide-react';
import Contact from './Contact.jsx';
import LogoShowcase from './LogoShowcase.jsx';

const Hero = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const canvasRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            setShowScrollTop(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const particleCount = 100;

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.z = Math.random() * 1000;
                this.radius = Math.random() * 2 + 1;
            }

            update() {
                this.z -= 2;
                if (this.z <= 0) this.z = 1000;
            }

            draw() {
                const x = (this.x - canvas.width / 2) * (1000 / this.z) + canvas.width / 2;
                const y = (this.y - canvas.height / 2) * (1000 / this.z) + canvas.height / 2;
                const r = this.radius * (1000 / this.z);
                const opacity = 1 - this.z / 1000;

                ctx.beginPath();
                ctx.arc(x, y, r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(139, 92, 246, ${opacity})`;
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        const animate = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                p.update();
                p.draw();
            });

            requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };


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
        <div className="bg-black text-white min-h-screen">
            <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }
        
        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.6s both;
        }
      `}</style>

            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Portfolio
                        </div>

                        <div className="hidden md:flex space-x-8">
                            {['home', 'about', 'services', 'projects', 'skills', 'contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className="hover:text-purple-500 transition-colors capitalize"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>

                        <button
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden bg-black/95 backdrop-blur-md">
                        <div className="px-4 pt-2 pb-4 space-y-3">
                            {['home', 'about', 'services', 'projects', 'skills', 'contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className="block w-full text-left py-2 hover:text-purple-500 transition-colors capitalize"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
                <canvas ref={canvasRef} className="absolute inset-0 z-0" />

                <div className="relative z-10 text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                        Hi, I'm <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">Val Castil</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-delay">
                        AI Automation Flowgrammer & DevOps
                    </p>
                    <div className="flex gap-4 justify-center animate-fade-in-delay-2">
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
                        >
                            View My Work
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="border-2 border-purple-500 px-8 py-3 rounded-full font-semibold hover:bg-purple-500/20 transition-colors"
                        >
                            Contact Me
                        </button>
                    </div>

                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <ChevronDown className="w-8 h-8 text-purple-500" />
                    </div>
                </div>
            </section>

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

            <LogoShowcase />

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

            <Contact />

            <footer className="bg-black border-t border-purple-500/20 py-8 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-gray-400">
                        © 2025 Val Castil. All rights reserved.
                    </p>
                    <div className="flex justify-center gap-6 mt-4">
                        <a
                            href="https://github.com/valcastil"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-purple-500 transition-colors"
                            aria-label="GitHub"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/val-amor-castil-9952b332/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-purple-500 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="mailto:castilv@gmail.com"
                           className="text-gray-400 hover:text-purple-500 transition-colors"
                           aria-label="Email"
                        >
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </footer>

            {showScrollTop && (
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
                >
                    <ArrowUp className="w-6 h-6" />
                </button>
            )}
        </div>
    );
};

export default Hero;