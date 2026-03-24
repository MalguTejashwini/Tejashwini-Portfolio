import React from 'react';
import { Mail, Phone, Github, Linkedin, ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-28 pb-12 w-full relative overflow-hidden">
            {/* Background floating shapes */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gold/10 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-nude/10 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-brown-soft/10 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col lg:flex-row-reverse items-center justify-between gap-12 lg:gap-20 text-center lg:text-left">

                {/* Profile Image Column */}
                <motion.div
                    className="w-48 sm:w-64 lg:w-[400px] xl:w-[450px] relative flex-shrink-0 mx-auto lg:mx-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <motion.div
                        className="relative w-full aspect-square rounded-full p-2 bg-gradient-to-tr from-gold/30 via-nude/20 to-brown-soft/30 shadow-[0_0_40px_rgba(212,175,55,0.15)]"
                        animate={{ y: [-15, 15, -15] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        whileHover={{ scale: 1.05, boxShadow: "0 0 60px rgba(212,175,55,0.3)" }}
                    >
                        <img
                            src="/profile.jpeg"
                            alt="Malgu Tejashwini"
                            className="w-full h-full object-cover rounded-full border-4 border-nude/20"
                        />
                    </motion.div>
                </motion.div>

                {/* Text Content Column */}
                <div className="flex-1 max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-8 inline-block px-4 py-1.5 rounded-full border border-nude/30 bg-nude/10 backdrop-blur-md"
                    >
                        <span className="text-sm font-medium text-cream-warm tracking-wide">Available for new opportunities</span>
                    </motion.div>

                    <motion.h1
                        className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-cream-warm mb-6 leading-tight min-h-[140px] sm:min-h-[160px] lg:min-h-[220px]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <span className="block mb-2 sm:mb-4">Malgu Tejashwini</span>
                        <span className="block text-2xl sm:text-3xl lg:text-4xl text-nude-dark mt-4 font-medium tracking-wide">
                            <Typewriter
                                words={['Computer Science Student', 'Full Stack Developer', 'UI/UX Enthusiast', 'Problem Solver']}
                                loop={true}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={2000}
                            />
                        </span>
                    </motion.h1>

                    <motion.p
                        className="mt-6 text-lg sm:text-xl text-beige leading-relaxed font-light mx-auto lg:mx-0 max-w-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        "I am a Computer Science Engineering student passionate about building scalable web applications and solving real-world problems through technology. I enjoy working with modern web technologies and continuously improving my skills."
                    </motion.p>

                    <motion.div
                        className="mt-10 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <div className="flex flex-wrap gap-4 w-full sm:w-auto justify-center lg:justify-start">
                            <a href="https://github.com/MalguTejashwini" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center p-4 rounded-full text-cream border border-nude/30 hover:border-nude hover:bg-nude/10 transition-all duration-300 backdrop-blur-sm shadow-[0_0_15px_rgba(212,188,164,0.1)] hover:shadow-[0_0_30px_rgba(212,188,164,0.3)] transform hover:-translate-y-1">
                                <Github className="h-6 w-6" />
                                <span className="sr-only">GitHub</span>
                            </a>
                            <a href="mailto:tejashwinimalugu@gmail.com" className="inline-flex items-center justify-center p-4 rounded-full text-cream border border-nude/30 hover:border-nude hover:bg-nude/10 transition-all duration-300 backdrop-blur-sm shadow-[0_0_15px_rgba(212,188,164,0.1)] hover:shadow-[0_0_30px_rgba(212,188,164,0.3)] transform hover:-translate-y-1">
                                <Mail className="h-6 w-6" />
                                <span className="sr-only">Email</span>
                            </a>
                            <a href="https://www.linkedin.com/in/malugu-tejashwini1206" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center p-4 rounded-full text-cream border border-nude/30 hover:border-nude hover:bg-nude/10 transition-all duration-300 backdrop-blur-sm shadow-[0_0_15px_rgba(212,188,164,0.1)] hover:shadow-[0_0_30px_rgba(212,188,164,0.3)] transform hover:-translate-y-1">
                                <Linkedin className="h-6 w-6" />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                            <a href="tel:+917794948111" className="inline-flex items-center justify-center p-4 rounded-full text-cream border border-nude/30 hover:border-nude hover:bg-nude/10 transition-all duration-300 backdrop-blur-sm shadow-[0_0_15px_rgba(212,188,164,0.1)] hover:shadow-[0_0_30px_rgba(212,188,164,0.3)] transform hover:-translate-y-1">
                                <Phone className="h-6 w-6" />
                                <span className="sr-only">Phone</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
