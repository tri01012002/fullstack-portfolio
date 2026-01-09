"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            let apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
            apiUrl = apiUrl.replace(/\/$/, '');

            const res = await fetch(`${apiUrl}/api/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("Failed to send message");

            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setStatus("idle"), 3000);
        } catch (error) {
            console.error(error);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 3000);
        }
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden text-center md:text-left">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-8 md:p-12 shadow-2xl"
                >
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
                            <p className="text-slate-400 mb-8 leading-relaxed">
                                Have a project in mind or just want to say hi? I'm currently open to new opportunities and would love to hear from you.
                            </p>

                            <div className="space-y-4 text-left">
                                <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                                    <h4 className="font-semibold text-indigo-400 mb-1">Email</h4>
                                    <p className="text-slate-300">tringuyen.01012002@gmail.com</p>
                                </div>
                                <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                                    <h4 className="font-semibold text-cyan-400 mb-1">Location</h4>
                                    <p className="text-slate-300">Da Nang, VN (Remote)</p>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors"
                                />
                            </div>
                            <div>
                                <textarea
                                    placeholder="Your Message"
                                    rows={4}
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "loading" || status === "success"}
                                className={`w-full py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2 ${status === "success"
                                    ? "bg-green-600 text-white"
                                    : "bg-indigo-600 hover:bg-indigo-500 text-white"
                                    }`}
                            >
                                {status === "loading" ? (
                                    <Loader2 className="animate-spin" size={20} />
                                ) : status === "success" ? (
                                    <>
                                        <CheckCircle2 size={20} /> Message Sent!
                                    </>
                                ) : (
                                    <>
                                        Send Message <Send size={18} />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
