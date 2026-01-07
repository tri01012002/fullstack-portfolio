"use client";

import { motion } from "framer-motion";

const skills = [
    {
        category: "Deep Learning & Machine Learning",
        items: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "NumPy", "Pandas", "Matplotlib", "Seaborn", "SciPy", "Statsmodels", "Keras", "Hugging Face"],
    },
    {
        category: "Frontend",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML5/CSS3"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express", "PostgreSQL", "Prisma", "Python", "REST APIs"],
    },
    {
        category: "Tools & DevOps",
        items: ["Git", "Docker", "AWS", "Vercel", "Linux", "Figma"],
    }
];

export function Skills() {
    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2" />
            <div className="absolute top-1/2 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
                    <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl hover:border-indigo-500/50 transition-colors"
                        >
                            <h3 className="text-xl font-semibold mb-6 text-indigo-300">
                                {skillGroup.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {skillGroup.items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full border border-slate-700 hover:border-indigo-500/50 hover:text-indigo-300 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
