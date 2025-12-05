"use client";
import Navbar from "./navbar";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 flex items-center lg:justify-center justify-end w-full px-8 py-6 bg-foreground shadow-md text-background">
            <div className="absolute left-10 text-xl font-bold hover:text-accent">
                <a href="#">
                Logbook
                </a>
            </div>
            <Navbar />
        </header>
    );
}