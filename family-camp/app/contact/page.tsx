"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/constants";

export default function ContactPage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Page header */}
      <header className="bg-bark pt-28 pb-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-sand/50 text-sm mb-4 font-body">
            <ol className="flex items-center gap-2">
              <li><a href="/" className="hover:text-sand/80 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember rounded-sm">Нүүр</a></li>
              <li aria-hidden="true"><span className="mx-1">/</span></li>
              <li><span className="text-sand/80" aria-current="page">Холбоо барих</span></li>
            </ol>
          </nav>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-5xl font-bold text-cream"
          >
            Холбоо барих
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sand/70 mt-3 font-body"
          >
            Захиалга, асуулт, санал хүсэлтийг бидэнд илгээнэ үү
          </motion.p>
        </div>
      </header>

      {/* Two-column layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-bark mb-8">
              Бидэнтэй холбогдох
            </h2>

            <address className="not-italic space-y-6 mb-10">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-sand/50 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <span className="text-xl">📞</span>
                </div>
                <div>
                  <p className="text-xs text-bark/50 uppercase tracking-wider mb-1 font-body">
                    Утас
                  </p>
                  <a
                    href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                    className="text-bark font-medium hover:text-ember transition-colors font-body focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember rounded-sm"
                  >
                    {SITE.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-sand/50 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <span className="text-xl">📧</span>
                </div>
                <div>
                  <p className="text-xs text-bark/50 uppercase tracking-wider mb-1 font-body">
                    Имэйл
                  </p>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-bark font-medium hover:text-ember transition-colors font-body focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember rounded-sm"
                  >
                    {SITE.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-sand/50 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <p className="text-xs text-bark/50 uppercase tracking-wider mb-1 font-body">
                    Хаяг
                  </p>
                  <p className="text-bark font-medium font-body">
                    {SITE.province},
                    <br />
                    {SITE.village}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-sand/50 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <span className="text-xl">🕐</span>
                </div>
                <div>
                  <p className="text-xs text-bark/50 uppercase tracking-wider mb-1 font-body">
                    Ажиллах цаг
                  </p>
                  <p className="text-bark font-medium font-body">
                    {SITE.hours}
                  </p>
                </div>
              </div>
            </address>

            {/* Google Maps embed */}
            <div className="rounded-2xl overflow-hidden border border-sand shadow-md">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d200000!2d${SITE.coordinates.lng}!3d${SITE.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1smn!2smn!4v1699000000000`}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Family Camp байршил"
              />
            </div>
          </motion.div>

          {/* Right column: contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
