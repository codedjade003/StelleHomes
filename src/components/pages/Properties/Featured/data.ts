import img_1 from "../../../../assets/images/properties/img_1.png";
import img_2 from "../../../../assets/images/properties/img_2.png";
import img_3 from "../../../../assets/images/properties/img_3.png";
import img_4 from "../../../../assets/images/properties/img_4.png";
import img_5 from "../../../../assets/images/properties/img_5.png";
import img_6 from "../../../../assets/images/properties/img_6.png";

// ✅ New imports
import lekkiApt_1 from "../../../../assets/images/properties/lekkiApt/lekkiApt_1.jpg";
import lekkiApt_2 from "../../../../assets/images/properties/lekkiApt/lekkiApt_2.jpg";
import lekkiApt_3 from "../../../../assets/images/properties/lekkiApt/lekkiApt_3.jpg";
import lekkiApt_4 from "../../../../assets/images/properties/lekkiApt/lekkiApt_4.jpg";
import lekkiApt_5 from "../../../../assets/images/properties/lekkiApt/lekkiApt_5.jpg";

import ikoyi_1 from "../../../../assets/images/properties/ikoyi/ikoyi_1.jpg";
import ikoyi_2 from "../../../../assets/images/properties/ikoyi/ikoyi_2.jpg";
import ikoyi_3 from "../../../../assets/images/properties/ikoyi/ikoyi_3.jpg";
import ikoyi_4 from "../../../../assets/images/properties/ikoyi/ikoyi_4.jpg";

import lekkiHighRise_1 from "../../../../assets/images/properties/lekkiHighRise/lekkiHighRise_1.jpg";
import lekkiHighRise_2 from "../../../../assets/images/properties/lekkiHighRise/lekkiHighRise_2.jpg";
import lekkiHighRise_3 from "../../../../assets/images/properties/lekkiHighRise/lekkiHighRise_3.jpg";
import lekkiHighRise_4 from "../../../../assets/images/properties/lekkiHighRise/lekkiHighRise_4.jpg";

import lekkiMall_1 from "../../../../assets/images/properties/lekkiMall/lekkiMall_1.jpg";
import lekkiMall_2 from "../../../../assets/images/properties/lekkiMall/lekkiMall_2.jpg";
import lekkiMall_3 from "../../../../assets/images/properties/lekkiMall/lekkiMall_3.jpg";
import lekkiMall_4 from "../../../../assets/images/properties/lekkiMall/lekkiMall_4.jpg";
import lekkiMall_5 from "../../../../assets/images/properties/lekkiMall/lekkiMall_5.jpg";
import lekkiMall_6 from "../../../../assets/images/properties/lekkiMall/lekkiMall_6.jpg";

import type { PropertyData } from "./types";

export const properties: PropertyData[] = [
  {
    id: 1,
    title: "Lekki Apartments",
    location: "Lekki Phase 1, Lagos",
    price: "From ₦350,000,000",
    description:
      "Stylish 2, 3, and 4-bedroom apartments in Lekki Phase 1 with premium finishes, pool access, greenery, and top-notch security.",
    bedrooms: "2–4 Bedrooms",
    bathrooms: "Multiple",
    area: "—",
    features: ["Fitted kitchen", "Swimming pool", "Greenery", "24/7 CCTV"],
    image: lekkiApt_1,
    images: [lekkiApt_1, lekkiApt_2, lekkiApt_3, lekkiApt_4, lekkiApt_5],
    backgroundColor: "bg-[#fff9ed]",
  },
  {
    id: 2,
    title: "Ikoyi Luxury Apartments",
    location: "Osborne, Ikoyi, Lagos",
    price: "₦350,000,000",
    description:
      "Exclusive 3-bedroom apartments in Osborne, Ikoyi. Modern designs with serene views and maximum privacy.",
    bedrooms: "3 Bedrooms",
    bathrooms: "3 Bathrooms",
    area: "—",
    features: ["Fitted kitchen", "24/7 security"],
    image: ikoyi_1,
    images: [ikoyi_1, ikoyi_2, ikoyi_3, ikoyi_4],
    backgroundColor: "bg-white",
  },
  {
    id: 3,
    title: "Lekki High Rise",
    location: "Lekki Phase 1, Lagos",
    price: "Enquire",
    description:
      "32 luxury flats and 4 penthouses, each with water views from the third floor upwards. Premium facilities for modern living.",
    bedrooms: "Multiple",
    bathrooms: "Multiple",
    area: "—",
    features: ["Fitted kitchens", "Swimming pool", "24/7 security", "Water view"],
    image: lekkiHighRise_1,
    images: [lekkiHighRise_1, lekkiHighRise_2, lekkiHighRise_3, lekkiHighRise_4],
    backgroundColor: "bg-[#fff9ed]",
  },
  {
    id: 4,
    title: "Lekki Mall",
    location: "Fola Osibo, Lekki Phase 1, Lagos",
    price: "Call to enquire",
    description:
      "Upcoming commercial project in the busiest street of Lekki. Units available for sale and rent in a high-traffic location.",
    area: "—",
    features: ["Prime location", "Units for sale & rent", "High foot traffic"],
    image: lekkiMall_1,
    images: [
      lekkiMall_1,
      lekkiMall_2,
      lekkiMall_3,
      lekkiMall_4,
      lekkiMall_5,
      lekkiMall_6,
    ],
    backgroundColor: "bg-white",
  },

  // ✅ Old properties (kept for tray, now hidden in display)
  {
    id: 5,
    title: "Luxury Villa in Lekki",
    location: "Lekki Phase 1, Lagos",
    price: "₦1,200,000,000",
    description:
      "Elegant 3-bedroom villa with private pool, landscaped garden, and state-of-the-art security system.",
    bedrooms: "3 Bedrooms",
    bathrooms: "3 Bathrooms",
    area: "1200 sqm",
    features: ["Private pool", "Garden", "24/7 security"],
    image: img_1,
    images: [img_1, img_2, img_3, img_4],
    backgroundColor: "bg-[#fff9ed]",
  },
  {
    id: 6,
    title: "Modern Apartments in Ikoyi",
    location: "Ikoyi, Lagos",
    price: "₦300,000,000",
    description:
      "Contemporary high-rise apartments with spacious layouts and modern interiors in Ikoyi.",
    bedrooms: "3 Bedrooms",
    bathrooms: "3.5 Bathrooms",
    area: "320 sqm",
    features: ["Modern design", "High-rise living", "24/7 security"],
    image: img_2,
    images: [img_2, img_2, img_2, img_2],
    backgroundColor: "bg-white",
  },
  {
    id: 7,
    title: "Luxury Water View Apartments",
    location: "Victoria Island, Lagos",
    price: "₦450,000,000",
    description:
      "Apartments with direct water views, combining scenic beauty with urban luxury.",
    bedrooms: "3 Bedrooms",
    bathrooms: "3 Bathrooms",
    area: "1200 sqm",
    features: ["Waterfront view", "Modern interiors", "24/7 security"],
    image: img_3,
    images: [img_3, img_3, img_3, img_3],
    backgroundColor: "bg-[#fff9ed]",
  },
  {
    id: 8,
    title: "Luxury Apartments",
    location: "Banana Island, Lagos",
    price: "₦350,000,000",
    description:
      "Exclusive 4-bedroom apartments in the prestigious Banana Island enclave.",
    bedrooms: "4 Bedrooms",
    bathrooms: "3.5 Bathrooms",
    area: "2100 sqm",
    features: ["Banana Island address", "Spacious interiors", "24/7 security"],
    image: img_4,
    images: [img_4, img_4, img_4, img_4],
    backgroundColor: "bg-white",
  },
  {
    id: 9,
    title: "Waterfront Estate with Luxury Terraced Homes",
    location: "Lekki, Lagos",
    price: "₦650,000,000",
    description:
      "Exclusive estate with waterfront access and luxury terraced homes.",
    bedrooms: "3 Bedrooms",
    bathrooms: "3 Bathrooms",
    area: "800 sqm",
    features: ["Waterfront", "Luxury terraces", "Secure estate"],
    image: img_5,
    images: [img_5, img_5, img_5, img_5],
    backgroundColor: "bg-[#fff9ed]",
  },
  {
    id: 10,
    title: "City Centre Mall",
    location: "Lagos Mainland",
    price: "₦350,000,000",
    description:
      "Premium mall units in Lekki Phase 1, ideal for corporate HQs or retail space.",
    complex: "Several Shopping Areas",
    area: "2500 sqm",
    features: ["Retail spaces", "Corporate HQ potential", "High visibility"],
    image: img_6,
    images: [img_6, img_6, img_6, img_6],
    backgroundColor: "bg-white",
  },
];
