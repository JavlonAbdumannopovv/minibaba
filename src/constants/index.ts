import { Category, Chat, FooterLink, HeroSlide, Product, ProductList, Seller } from "@/types";

export const navLinks = [
  { route: "all-categories", name: "categories" },
  { route: "support", name: "help" },
];

export const lngs = [
  { route: "en", label: "English" },
  { route: "uz", label: "O'zbekcha" },
  { route: "ru", label: "Русский" },
];

// export const categories: Category[] = [
//   {
//     id: 1,
//     name: "Elektronika",
//     slug: "elektronika",
//     icon: "devices",
//     subCategories: [
//       { id: 1, name: "Smartfonlar va Gadjetlar", slug: "smartfonlar" },
//       { id: 2, name: "Kompyuter texnikasi", slug: "kompyuter" },
//       { id: 3, name: "Maishiy texnika", slug: "maishiy-texnika" },
//       { id: 4, name: "Foto va video", slug: "foto-video" },
//     ],
//   },
//   {
//     id: 2,
//     name: "Kiyim-kechak",
//     slug: "kiyim-kechak",
//     icon: "apparel",
//     subCategories: [
//       { id: 1, name: "Ayollar kiyimlari", slug: "ayollar-kiyimlari" },
//       { id: 2, name: "Erkaklar kiyimlari", slug: "erkaklar-kiyimlari" },
//       { id: 3, name: "Bolalar kiyimlari", slug: "bolalar-kiyimlari" },
//       { id: 4, name: "Poyabzallar", slug: "poyabzallar" },
//     ],
//   },
//   {
//     id: 3,
//     name: "Qurilish mollari",
//     slug: "qurilish-mollari",
//     icon: "construction",
//     subCategories: [
//       { id: 1, name: "Qurilish materiallari", slug: "qurilish-materiallari" },
//       { id: 2, name: "Qurilish asboblari", slug: "qurilish-asboblari" },
//       { id: 3, name: "Qurilish texnikasi", slug: "qurilish-texnikasi" },
//       { id: 4, name: "Qurilish xizmatlari", slug: "qurilish-xizmatlari" },
//     ],
//   },
//   {
//     id: 4,
//     name: "Ulgurji oziq-ovqat",
//     slug: "ulgurji-oziq-ovqat",
//     icon: "inventory_2",
//     subCategories: [
//       { id: 1, name: "Meva va sabzavotlar", slug: "meva-sabzavotlar" },
//       { id: 2, name: "Go'sht va baliq", slug: "gosht-baliq" },
//       { id: 3, name: "Sut mahsulotlari", slug: "sut-mahsulotlari" },
//       { id: 4, name: "Non va qandolat", slug: "non-qandolat" },
//     ],
//   },
//   {
//     id: 5,
//     name: "Avtomobil va transport",
//     slug: "avtomobil-transport",
//     icon: "directions_car",
//     subCategories: [
//       { id: 1, name: "Yengil avtomobillar", slug: "yengil-avtomobillar" },
//       { id: 2, name: "Yuk avtomobillari", slug: "yuk-avtomobillari" },
//       { id: 3, name: "Mototsikllar", slug: "mototsikllar" },
//       { id: 4, name: "Transport xizmatlari", slug: "transport-xizmatlari" },
//     ],
//   },
//   {
//     id: 6,
//     name: "Uy buyumlari",
//     slug: "uy-buyumlari",
//     icon: "home",
//     subCategories: [
//       { id: 1, name: "Mebel", slug: "mebel" },
//       { id: 2, name: "Uy anjomlari", slug: "uy-anjomlari" },
//       { id: 3, name: "Uy dekoratsiyasi", slug: "uy-dekoratsiyasi" },
//       { id: 4, name: "Uy xizmatlari", slug: "uy-xizmatlari" },
//     ],
//   },
//   {
//     id: 7,
//     name: "Bolalar uchun",
//     slug: "bolalar-uchun",
//     icon: "child_friendly",
//     subCategories: [
//       { id: 1, name: "O'yinchoqlar", slug: "oyinchoqlar" },
//       { id: 2, name: "Bolalar kiyimlari", slug: "bolalar-kiyimlari" },
//       { id: 3, name: "Bolalar poyabzallari", slug: "bolalar-poyabzallari" },
//       { id: 4, name: "Bolalar mebellari", slug: "bolalar-mebellari" },
//     ],
//   },
//   {
//     id: 8,
//     name: "Go'zallik va sog'liq",
//     slug: "gozallik-sogliq",
//     icon: "spa",
//     subCategories: [
//       { id: 1, name: "Go'zallik mahsulotlari", slug: "gozallik-mahsulotlari" },
//       { id: 2, name: "Sog'liq uchun mahsulotlar", slug: "sogliq-mahsulotlari" },
//       { id: 3, name: "Parfyumeriya", slug: "parfyumeriya" },
//       { id: 4, name: "Fitness va sport", slug: "fitness-sport" },
//     ],
//   },
// ];

export const categories: Category[] = [
  {
    id: 1,
    name: "Elektronika",
    slug: "elektronika",
    icon: "devices",
    subCategories: [
      { id: 1, name: "Smartfonlar va Gadjetlar", slug: "smartfonlar", image: "https://images.unsplash.com/photo-1702390740712-ce6daf1673be?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { id: 2, name: "Kompyuter texnikasi", slug: "kompyuter", image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=800&auto=format&fit=crop" },
      { id: 3, name: "Maishiy texnika", slug: "maishiy-texnika", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop" },
      { id: 4, name: "Foto va video", slug: "foto-video", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop" },
    ],
  },
  {
    id: 2,
    name: "Kiyim-kechak",
    slug: "kiyim-kechak",
    icon: "apparel",
    subCategories: [
      { id: 1, name: "Ayollar kiyimlari", slug: "ayollar-kiyimlari", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop" },
      { id: 2, name: "Erkaklar kiyimlari", slug: "erkaklar-kiyimlari", image: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?q=80&w=800&auto=format&fit=crop" },
      { id: 3, name: "Bolalar kiyimlari", slug: "bolalar-kiyimlari", image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop" },
      { id: 4, name: "Poyabzallar", slug: "poyabzallar", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop" },
    ],
  },
  {
    id: 3,
    name: "Qurilish mollari",
    slug: "qurilish-mollari",
    icon: "construction",
    subCategories: [
      { id: 1, name: "Qurilish materiallari", slug: "qurilish-materiallari", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=800&auto=format&fit=crop" },
      { id: 2, name: "Qurilish asboblari", slug: "qurilish-asboblari", image: "https://images.unsplash.com/photo-1530124566582-a618bc2615ad?q=80&w=800&auto=format&fit=crop" },
      { id: 3, name: "Qurilish texnikasi", slug: "qurilish-texnikasi", image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=800&auto=format&fit=crop" },
      { id: 4, name: "Qurilish xizmatlari", slug: "qurilish-xizmatlari", image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=800&auto=format&fit=crop" },
    ],
  },
  {
    id: 4,
    name: "Ulgurji oziq-ovqat",
    slug: "ulgurji-oziq-ovqat",
    icon: "inventory_2",
    subCategories: [
      { id: 1, name: "Meva va sabzavotlar", slug: "meva-sabzavotlar", image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=800&auto=format&fit=crop" },
      { id: 2, name: "Go'sht va baliq", slug: "gosht-baliq", image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop" },
      { id: 3, name: "Sut mahsulotlari", slug: "sut-mahsulotlari", image: "https://images.unsplash.com/photo-1528750951167-a3e2483f4971?q=80&w=800&auto=format&fit=crop" },
      { id: 4, name: "Non va qandolat", slug: "non-qandolat", image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop" },
    ],
  },
  {
    id: 5,
    name: "Avtomobil va transport",
    slug: "avtomobil-transport",
    icon: "directions_car",
    subCategories: [
      { id: 1, name: "Yengil avtomobillar", slug: "yengil-avtomobillar", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop" },
      { id: 2, name: "Yuk avtomobillari", slug: "yuk-avtomobillari", image: "https://images.unsplash.com/photo-1586191121278-2207506d0493?q=80&w=800&auto=format&fit=crop" },
      { id: 3, name: "Mototsikllar", slug: "mototsikllar", image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=800&auto=format&fit=crop" },
      { id: 4, name: "Transport xizmatlari", slug: "transport-xizmatlari", image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=800&auto=format&fit=crop" },
    ],
  },
  {
    id: 6,
    name: "Uy buyumlari",
    slug: "uy-buyumlari",
    icon: "home",
    subCategories: [
      { id: 1, name: "Mebel", slug: "mebel", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop" },
      { id: 2, name: "Uy anjomlari", slug: "uy-anjomlari", image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop" },
      { id: 3, name: "Uy dekoratsiyasi", slug: "uy-dekoratsiyasi", image: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5db?q=80&w=800&auto=format&fit=crop" },
      { id: 4, name: "Uy xizmatlari", slug: "uy-xizmatlari", image: "https://images.unsplash.com/photo-1581578731522-65239f1396b2?q=80&w=800&auto=format&fit=crop" },
    ],
  },
  {
    id: 7,
    name: "Bolalar uchun",
    slug: "bolalar-uchun",
    icon: "child_friendly",
    subCategories: [
      { id: 1, name: "O'yinchoqlar", slug: "oyinchoqlar", image: "https://images.unsplash.com/photo-1533560904424-a0c61dc306fc?q=80&w=800&auto=format&fit=crop" },
      { id: 2, name: "Bolalar kiyimlari", slug: "bolalar-kiyimlari-v2", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800&auto=format&fit=crop" },
      { id: 3, name: "Bolalar poyabzallari", slug: "bolalar-poyabzallari", image: "https://images.unsplash.com/photo-1533512930330-4ac257c86793?q=80&w=800&auto=format&fit=crop" },
      { id: 4, name: "Bolalar mebellari", slug: "bolalar-mebellari", image: "https://images.unsplash.com/photo-1519340333755-50721343aa2a?q=80&w=800&auto=format&fit=crop" },
    ],
  },
  {
    id: 8,
    name: "Go'zallik va sog'liq",
    slug: "gozallik-sogliq",
    icon: "spa",
    subCategories: [
      { id: 1, name: "Go'zallik mahsulotlari", slug: "gozallik-mahsulotlari", image: "https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?q=80&w=800&auto=format&fit=crop" },
      { id: 2, name: "Sog'liq uchun mahsulotlar", slug: "sogliq-mahsulotlari", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop" },
      { id: 3, name: "Parfyumeriya", slug: "parfyumeriya", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop" },
      { id: 4, name: "Fitness va sport", slug: "fitness-sport", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop" },
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

export const verifiedSellers: Seller[] = [
  {
    id: "s1",
    name: "UzTech Electronics",
    experienceYears: 6,
    city: "Toshkent",
    reliabilityPercent: 98,
    responseSeconds: 24,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB0fA_oB6_gGylgl0kP9qDN8Jc2YFg1q3vlKamZUY2q7U5owzOH9L_wkNMD5h2lPnVwxFuFb_s2ZxK5qURDYxUisyzD5tP-eCT13rrec9J81hBXWRnHsB-hnqbQrZQ09h_geqxL4UEdBz99yFoJPOzpl9EM7jEUQJ_yu_ABZWSk9w40gSQ9uAQ_AwSS8B8AkXeurfhNpZzrb7KBS6yK9KusUyTeRc_zdPx8mKY6pDmlFkw90PdmNdCoLKnJIRKrvD_5c2zUIdvPu1w",
    href: "/sellers/uztech-electronics",
  },
  {
    id: "s2",
    name: "Global Textile Group",
    experienceYears: 10,
    city: "Namangan",
    reliabilityPercent: 100,
    responseSeconds: 1,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC0CqZbeOwfpv4lBlqiqNNgtsXmgNAXm-shbFRxppQ3UCdQkcgpksC1SdGSP450Tk6xhF1Iz1Ka4cPj3MO2B9wJTXJL9x4721DC-pwpmAvIBhWVPdXs4mkIzqvaG3y_OUjcXRgETSiPRM7bwP22QAa5a4KkruWp8CeLi_ANGPySB02DndP88eql9B2BU59oVVtgYe3PtGOBl0GuNv9mKzHw6k-5DY3cLU9Lav7ijEPsxySSpgwbxitOLRKfiv6U5gljjfR4dbi_09s",
    href: "/sellers/global-textile-group",
  },
  {
    id: "s3",
    name: "Stroy-Market UZ",
    experienceYears: 4,
    city: "Farg'ona",
    reliabilityPercent: 95,
    responseSeconds: 2,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCvVF0yNFguBWlf1Cw3uZAx0dgVxb3qRYGHoqyLepeg4JV4BB3I-Oy3_rEcscvF5ICAla9Lzlc25YkgjO3sGP4uvfTPdPRTTQYeQSqp4xwAYsbQjFX7bhbNgDwE9URyYb9iF1Kn-ObEhMTHydqvgBu3ew7K6-tECvVY2kphFwr3-B4mNGW7TES8Z8SckqNg9IrYwdeC8LZS03W18o7sf6SThqjp2cKBdP9M3you2lXcF8W897OBM6N_CXQu3VTtD2FMRpQzcS2vk7Q",
    href: "/sellers/stroy-market-uz",
  },
  {
    id: "s4",
    name: "Smart Solutions",
    experienceYears: 2,
    city: "Buxoro",
    reliabilityPercent: 92,
    responseSeconds: 4,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD0I_oLUmCknSd8lblTLWvYLWuAwME6YUp6WgMTcq6QIOsbjKkGXjSncOjvA2Rxd9-Lm-ZpOdhRUY01KwlfhQ93LpkExR9h7DbUpqkwvWx3kxAxkOW0-U6XXvT8tctTzzA4X03WFURIG8MBWX7vv2CmucHTxbaTpQhD-CZMjFDLJm1Byb3A8YartfYk6f917jyNZcdIQlxK5DDiRKEfM-Gh3VI9VHc2QTpGZOhmPdeU1RFcMe88UciTuxsxcp93ByXRgRRa5mA-0aY",
    href: "/sellers/smart-solutions",
  },
  // qo‘shimcha (carousel uchun)
  {
    id: "s5",
    name: "Fergana Agro Trade",
    experienceYears: 7,
    city: "Farg'ona",
    reliabilityPercent: 97,
    responseSeconds: 6,
    image:
      "https://plus.unsplash.com/premium_photo-1661962692059-55d5a4319814?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/sellers/fergana-agro-trade",
  },
  {
    id: "s6",
    name: "Samarkand Home Goods",
    experienceYears: 5,
    city: "Samarqand",
    reliabilityPercent: 94,
    responseSeconds: 12,
    image:
      "https://images.unsplash.com/photo-1733586092622-1b3201e802a5?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/sellers/samarkand-home-goods",
  },
];





export const initialChats: Chat[] = [
  {
    id: "chat_1",
    sellerId: "s1", // verifiedSellers ichidagi seller ID-si bilan bir xil bo'lishi kerak
    lastMessage: "Sizga yangi xabar keldi...",
    time: "10:45 PM",
    messages: [
      { id: "m1", text: "Assalomu alaykum", sender: 'me', timestamp: "10:40 PM" }
    ]
  },
  {
    id: "chat_2",
    sellerId: "s2",
    lastMessage: "Buyurtmangiz yo'lga chiqdi.",
    time: "09:20 AM",
    messages: []
  }
];

export const buyerLinks: FooterLink[] = [
  { label: "Qanday buyurtma berish", href: "/help/how-to-order" },
  { label: "To'lov usullari", href: "/help/payment" },
  { label: "Yetkazib berish", href: "/help/delivery" },
  { label: "Kafolat va qaytarish", href: "/help/returns" },
];

export const sellerLinks: FooterLink[] = [
  { label: "Sotuvchi bo'lish", href: "/seller/apply" },
  { label: "Sotuvchilar qoidalari", href: "/seller/rules" },
  { label: "Reklama va marketing", href: "/seller/ads" },
  { label: "Logistika yordami", href: "/seller/logistics" },
];

export const socialLinks: FooterLink[] = [
  { label: "Website", href: "#" },
  { label: "Email", href: "#" },
  { label: "Phone", href: "#" },
];

export const productsList: ProductList[] = [
  {
    id: "pc-1",
    title: "Office PC i3 10-gen",
    preview:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 4500000,
    moq: 5,
    rating: 4.2,
    region: "Toshkent",
  },
  {
    id: "pc-2",
    title: "Gaming PC Ryzen 5 + RTX 3060",
    preview:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 12500000,
    moq: 1,
    rating: 4.8,
    region: "Samarqand",
  },
  {
    id: "pc-3",
    title: "Office PC i5 11-gen",
    preview:
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 6200000,
    moq: 3,
    rating: 4.5,
    region: "Farg'ona",
  },
  {
    id: "pc-4",
    title: "Gaming PC Ryzen 7 + RTX 3070",
    preview:
      "https://images.unsplash.com/photo-1675495277087-10598bf7bcd1?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 16800000,
    moq: 1,
    rating: 4.9,
    region: "Toshkent",
  },
  {
    id: "pc-5",
    title: "Budget PC Pentium Gold",
    preview:
      "https://images.unsplash.com/photo-1617240016072-d92174e44171?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 3200000,
    moq: 10,
    rating: 3.9,
    region: "Andijon",
  },
  {
    id: "pc-6",
    title: "Office PC Ryzen 3",
    preview:
      "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 4800000,
    moq: 4,
    rating: 4.1,
    region: "Namangan",
  },
  {
    id: "pc-7",
    title: "Gaming PC i5 + RTX 3050",
    preview:
      "https://images.unsplash.com/photo-1510519138101-570d1dca3d66?q=80&w=1147&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 9800000,
    moq: 2,
    rating: 4.4,
    region: "Buxoro",
  },
  {
    id: "pc-8",
    title: "Workstation PC Ryzen 9",
    preview:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1120&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 21000000,
    moq: 1,
    rating: 4.7,
    region: "Toshkent",
  },
  {
    id: "pc-9",
    title: "Mini PC i3",
    preview:
      "https://images.unsplash.com/photo-1662638600476-d563fffbb072?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 3900000,
    moq: 6,
    rating: 4.0,
    region: "Qo'qon",
  },
  {
    id: "pc-10",
    title: "All-in-One PC i5",
    preview:
      "https://images.unsplash.com/photo-1505238680356-667803448bb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 7500000,
    moq: 2,
    rating: 4.3,
    region: "Samarqand",
  },
  {
    id: "pc-11",
    title: "Office PC i3 10-gen",
    preview:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 4500000,
    moq: 5,
    rating: 4.2,
    region: "Toshkent",
  },
  {
    id: "pc-12",
    title: "Gaming PC Ryzen 5 + RTX 3060",
    preview:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 12500000,
    moq: 1,
    rating: 4.8,
    region: "Samarqand",
  },
  {
    id: "pc-13",
    title: "Office PC i5 11-gen",
    preview:
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 6200000,
    moq: 3,
    rating: 4.5,
    region: "Farg'ona",
  },
  {
    id: "pc-14",
    title: "Gaming PC Ryzen 7 + RTX 3070",
    preview:
      "https://images.unsplash.com/photo-1675495277087-10598bf7bcd1?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 16800000,
    moq: 1,
    rating: 4.9,
    region: "Toshkent",
  },
  {
    id: "pc-15",
    title: "Budget PC Pentium Gold",
    preview:
      "https://images.unsplash.com/photo-1617240016072-d92174e44171?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 3200000,
    moq: 10,
    rating: 3.9,
    region: "Andijon",
  },
  {
    id: "pc-16",
    title: "Office PC Ryzen 3",
    preview:
      "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 4800000,
    moq: 4,
    rating: 4.1,
    region: "Namangan",
  },
  {
    id: "pc-17",
    title: "Gaming PC i5 + RTX 3050",
    preview:
      "https://images.unsplash.com/photo-1510519138101-570d1dca3d66?q=80&w=1147&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 9800000,
    moq: 2,
    rating: 4.4,
    region: "Buxoro",
  },
  {
    id: "pc-18",
    title: "Workstation PC Ryzen 9",
    preview:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1120&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 21000000,
    moq: 1,
    rating: 4.7,
    region: "Toshkent",
  },
  {
    id: "pc-19",
    title: "Mini PC i3",
    preview:
      "https://images.unsplash.com/photo-1662638600476-d563fffbb072?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 3900000,
    moq: 6,
    rating: 4.0,
    region: "Qo'qon",
  },
  {
    id: "pc-20",
    title: "All-in-One PC i5",
    preview:
      "https://images.unsplash.com/photo-1505238680356-667803448bb6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 7500000,
    moq: 2,
    rating: 4.3,
    region: "Samarqand",
  },
];

export const product = {
  id: "48293021-X200",
  isNew: true,

  title: "Mackbook Air 13.3” M2 Chip (2022)",

  images: [
    "https://plus.unsplash.com/premium_photo-1681302427934-0a3002e398c8?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1718279597963-90e70e1eba23?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1718279602896-6df6c34f61e5?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1718279599787-7ae48695bfd1?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],

  rating: 4.8,
  reviewsCount: 124,
  soldCountText: "500+ sotilgan",

  pricing: {
    moq: 2,
    moqText: "MOQ: 2 dona",
    tiers: [
      {
        label: "1 - 10 dona",
        price: "$1,200.00",
      },
      {
        label: "11 - 50 dona",
        price: "$1,050.00",
        highlight: true,
        highlightLabel: "Ommabop",
      },
      {
        label: "50+ dona",
        price: "$890.00",
      },
    ],
  },

  variants: {
    title: "Konfiguratsiyani tanlang (Variant 5 / 10)",
    default: "v1",
    options: [
      {
        id: "v1",
        label: "8gb/256gb Silver",
        images: [
          "https://images.unsplash.com/photo-1718279597963-90e70e1eba23?q=80&w=735&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1718279602896-6df6c34f61e5?q=80&w=735&auto=format&fit=crop",
        ],
      },
      {
        id: "v2",
        label: "16gb/512gb Space Gray",
        images: [
          "https://images.unsplash.com/photo-1718279599787-7ae48695bfd1?q=80&w=735&auto=format&fit=crop",
          "https://plus.unsplash.com/premium_photo-1681302427934-0a3002e398c8?q=80&w=735&auto=format&fit=crop",
        ],
      },
      {
        id: "v3",
        label: "32gb/1tb Gold",
        images: [
          "https://plus.unsplash.com/premium_photo-1681302427934-0a3002e398c8?q=80&w=735&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1718279602896-6df6c34f61e5?q=80&w=735&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1718279597963-90e70e1eba23?q=80&w=735&auto=format&fit=crop",
        ],
      },
    ],
  },

  supplier: {
    name: "TechnoMach Tashkent MCHJ",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuC33vllUaItiq9ASIGfm6hjhV5cFlCxHdGlQtNeET7vzIc0esNLw2wUS2ewz9OlkEc8-GzN2AuVniKOr7S8Xc_5dqv16mSoxp1ahlj06V6Bo7GVx06Nr8IKB1qLHXL0OIeHQI4vX1dFFv7oMr9jNHilA9hLVy2RgwFQT0J-NEwo50wpFGxBN38zPCV31g7GiHO1muTac1-F4cFl5gqI8yA1PEuQ0mdGtJxEZ44Kt6zqgEidAOqH9uRpbVOVZ8CY4rZYFLWHZ2l3lTg",
    verified: true,
    locationText: "Tashkent, UZ",
    experienceText: "8 yillik tajriba",
    shopHref: "/shop/technomach",
  },

  description: {
    title: "Mahsulot haqida ma'lumot",
    text: "Model X200 sanoat konveyer tizimi yuqori yuklamalar ostida ishlashga mo'ljallangan. Uning modulli tuzilishi istalgan ishlab chiqarish liniyasiga oson integratsiya qilish imkonini beradi. Kuchaytirilgan po'lat karkas va energiya tejamkor motorlar uzoq muddatli xizmatni ta'minlaydi.",
    specs: [
      { label: "Quvvati", value: "5.5 kW / 7.5 HP" },
      { label: "Tezligi", value: "0.5 - 2.0 m/s (sozlanuvchi)" },
      { label: "Yuk ko'tarishi", value: "500 kg / pog'onali metr" },
      { label: "Kafolat", value: "24 oy zavod kafolati" },
    ],
  },

  logistics: {
    blocks: [
      {
        title: "Tezkor yetkazib berish",
        text: "Toshkent bo'ylab 24 soat ichida. Viloyatlarga 3 ish kunigacha.",
      },
      {
        title: "Maxsus qadoqlash",
        text: "Eksport sifatidagi yog'och qutilar bilan himoyalangan.",
      },
    ],
    qualityNote: "Har bir uskuna jo'natilishdan oldin 12 soatlik test sinovidan o'tkaziladi.",
  },

  purchaseBar: {
    totalLabel: "Umumiy miqdor:",
    totalPrice: "$1,200.00",
    moq: 2,
  },
};
