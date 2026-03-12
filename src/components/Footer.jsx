import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-charcoal text-cream-warm py-16 relative z-10 w-full overflow-hidden border-t-2 border-transparent relative before:absolute before:top-0 before:left-0 before:w-full before:h-0.5 before:bg-gradient-to-r before:from-transparent before:via-gold/30 before:to-transparent">
            {/* Background elements */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-40 bg-gold/5 rounded-t-full mix-blend-screen filter blur-3xl opacity-30"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="flex flex-col md:flex-row justify-between items-center">

                    <div className="mb-8 md:mb-0 text-center md:text-left group cursor-default">
                        <h3 className="text-3xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-nude to-gold group-hover:from-gold group-hover:to-nude-dark transition-all duration-500">
                            Malgu Tejashwini
                        </h3>
                        <p className="mt-3 text-beige/70 max-w-sm font-light">
                            Computer Science Engineering Student & Full Stack Developer
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="https://github.com/MalguTejashwini" target="_blank" rel="noopener noreferrer" className="text-beige/60 hover:text-gold transition-all duration-300 p-3 hover:bg-gold/10 rounded-full border border-transparent hover:border-gold/30 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                            <span className="sr-only">GitHub</span>
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/malugu-tejashwini1206" target="_blank" rel="noopener noreferrer" className="text-beige/60 hover:text-gold transition-all duration-300 p-3 hover:bg-gold/10 rounded-full border border-transparent hover:border-gold/30 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                            <span className="sr-only">LinkedIn</span>
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="mailto:tejashwinimalugu@gmail.com" className="text-beige/60 hover:text-gold transition-all duration-300 p-3 hover:bg-gold/10 rounded-full border border-transparent hover:border-gold/30 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                            <span className="sr-only">Email</span>
                            <Mail className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                <div className="border-t border-nude/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-beige/60 text-sm font-medium">
                    <p>© 2026 Malgu Tejashwini. All rights reserved.</p>
                    <p className="flex items-center mt-4 md:mt-0 tracking-wide">
                        Built with <Heart className="w-4 h-4 mx-2 text-gold animate-pulse drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]" /> and continuous learning
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
