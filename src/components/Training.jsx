import React from 'react';
import { Code2, GitMerge, FileCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Training = () => {
    return (
        <section id="training" className="py-24 relative z-10 w-full overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">

                {/* Background decorative elements */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brown-soft/5 rounded-full mix-blend-screen filter blur-3xl opacity-40"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full mix-blend-screen filter blur-3xl opacity-40"></div>

                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-cream mb-6">Training & Experience</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-brown-soft via-nude to-gold mx-auto rounded-full"></div>
                </motion.div>

                <motion.div
                    className="glassmorphism rounded-[2rem] p-8 lg:p-14 relative overflow-hidden shadow-2xl border border-nude/10 hover:border-gold/30 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(212,175,55,0.1)] group"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-nude-dark/10 to-transparent rounded-bl-full -z-10 blur-2xl group-hover:from-gold/10 transition-colors duration-700"></div>

                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-8 border-b border-nude/10 text-center md:text-left relative z-10">
                        <div>
                            <h3 className="text-3xl font-display font-bold text-cream group-hover:text-gold transition-colors duration-500">Cipher Schools</h3>
                            <p className="text-xl text-gold/90 font-medium mt-2">Java (OOP Concepts) Training</p>
                        </div>
                        <div className="mt-6 md:mt-0">
                            <span className="inline-block px-5 py-2.5 bg-nude/10 text-cream-warm font-medium rounded-2xl border border-nude/20 shadow-inner group-hover:border-gold/30 transition-colors">
                                May 2025 – Jul 2025
                            </span>
                        </div>
                    </div>

                    <p className="text-beige text-lg mb-12 leading-relaxed max-w-3xl font-light relative z-10">
                        Developed a Java-based Mental Health Simulator applying core Object-Oriented Programming principles to create a highly modular and extensible system.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mb-12 relative z-10">
                        <motion.div 
                            className="bg-charcoalLight/60 p-8 rounded-2xl border border-nude/10 hover:-translate-y-2 hover:border-gold/30 hover:shadow-[0_10px_20px_rgba(212,175,55,0.1)] transition-all duration-300"
                            whileHover={{ y: -5 }}
                        >
                            <Code2 className="h-10 w-10 text-gold mb-5 drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]" />
                            <h4 className="font-display font-bold text-cream text-lg mb-3">Modular Design</h4>
                            <p className="text-sm text-beige/80 leading-relaxed">Designed modular architecture for interaction and data management.</p>
                        </motion.div>
                        <motion.div 
                            className="bg-charcoalLight/60 p-8 rounded-2xl border border-nude/10 hover:-translate-y-2 hover:border-gold/30 hover:shadow-[0_10px_20px_rgba(212,175,55,0.1)] transition-all duration-300"
                            whileHover={{ y: -5 }}
                        >
                            <FileCheck className="h-10 w-10 text-gold mb-5 drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]" />
                            <h4 className="font-display font-bold text-cream text-lg mb-3">Adaptive Systems</h4>
                            <p className="text-sm text-beige/80 leading-relaxed">Built 50+ adaptive mental health scenarios using OOP paradigms.</p>
                        </motion.div>
                        <motion.div 
                            className="bg-charcoalLight/60 p-8 rounded-2xl border border-nude/10 hover:-translate-y-2 hover:border-gold/30 hover:shadow-[0_10px_20px_rgba(212,175,55,0.1)] transition-all duration-300"
                            whileHover={{ y: -5 }}
                        >
                            <GitMerge className="h-10 w-10 text-gold mb-5 drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]" />
                            <h4 className="font-display font-bold text-cream text-lg mb-3">Version Control</h4>
                            <p className="text-sm text-beige/80 leading-relaxed">Used Git for version control and collaborative development.</p>
                        </motion.div>
                    </div>

                    <div className="pt-8 border-t border-nude/10 relative z-10">
                        <h4 className="text-sm font-semibold text-beige/60 uppercase tracking-widest mb-5">Technologies Mastered</h4>
                        <div className="flex flex-wrap gap-3">
                            {['Java', 'OOP Concepts', 'Git', 'Exception Handling', 'Modular Design'].map((tech, idx) => (
                                <span key={idx} className="px-4 py-2 bg-charcoalLight border border-nude/10 text-gold text-sm font-medium rounded-xl hover:bg-gold/10 hover:border-gold/30 transition-colors cursor-default">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Training;
