import React from 'react';
import { BookOpen, Code, Lightbulb, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section id="about" className="py-24 relative z-10 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                
                {/* Background decorative elements */}
                <div className="absolute top-1/2 left-0 w-64 h-64 bg-brown-soft/5 rounded-full mix-blend-screen filter blur-3xl opacity-50 -translate-y-1/2"></div>
                
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-cream mb-6">About Me</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-brown-soft via-nude to-gold mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        className="space-y-6 text-lg text-beige font-light leading-relaxed"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                    >
                        <motion.div variants={itemVariants} className="glassmorphism rounded-2xl p-8 border-l-4 border-l-gold shadow-lg hover:shadow-[0_10px_30px_rgba(212,175,55,0.1)] transition-shadow duration-500">
                            I am currently pursuing a <strong className="text-cream font-medium">Bachelor of Technology in Computer Science and Engineering</strong> at Lovely Professional University, Punjab, India.
                        </motion.div>
                        <motion.p variants={itemVariants} className="px-4">
                            I have strong interests in web development, full-stack technologies, and problem solving. I enjoy building scalable web applications, creating responsive user interfaces, and learning new technologies to stay ahead in the rapidly evolving tech landscape.
                        </motion.p>
                        <motion.p variants={itemVariants} className="px-4">
                            I continuously improve my skills through projects, coding challenges, and certifications, always striving to write clean, maintainable, and highly efficient code.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                    >
                        <motion.div variants={itemVariants} className="p-8 glassmorphism rounded-2xl group hover:-translate-y-3 hover:shadow-[0_15px_30px_rgba(212,175,55,0.15)] transition-all duration-500 border border-nude/10 hover:border-gold/30">
                            <div className="bg-charcoalLight/60 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors shadow-inner border border-nude/10 group-hover:border-gold/30">
                                <BookOpen className="h-7 w-7 text-nude group-hover:text-gold transition-colors" />
                            </div>
                            <h3 className="font-display font-semibold text-xl text-cream group-hover:text-gold transition-colors">Student</h3>
                            <p className="text-sm text-beige/70 mt-2">B.Tech CSE at LPU</p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="p-8 glassmorphism rounded-2xl group hover:-translate-y-3 hover:shadow-[0_15px_30px_rgba(212,175,55,0.15)] transition-all duration-500 border border-nude/10 hover:border-gold/30">
                            <div className="bg-charcoalLight/60 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors shadow-inner border border-nude/10 group-hover:border-gold/30">
                                <Code className="h-7 w-7 text-nude group-hover:text-gold transition-colors" />
                            </div>
                            <h3 className="font-display font-semibold text-xl text-cream group-hover:text-gold transition-colors">Developer</h3>
                            <p className="text-sm text-beige/70 mt-2">Full Stack Focus</p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="p-8 glassmorphism rounded-2xl group hover:-translate-y-3 hover:shadow-[0_15px_30px_rgba(212,175,55,0.15)] transition-all duration-500 border border-nude/10 hover:border-gold/30">
                            <div className="bg-charcoalLight/60 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors shadow-inner border border-nude/10 group-hover:border-gold/30">
                                <Lightbulb className="h-7 w-7 text-nude group-hover:text-gold transition-colors" />
                            </div>
                            <h3 className="font-display font-semibold text-xl text-cream group-hover:text-gold transition-colors">Problem Solver</h3>
                            <p className="text-sm text-beige/70 mt-2">Analytical thinker</p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="p-8 glassmorphism rounded-2xl group hover:-translate-y-3 hover:shadow-[0_15px_30px_rgba(212,175,55,0.15)] transition-all duration-500 border border-nude/10 hover:border-gold/30">
                            <div className="bg-charcoalLight/60 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors shadow-inner border border-nude/10 group-hover:border-gold/30">
                                <Trophy className="h-7 w-7 text-nude group-hover:text-gold transition-colors" />
                            </div>
                            <h3 className="font-display font-semibold text-xl text-cream group-hover:text-gold transition-colors">Learner</h3>
                            <p className="text-sm text-beige/70 mt-2">Certifications & Events</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
