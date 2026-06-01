import { motion } from "framer-motion";
import GalleryGrid from "@/components/GalleryGrid";
import { GALLERY_IMAGES } from "@/lib/constants";

export default function GalleryPage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Page header */}
      <header className="bg-bark pt-28 pb-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-sand/50 text-sm mb-4 font-body">
            <ol className="flex items-center gap-2">
              <li><a href="/" className="hover:text-sand/80 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember rounded-sm">Нүүр</a></li>
              <li aria-hidden="true"><span className="mx-1">/</span></li>
              <li><span className="text-sand/80" aria-current="page">Галерей</span></li>
            </ol>
          </nav>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-cream">
            Галерей
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
