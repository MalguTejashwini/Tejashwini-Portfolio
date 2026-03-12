import React from 'react';
import { motion } from 'framer-motion';
import { 
    FaJava, FaPhp, FaHtml5, FaCss3Alt, FaPython, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma
} from 'react-icons/fa';
import { 
    SiJavascript, SiCplusplus, SiMysql, SiTailwindcss, SiJquery, SiMui 
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { Brain, Database, Network, Code2, Users, Lightbulb, Target, ArrowLeftRight } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages",
            skills: [
                { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
                { name: "Java", icon: <FaJava className="text-orange-500" /> },
                { name: "PHP", icon: <FaPhp className="text-indigo-400" /> },
                { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
                { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
                { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
                { name: "Python", icon: <FaPython className="text-yellow-500" /> },
                { name: "SQL", icon: <SiMysql className="text-blue-300" /> }
            ]
        },
        {
            title: "Libraries",
            skills: [
                { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
                { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
                { name: "jQuery", icon: <SiJquery className="text-blue-400" /> },
                { name: "Material UI", icon: <SiMui className="text-blue-500" /> }
            ]
        },
        {
            title: "Tools",
            skills: [
                { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
                { name: "GitHub", icon: <FaGithub className="text-white" /> },
                { name: "REST APIs", icon: <TbApi className="text-green-400" /> },
                { name: "Figma", icon: <FaFigma className="text-pink-400" /> },
                { name: "DSA", icon: <Code2 className="text-purple-400" /> }
            ]
        },
        {
            title: "Core CS",
            skills: [
                { name: "DBMS", icon: <Database className="text-blue-400" /> },
                { name: "OS", icon: <Brain className="text-green-400" /> },
                { name: "Networks", icon: <Network className="text-indigo-400" /> },
                { name: "SQL", icon: <SiMysql className="text-blue-300" /> },
                { name: "OOPs", icon: <Code2 className="text-yellow-400" /> }
            ]
        },
        {
            title: "Soft Skills",
            skills: [
                { name: "Problem Solving", icon: <Lightbulb className="text-yellow-500" /> },
                { name: "Teamwork", icon: <Users className="text-blue-400" /> },
                { name: "Leadership", icon: <Target className="text-red-400" /> },
                { name: "Adaptability", icon: <ArrowLeftRight className="text-green-400" /> }
            ]
        }
    ];

    return (
        <section id="skills" className="py-24 relative z-10 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full mix-blend-screen filter blur-3xl opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-nude/5 rounded-full mix-blend-screen filter blur-3xl opacity-50"></div>

                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-cream mb-6">Technical Skills</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-brown-soft via-nude to-gold mx-auto rounded-full"></div>
                    <p className="mt-6 text-beige font-light max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                        A comprehensive overview of my technical expertise, development tools, and core competencies.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-6 lg:gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            className="glassmorphism rounded-2xl p-6 flex flex-col h-full hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(212,175,55,0.15)] transition-all duration-300 group"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                        >
                            <h3 className="text-xl font-display font-semibold text-gold mb-6 text-center group-hover:text-gold-light transition-colors tracking-wide">{category.title}</h3>
                            <div className="grid grid-cols-2 md:grid-cols-1 gap-3 mt-auto mb-auto">
                                {category.skills.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-center gap-3 px-3 py-3 bg-charcoalLight/50 text-cream-warm text-sm font-medium rounded-xl border border-nude/10 cursor-default"
                                        whileHover={{
                                            y: -4,
                                            scale: 1.03,
                                            borderColor: 'rgba(212, 175, 55, 0.4)',
                                            boxShadow: '0 8px 15px rgba(212, 175, 55, 0.15)'
                                        }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        <span className="text-xl sm:text-2xl drop-shadow-md">
                                            {skill.icon}
                                        </span>
                                        <span className="tracking-wide text-xs sm:text-sm">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
