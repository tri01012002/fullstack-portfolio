import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-slate-900 py-12">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                        Lets Build Together
                    </h3>
                    <div className="text-slate-400 text-sm mb-4 space-y-1">
                        <p>Email: tringuyen.01012002@gmail.com</p>
                        <p>Phone: 0338013315</p>
                    </div>
                    <p className="text-slate-400 text-sm">
                        © {new Date().getFullYear()} Personal Portfolio. All rights reserved.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <a
                        href="https://github.com/tri01012002"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-indigo-400 transition-colors transform hover:scale-110"
                    >
                        <Github size={24} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/tri-nguyen-1b140a357"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-indigo-400 transition-colors transform hover:scale-110"
                    >
                        <Linkedin size={24} />
                    </a>
                    <a
                        href="#"
                        className="text-slate-400 hover:text-indigo-400 transition-colors transform hover:scale-110"
                    >
                        <Twitter size={24} />
                    </a>
                    <a
                        href="mailto:tringuyen.01012002@gmail.com"
                        className="text-slate-400 hover:text-indigo-400 transition-colors transform hover:scale-110"
                    >
                        <Mail size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
