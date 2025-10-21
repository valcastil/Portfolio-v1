import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown, Code, Palette, Zap, ArrowUp } from 'lucide-react';

const Hero = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
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

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message sent! (This is a demo)');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const projects = [
        {
            title: "E-Commerce Platform",
            description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
            tech: ["React", "Node.js", "MongoDB", "Stripe"],
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
            link: "#"
        },
        {
            title: "AI Task Manager",
            description: "Intelligent task management app with AI-powered priority suggestions and productivity analytics.",
            tech: ["Next.js", "TypeScript", "OpenAI", "PostgreSQL"],
            image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
            link: "#"
        },
        {
            title: "Real-Time Chat App",
            description: "WebSocket-based chat application with rooms, file sharing, and end-to-end encryption.",
            tech: ["React", "Socket.io", "Express", "Redis"],
            image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&h=600&fit=crop",
            link: "#"
        },
        {
            title: "Portfolio CMS",
            description: "Headless CMS for creative professionals with drag-and-drop builder and SEO optimization.",
            tech: ["Vue.js", "GraphQL", "Strapi", "AWS"],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
            link: "#"
        }
    ];

    const skills = [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Node.js", level: 88 },
        { name: "Python", level: 85 },
        { name: "Tailwind CSS", level: 92 },
        { name: "MongoDB", level: 80 },
        { name: "GraphQL", level: 75 },
        { name: "Docker", level: 78 }
    ];

    const services = [
        {
            icon: <Code className="w-12 h-12" />,
            title: "Web Development",
            description: "Building responsive, performant web applications using modern frameworks and best practices."
        },
        {
            icon: <Palette className="w-12 h-12" />,
            title: "UI/UX Design",
            description: "Creating intuitive, beautiful user interfaces that provide exceptional user experiences."
        },
        {
            icon: <Zap className="w-12 h-12" />,
            title: "Performance Optimization",
            description: "Optimizing applications for speed, SEO, and accessibility to maximize user engagement."
        }
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
                        AI Automation Creative Designer & DevOps
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
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop"
                                alt="Profile"
                                className="relative rounded-lg w-full"
                            />
                        </div>
                        <div>
                            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                I'm a passionate AI Automation designer and developer with over 5 years of experience building exceptional time-saving AI automation. I specialize in creating workflow applications that integrates AI with powerful functionality.
                            </p>
                            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                My expertise spans across frontend frameworks like n8n, Zapier, Make.com, Asana, React+Vite, ReactNative, Tailwind CSS and over 100+ integrations. Backend technologies including Node.js and Python, and cloud services like GCP, AWS and Azure. I'm constantly learning and staying updated with the latest technologies to deliver cutting-edge solutions.
                            </p>
                            <div className="flex gap-4">
                                <a href="#" className="text-purple-500 hover:text-purple-400 transition-colors">
                                    <Github className="w-6 h-6" />
                                </a>
                                <a href="#" className="text-purple-500 hover:text-purple-400 transition-colors">
                                    <Linkedin className="w-6 h-6" />
                                </a>
                                <a href="#" className="text-purple-500 hover:text-purple-400 transition-colors">
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

            <section id="contact" className="py-20 px-4 bg-gradient-to-b from-black to-purple-900/20">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                        Get In <span className="text-purple-500">Touch</span>
                    </h2>
                    <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                className="w-full px-6 py-4 bg-gray-900 border border-purple-500/30 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                className="w-full px-6 py-4 bg-gray-900 border border-purple-500/30 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={(e) => setFormData({...formData, subject: e.target.value})}
                            className="w-full px-6 py-4 bg-gray-900 border border-purple-500/30 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                        />
                        <textarea
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            rows={6}
                            className="w-full px-6 py-4 bg-gray-900 border border-purple-500/30 rounded-lg focus:border-purple-500 focus:outline-none transition-colors resize-none"
                        ></textarea>
                        <button
                            onClick={handleSubmit}
                            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-4 rounded-lg font-semibold hover:scale-105 transition-transform"
                        >
                            Send Message
                        </button>
                    </div>
                </div>
            </section>

            <footer className="bg-black border-t border-purple-500/20 py-8 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-gray-400">
                        © 2025 Val Castil. All rights reserved.
                    </p>
                    <div className="flex justify-center gap-6 mt-4">
                        <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
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