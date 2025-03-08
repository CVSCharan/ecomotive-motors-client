"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Logo className="mr-2" />
            <span className="text-2xl font-bold text-primary font-heading-primary tracking-tight">
              Ecomotive Motors
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-body-secondary text-sm font-medium tracking-wide uppercase">
            <Link
              href="/#home"
              className="text-dark hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/#about"
              className="text-dark hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/#products"
              className="text-dark hover:text-primary transition-colors"
            >
              Products
            </Link>
            <Link
              href="/#services"
              className="text-dark hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="/#contact"
              className="text-dark hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/#home"
                className="text-dark hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/#about"
                className="text-dark hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/#products"
                className="text-dark hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/#services"
                className="text-dark hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/#contact"
                className="text-dark hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
