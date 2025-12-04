import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Badge } from "../ui/badge";
import { Headphones, Mic, BookText, PenSquare } from "lucide-react";
import objectifsData from "@/data/objectifs.json";

const iconMap = {
    Headphones: <Headphones size={80} />,
    Mic: <Mic size={80} />,
    BookText: <BookText size={80} />,
    PenSquare: <PenSquare size={80} />,
};

export default function Objectifs() {
    return (
        <section id="objectifs" className="relative w-full flex flex-col justify-center bg-background text-foreground">
            <div className="flex flex-col mt-10 md:mt-20 mb-40 md:mb-50 mx-6 md:mx-30">
                <div className="w-full space-y-6">
                    <div className="scroll-animate fade-right">
                        <h1 className="text-4xl md:text-7xl font-bold">{objectifsData.introduction.title}</h1>
                        <p className="text-sm md:text-xl text-justify mt-4">
                            {objectifsData.introduction.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 pt-6 md:pt-10">
                        {objectifsData.objectifs.map((objective, index) => (
                            <div key={index} className="scroll-animate fade-up" style={{ animationDelay: `${index * 150}ms` }}>
                                <Card className="relative h-full min-h-[160px] md:min-h-[180px] overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col justify-center">
                                    <div className="absolute -bottom-4 -right-4 text-slate-200 dark:text-slate-800 -z-0">
                                        <div className="scale-75 md:scale-100">
                                            {iconMap[objective.icon]}
                                        </div>
                                    </div>
                                    <CardHeader className="relative z-10">
                                        <Badge className={`w-fit text-xs ${objective.badgeColor}`}>{objective.category}</Badge>
                                        <CardTitle className="pt-2 text-base md:text-lg">{objective.description}</CardTitle>
                                    </CardHeader>
                                </Card>
                            </div>
                        ))}
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