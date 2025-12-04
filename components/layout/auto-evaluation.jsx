"use client";
import { useEffect } from "react";
import { ChartRadarLegend } from "@/components/ui/chart-radar-legend";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import autoEvaluationData from "@/data/auto-evaluation.json";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "../ui/accordion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Badge } from "../ui/badge";

export default function AutoEvaluation() {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, observerOptions);

        const animatedElements = document.querySelectorAll('.scroll-animate');
        animatedElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="auto-evaluation" className="relative w-full flex flex-col bg-background text-foreground min-h-screen">
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
            <div className="flex flex-col mx-6 md:mx-30 mt-40 md:mt-50 relative z-10 scroll-animate fade-right">
                <div className="w-full space-y-6">
                    <h1 className="text-4xl md:text-7xl font-bold">Auto-Évaluation</h1>
                    <div className="text-sm md:text-xl text-justify space-y-3">
                        {autoEvaluationData.introduction.paragraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:grid-rows-2 gap-6 md:gap-10 justify-between mb-20 mt-10 md:mt-20 mx-6 md:mx-30">
                <div className="items-center justify-center scroll-animate fade-left w-full lg:row-span-2 md:col-span-2">
                    <ChartRadarLegend />
                </div>
                <div className="flex flex-col relative z-10 scroll-animate fade-right h-full w-full lg:row-span-2 lg:col-span-1 self-start">
                    <Card className="w-full h-full">
                        <CardHeader className="items-start pb-4">
                            <CardTitle className="text-lg md:text-xl">Compétences Linguistiques</CardTitle>
                            <CardDescription className="text-left">
                                Détail de l'auto-évaluation par compétences
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            {/* Accordion with one item per skill. Each item lets you add links/proofs. */}
                            <Accordion type="single" collapsible className="w-full h-full flex flex-col justify-between">
                                {autoEvaluationData.competences.map((skill) => (
                                    <AccordionItem key={skill.id} value={skill.id} className="rounded-md">
                                        <AccordionTrigger className="text-left">
                                            <div className="flex items-center justify-between w-full">
                                                <div>
                                                    <div className="text-sm md:text-base font-medium">{skill.title}</div>
                                                </div>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className="py-2 max-h-[9vh] overflow-y-auto overflow-x-hidden wrap-break-word whitespace-normal" dangerouslySetInnerHTML={{ __html: skill.description }}></div>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </CardContent>
                    </Card>
                </div>
                <div className="flex flex-col justify-between h-full lg:row-span-2 scroll-animate fade-right">
                    <Card className="w-full h-full flex flex-col">
                        <CardHeader>
                            <CardTitle className="text-lg md:text-xl">Forces et Faiblesses</CardTitle>
                            <CardDescription className="text-left">
                                Analyse de mes points forts et axes d'amélioration.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col justify-around flex-grow pt-0">
                            {/* Section Points Positifs */}
                            <div>
                                <h3 className="text-base md:text-lg font-semibold flex items-center gap-2 text-emerald-600 mb-3">
                                    <ThumbsUp className="w-4 h-4 md:w-5 md:h-5" />
                                    {autoEvaluationData.forces.title}
                                </h3>
                                <ul className="list-disc list-inside space-y-1 text-xs md:text-sm mb-3">
                                    {autoEvaluationData.forces.items.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-1.5 md:gap-2">
                                    {autoEvaluationData.forces.badges.map((badge, index) => (
                                        <Badge key={index} className={`${badge.color} hover:bg-emerald-200 text-xs`}>{badge.label}</Badge>
                                    ))}
                                </div>
                            </div>

                            <hr className="my-4" />

                            {/* Section Points Négatifs */}
                            <div>
                                <h3 className="text-base md:text-lg font-semibold flex items-center gap-2 text-rose-600 mb-3">
                                    <ThumbsDown className="w-4 h-4 md:w-5 md:h-5" />
                                    {autoEvaluationData.faiblesses.title}
                                </h3>
                                <ul className="list-disc list-inside space-y-1 text-xs md:text-sm mb-3">
                                    {autoEvaluationData.faiblesses.items.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-1.5 md:gap-2">
                                    {autoEvaluationData.faiblesses.badges.map((badge, index) => (
                                        <Badge key={index} className={`${badge.color} hover:bg-rose-200 text-xs`}>{badge.label}</Badge>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <hr className="border-t border-primary/20 mx-6 md:mx-30" />
        </section>
    );
}