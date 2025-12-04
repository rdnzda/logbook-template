"use client"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const Bilan = () => {
    return (
        <section id="bilan" className="relative w-full flex flex-col bg-primary text-background">
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
            <div className="flex flex-col gap-8 md:gap-15 justify-between mt-40 md:mt-60 mb-40 md:mb-60 mx-6 md:mx-30">
                <div className="flex flex-col">
                    <div className="w-full space-y-6">
                        <div className="scroll-animate fade-right">
                            <h1 className="text-4xl md:text-7xl font-bold">Bilan</h1>
                            <p className="text-sm md:text-xl text-justify mt-4">
                                Suite à mon auto-évaluation, j'ai défini des objectifs clairs pour ce semestre. Mon but principal est d'atteindre un niveau B2 solide, en me concentrant particulièrement sur la fluidité à l'oral et l'enrichissement de mon vocabulaire technique en informatique. Voici les compétences que je souhaite améliorer.
                            </p>
                        </div>
                    </div>
                </div>
                <Card className="scroll-animate fade-up">
                    <CardHeader>
                        <CardTitle className="text-lg md:text-xl">Bilan Final</CardTitle>
                        <CardDescription className="text-xs md:text-sm">Une réflexion sur mon expérience globale.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-sm md:text-base">Ce que j'ai appris sur moi et ma capacité à apprendre</AccordionTrigger>
                                <AccordionContent className="text-xs md:text-base">
                                    Ce parcours m'a révélé une discipline que je ne soupçonnais pas. En structurant mes sessions, j'ai découvert que ma capacité de concentration et de mémorisation est bien plus grande lorsque je suis un plan clair. L'autonomie, loin d'être un obstacle, est devenue un moteur de motivation.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-sm md:text-base">Mes impressions générales</AccordionTrigger>
                                <AccordionContent className="text-xs md:text-base">
                                    L'expérience a été extrêmement positive. Au début, l'idée de tenir un journal de bord semblait fastidieuse, mais c'est rapidement devenu un rituel gratifiant. Voir mes progrès, même les plus petits, a été une source constante d'encouragement.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-sm md:text-base">Le point sur mes objectifs</AccordionTrigger>
                                <AccordionContent className="text-xs md:text-base">
                                    J'ai non seulement atteint mon objectif principal de tenir une conversation simple, mais je l'ai dépassé. Je me sens désormais capable de comprendre des contextes plus complexes et d'exprimer des idées nuancées. Les objectifs intermédiaires ont été cruciaux pour maintenir le cap.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger className="text-sm md:text-base">Mon état d'esprit</AccordionTrigger>
                                <AccordionContent className="text-xs md:text-base">
                                    Je suis passé d'un état d'appréhension à une confiance sereine. Chaque session réussie a renforcé ma conviction que je pouvais y arriver. Aujourd'hui, je n'aborde plus l'apprentissage comme une corvée, mais comme une exploration passionnante.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5">
                                <AccordionTrigger className="text-sm md:text-base">Mon avis sur le guide et les sessions en autonomie</AccordionTrigger>
                                <AccordionContent className="text-xs md:text-base">
                                    Le guide a été un excellent compagnon de route, fournissant la structure nécessaire sans être rigide. Il m'a appris à organiser mon propre apprentissage, une compétence qui me sera utile bien au-delà des langues. Les sessions en autonomie m'ont permis d'adapter le rythme à mes besoins, ce qui a été fondamental pour mon succès.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </CardContent>
                </Card>
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
};

export default Bilan;