// ...existing code...
"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "#introduction", label: "Introduction" },
    { href: "#auto-evaluation", label: "Auto‑évaluation" },
    { href: "#objectifs", label: "Objectifs" },
    { href: "#programme", label: "Programme" },
    { href: "#sessions", label: "Sessions" },
    { href: "#bilan", label: "Bilan" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="flex items-center justify-between">
      {/* Desktop Menu */}
      <ul className="hidden lg:flex flex-row space-x-6 items-center text-background font-medium">
        {menuItems.map((item) => (
          <li key={item.href}>
            <a href={item.href} className="hover:text-accent transition-colors">
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-background hover:text-accent transition-colors p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu with slide & fade animation */}
      <div
        className={`absolute top-full left-0 right-0 lg:hidden z-50 transform transition-all duration-300 ease-out ${
          isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="bg-primary shadow-lg">
          <ul className="flex flex-col py-4">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block px-6 py-3 text-background hover:bg-primary-foreground/10 hover:text-accent transition-colors"
                  onClick={handleLinkClick}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Backdrop for focus + subtle fade */}
        <div
          className={`fixed inset-0 bg-black/20 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />
      </div>
    </nav>
  );
}
// ...existing code...