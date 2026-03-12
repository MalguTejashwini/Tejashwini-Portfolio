import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="py-24 relative w-full overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-16 text-center">
                    <motion.h2 
                        className="text-3xl md:text-5xl font-display font-bold text-cream mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Get In Touch
                    </motion.h2>
                    <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent rounded-full mb-6"></div>
                    <motion.p 
                        className="text-beige/80 max-w-2xl mx-auto text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    <motion.div 
                        className="space-y-8"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-display font-semibold text-cream mb-6">Contact Information</h3>
                        
                        <div className="glassmorphism p-6 rounded-2xl flex items-center group hover:bg-gold/5 transition-colors border border-nude/10 hover:border-gold/30">
                            <div className="w-12 h-12 rounded-full bg-nude/10 text-gold flex items-center justify-center mr-6 group-hover:bg-gold group-hover:text-charcoal transition-colors">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-beige/60 uppercase tracking-wider mb-1">Email</p>
                                <a href="mailto:tejashwinimalugu@gmail.com" className="text-cream font-medium text-lg lg:text-md xl:text-lg group-hover:text-gold transition-colors break-all">
                                    tejashwinimalugu@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="glassmorphism p-6 rounded-2xl flex items-center group hover:bg-gold/5 transition-colors border border-nude/10 hover:border-gold/30">
                            <div className="w-12 h-12 rounded-full bg-nude/10 text-gold flex items-center justify-center mr-6 group-hover:bg-gold group-hover:text-charcoal transition-colors">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-beige/60 uppercase tracking-wider mb-1">Phone</p>
                                <a href="tel:+917794948111" className="text-cream font-medium text-lg group-hover:text-gold transition-colors">
                                    +91-7794948111
                                </a>
                            </div>
                        </div>

                        <div className="glassmorphism p-6 rounded-2xl flex items-center group hover:bg-gold/5 transition-colors border border-nude/10 hover:border-gold/30">
                            <div className="w-12 h-12 rounded-full bg-nude/10 text-gold flex items-center justify-center mr-6 group-hover:bg-gold group-hover:text-charcoal transition-colors">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-beige/60 uppercase tracking-wider mb-1">Location</p>
                                <p className="text-cream font-medium text-lg">
                                    India
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="glassmorphism p-8 md:p-10 rounded-3xl border border-nude/10"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-beige/80 mb-2">Your Name</label>
                                <input type="text" id="name" className="w-full bg-charcoalLight/50 border border-nude/20 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-colors" placeholder="John Doe" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-beige/80 mb-2">Your Email</label>
                                <input type="email" id="email" className="w-full bg-charcoalLight/50 border border-nude/20 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-colors" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-beige/80 mb-2">Your Message</label>
                                <textarea id="message" rows="4" className="w-full bg-charcoalLight/50 border border-nude/20 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-colors resize-none" placeholder="Hello..."></textarea>
                            </div>
                            <button type="button" className="w-full inline-flex items-center justify-center px-8 py-4 px-6 text-base font-medium rounded-xl text-charcoal bg-beige hover:bg-cream transition-all duration-300 shadow-[0_0_20px_rgba(212,188,164,0.3)] hover:shadow-[0_0_40px_rgba(212,188,164,0.6)] transform hover:-translate-y-1 group">
                                Send Message
                                <Send className="ml-2 h-5 w-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
