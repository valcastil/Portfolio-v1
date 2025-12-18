import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
    const canvasRef = useRef(null);

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
    };

    return (
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
    );
};

export default Hero;