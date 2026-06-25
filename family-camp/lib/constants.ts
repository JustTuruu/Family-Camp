export const SITE = {
  name: "Aguta Camp",
  tagline: "Байгалын сайхныг мэдрэх төгс газар",
  locationLabel: "Булган аймаг · Хялганат тосгон",
  province: "Булган аймаг",
  village: "Хялганат тосгон",
  distanceFromUB: "Эрдэнэт хотоос ~56 км",
  phone: "+976 99752859",
  phone2: "+976 99356964",
  email: "info@familycamp.mn",
  address: "Булган аймаг, Хялганат тосгон",
  coordinates: { lat: 49.464922, lng: 104.330655 },
} as const;

export const NAV_LINKS = [
  { label: "Нүүр", href: "/" },
  { label: "Мэдээлэл", href: "/#accommodation" },
  { label: "Зураг", href: "/gallery" },
] as const;

export const ACCOMMODATIONS = [
  {
    id: "ger",
    name: "Монгол Гэр",
    nameEn: "Mongolian yurt",
    description:
      "Уламжлалт монгол архитектурт суурилсан дугуй гэрт та байгалийн материалаар хийгдсэн тав тухтай унтлагын өрөөтэй байна.",
    image: "/images/Ger/ger1.png",
    images: ["/images/Ger/ger1.png", "/images/Ger/ger2.png", "/images/2.png"],
    amenities: [
      "5 ханатай гэр",
      "Унтлагын ор",
      "Ширээ, сандал",
      "Гадаа ширээ, сандал",
    ],
    pricing: {
      perDay: 120000,
      perNight: 130000,
      perNight2Plus: 100000,
    },
  },
  {
    id: "shovgor",
    name: "Шовгор",
    nameEn: "Wooden house",

    image: "/images/shovgor/shovgor1.jpg",
    images: [
      "/images/shovgor/shovgor1.jpg",
      "/images/shovgor/shovgor2.jpg",
      "/images/shovgor/shovgor3.png",
      "/images/shovgor/shovgor4.jpg",
      "/images/shovgor/shovgor5.jpg",
      "/images/shovgor/shovgor6.jpg",
      "/images/shovgor/shovgor7.jpg",
      "/images/shovgor/shovgor8.jpg",
      "/images/shovgor/shovgor9.jpg",
      "/images/shovgor/shovgor10.png",
    ],
    amenities: [
      "Ширээ, сандал",
      "Гадаа ширээ, сандал",
      "Унтлагын ор",
      "Дэр, хөнжил, орны даавуу",
    ],
    pricing: {
      perDay: 300000,
      perNight: 300000,
      perNight2Plus: 270000,
      perNight3Plus: 250000,
    },
    tags: ["2-4 хүн", "2 хүний ор"],
  },
] as const;

export const GALLERY_CATEGORIES = [
  { id: "shovgor", label: "Шовгор" },
  { id: "ger", label: "Гэр" },
  { id: "baigali", label: "Байгаль" },
] as const;

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number]["id"];

export const GALLERY_IMAGES = [
  {
    src: "/images/Ger/ger1.png",
    alt: "Aguta Camp-ийн монгол гэрүүд — уулын ногоон нутагт",
    aspect: "4/3",
    category: "ger",
  },
  {
    src: "/images/Ger/ger2.png",
    alt: "Монгол гэрийн дотоод тохижилт — ор, пийш, уламжлалт бүтэц",
    aspect: "3/4",
    category: "ger",
  },
  {
    src: "/images/1.png",
    alt: "Хялганат нутгийн муруй голын агаараас харсан үзэмж",
    aspect: "4/3",
    category: "baigali",
  },
  {
    src: "/images/2.png",
    alt: "Булган аймгийн тал хээр, уул ба ойн агаараас харсан үзэмж",
    aspect: "4/3",
    category: "baigali",
  },
  {
    src: "/images/3.png",
    alt: "Хялганат нутгийн гол, гүүрийн агаараас харсан үзэмж",
    aspect: "4/3",
    category: "baigali",
  },
  {
    src: "/images/4.jpg",
    alt: "Хялганат орчмын байгалийн үзэмж",
    aspect: "4/3",
    category: "baigali",
  },
  {
    src: "/images/5.jpg",
    alt: "Булган аймгийн ой, тал хээр",
    aspect: "4/3",
    category: "baigali",
  },
  {
    src: "/images/6.jpg",
    alt: "Хялганат нутгийн ногоон уулс",
    aspect: "4/3",
    category: "baigali",
  },
  {
    src: "/images/7.jpg",
    alt: "Aguta Camp орчмын байгаль",
    aspect: "4/3",
    category: "baigali",
  },
  {
    src: "/images/shovgor/shovgor1.jpg",
    alt: "Aguta Camp-ийн шовгор майхан — байгалийн тохилог буудал",
    aspect: "4/5",
    category: "shovgor",
  },
  {
    src: "/images/shovgor/shovgor2.jpg",
    alt: "Шовгор майхны дотоод тав тух",
    aspect: "3/4",
    category: "shovgor",
  },
  {
    src: "/images/shovgor/shovgor3.png",
    alt: "Шовгор майхан ойн дунд",
    aspect: "4/3",
    category: "shovgor",
  },
  {
    src: "/images/shovgor/shovgor4.jpg",
    alt: "Шовгор майхан — өдрийн үзэмж",
    aspect: "4/3",
    category: "shovgor",
  },
  {
    src: "/images/shovgor/shovgor5.jpg",
    alt: "Шовгор майхан — байгалийн дунд",
    aspect: "4/3",
    category: "shovgor",
  },
  {
    src: "/images/shovgor/shovgor6.jpg",
    alt: "Шовгор майхан — дотоод тохижилт",
    aspect: "3/4",
    category: "shovgor",
  },
  {
    src: "/images/shovgor/shovgor7.jpg",
    alt: "Шовгор майхан — амралтын орчин",
    aspect: "3/4",
    category: "shovgor",
  },
  {
    src: "/images/shovgor/shovgor8.jpg",
    alt: "Шовгор майхан — ойртуулсан үзэмж",
    aspect: "4/5",
    category: "shovgor",
  },
  {
    src: "/images/shovgor/shovgor9.jpg",
    alt: "Шовгор майхан — гадаа орчин",
    aspect: "4/3",
    category: "shovgor",
  },
  {
    src: "/images/shovgor/shovgor10.png",
    alt: "Шовгор майхан — ерөнхий байдал",
    aspect: "4/3",
    category: "shovgor",
  },
] as const;

