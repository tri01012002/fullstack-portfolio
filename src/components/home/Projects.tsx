"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import projectsData from "@/data/projects.json";

export function Projects() {
    return (
        <section id="projects" className="py-24 bg-slate-900/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all group hover:-translate-y-1"
                        >
                            {/* Image Placeholder */}
                            <div className="h-48 bg-slate-800/50 w-full relative overflow-hidden group-hover:bg-slate-800 transition-colors flex items-center justify-center">
                                <div className="text-slate-600 font-bold text-4xl opacity-20 transform group-hover:scale-110 transition-transform duration-500">
                                    {project.title.charAt(0)}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs px-2 py-1 bg-indigo-500/10 text-indigo-300 rounded-md"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
                                    >
                                        <Github size={16} /> Code
                                    </a>
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
                                    >
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
