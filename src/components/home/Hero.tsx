"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20"
        >
            {/* Background Gradients */}
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
                        Available for freelance work
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
                >
                    WELLCOME <br />
                    <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                        to the realm of AI
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    AI engineer - Python developer
                    Currently focused on accessible, human-centered products.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <a
                        href="#projects"
                        className="group px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-medium transition-all flex items-center gap-2"
                    >
                        View Work
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="/resume.pdf"
                        className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-medium transition-all flex items-center gap-2 border border-slate-700"
                    >
                        Download CV
                        <Download size={18} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
