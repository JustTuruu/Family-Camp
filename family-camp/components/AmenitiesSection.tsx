"use client";

import { motion } from "framer-motion";

const ICON_PROPS = {
  className: "w-7 h-7",
  fill: "none" as const,
  viewBox: "0 0 24 24",
  stroke: "currentColor" as const,
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const AMENITIES = [
  {
    title: "Шүршүүртэй",
    description: "Халуун, хүйтэн усны шүршүүртэй ариун цэврийн өрөө бэлэн.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M8 3a4 4 0 014 4v3" />
        <path d="M4 10h16" />
        <path d="M6 10v2a6 6 0 0012 0v-2" />
        <path d="M9 16l-1 4M12 16v4M15 16l1 4" />
      </svg>
    ),
  },
  {
    title: "Суултуурын нойлтой",
    description: "Усан системтэй, орчин үеийн суултуурын нойлоор тоноглогдсон.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M6 4h12v6H6z" />
        <path d="M7 10v3a5 5 0 005 5 5 5 0 005-5v-3" />
        <path d="M9 18l-1 3M15 18l1 3" />
      </svg>
    ),
  },
  {
    title: "Хүүхдийн тоглоомын талбай",
    description: "Хүүхдэд зориулсан гулсууртай тоглоомын талбайтай.",
    icon: (
      <svg {...ICON_PROPS}>
        <circle cx="8" cy="5" r="2" />
        <path d="M4 21l6-10 8 2-4 8" />
        <path d="M14 13l4-6" />
        <path d="M18 7l2 2" />
      </svg>
    ),
  },
  {
    title: "Волейболын талбайтай",
    description: "Гадаа волейбол тоглох талбайтай — гэр бүл, найз нөхөдтэйгөө цэнгэх боломжтой.",
    icon: (
      <svg {...ICON_PROPS}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a14 14 0 010 18" />
        <path d="M3 12a14 14 0 0118 0" />
        <path d="M5.6 5.6a14 14 0 0112.8 12.8" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

export default function AmenitiesSection() {
  return (
    <section className="relative bg-cream py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-16"
        >
          <p className="eyebrow text-bark/55 justify-center mb-4">Давуу тал</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-bark max-w-2xl mx-auto">
            Тав тухтай амралтын нөхцөл
          </h2>
          <p className="text-bark/65 mt-5 font-body max-w-xl mx-auto">
            Байгаль дунд ч гэсэн орчин үеийн ая тухыг бүрэн мэдрэх боломжтой.
          </p>
        </motion.div>

        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {AMENITIES.map((item) => (
            <motion.li
              key={item.title}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group rounded-3xl bg-white/70 ring-1 ring-bark/10 p-7 transition-shadow duration-300 hover:shadow-xl hover:shadow-bark/5"
            >
              <div className="w-12 h-12 rounded-xl bg-forest/15 border border-forest/25 text-forest flex items-center justify-center mb-5 group-hover:bg-ember/15 group-hover:border-ember/40 group-hover:text-ember transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-bark mb-2.5 leading-tight">
                {item.title}
              </h3>
              <p className="text-bark/65 text-sm leading-relaxed font-body">
                {item.description}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
