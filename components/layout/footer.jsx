import { Github, Linkedin } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-foreground text-background py-6">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-6 text-base gap-4">
                <div className="text-center sm:text-left">
                    <p>
                        &copy; {currentYear} rdnzda. Tous droits réservés.
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <a href="https://github.com/rdnzda" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                        <Github size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/redean-akunzada/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                        <Linkedin size={24} />
                    </a>
                </div>

                <div className="text-center sm:text-right">
                    <a href="#" className="hover:underline">
                        Retour en haut
                    </a>
                </div>
            </div>
        </footer>
    );
}