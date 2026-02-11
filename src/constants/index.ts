import { Category, HeroSlide, Product } from "@/types";

export const navLinks = [
  { route: "all-categories", name: "categories" },
  { route: "support", name: "help" },
];

export const lngs = [
  { route: "en", label: "English" },
  { route: "uz", label: "O'zbekcha" },
  { route: "ru", label: "Русский" },
];

export const categories: Category[] = [
  {
    id: 1,
    name: "Elektronika",
    slug: "elektronika",
    icon: "devices",
    subCategories: [
      { id: 1, name: "Smartfonlar va Gadjetlar", slug: "smartfonlar" },
      { id: 2, name: "Kompyuter texnikasi", slug: "kompyuter" },
      { id: 3, name: "Maishiy texnika", slug: "maishiy-texnika" },
      { id: 4, name: "Foto va video", slug: "foto-video" },
    ],
  },
  {
    id: 2,
    name: "Kiyim-kechak",
    slug: "kiyim-kechak",
    icon: "apparel",
    subCategories: [
      { id: 1, name: "Ayollar kiyimlari", slug: "ayollar-kiyimlari" },
      { id: 2, name: "Erkaklar kiyimlari", slug: "erkaklar-kiyimlari" },
      { id: 3, name: "Bolalar kiyimlari", slug: "bolalar-kiyimlari" },
      { id: 4, name: "Poyabzallar", slug: "poyabzallar" },
    ],
  },
  {
    id: 3,
    name: "Qurilish mollari",
    slug: "qurilish-mollari",
    icon: "construction",
    subCategories: [
      { id: 1, name: "Qurilish materiallari", slug: "qurilish-materiallari" },
      { id: 2, name: "Qurilish asboblari", slug: "qurilish-asboblari" },
      { id: 3, name: "Qurilish texnikasi", slug: "qurilish-texnikasi" },
      { id: 4, name: "Qurilish xizmatlari", slug: "qurilish-xizmatlari" },
    ],
  },
  {
    id: 4,
    name: "Ulgurji oziq-ovqat",
    slug: "ulgurji-oziq-ovqat",
    icon: "inventory_2",
    subCategories: [
      { id: 1, name: "Meva va sabzavotlar", slug: "meva-sabzavotlar" },
      { id: 2, name: "Go'sht va baliq", slug: "gosht-baliq" },
      { id: 3, name: "Sut mahsulotlari", slug: "sut-mahsulotlari" },
      { id: 4, name: "Non va qandolat", slug: "non-qandolat" },
    ],
  },
  {
    id: 5,
    name: "Avtomobil va transport",
    slug: "avtomobil-transport",
    icon: "directions_car",
    subCategories: [
      { id: 1, name: "Yengil avtomobillar", slug: "yengil-avtomobillar" },
      { id: 2, name: "Yuk avtomobillari", slug: "yuk-avtomobillari" },
      { id: 3, name: "Mototsikllar", slug: "mototsikllar" },
      { id: 4, name: "Transport xizmatlari", slug: "transport-xizmatlari" },
    ],
  },
  {
    id: 6,
    name: "Uy buyumlari",
    slug: "uy-buyumlari",
    icon: "home",
    subCategories: [
      { id: 1, name: "Mebel", slug: "mebel" },
      { id: 2, name: "Uy anjomlari", slug: "uy-anjomlari" },
      { id: 3, name: "Uy dekoratsiyasi", slug: "uy-dekoratsiyasi" },
      { id: 4, name: "Uy xizmatlari", slug: "uy-xizmatlari" },
    ],
  },
  {
    id: 7,
    name: "Bolalar uchun",
    slug: "bolalar-uchun",
    icon: "child_friendly",
    subCategories: [
      { id: 1, name: "O'yinchoqlar", slug: "oyinchoqlar" },
      { id: 2, name: "Bolalar kiyimlari", slug: "bolalar-kiyimlari" },
      { id: 3, name: "Bolalar poyabzallari", slug: "bolalar-poyabzallari" },
      { id: 4, name: "Bolalar mebellari", slug: "bolalar-mebellari" },
    ],
  },
  {
    id: 8,
    name: "Go'zallik va sog'liq",
    slug: "gozallik-sogliq",
    icon: "spa",
    subCategories: [
      { id: 1, name: "Go'zallik mahsulotlari", slug: "gozallik-mahsulotlari" },
      { id: 2, name: "Sog'liq uchun mahsulotlar", slug: "sogliq-mahsulotlari" },
      { id: 3, name: "Parfyumeriya", slug: "parfyumeriya" },
      { id: 4, name: "Fitness va sport", slug: "fitness-sport" },
    ],
  },
];

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    tag: "Minibaba Logistics",
    title: "O'zbekiston bo'ylab tez yetkazib berish",
    description: "Eng arzon ulgurji narxlar va ishonchli sotuvchilar bitta platformada.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBC0csNjMpcPeHAfQI9VCiyj9ouzIev_7XDIHcteTTknktLhmA_7RIBbrbSGKfszoXMVwcCyOOAwU7GwcMoP0RvdmxUqvlo6nN6pYoq3xIIWrsSUcz-JELpCTryi5UkY2FxeGznvbsiR3EDuuvdZrtreV1J7zYBrq0qMOgcWD0q9ehcbaHYJsfXucxVER2ZCAAE3bPZfbxd6ZpfYASLuAb-UFocwqnDPARrcseOWc_MXew4Z_hrfIbPRLVIzcCTjhQY5kyb5cYV_pw",
    href: "/about",
  },
  {
    id: 2,
    tag: "Yangi chegirmalar",
    title: "Ulgurji narxlar bilan sotib oling",
    description: "Katta buyurtmalar uchun maxsus narxlar va bonuslar.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
    href: "/deals",
  },
  {
    id: 3,
    tag: "Ishonchli hamkorlar",
    title: "Sotuvchilar reytingi va kafolat",
    description: "Reyting, sharhlar va tekshiruv bilan xavfsiz savdo.",
    image:
      "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=1600&q=80",
    href: "/sellers",
  },
];

export const topProducts: Product[] = [
  {
    id: "p1",
    title: "Professional Bluetooth Naushniklar MAX-450",
    price: 450000,
    minOrder: 10,
    discountPercent: 15,
    image:
      "https://images.unsplash.com/photo-1612858249937-1cc0852093dd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // headphones
    verified: true,
  },
  {
    id: "p2",
    title: "Smartfon uchun Original Zaryadlovchi 33W",
    price: 89000,
    minOrder: 20,
    discountPercent: 10,
    image:
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80", // charger
    verified: true,
  },
  {
    id: "p3",
    title: "USB Type-C Kabel (1.5m) Premium",
    price: 29000,
    minOrder: 50,
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80", // cable
    verified: false,
  },
  {
    id: "p4",
    title: "Erkaklar uchun Hoodie Premium Cotton",
    price: 249000,
    minOrder: 10,
    discountPercent: 12,
    image:
      "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=1072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // hoodie
    verified: true,
  },
  {
    id: "p5",
    title: "Ayollar sport krossovkasi (yengil)",
    price: 399000,
    minOrder: 8,
    discountPercent: 8,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80", // sneakers
    verified: false,
  },
  {
    id: "p6",
    title: "Kichik Blender 2-in-1 (Uy uchun)",
    price: 319000,
    minOrder: 6,
    image:
      "https://images.unsplash.com/photo-1585237672814-8f85a8118bf6?q=80&w=955&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // blender
    verified: true,
  },
  {
    id: "p7",
    title: "LED Stol Chirog‘i (3 rejim) USB",
    price: 129000,
    minOrder: 12,
    discountPercent: 20,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80", // desk lamp
    verified: true,
  },
  {
    id: "p8",
    title: "Office Sichqoncha Wireless (2.4G)",
    price: 79000,
    minOrder: 15,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // mouse
    verified: false,
  },
  {
    id: "p9",
    title: "Bolalar uchun Yumshoq O‘yinchoq (Bear)",
    price: 99000,
    minOrder: 10,
    discountPercent: 5,
    image:
      "https://images.unsplash.com/photo-1652501595862-1d06fe543544?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // teddy bear
    verified: true,
  },
  {
    id: "p10",
    title: "Kundalik Uy Anjomlari To‘plami (6 dona)",
    price: 189000,
    minOrder: 5,
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80", // home items
    verified: true,
  },
];
