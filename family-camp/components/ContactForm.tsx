"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate sending
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const inputClass =
    "w-full bg-cream border border-sand rounded-xl px-4 py-3 text-bark placeholder-bark/30 focus:outline-none focus:border-ember focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember transition-colors duration-200 font-body text-sm";
  const labelClass = "block text-sm font-medium text-bark/70 mb-1.5 font-body";

  return (
    <div className="bg-white rounded-3xl shadow-lg shadow-bark/5 border border-sand/50 p-8">
      <h3 className="font-display text-xl font-bold text-bark mb-8">
        Мессеж илгээх
      </h3>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-10"
        >
          <div
            className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-5"
            aria-hidden="true"
          >
            <svg
              className="w-8 h-8 text-forest"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h4 className="font-display text-xl font-semibold text-bark mb-3">
            Амжилттай илгээлээ!
          </h4>
          <p className="text-bark/60 font-body text-sm leading-relaxed">
            Таны мессеж хүлээн авлаа. Бид тантай удахгүй холбогдох болно.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: "", email: "", phone: "", message: "" });
            }}
            className="mt-6 text-ember text-sm font-medium hover:text-ember/70 transition-colors font-body focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember rounded-sm"
          >
            Дахин илгээх
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          {/* Name */}
          <div>
            <label htmlFor="contact-name" className={labelClass}>
              Нэр{" "}
              <span className="text-ember" aria-hidden="true">
                *
              </span>
              <span className="sr-only">(шаардлагатай)</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Таны нэрийг оруулна уу"
              className={inputClass}
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="contact-email" className={labelClass}>
              Имэйл{" "}
              <span className="text-ember" aria-hidden="true">
                *
              </span>
              <span className="sr-only">(шаардлагатай)</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              className={inputClass}
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="contact-phone" className={labelClass}>
              Утас
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+976 XXXX XXXX"
              className={inputClass}
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="contact-message" className={labelClass}>
              Мессеж{" "}
              <span className="text-ember" aria-hidden="true">
                *
              </span>
              <span className="sr-only">(шаардлагатай)</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Захиалга эсвэл асуулгаа бичнэ үү..."
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-ember hover:bg-ember/80 disabled:bg-ember/50 text-cream font-medium rounded-xl py-4 transition-colors duration-200 font-body flex items-center justify-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="w-4 h-4 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                <span>Илгээж байна...</span>
              </>
            ) : (
              "Илгээх"
            )}
          </button>
        </form>
      )}
    </div>
  );
}
