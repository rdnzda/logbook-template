"use client";
import { useEffect } from "react";

export default function Introduction() {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -200px 0px'
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
        <section id="introduction" className="relative w-full flex flex-col bg-primary text-primary-foreground min-h-screen">
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
            <div className="flex flex-col lg:flex-row justify-between mt-20">
                <div className="hidden lg:flex items-center justify-center ml-30 pr-8 mt-50 scroll-animate fade-left">
                    <img
                        src="/assets/svg/undraw_hot-air-balloon.svg"
                        alt="Illustration"
                        className="w-220 max-w-full h-auto object-cover drop-shadow-xl"
                    />
                </div>
                <div className="flex flex-col mx-6 md:mx-15 lg:mr-30 mt-20 md:mt-70 relative z-10 scroll-animate fade-right">
                    <div className="max-w-7xl space-y-6">
                        <h1 className="text-4xl md:text-7xl font-bold">Introduction</h1>
                        <div className="text-base md:text-xl text-justify">
                            <p>
                                Bienvenue dans mon aventure linguistique ! Je m'appelle Redean Akunzada. Étudiant en L2 Ingénierie Informatique à Orléans, je suis passionné par le développement web, et c'est pourquoi,
                                ce logbook prend la forme d'un site web plutôt qu'un document classique, car j'ai voulu rendre le suivi de mon apprentissage plus visuel, dynamique et interactif. Tout au long de ce carnet de bord,
                                vous découvrirez mes réflexions, mes objectifs et mes progrès dans l'apprentissage de l'anglais pendant ce semestre divisés en plusieurs parties !
                            </p>
                        </div>
                        {/* Flèche animée vers le bas */}
                        <div className="flex flex-col items-center mt-8 animate-bounce">
                            <p className="text-xs md:text-sm mb-2 opacity-70">Découvrez la suite</p>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="h-8 w-8 drop-shadow-lg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="my-10 lg:my-20 xl:my-40 mx-10 lg:mx-30 border-white shadow-xl"></hr>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 justify-between items-center mx-6 md:mx-0">
                <div className="flex flex-col lg:ml-30 mt-10 relative z-10 max-w-2xl w-full lg:w-2xl scroll-animate fade-left">
                    <div className="bg-card text-card-foreground p-6 lg:p-8 rounded-2xl border-2 border-primary-foreground/20 shadow-2xl hover:shadow-primary/20 transition-shadow duration-300 relative">
                        {/* Badge numéro 1 */}
                        <div className="absolute -top-4 -left-4 lg:-top-6 lg:-left-6 w-12 h-12 lg:w-16 lg:h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl lg:text-3xl font-bold shadow-xl border-4 border-card">
                            1
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">Première partie</h3>
                        <p className="text-sm md:text-base text-justify leading-relaxed mb-4">
                            Pendant un semestre nous allons mettre en place un carnet de bord dans lequel nous allons, dans une première partie :
                        </p>
                        <ul className="space-y-3 ml-2 text-sm md:text-base">
                            <li className="flex items-start gap-3">
                                <span className="text-primary font-bold">•</span>
                                <span>Faire une introduction de mon expérience avec l'anglais, mes points positifs et négatifs ainsi que mes appréhensions et espoirs pour cette année.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary font-bold">•</span>
                                <span>Une auto-évaluation de mon niveau.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary font-bold">•</span>
                                <span>Les différents objectifs d'apprentissage pour les 10h de travail en autonomie (sessions).</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary font-bold">•</span>
                                <span>Le programme que je souhaite mettre en place pour ces 10h en autonomie (sessions).</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="hidden lg:flex items-center justify-center mr-30">
                    <img
                        src="/assets/svg/undraw_resume.svg"
                        alt="Illustration"
                        className="w-110 max-w-full h-auto object-cover drop-shadow-xl"
                    />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-20 mt-10 lg:mt-30 mx-6 lg:mx-0">
                <div className="hidden lg:flex items-center justify-center ml-30 pr-8">
                    <img
                        src="/assets/svg/undraw_working-at-home.svg"
                        alt="Illustration"
                        className="w-110 max-w-full h-auto object-cover drop-shadow-xl"
                    />
                </div>
                <div className="flex flex-col lg:mr-30 relative z-10 max-w-2xl w-full lg:w-2xl scroll-animate fade-right">
                    <div className="bg-card text-card-foreground p-6 lg:p-8 rounded-2xl border-2 border-primary-foreground/20 shadow-2xl hover:shadow-primary/20 transition-shadow duration-300 relative">
                        {/* Badge numéro 2 */}
                        <div className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 w-12 h-12 lg:w-16 lg:h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl lg:text-3xl font-bold shadow-xl border-4 border-card">
                            2
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">Deuxième partie</h3>
                        <p className="text-sm md:text-base text-justify leading-relaxed mb-4">
                            Ensuite 10 sections, une pour chaque session, dans lesquelles :
                        </p>
                        <ul className="space-y-3 ml-2 text-sm md:text-base">
                            <li className="flex items-start gap-3">
                                <span className="text-primary font-bold">•</span>
                                <span>Je décrirai le contexte de chaque session.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary font-bold">•</span>
                                <span>Mes ressenties pendant les différentes sessions.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary font-bold">•</span>
                                <span>Ce que j'ai aimé ou pas aimé.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary font-bold">•</span>
                                <span>Ce que j'ai trouvé facile ou difficile.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary font-bold">•</span>
                                <span>Ce que j'ai l'intention de changer, de garder ou d'améliorer.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 justify-between items-center mt-10 lg:mt-30 mx-6 lg:mx-0">
                <div className="flex flex-col lg:ml-30 relative z-10 max-w-2xl w-full lg:w-2xl scroll-animate fade-left">
                    <div className="bg-card text-card-foreground p-6 lg:p-8 rounded-2xl border-2 border-primary-foreground/20 shadow-2xl hover:shadow-primary/20 transition-shadow duration-300 relative">
                        {/* Badge numéro 3 */}
                        <div className="absolute -top-4 -left-4 lg:-top-6 lg:-left-6 w-12 h-12 lg:w-16 lg:h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl lg:text-3xl font-bold shadow-xl border-4 border-card">
                            3
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">Conclusion</h3>
                        <p className="text-sm md:text-base text-justify leading-relaxed mb-4">
                            Un bilan final dans lequel :
                        </p>
                        <ul className="space-y-3 ml-2 text-sm md:text-base">
                            <li className="flex items-start gap-3">
                                <span className="text-primary font-bold">•</span>
                                <span>Je reviendrai sur ce que j'ai pu apprendre sur moi et ma capacité à travailler sur l'apprentissage des langues.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary font-bold">•</span>
                                <span>Je partagerai mes impressions.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary font-bold">•</span>
                                <span>Je ferai le point sur mes objectifs.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary font-bold">•</span>
                                <span>Je décrirai mon état d'esprit.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary font-bold">•</span>
                                <span>Je décrirai ce que j'ai pensé du guide qui m'a accompagné pour la création du Logbook ainsi que mes sessions en autonomie.</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="hidden lg:flex items-center justify-center mr-30">
                    <img
                        src="/assets/svg/undraw_thought-process.svg"
                        alt="Illustration"
                        className="w-130 max-w-full h-auto object-cover drop-shadow-xl"
                    />
                </div>
            </div>
            <hr className="my-10 md:my-20 xl:my-40 mx-30 md:mx-60 border-white shadow-xl"></hr>
            <div className="flex flex-col items-center justify-center mb-40 md:mb-40 lg:mb-60 mx-6 md:mx-15 lg:mx-30 scroll-animate fade-up">
                <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">Prêt à embarquer dans cette aventure avec moi ?</h2>
                <p className="text-sm md:text-lg text-center max-w-3xl mb-2">
                    J'espère que ce logbook vous offrira un aperçu captivant de mon parcours d'apprentissage de l'anglais.</p>
                 <p className="text-sm md:text-lg text-center max-w-3xl mb-2">
                    Vous trouverez tout en bas du carnet un formulaire de feedback ainsi qu'une section vous permettant de trouver le code du projet sur GitHub ainsi que les outils et framework utilisés pour la création du site.</p>
                <p className="text-sm md:text-lg text-center max-w-3xl mb-2">
                    N'hésitez pas à remplir le formulaire de feedback à la fin du carnet pour partager vos impressions et suggestions d'amélioration. Votre avis est précieux pour m'aider à progresser davantage.</p>
                <p className="text-sm md:text-lg text-center max-w-3xl">
                    Merci à vous et bonne lecture !</p>
            </div>
            {/* Separator SVG collé en bas */}
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