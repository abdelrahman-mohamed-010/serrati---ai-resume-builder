"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Auth from "./Auth";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-2xl font-raqaa -translate-y-1 text-secondary font-semibold">
                سيرتي
              </h1>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8 mr-8">
            <div className="flex gap-8 items-center">
              {["الرئيسية", "القوالب", "الأسعار", "من نحن"].map((item, i) => (
                <Link
                  key={i}
                  href={i === 0 ? "/" : `/${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-secondary transition-colors font-medium"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Auth />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden bg-white/80 hover:bg-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu with animation */}
      <div
        className={`md:hidden absolute w-full bg-white/95 backdrop-blur-lg shadow-lg transition-all duration-300 ease-in-out overflow-x-hidden ${
          isMenuOpen
            ? "max-h-80 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-6 py-4 space-y-3">
          {["الرئيسية", "القوالب", "الأسعار", "من نحن"].map((item, i) => (
            <Link
              key={i}
              href={i === 0 ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-center text-gray-800 hover:text-secondary transition-colors"
            >
              {item}
            </Link>
          ))}
          <div className="pt-2">
            <Auth variant="mobile" />
          </div>
        </div>
      </div>
    </nav>
  );
}
