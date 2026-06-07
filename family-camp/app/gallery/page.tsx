import { motion } from "framer-motion";
import GalleryGrid from "@/components/GalleryGrid";
import { GALLERY_IMAGES } from "@/lib/constants";

export default function GalleryPage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Page header */}
      <header className="bg-bark pt-28 pb-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-cream">
            Зураг
          </h1>
          <p className="text-sand/70 mt-3 font-body">
            Family Camp-ийн үзэсгэлэнт байгаль ба байрлалуудыг харна уу
          </p>
        </div>
      </header>

      {/* Gallery grid */}
      <GalleryGrid variant="masonry" images={GALLERY_IMAGES} />
    </div>
  );
}
