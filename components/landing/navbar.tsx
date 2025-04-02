"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Auth from "./Auth";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-md fixed w-full z-50 border-b">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="flex gap-2">
              <Link href="/">
                <h1 className="text-xl font-raqaa text-gray-700">سيرتي</h1>
              </Link>
              <img
                security="true"
                src="/images/logo.png"
                alt="Logo"
                className="h-8 -translate-y-0.5 w-auto"
              />
            </div>
          </div>
          <div className="hidden md:flex items-center gap-5 mr-8">
            <Link href="/" className="text-gray-700 hover:text-secondary">
              الرئيسية
            </Link>
            <Link
              href="/templates"
              className="text-gray-700 hover:text-secondary"
            >
              القوالب
            </Link>
            <Link
              href="/pricing"
              className="text-gray-700 hover:text-secondary"
            >
              الأسعار
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-secondary">
              من نحن
            </Link>
          </div>
          <div className="hidden md:block">
            <Auth />
          </div>
          <Button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 z-50 bg-white border-b shadow-lg transition-all">
          <nav className="flex flex-col p-5 space-y-4 w-full text-center">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-secondary"
            >
              الرئيسية
            </Link>
            <Link
              href="/templates"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-secondary"
            >
              القوالب
            </Link>
            <Link
              href="/pricing"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-secondary"
            >
              الأسعار
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-secondary"
            >
              من نحن
            </Link>
            <Auth variant="mobile" />
          </nav>
        </div>
      )}
    </nav>
  );
}
