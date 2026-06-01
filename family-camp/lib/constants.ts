export const SITE = {
  name: "Family Camp",
  tagline: "Хялганатын нутагт амьдралаас завсарла",
  taglineEn: "Rest in the land of Khylganat",
  locationLabel: "Булган аймаг · Хялганат тосгон",
  province: "Булган аймаг",
  village: "Хялганат тосгон",
  distanceFromUB: "Эрдэнэт хотоос ~370 км",
  phone: "+976 9911 1234",
  email: "info@familycamp.mn",
  address: "Булган аймаг, Хялганат тосгон",
  hours: "Өдөр бүр 08:00–20:00",
  coordinates: { lat: 49.0, lng: 103.0 },
} as const;

export const NAV_LINKS = [
  { label: "Нүүр", href: "/" },
  { label: "Байрлал", href: "/accommodation" },
  { label: "Галерей", href: "/gallery" },
  { label: "Холбоо барих", href: "/contact" },
] as const;

export const ACCOMMODATIONS = [
  {
    id: "ger",
    name: "Монгол Гэр",
    nameEn: "Mongolian Ger",
    description:
      "Уламжлалт монгол архитектурт суурилсан дугуй гэрт та байгалийн материалаар хийгдсэн тав тухтай унтлагын өрөөтэй байна.",
    capacity: "4–6 хүн",
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80",
      "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    ],
    amenities: [
      "Дулааны систем",
      "Унтлагын хэрэгсэл",
      "Цонхны хөшиг",
      "Гэрэл",
      "Ширээ, сандал",
      "Гадаа ширээ",
    ],
    pricing: {
      perDay: 120000,
      perNight: 130000,
      perNight2Plus: 100000,
      weekend: 155000,
    },
    tags: ["4–6 хүн", "Дулааны систем", "Унтлагын хэрэгсэл"],
  },
  {
    id: "shovgor",
    name: "Шовгор",
    nameEn: "Shovgor Tipi",

    capacity: "2–4 хүн",
    image:
      "https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?w=800&q=80",
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=80",
      "https://images.unsplash.com/photo-1482192505345-5852b57a21c0?w=800&q=80",
    ],
    amenities: [
      "5 ханатай гэр",
      "2ш - 2 хүний ор",
      "Цагаан хэрэгсэл",
      "Гадаа галдах тогоо",
      "Хувийн гадаа талбай",
      "Нойрны дэвсгэр",
    ],
    pricing: {
      perDay: 155000,
      perNight: 145000,
      perNight2Plus: 135000,
      weekend: 175000,
    },
    tags: ["3-4 хүн"],
  },
] as const;

export const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    alt: "Өндөр уулын хажуугийн үзэмж",
    aspect: "3/4",
  },
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80",
    alt: "Алтан нарны туяа хөндийд",
    aspect: "4/3",
  },
  {
    src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80",
    alt: "Ногоон ойн агаараас харсан дүр",
    aspect: "3/4",
  },
  {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
    alt: "Ойн гэрэл мод дунд",
    aspect: "4/5",
  },
  {
    src: "https://images.unsplash.com/photo-1482192505345-5852b57a21c0?w=600&q=80",
    alt: "Манан бүрхсэн ой",
    aspect: "4/3",
  },
  {
    src: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=600&q=80",
    alt: "Шөнийн тэнгэр дор гал",
    aspect: "3/4",
  },
  {
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80",
    alt: "Цасан оргилын шөнийн манлай",
    aspect: "4/3",
  },
  {
    src: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&q=80",
    alt: "Байгалийн дунд майхан",
    aspect: "4/5",
  },
  {
    src: "https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?w=600&q=80",
    alt: "Ойн шовгор майхан",
    aspect: "3/4",
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
    alt: "Ойн дотор гол горхи",
    aspect: "4/3",
  },
  {
    src: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=80",
    alt: "Агаараас харсан байгалийн үзэмж",
    aspect: "4/5",
  },
  {
    src: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=600&q=80",
    alt: "Шөнийн гал",
    aspect: "4/3",
  },
] as const;

export const WHY_CHOOSE_US = [
  {
    icon: "🌿",
    title: "Цэвэр байгаль",
    description: "Гэмтээгдээгүй монгол нутаг дэвсгэр, цэнгэг агаар",
  },
  {
    icon: "🏕️",
    title: "Жинхэнэ гэр буудал",
    description: "Уламжлалт монгол гэр болон шовгор майхан",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Гэр бүлд тохиромжтой",
    description: "Бүх насны хүмүүст тохирсон амралт",
  },
  {
    icon: "⭐",
    title: "Одны тайлал",
    description: "Гэрлийн бохирдолгүй тэнгэрт одод хаяагүй харагдана",
  },
] as const;
