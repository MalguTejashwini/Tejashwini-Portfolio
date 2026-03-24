import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#training' }
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'py-3' : 'py-5'}`}>
            <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500 ${isScrolled ? 'glassmorphism rounded-full border border-nude/10 mx-4 sm:mx-8 shadow-lg' : ''}`}>
                <div className="flex justify-between items-center px-4 py-2">

                    <motion.a
                        href="#home"
                        className="text-xl font-display font-bold text-cream tracking-tight flex items-center gap-3 group"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="w-10 h-10 rounded-full bg-gradient-to-tr from-nude-dark via-gold to-beige flex items-center justify-center text-charcoal text-sm group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300">MT</span>
                        <span className="hidden sm:block group-hover:text-gold transition-colors">Malgu Tejashwini</span>
                    </motion.a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1 lg:space-x-4 px-2">
                        {navLinks.map((link, idx) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                className="px-4 py-2 rounded-full text-sm font-medium text-cream-warm/80 hover:text-gold hover:bg-gold/10 transition-all duration-300 relative group"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                            >
                                {link.name}
                            </motion.a>
                        ))}
                    </div>
                    
                    <div className="hidden md:flex items-center space-x-4">
                        <motion.a
                            href="/Tejashwini's_FullStack_Developer_CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2.5 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-charcoal transition-all duration-300 text-sm font-bold shadow-[0_0_10px_rgba(212,175,55,0.1)] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:-translate-y-0.5"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            View Resume
                        </motion.a>
                        <motion.a
                            href="#contact"
                            className="px-6 py-2.5 rounded-full bg-beige hover:bg-cream text-charcoal transition-all duration-300 text-sm font-bold shadow-[0_0_10px_rgba(212,188,164,0.3)] hover:shadow-[0_0_20px_rgba(212,188,164,0.6)] hover:-translate-y-0.5"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            Contact Me
                        </motion.a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-cream-warm hover:text-gold hover:bg-gold/10 rounded-full transition-colors focus:outline-none"
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="md:hidden glassmorphism m-4 rounded-3xl overflow-hidden mt-3 border border-nude/10 shadow-2xl origin-top"
                        initial={{ opacity: 0, height: 0, scaleY: 0.9 }}
                        animate={{ opacity: 1, height: 'auto', scaleY: 1 }}
                        exit={{ opacity: 0, height: 0, scaleY: 0.9 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-5 pt-4 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block px-4 py-3 rounded-2xl text-base font-medium text-cream-warm/90 hover:bg-charcoalLight/60 hover:text-gold transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="/Tejashwini's_FullStack_Developer_CV.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block mt-6 px-4 py-4 rounded-xl text-center bg-gold/15 text-gold border border-gold/30 font-bold hover:bg-gold hover:text-charcoal transition-colors shadow-inner"
                            >
                                View Resume
                            </a>
                            <a
                                href="#contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block mt-4 px-4 py-4 rounded-xl text-center bg-beige text-charcoal font-bold hover:bg-cream transition-colors shadow-inner"
                            >
                                Contact Me
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
