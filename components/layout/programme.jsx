import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { BrainCircuit, CalendarCheck, Target } from "lucide-react";
import programmeDataJson from "../../data/programme.json";

const programmeData = programmeDataJson.sessions;

export default function Programme() {
    return (
        <section id="programme" className="relative w-full flex flex-col justify-center bg-foreground text-background min-h-screen py-10 md:py-20">
            <div className="flex flex-col mx-6 md:mx-30">
                <div className="w-full space-y-6">
                    <div className="scroll-animate fade-right">
                        <h1 className="text-4xl md:text-7xl font-bold">{programmeDataJson.introduction.title}</h1>
                        <p className="text-sm md:text-xl text-justify mt-4">
                            {programmeDataJson.introduction.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 pt-6 md:pt-10">
                        {/* Carte IA */}
                        <Card className="relative h-full min-h-[160px] md:min-h-[180px] scroll-animate fade-left overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col justify-center bg-primary border-primary/30 col-span-1 md:col-span-2 lg:col-span-3">
                            <div className="absolute -bottom-4 -right-4 text-background -z-0">
                                <div className="scale-75 md:scale-100">
                                    <BrainCircuit size={80} />
                                </div>
                            </div>
                            <CardHeader className="relative z-10">
                                <CardTitle className="flex items-center gap-3 text-base md:text-lg">
                                    <BrainCircuit className="text-background w-5 h-5 md:w-6 md:h-6" />
                                    <span className="text-background">{programmeDataJson.iaCard.title}</span>
                                </CardTitle>
                                <CardDescription className="pt-2 text-background text-xs md:text-sm">
                                    {programmeDataJson.iaCard.description}
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        {programmeData.map((item, index) => (
                            <div key={index} className="scroll-animate fade-up" style={{ animationDelay: `${index * 150}ms` }}>
                                <Card className="relative h-full min-h-[160px] md:min-h-[180px] overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col justify-center">
                                    <div className="absolute -bottom-4 -right-4 text-slate-200 dark:text-slate-800 -z-0">
                                        <div className="scale-75 md:scale-100">
                                            {item.icon === "oral" ? <Target size={80} /> : <CalendarCheck size={80} />}
                                        </div>
                                    </div>
                                    <CardHeader className="relative z-10">
                                        <CardTitle className="pt-2 text-base md:text-lg">{item.title}</CardTitle>
                                        <CardDescription className="text-xs md:text-sm">{item.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <span className="font-bold text-xs md:text-sm text-primary">{item.session}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}