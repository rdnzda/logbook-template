"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Github, Feather } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// --- Icônes SVG pour les technologies ---
const NextJsIcon = (props) => (
    <svg {...props} viewBox="0 0 180 180" width="28" height="28" fill="currentColor">
        <mask id="a" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180"><circle cx="90" cy="90" r="90" fill="currentColor"></circle></mask>
        <g mask="url(#a)"><path d="M149.509 157.52L69.142 54H54v71.94h15.142v-51.81l63.564 83.39z" fill="currentColor"></path><path d="M126 54h-15v72h15V54z" fill="currentColor"></path></g>
    </svg>
);

const ReactIcon = (props) => (
    <svg {...props} viewBox="-11.5 -10.23174 23 20.46348" width="28" height="28" fill="currentColor">
        <circle cx="0" cy="0" r="2.05" fill="currentColor"></circle>
        <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"></ellipse>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse>
        </g>
    </svg>
);

const TailwindIcon = (props) => (
    <svg {...props} viewBox="0 0 256 154" width="28" height="28" fill="none">
        <path fill="currentColor" d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c17.067 4.267 29.867 17.067 42.667 29.867C164.267 74.667 177.067 85.333 204.8 85.333c34.133 0 51.2-21.333 51.2-51.2C256 12.8 238.933 0 204.8 0c-21.333 0-38.4 8.533-49.067 21.333C144.533 9.6 136.533 0 128 0zM51.2 68.267C17.067 68.267 0 89.6 0 119.467c0 21.333 12.8 34.133 46.933 34.133 21.334 0 38.4-8.533 49.067-21.333C107.2 144.533 115.2 153.6 123.733 153.6c34.134 0 51.2-21.333 51.2-51.2 0-21.334-12.8-34.134-46.933-34.134-21.333 0-38.4 8.534-49.067 21.334C68.8 81.067 60.8 68.267 51.2 68.267z"></path>
    </svg>
);

const ShadcnIcon = (props) => (
    <svg {...props} viewBox="0 0 256 256" width="28" height="28" fill="none">
        <path fill="currentColor" d="M208.33 128.333a80 80 0 11-80.001-80h.001a80 80 0 0180 80z"></path>
    </svg>
);

const technologies = [
    { name: "Next.js", icon: <NextJsIcon className="text-foreground" /> },
    { name: "React", icon: <ReactIcon className="text-[#61DAFB]" /> },
    { name: "Tailwind CSS", icon: <TailwindIcon className="text-[#38B2AC]" /> },
    { name: "Shadcn/UI", icon: <ShadcnIcon className="text-foreground" /> },
    { name: "Lucide React", icon: <Feather size={24} className="text-foreground" /> },
    { name: "Formspree", icon: <img src="/assets/svg/formspree-icon.svg" alt="Logo Formspree" width="28" height="28" /> },
];

export default function Feedback() {
    return (
        <section id="feedback" className="relative w-full flex flex-col bg-background text-foreground min-h-screen py-10 md:py-20">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                className="absolute top-0 left-0 w-full h-40 pointer-events-none z-0"
                style={{ transform: 'rotate(180deg) scaleX(-1)' }}
                aria-hidden="true"
            >
                <path
                    fill="#0c4a6e"
                    fillOpacity="1"
                    d="M0,192L13.3,165.3C26.7,139,53,85,80,69.3C106.7,53,133,75,160,96C186.7,117,213,139,240,122.7C266.7,107,293,53,320,58.7C346.7,64,373,128,400,154.7C426.7,181,453,171,480,181.3C506.7,192,533,224,560,202.7C586.7,181,613,107,640,80C666.7,53,693,75,720,96C746.7,117,773,139,800,176C826.7,213,853,267,880,256C906.7,245,933,171,960,128C986.7,85,1013,75,1040,106.7C1066.7,139,1093,213,1120,229.3C1146.7,245,1173,203,1200,192C1226.7,181,1253,203,1280,218.7C1306.7,235,1333,245,1360,213.3C1386.7,181,1413,107,1427,69.3L1440,32L1440,320L1426.7,320C1413.3,320,1387,320,1360,320C1333.3,320,1307,320,1280,320C1253.3,320,1227,320,1200,320C1173.3,320,1147,320,1120,320C1093.3,320,1067,320,1040,320C1013.3,320,987,320,960,320C933.3,320,907,320,880,320C853.3,320,827,320,800,320C773.3,320,747,320,720,320C693.3,320,667,320,640,320C613.3,320,587,320,560,320C533.3,320,507,320,480,320C453.3,320,427,320,400,320C373.3,320,347,320,320,320C293.3,320,267,320,240,320C213.3,320,187,320,160,320C133.3,320,107,320,80,320C53.3,320,27,320,13,320L0,320Z"
                />
            </svg>
            <div className="flex flex-col mt-40 md:mt-40 mb-40 md:mb-40 mx-6 md:mx-30">
                <div className="w-full space-y-6">
                    <div className="scroll-animate fade-right">
                        <h1 className="text-4xl md:text-7xl font-bold">Feedback & Projet</h1>
                        <p className="text-sm md:text-xl text-justify mt-4 max-w-4xl">
                            N'hésitez pas à remplir le formulaire de feedback pour partager vos impressions et suggestions d'amélioration. Votre avis est précieux pour m'aider à progresser davantage.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 pt-6 md:pt-10">
                        {/* Carte de Feedback */}
                        <Card className="scroll-animate fade-up">
                            <CardHeader>
                                <CardTitle className="text-lg md:text-xl">Partagez vos impressions</CardTitle>
                                <CardDescription className="text-xs md:text-sm">Laissez un commentaire sur le projet.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form action="https://formspree.io/f/xyzrjgao" method="POST" className="space-y-3 md:space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name" className="text-xs md:text-sm">Nom</Label>
                                            <Input id="name" name="name" placeholder="Votre nom" className="text-sm" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="text-xs md:text-sm">Email</Label>
                                            <Input id="email" type="email" name="email" placeholder="Votre email" className="text-sm" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="message" className="text-xs md:text-sm">Message</Label>
                                        <Textarea id="message" name="message" placeholder="Vos suggestions, impressions..." required className="text-sm" />
                                    </div>
                                    <Button type="submit" className="w-full text-sm md:text-base">Envoyer le feedback</Button>
                                </form>
                            </CardContent>
                        </Card>

                        {/* Carte d'informations sur le projet */}
                        <Card className="scroll-animate fade-up" style={{ animationDelay: '150ms' }}>
                            <CardHeader>
                                <CardTitle className="text-lg md:text-xl">À propos de ce projet</CardTitle>
                                <CardDescription className="text-xs md:text-sm">Découvrez le code source et les technologies utilisées.</CardDescription>
                            </CardHeader>
                            <CardContent className="flex flex-col space-y-4 md:space-y-6">
                                <div>
                                    <h3 className="font-semibold mb-3 text-sm md:text-base">Code du projet</h3>
                                    <Button asChild className="text-sm md:text-base">
                                        <a href="https://github.com/rdnzda/logbook-template" target="_blank" rel="noopener noreferrer">
                                            <Github className="mr-2 h-4 w-4" />
                                            Voir sur GitHub
                                        </a>
                                    </Button>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-4 text-sm md:text-base">Outils et Frameworks</h3>
                                    <TooltipProvider>
                                        <div className="flex flex-wrap gap-4 md:gap-6">
                                            {technologies.map(tech => (
                                                <Tooltip key={tech.name}>
                                                    <TooltipTrigger asChild>
                                                        <div className="cursor-pointer transition-transform hover:scale-110">{tech.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>{tech.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            ))}
                                        </div>
                                    </TooltipProvider>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                className="absolute bottom-0 left-0 w-full h-40 pointer-events-none z-0"
                aria-hidden="true"
            >
                <path
                    fill="#0c4a6e"
                    fillOpacity="1"
                    d="M0,192L13.3,165.3C26.7,139,53,85,80,69.3C106.7,53,133,75,160,96C186.7,117,213,139,240,122.7C266.7,107,293,53,320,58.7C346.7,64,373,128,400,154.7C426.7,181,453,171,480,181.3C506.7,192,533,224,560,202.7C586.7,181,613,107,640,80C666.7,53,693,75,720,96C746.7,117,773,139,800,176C826.7,213,853,267,880,256C906.7,245,933,171,960,128C986.7,85,1013,75,1040,106.7C1066.7,139,1093,213,1120,229.3C1146.7,245,1173,203,1200,192C1226.7,181,1253,203,1280,218.7C1306.7,235,1333,245,1360,213.3C1386.7,181,1413,107,1427,69.3L1440,32L1440,320L1426.7,320C1413.3,320,1387,320,1360,320C1333.3,320,1307,320,1280,320C1253.3,320,1227,320,1200,320C1173.3,320,1147,320,1120,320C1093.3,320,1067,320,1040,320C1013.3,320,987,320,960,320C933.3,320,907,320,880,320C853.3,320,827,320,800,320C773.3,320,747,320,720,320C693.3,320,667,320,640,320C613.3,320,587,320,560,320C533.3,320,507,320,480,320C453.3,320,427,320,400,320C373.3,320,347,320,320,320C293.3,320,267,320,240,320C213.3,320,187,320,160,320C133.3,320,107,320,80,320C53.3,320,27,320,13,320L0,320Z"
                />
            </svg>
        </section>
    );
}