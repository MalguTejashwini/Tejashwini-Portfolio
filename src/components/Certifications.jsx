import React from 'react';
import { Award, CheckCircle, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Certifications = () => {
    const certs = [
        {
            title: "ChatGPT-4 Prompt Engineering",
            issuer: "Infosys Springboard",
            link: "https://drive.google.com/file/d/1HhFeE3ihgnFV1Ki3iyeY1Dkn0dBLnVvM/view?ths=true"
        },
        {
            title: "Java Programming Certification",
            issuer: "CipherSchools",
            link: "https://www.cipherschools.com/certificate/preview?id=687f7a5d7efd6d5090704938"
        },
        {
            title: "Cloud Computing",
            issuer: "NPTEL",
            link: "https://drive.google.com/file/d/11F7OscH6bt3tsYEv8bbNkxgQFYhTZUr2/view?ths=true"
        },
        {
            title: "Responsive Web Design",
            issuer: "FreeCodeCamp",
            link: "https://www.freecodecamp.org/certification/fcc726b5b76-1672-4b54-bc22-531dadb3000c/responsive-web-design"
        }
    ];

    const achievements = [
        "Earned a 5-Star Badge on HackerRank in Java for consistent coding performance.",
        "Solved 200+ coding problems on HackerRank and CodeChef."
    ];

    return (
        <section id="certifications" className="py-24 relative z-10 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

                {/* Background decorative elements */}
                <div className="absolute top-1/3 right-0 w-80 h-80 bg-gold/5 rounded-full mix-blend-screen filter blur-3xl opacity-40"></div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Certifications Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="mb-12 text-left">
                            <h2 className="text-3xl font-display font-bold text-cream mb-4 flex items-center">
                                <Award className="w-8 h-8 text-gold mr-4" />
                                Certifications
                            </h2>
                            <div className="w-20 h-1 bg-gradient-to-r from-gold to-nude-dark rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {certs.map((cert, idx) => (
                                <motion.div 
                                    key={idx} 
                                    className="glassmorphism rounded-2xl p-6 flex flex-col justify-between group hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(212,175,55,0.15)] transition-all duration-500 border border-nude/10 hover:border-gold/30 h-full relative overflow-hidden"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                >
                                    {/* Subtle hover glow inside card */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                                    <div className="mb-6 relative z-10">
                                        <h3 className="font-display font-semibold text-cream text-lg group-hover:text-gold transition-colors">{cert.title}</h3>
                                        <p className="text-beige/80 text-sm mt-2">{cert.issuer}</p>
                                    </div>
                                    
                                    <a 
                                        href={cert.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="relative z-10 inline-flex items-center justify-center w-full px-4 py-2.5 bg-nude/10 border border-nude/20 text-cream-warm text-sm font-medium rounded-xl group-hover:bg-gold/10 group-hover:text-gold group-hover:border-gold/30 transition-all duration-300 hover:scale-[1.02]"
                                    >
                                        View Certificate
                                        <ExternalLink className="w-4 h-4 ml-2" />
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Achievements Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        <div className="mb-12 text-left">
                            <h2 className="text-3xl font-display font-bold text-cream mb-4 flex items-center">
                                <Award className="w-8 h-8 text-nude-dark mr-4" />
                                Achievements
                            </h2>
                            <div className="w-20 h-1 bg-gradient-to-r from-nude-dark to-brown-soft rounded-full"></div>
                        </div>

                        <div className="space-y-6">
                            {achievements.map((achievement, idx) => (
                                <motion.div 
                                    key={idx} 
                                    className="glassmorphism rounded-2xl p-6 flex items-start group hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(212,175,55,0.15)] transition-all duration-500 border border-nude/10 hover:border-gold/30"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 + 0.3 }}
                                >
                                    <span className="mt-1 mr-4 bg-charcoalLight/60 p-2.5 rounded-2xl text-gold flex-shrink-0 shadow-inner border border-nude/10 group-hover:border-gold/30 group-hover:bg-gold/10 transition-colors">
                                        <CheckCircle className="w-5 h-5" />
                                    </span>
                                    <p className="text-beige leading-relaxed font-light group-hover:text-cream-warm transition-colors">
                                        {achievement}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
