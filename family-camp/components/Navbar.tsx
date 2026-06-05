"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navBg = scrolled
    ? "bg-bark/95 backdrop-blur-md shadow-lg shadow-bark/20 border-b border-sand/10"
    : "bg-gradient-to-b from-bark/40 to-transparent";

  return (
    <>
      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:bg-ember focus:text-cream focus:px-4 focus:py-2 focus:rounded-lg focus:font-medium focus:text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
      >
        Үндсэн агуулга руу үсрэх
      </a>

      <nav
        aria-label="Үндсэн цэс"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              onClick={(e) => {
                if (pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="group flex items-center gap-2.5 font-display text-xl md:text-2xl font-semibold text-sand hover:text-cream transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember rounded-sm"
            >
              <span
                aria-hidden="true"
                className="w-7 h-7 rounded-full bg-ember/15 border border-ember/40 flex items-center justify-center text-ember-glow transition-transform duration-300 group-hover:rotate-12"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 20h18M5 20l7-13 7 13M9 20v-5h6v5" />
                </svg>
              </span>
              Family Camp
            </Link>

            {/* Desktop links */}
            <ul className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 group rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember ${
                        isActive
                          ? "text-cream"
                          : "text-sand/80 hover:text-sand"
                      }`}
                    >
                      {link.label}
                      <span
                        className={`absolute bottom-0 left-4 right-4 h-px bg-ember transition-transform duration-300 origin-left ${
                          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link
                  href="/contact"
                  className="ml-4 px-5 py-2 bg-ember text-cream text-sm font-medium rounded-full hover:bg-ember/80 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
                >
                  Захиалах
                </Link>
              </li>
            </ul>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 text-sand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember rounded-sm"
              aria-label={mobileOpen ? "Цэс хаах" : "Цэс нээх"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-bark/60 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              key="drawer"
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-bark shadow-2xl md:hidden flex flex-col"
            >
              <div className="flex items-center justify-between px-6 h-16">
                <span className="font-display text-xl text-sand font-semibold">
                  Family Camp
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-sand/70 hover:text-sand transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember rounded-sm"
                  aria-label="Хаах"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <nav aria-label="Гар утасны цэс" className="flex-1 px-6 py-8">
                <ul className="flex flex-col gap-2">
                  {NAV_LINKS.map((link, i) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.07 + 0.1 }}
                      >
                        <Link
                          href={link.href}
                          className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember ${
                            isActive
                              ? "bg-forest text-cream"
                              : "text-sand/80 hover:text-sand hover:bg-sand/10"
                          }`}
                        >
                          {link.label}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              <div className="px-6 pb-8">
                <Link
                  href="/contact"
                  className="block w-full text-center px-5 py-3 bg-ember text-cream font-medium rounded-full hover:bg-ember/80 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
                >
                  Захиалах
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
