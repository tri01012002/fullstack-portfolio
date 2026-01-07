"use client";

import { motion } from "framer-motion";
import { User, Code, Globe } from "lucide-react";

export function About() {
    return (
        <section id="about" className="py-24 bg-slate-900/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                    <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-semibold text-indigo-400">
                            AI engineer and Python developer
                        </h3>
                        <p className="text-slate-300 leading-relaxed">
                            I am a dedicated programmer with a strong background in both artificial intelligence and web development.
                            My journey in technology is driven by a curiosity to understand how things work and a desire to build solutions that make a difference.
                        </p>
                        <p className="text-slate-300 leading-relaxed">
                            When I'm not coding, you can find me exploring new technologies, contributing to open source, or optimizing my workflows.
                        </p>

                        <div className="grid grid-cols-3 gap-6 pt-6">
                            <div className="text-center p-4 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors">
                                <Code className="mx-auto mb-2 text-indigo-400" size={24} />
                                <div className="font-bold text-xl">1+</div>
                                <div className="text-xs text-slate-400">Years Exp</div>
                            </div>
                            <div className="text-center p-4 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors">
                                <Globe className="mx-auto mb-2 text-cyan-400" size={24} />
                                <div className="font-bold text-xl">20+</div>
                                <div className="text-xs text-slate-400">Projects</div>
                            </div>
                            <div className="text-center p-4 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors">
                                <User className="mx-auto mb-2 text-indigo-400" size={24} />
                                <div className="font-bold text-xl">10+</div>
                                <div className="text-xs text-slate-400">Clients</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-indigo-500 blur-3xl opacity-20 rounded-full" />
                        <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-slate-700 bg-slate-800 flex items-center justify-center">
                            {/* Placeholder for user image if they have one, otherwise strict code/abstract representation */}
                            <div className="text-slate-600 font-mono text-sm p-8">
                                <span className="text-indigo-400">const</span> Pythoneer = {"{"} <br />
                                &nbsp;&nbsp;name: <span className="text-green-400">"Nguyen Minh Tri"</span>,<br />
                                &nbsp;&nbsp;skills: [<span className="text-green-400">"Python/C++/Javascript/React/Nextjs/Nodejs"</span>, <span className="text-green-400">"React"</span>],<br />
                                &nbsp;&nbsp;hardWorker: <span className="text-cyan-400">true</span>,<br />
                                &nbsp;&nbsp;Freelancer: <span className="text-cyan-400">true</span><br />
                                {"}"};
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
