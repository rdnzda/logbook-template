"use client";
import { useEffect, useState } from "react";

export default function Accueil() {
    const [minHeight, setMinHeight] = useState("100vh");

    useEffect(() => {
        function update() {
            const header = document.querySelector("header");
            const h = header ? header.offsetHeight : 0;
            setMinHeight(`calc(100vh - ${h}px)`);
        }

        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

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
        <section id="accueil" className="relative flex flex-col lg:flex-row items-center justify-between bg-background overflow-hidden" style={{ minHeight }}>
            
            <div className="flex flex-col ml-6 mr-6 xl:ml-60 my-auto relative z-20 px-4 sm:px-0 shrink-0 max-w-2xl scroll-animate fade-left">
                
                <div className="space-y-3 relative z-10">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight bg-gradient-to-r from-primary to-sky-600 bg-clip-text text-transparent transition-all duration-300 hover:scale-105">
                        Welcome To
                    </h1>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mt-2 transition-all duration-300 hover:scale-105">
                        My Logbook
                    </h1>
                    <div className="h-1 w-24 bg-gradient-to-r from-primary to-sky-600 rounded-full transition-all duration-500 hover:w-32"></div>
                </div>
                <p className="mt-6 sm:mt-8 md:mt-10 text-justify text-sm sm:text-base lg:text-lg text-muted-foreground max-w-xl leading-relaxed transition-opacity duration-300">
                    Crée par <span className="font-semibold text-foreground">Redean Akunzada</span>, étudiant en L2 Ingénierie Informatique à l'UFR Sciences et Techniques d'Orléans.
                </p>
                <a href="#introduction" className="mt-8 sm:mt-10 md:mt-12 inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground text-sm sm:text-base lg:text-lg font-medium rounded-xl hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-fit group">
                    Get Started
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </a>
            </div>
            
            {/* Illustration décorative pour desktop */}
            <div className="hidden lg:flex items-center justify-center mr-20 xl:mr-40 relative scroll-animate fade-right z-20">
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-sky-500/20 blur-3xl rounded-full transition-opacity duration-500 hover:opacity-80"></div>
                    <img
                        src="/assets/svg/undraw_hot-air-balloon.svg"
                        alt="Illustration"
                        className="w-96 xl:w-[500px] h-auto object-cover drop-shadow-2xl relative z-10 animate-float transition-transform duration-300 hover:scale-105"
                    />
                </div>
            </div>
            {/* Separator SVG collé en bas */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                className="absolute bottom-0 left-0 w-full h-40 pointer-events-none z-30"
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