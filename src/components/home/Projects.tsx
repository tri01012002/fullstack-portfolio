"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Loader2, AlertCircle } from "lucide-react";

interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    githubUrl: string;
    liveUrl: string;
    image?: string;
}

export function Projects() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
                console.log("Fetching from:", apiUrl + '/api/projects');
                const response = await fetch(`${apiUrl}/api/projects`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch projects: ${response.statusText}`);
                }
                const data = await response.json();
                setProjects(data);
            } catch (err) {
                console.error("Error fetching projects:", err);
                setError("Failed to load projects. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) {
        return (
            <section id="projects" className="py-24 bg-slate-900/50 flex justify-center items-center min-h-[400px]">
                <Loader2 className="w-10 h-10 text-indigo-500 animate-spin" />
            </section>
        );
    }

    if (error) {
        return (
            <section id="projects" className="py-24 bg-slate-900/50 flex justify-center items-center min-h-[400px]">
                <div className="flex flex-col items-center gap-2 text-red-400">
                    <AlertCircle size={32} />
                    <p>{error}</p>
                </div>
            </section>
        );
    }

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
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all group hover:-translate-y-1"
                        >
                            {/* Image Placeholder or Actual Image */}
                            <div className="h-48 bg-slate-800/50 w-full relative overflow-hidden group-hover:bg-slate-800 transition-colors flex items-center justify-center">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="text-slate-600 font-bold text-4xl opacity-20 transform group-hover:scale-110 transition-transform duration-500">
                                        {project.title.charAt(0)}
                                    </div>
                                )}
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
