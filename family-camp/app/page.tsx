import HeroSection from "@/components/HeroSection";
import LocationSection from "@/components/LocationSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import AccommodationCard from "@/components/AccommodationCard";
import GalleryGrid from "@/components/GalleryGrid";
import PricingCard from "@/components/PricingCard";
import MapSection from "@/components/MapSection";
import { GALLERY_IMAGES } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LocationSection />
      <WhyChooseUs />
      <AccommodationCard />
      <GalleryGrid variant="strip" images={GALLERY_IMAGES.slice(0, 6)} />
      <PricingCard />
      <MapSection />
    </>
  );
}
