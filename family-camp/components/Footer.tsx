import Link from "next/link";
import { SITE, NAV_LINKS } from "@/lib/constants";

const SOCIALS = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg
        className="w-4 h-4"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg
        className="w-4 h-4"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-bark text-sand overflow-hidden">
      {/* Soft top accent */}
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sand/30 to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10">
          {/* About column */}
          <div className="md:col-span-5">
            <Link
              href="/"
              className="flex items-center gap-2.5 font-display text-2xl font-semibold text-cream mb-5"
            >
              <span
                aria-hidden="true"
                className="w-7 h-7 rounded-full bg-ember/15 border border-ember/40 flex items-center justify-center text-ember-glow"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 20h18M5 20l7-13 7 13M9 20v-5h6v5"
                  />
                </svg>
              </span>
              {SITE.name}
            </Link>
            <p className="text-sand/65 text-sm leading-relaxed max-w-md">
              {SITE.province}н {SITE.village}д байрлах {SITE.name} нь таньд
              байгалийн цэвэр агаар, тайван амгалан байдлыг бэлэглэнэ.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-2 mt-7">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-10 h-10 rounded-full bg-sand/10 hover:bg-ember/20 border border-sand/10 hover:border-ember/40 text-sand hover:text-ember-glow flex items-center justify-center transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav column */}
          <div className="md:col-span-3">
            <h4 className="text-[0.65rem] uppercase tracking-widest text-sand/45 mb-5 font-body">
              Цэс
            </h4>
            <ul className="space-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sand/70 hover:text-sand transition-colors font-body focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="md:col-span-4">
            <h4 className="text-[0.65rem] uppercase tracking-widest text-sand/45 mb-5 font-body">
              Холбоо барих
            </h4>
            <address className="not-italic">
              <ul className="space-y-3.5 text-sm text-sand/70 font-body">
                <li className="flex items-start gap-3">
                  <span
                    className="mt-0.5 text-ember-glow flex-shrink-0"
                    aria-hidden="true"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </span>
                  <div>
                    <a
                      href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                      className="block hover:text-sand transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember rounded-sm"
                    >
                      {SITE.phone}
                    </a>
                    <a
                      href={`tel:${SITE.phone2.replace(/\s/g, "")}`}
                      className="block hover:text-sand transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember rounded-sm"
                    >
                      {SITE.phone2}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="mt-0.5 text-ember-glow flex-shrink-0"
                    aria-hidden="true"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="hover:text-sand transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember rounded-sm"
                  >
                    {SITE.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="mt-0.5 text-ember-glow flex-shrink-0"
                    aria-hidden="true"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </span>
                  <span>
                    {SITE.province},
                    <br />
                    {SITE.village}
                  </span>
                </li>
              </ul>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-sand/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-sand/45 font-body">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Бүх эрх хуулиар
            хамгаалагдсан.
          </p>
          <p className="tracking-wide">
            {SITE.village} · {SITE.province} · Монгол Улс
          </p>
        </div>
      </div>
    </footer>
  );
}
