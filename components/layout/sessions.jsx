import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Badge } from "../ui/badge";
import { Calendar, Clock } from "lucide-react";
import sessionsDataJson from "../../data/sessions.json";

const sessionsData = sessionsDataJson.sessions;

export default function Sessions() {
    return (
        <section id="sessions" className="relative w-full flex flex-col bg-background text-foreground">
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
            <div className="flex flex-col mx-6 md:mx-30 mt-40 md:mt-60 mb-40 md:mb-60">
                <div className="w-full space-y-6">
                    <div className="scroll-animate fade-right">
                        <h1 className="text-4xl md:text-7xl font-bold">Sessions</h1>
                        <p className="text-sm md:text-xl text-justify mt-4">
                            Voici le compte-rendu de mes 10 heures de travail en autonomie. Chaque session est documentée pour suivre mon parcours, mes découvertes et mes axes d'amélioration.
                        </p>
                    </div>

                    <Carousel className="w-full max-w-6xl mx-auto pt-6 md:pt-10 scroll-animate fade-left" opts={{ loop: true }}>
                        <CarouselContent>
                            {Array.from({ length: 10 }).map((_, index) => {
                                const session = sessionsData.find(s => s.id === index + 1) || {
                                    id: index + 1,
                                    title: `Session ${index + 1}`,
                                    subtitle: "À venir...",
                                    description: "À venir...",
                                    ressentis: "À venir...",
                                    liked: "À venir...",
                                    disliked: "À venir...",
                                    easy: "À venir...",
                                    difficult: "À venir...",
                                    toChange: "À venir...",
                                    toKeep: "À venir...",
                                    toImprove: "À venir...",
                                    images: []
                                };
                                return (
                                    <CarouselItem key={index} id={`session-${index + 1}`}>
                                        <div className="p-1">
                                            <Card className="h-[500px] md:h-[600px] overflow-hidden">
                                                <div className="grid grid-cols-1 h-full">
                                                    <div className="p-4 md:p-6 flex flex-col h-full overflow-hidden">
                                                        <CardHeader className="p-0 flex-shrink-0">
                                                            <div className="flex items-start justify-between gap-4 relative min-h-[120px] md:min-h-[170px]">
                                                                {(session.images && session.images.length > 0) && (
                                                                    <div className="hidden md:block absolute top-0 right-0 w-72 h-40 flex-shrink-0 rounded-xl overflow-hidden bg-black/5 z-10 group">
                                                                        <Carousel className="w-full h-full" opts={{ loop: true }}>
                                                                            <CarouselContent className="h-full -ml-0">
                                                                                {session.images.map((imageUrl, imgIndex) => (
                                                                                    <CarouselItem key={imgIndex} className="h-full pl-0 basis-full">
                                                                                        <img
                                                                                            src={imageUrl}
                                                                                            alt={`Illustration ${imgIndex + 1} pour ${session.title}`}
                                                                                            className="w-full h-full object-cover"
                                                                                        />
                                                                                    </CarouselItem>
                                                                                ))}
                                                                            </CarouselContent>
                                                                            {session.images.length > 1 && (
                                                                                <>
                                                                                    <CarouselPrevious className="left-2 h-8 w-8 bg-white/80 hover:bg-white border-none opacity-0 group-hover:opacity-100 transition-opacity" />
                                                                                    <CarouselNext className="right-2 h-8 w-8 bg-white/80 hover:bg-white border-none opacity-0 group-hover:opacity-100 transition-opacity" />
                                                                                </>
                                                                            )}
                                                                        </Carousel>
                                                                        {session.images.length > 1 && (
                                                                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                                                                                {session.images.map((_, dotIndex) => (
                                                                                    <div key={dotIndex} className="w-1.5 h-1.5 rounded-full bg-white/90" />
                                                                                ))}
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                )}
                                                                <div className={(session.images && session.images.length > 0) ? "flex-1 md:pr-80" : "flex-1"}>
                                                                    <CardTitle className="text-xl md:text-2xl">{session.title}</CardTitle>
                                                                    {session.subtitle && (
                                                                        <p
                                                                            className="text-xs md:text-sm text-muted-foreground mt-1"
                                                                            dangerouslySetInnerHTML={{ __html: session.subtitle }}
                                                                        />
                                                                    )}
                                                                    {session.date && (
                                                                        <div className="flex flex-wrap gap-2 mt-2">
                                                                            <Badge variant="outline" className="flex items-center gap-1 text-xs">
                                                                                <Calendar size={12} className="md:w-[14px] md:h-[14px] mb-0.5" />
                                                                                {new Date(session.date).toLocaleDateString('fr-FR', {
                                                                                    day: 'numeric',
                                                                                    month: 'long',
                                                                                    year: 'numeric'
                                                                                })}
                                                                            </Badge>
                                                                            {session.startTime && session.endTime && (
                                                                                <Badge variant="outline" className="flex items-center gap-1 text-xs">
                                                                                    <Clock size={12} className="md:w-[14px] md:h-[14px] mb-0.5" />
                                                                                    {session.startTime} - {session.endTime}
                                                                                </Badge>
                                                                            )}
                                                                        </div>
                                                                    )}
                                                                    <CardDescription
                                                                        className="mt-3 text-justify text-xs md:text-sm"
                                                                        dangerouslySetInnerHTML={{ __html: session.description || session.context }}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </CardHeader>
                                                        <CardContent className="p-0 pt-4 flex-1 overflow-y-auto min-h-0">
                                                            <div className="space-y-4 h-full pr-2">
                                                                {/* Ressentis */}
                                                                <div className="bg-muted/30 rounded-lg p-2 md:p-3">
                                                                    <h4 className="font-semibold text-xs md:text-sm mb-2 flex items-center gap-2">
                                                                        💭 Ressentis
                                                                    </h4>
                                                                    <p className="text-xs md:text-sm text-justify">{session.ressentis || session.feelings}</p>
                                                                </div>

                                                                {/* Points positifs et négatifs */}
                                                                <div className="grid grid-cols-2 gap-2 md:gap-3">
                                                                    <div className="space-y-2">
                                                                        <div className="flex items-center gap-1.5">
                                                                            <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 text-xs">
                                                                                👍 J'ai aimé
                                                                            </Badge>
                                                                        </div>
                                                                        <p className="text-xs text-justify leading-relaxed">{session.liked}</p>
                                                                    </div>
                                                                    <div className="space-y-2">
                                                                        <div className="flex items-center gap-1.5">
                                                                            <Badge className="bg-rose-100 text-rose-800 hover:bg-rose-200 text-xs">
                                                                                👎 Pas aimé
                                                                            </Badge>
                                                                        </div>
                                                                        <p className="text-xs text-justify leading-relaxed">{session.disliked}</p>
                                                                    </div>
                                                                </div>

                                                                {/* Facile et difficile */}
                                                                <div className="grid grid-cols-2 gap-2 md:gap-3">
                                                                    <div className="space-y-2">
                                                                        <div className="flex items-center gap-1.5">
                                                                            <Badge className="bg-sky-100 text-sky-800 hover:bg-sky-200 text-xs">
                                                                                ✅ Facile
                                                                            </Badge>
                                                                        </div>
                                                                        <p className="text-xs text-justify leading-relaxed">{session.easy}</p>
                                                                    </div>
                                                                    <div className="space-y-2">
                                                                        <div className="flex items-center gap-1.5">
                                                                            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 text-xs">
                                                                                ⚠️ Difficile
                                                                            </Badge>
                                                                        </div>
                                                                        <p className="text-xs text-justify leading-relaxed">{session.difficult}</p>
                                                                    </div>
                                                                </div>

                                                                {/* Intentions - Accordion uniquement si contenu long */}
                                                                <Accordion type="single" collapsible className="w-full">
                                                                    <AccordionItem value="intentions" className="border rounded-lg px-3 [&[data-state=closed]]:border-b [&[data-state=open]]:border-b">
                                                                        <AccordionTrigger className="text-xs md:text-sm py-3 hover:no-underline">
                                                                            <span className="flex items-center gap-2">
                                                                                🎯 Mes intentions pour la suite
                                                                            </span>
                                                                        </AccordionTrigger>
                                                                        <AccordionContent className="text-xs md:text-sm space-y-3 pb-3">
                                                                            <div className="space-y-1.5">
                                                                                <div className="flex items-center gap-2">
                                                                                    <Badge variant="outline" className="text-xs">🔄 À changer</Badge>
                                                                                </div>
                                                                                <p className="text-xs text-justify leading-relaxed pl-2">{session.toChange}</p>
                                                                            </div>
                                                                            <div className="space-y-1.5">
                                                                                <div className="flex items-center gap-2">
                                                                                    <Badge variant="outline" className="text-xs">✨ À garder</Badge>
                                                                                </div>
                                                                                <p className="text-xs text-justify leading-relaxed pl-2">{session.toKeep}</p>
                                                                            </div>
                                                                            <div className="space-y-1.5">
                                                                                <div className="flex items-center gap-2">
                                                                                    <Badge variant="outline" className="text-xs">📈 À améliorer</Badge>
                                                                                </div>
                                                                                <p className="text-xs text-justify leading-relaxed pl-2">{session.toImprove}</p>
                                                                            </div>
                                                                        </AccordionContent>
                                                                    </AccordionItem>
                                                                </Accordion>
                                                            </div>
                                                        </CardContent>
                                                    </div>
                                                </div>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                );
                            })}
                        </CarouselContent>
                        <CarouselPrevious className="ml-[-50px] hidden md:flex" />
                        <CarouselNext className="mr-[-50px] hidden md:flex" />
                    </Carousel>
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