"use client";

import { motion } from "framer-motion";
import { WHY_CHOOSE_US } from "@/lib/constants";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="bg-forest py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sand/60 text-sm font-medium tracking-wider uppercase mb-3 font-body">
            Онцлог
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-sand">
            Яагаад Family Camp?
          </h2>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {WHY_CHOOSE_US.map((feature) => (
            <motion.article
              key={feature.title}
              variants={cardVariants}
              whileHover={{
                y: -6,
                boxShadow:
                  "0 20px 40px -8px rgba(0,0,0,0.35)",
                transition: { duration: 0.2 },
              }}
              className="bg-forest border border-sand/20 rounded-2xl p-8 cursor-default"
              style={{ background: "rgba(45,74,53,0.5)" }}
            >
              <div className="text-4xl mb-5" aria-hidden="true">{feature.icon}</div>
              <h3 className="font-display text-xl font-semibold text-sand mb-3">
                {feature.title}
              </h3>
              <p className="text-sand/70 text-sm leading-relaxed font-body">
                {feature.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
