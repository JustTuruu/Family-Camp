export const SITE = {
  name: "Family Camp",
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
      "Унтлагын ор (2 ширхэг)",
      "Ширээ, сандал",
      "Гадаа ширээ, сандал",
    ],
    pricing: {
      perDay: 120000,
      perNight: 130000,
      perNight2Plus: 100000,
      weekend: 155000,
    },
  },
  {
    id: "shovgor",
    name: "Шовгор",
    nameEn: "Wooden house",

    image:
      "https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?w=800&q=80",
    images: [
      "https://scontent.fuln6-3.fna.fbcdn.net/v/t39.30808-6/470031625_122126896112532097_8013439565296233237_n.jpg?stp=dst-jpg_p960x960_tt6&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=xkS54UwyAgcQ7kNvwFk8Tt4&_nc_oc=AdqWuFTOOS_hQIM_MOlX6aNl7BNlVto-ctQddzVjgPE3C7OtS4Zy561-ko7LefLsi9E&_nc_zt=23&_nc_ht=scontent.fuln6-3.fna&_nc_gid=MI8c7tuIZqp0AZMEQYOJ0A&_nc_ss=7b2a8&oh=00_Af9cpgfYO7TBhYAMS5KYdZEYp3hftBmZjL4yrsrqi0hKyw&oe=6A234134",
      "https://scontent.fuln6-1.fna.fbcdn.net/v/t39.30808-6/690737518_4357930441127197_3107062989625210517_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=BfAri5tuRS8Q7kNvwHw058x&_nc_oc=Adrukvl82_BQq48hs3QflgV5Aq3hcrZDI1tbOQJj_FEG_o2yqIFh49UNJLC7F32BUms&_nc_zt=23&_nc_ht=scontent.fuln6-1.fna&_nc_gid=Ns9UeqtO7forwAw1FgscOA&_nc_ss=7b2a8&oh=00_Af_jDsFThxrDEBEeUmUxxVpQdkKtHsVhb5rkQRFBzpvAYw&oe=6A2347B2",
      "https://scontent.fuln6-2.fna.fbcdn.net/v/t39.30808-6/689525654_4357930251127216_8502818154239105340_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=G5N39FLB1Z4Q7kNvwEAoIMx&_nc_oc=Adrh7WrWSCgsG2AkYk2Y4zLCon2C9FBcvq8EnkKnEE8hin_aeN_DAUGB_mVGtTbKrmo&_nc_zt=23&_nc_ht=scontent.fuln6-2.fna&_nc_gid=W0-k8SYIZ1zqRpxB_EHLMQ&_nc_ss=7b2a8&oh=00_Af9-87Y-qqT0qWMra_juPC_wg-bKPKa5LGBbdwQ3jMd7qQ&oe=6A232D65",
    ],
    amenities: [
      "Ширээ, сандал",
      "Гадаа ширээ, сандал",
      "Унтлагын ор (2 ширхэг)",
      "Дэр, хөнжил, орны даавуу",
    ],
    pricing: {
      perDay: 250000,
      perNight: 250000,
      perNight2Plus: 230000,
      weekend: 450000,
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
    alt: "Family Camp-ийн монгол гэрүүд — уулын ногоон нутагт",
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
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    alt: "Өндөр уулын хажуугийн үзэмж",
    aspect: "3/4",
    category: "baigali",
  },
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80",
    alt: "Алтан нарны туяа хөндийд",
    aspect: "4/3",
    category: "baigali",
  },
  {
    src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80",
    alt: "Ногоон ойн агаараас харсан дүр",
    aspect: "3/4",
    category: "baigali",
  },
  {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
    alt: "Ойн гэрэл мод дунд",
    aspect: "4/5",
    category: "baigali",
  },
  {
    src: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=600&q=80",
    alt: "Шөнийн тэнгэр дор гал",
    aspect: "3/4",
    category: "baigali",
  },
  {
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80",
    alt: "Цасан оргилын шөнийн манлай",
    aspect: "4/3",
    category: "baigali",
  },
  {
    src: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&q=80",
    alt: "Байгалийн дунд шовгор майхан",
    aspect: "4/5",
    category: "shovgor",
  },
  {
    src: "https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?w=600&q=80",
    alt: "Ойн шовгор майхан",
    aspect: "3/4",
    category: "shovgor",
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
    alt: "Ойн дотор гол горхи",
    aspect: "4/3",
    category: "baigali",
  },
  {
    src: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=80",
    alt: "Агаараас харсан байгалийн үзэмж",
    aspect: "4/5",
    category: "baigali",
  },
  {
    src: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=600&q=80",
    alt: "Шөнийн гал",
    aspect: "4/3",
    category: "baigali",
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
