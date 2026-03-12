import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Education = () => {
    const education = [
        {
            institution: "Lovely Professional University",
            location: "Punjab, India",
            degree: "Bachelor of Technology – Computer Science and Engineering",
            duration: "Aug 2023 – Present",
            score: "CGPA: 7.2"
        },
        {
            institution: "Narayana Junior College",
            location: "Telangana, India",
            degree: "Intermediate",
            duration: "Jun 2021 – Jul 2023",
            score: "Percentage: 91.4%"
        },
        {
            institution: "Narayana E-Techno School",
            location: "Telangana, India",
            degree: "Matriculation",
            duration: "Apr 2020 – Jun 2021",
            score: "CGPA: 10.0"
        }
    ];

    return (
        <section id="education" className="py-24 relative z-10 w-full overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">

                {/* Background decorative elements */}
                <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-nude/5 rounded-full mix-blend-screen filter blur-3xl opacity-40"></div>

                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-cream mb-6 flex items-center justify-center">
                        <GraduationCap className="w-10 h-10 text-gold mr-4" />
                        Education
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-brown-soft via-nude to-gold mx-auto rounded-full"></div>
                </motion.div>

                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gold/30 before:to-transparent">
                    {education.map((edu, idx) => (
                        <motion.div
                            key={idx}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, delay: idx * 0.2, ease: "easeOut" }}
                        >

                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-gold/30 bg-charcoalLight/80 text-gold shadow-[0_0_20px_rgba(212,175,55,0.4)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-500 group-hover:scale-110">
                                <div className="w-3 h-3 bg-gold rounded-full shadow-[0_0_10px_rgba(212,175,55,1)]"></div>
                            </div>

                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 glassmorphism rounded-2xl hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(212,175,55,0.15)] transition-all duration-500 border border-nude/10 hover:border-gold/30">
                                <div className="flex flex-col mb-3">
                                    <h3 className="font-display font-bold text-cream text-xl lg:text-2xl group-hover:text-gold transition-colors">{edu.institution}</h3>
                                </div>
                                <div className="flex items-center text-sm text-beige/80 mb-5">
                                    <MapPin className="w-4 h-4 mr-2 pb-0.5 text-nude-dark" />
                                    {edu.location}
                                </div>

                                <div className="mb-6 text-gold font-medium text-lg leading-snug">
                                    {edu.degree}
                                </div>

                                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-nude/10 pt-5 mt-2">
                                    <div className="flex items-center text-beige/80 text-sm font-medium mb-4 sm:mb-0">
                                        <Calendar className="w-4 h-4 mr-2 text-nude" />
                                        {edu.duration}
                                    </div>
                                    <span className="inline-flex items-center px-4 py-1.5 rounded-xl text-sm font-semibold bg-charcoalLight/60 text-gold border border-gold/20 shadow-inner">
                                        {edu.score}
                                    </span>
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Education;
