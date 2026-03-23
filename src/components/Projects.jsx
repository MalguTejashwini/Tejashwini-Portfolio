import React from 'react';
import { ExternalLink, Github, Activity, CheckCircle, Search, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            title: "AgriSecure",
            subtitle: "Smart Agriculture Platform",
            duration: "Nov 2025 – Dec 2025",
            description: "A web platform connecting farmers and buyers within a 10–50 km network, enabling direct crop contracts and reducing market risk by 40%.",
            contributions: [
                "Fixed crop price and quantity before cultivation.",
                "Designed responsive dashboards handling 150+ users."
            ],
            metrics: [
                { label: "Speed", value: "92%", icon: <Zap className="w-4 h-4 text-gold" /> },
                { label: "SEO", value: "85%", icon: <Search className="w-4 h-4 text-gold" /> }
            ],
            techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
            github: "https://github.com/MalguTejashwini",
            demo: "https://agrisecure-pxmw.vercel.app/"
        },
        {
            title: "QuickCart",
            subtitle: "Local Delivery Website",
            duration: "Mar 2025 – May 2025",
            description: "A local delivery platform for a 5–10 km radius with real-time ordering. Built dynamic product listings boosting browsing efficiency by 40%.",
            contributions: [
                "Implemented secure auth and order management.",
                "Successfully handled 300+ transactions."
            ],
            metrics: [
                { label: "Speed", value: "93%", icon: <Zap className="w-4 h-4 text-gold" /> },
                { label: "Quality", value: "98%", icon: <CheckCircle className="w-4 h-4 text-gold" /> }
            ],
            techStack: ["PHP", "JavaScript", "JSON", "Tailwind CSS"],
            github: "https://github.com/MalguTejashwini",
            demo: "#"
        },
        {
            title: "AI Chatbot",
            subtitle: "Book Recommendation System",
            duration: "Mar 2025 – Apr 2025",
            description: "An AI chatbot that recommends books based on user mood with 87% accuracy. Integrated secure API key handling for data retrieval.",
            contributions: [
                "Adaptive conversational logic improving quality by 45%.",
                "Clean, responsive UI for smooth interactions."
            ],
            metrics: [
                { label: "Speed", value: "92%", icon: <Zap className="w-4 h-4 text-gold" /> },
                { label: "Access", value: "100%", icon: <Activity className="w-4 h-4 text-gold" /> }
            ],
            techStack: ["AI Concepts", "REST APIs", "HTML/CSS", "JavaScript"],
            github: "https://github.com/MalguTejashwini",
            demo: "#"
        }
    ];

    return (
        <section id="projects" className="py-24 relative z-10 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-cream mb-6">Featured Projects</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-brown-soft via-nude to-gold mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            className="glassmorphism rounded-2xl flex flex-col overflow-hidden group hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] focus-within:-translate-y-4 focus-within:shadow-[0_20px_40px_rgba(212,175,55,0.15)] transition-all duration-500 border border-nude/10 hover:border-gold/30"
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7, delay: idx * 0.2, ease: "easeOut" }}
                        >
                            <div className="p-8 flex-grow flex flex-col relative">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brown-soft via-nude to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-2xl font-display font-bold text-cream mb-2 group-hover:text-gold transition-colors">{project.title}</h3>
                                        <h4 className="text-sm font-medium text-gold/90 mb-3">{project.subtitle}</h4>
                                        <span className="inline-block text-xs font-medium text-beige/80 border border-nude/20 px-3 py-1 bg-nude/5 rounded-full group-hover:border-gold/40 transition-colors">
                                            {project.duration}
                                        </span>
                                    </div>
                                </div>

                                <p className="text-beige font-light text-base mb-6 leading-relaxed flex-grow">
                                    {project.description}
                                </p>

                                <div className="mb-6">
                                    <div className="grid grid-cols-2 gap-3">
                                        {project.metrics.map((metric, mIdx) => (
                                            <div key={mIdx} className="bg-charcoalLight/60 p-3 rounded-xl border border-nude/10 flex items-center justify-between group-hover:border-gold/20 transition-colors shadow-inner">
                                                <div className="flex items-center text-beige/80 text-xs font-medium">
                                                    <span className="mr-2">{metric.icon}</span>
                                                    {metric.label}
                                                </div>
                                                <span className="font-bold text-cream text-sm">{metric.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-nude/10 mt-auto">
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.techStack.map((tech, tIdx) => (
                                            <span key={tIdx} className="px-3 py-1.5 bg-nude/10 text-nude-light text-xs font-medium rounded-lg border border-nude/20 hover:bg-gold/10 hover:text-gold hover:border-gold/30 transition-colors cursor-default">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-4 mt-6">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-beige bg-charcoalLight/50 hover:bg-gold/10 hover:text-gold border border-nude/10 hover:border-gold/30 rounded-xl transition-all duration-300 group/github hover:-translate-y-0.5">
                                            <Github className="w-4 h-4 transform group-hover/github:scale-110 transition-transform" /> GitHub
                                        </a>
                                        {project.demo && project.demo !== "#" ? (
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-charcoal bg-beige hover:bg-gold border border-transparent rounded-xl transition-all duration-300 shadow-[0_4px_10px_rgba(212,188,164,0.2)] hover:shadow-[0_6px_15px_rgba(212,188,164,0.4)] hover:-translate-y-0.5 group/demo">
                                                <ExternalLink className="w-4 h-4 transform group-hover/demo:translate-x-0.5 transition-transform" /> Live Demo
                                            </a>
                                        ) : (
                                            <span className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-nude-dark/70 bg-charcoalLight/30 border border-nude/5 rounded-xl cursor-not-allowed items-center">
                                                Demo Coming Soon
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
