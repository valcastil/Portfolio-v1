import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
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
    );
};

export default Footer;
