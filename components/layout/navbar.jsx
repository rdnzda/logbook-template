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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-primary shadow-lg lg:hidden z-50">
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
      )}
    </nav>
  );
}
// ...existing code...