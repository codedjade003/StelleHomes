import img_1 from "../../../../assets/images/properties/img_1.png";
import img_2 from "../../../../assets/images/properties/img_2.png";
import img_3 from "../../../../assets/images/properties/img_3.png";
import img_4 from "../../../../assets/images/properties/img_4.png";
import img_5 from "../../../../assets/images/properties/img_5.png";
import img_6 from "../../../../assets/images/properties/img_6.png";

import type { PropertyData } from "./types";

export const properties: PropertyData[] = [
  {
    id: 1,
    title: "Luxury Villa in Lekki",
    location: "Lekki Phase 1, Lagos",
    price: "₦1,200,000,000",
    description:
      "Elegant 3-bedroom villa in the prestigious Lekki Phase 1 area, featuring a private pool, garden, and state-of-the-art security system.",
    bedrooms: "3 Bedrooms",
    bathrooms: "3 Bathrooms",
    area: "1200 sqm",
    image: img_1,
    images: [img_1], // ✅ will be duplicated in modal
    backgroundColor: "bg-[#fff9ed]",
  },
  {
    id: 2,
    title: "Modern Apartments in Ikoyi",
    location: "Ikoyi, Lagos",
    price: "₦300,000,000",
    description:
      "Contemporary 3-bedroom apartment in a luxury high-rise building in Ikoyi.",
    bedrooms: "3 Bedrooms",
    bathrooms: "3.5 Bathrooms",
    area: "320 sqm",
    image: img_2,
    images: [img_2],
    backgroundColor: "bg-white",
  },
  {
    id: 3,
    title: "Luxury Water View Apartments",
    location: "Victoria Island, Lagos",
    price: "₦450,000,000",
    description:
      "Stunning waterview apartments in Lekki Phase1 with direct water view.",
    bedrooms: "3 Bedrooms",
    bathrooms: "3 Bathrooms",
    area: "1200 sqm",
    image: img_3,
    images: [img_3],
    backgroundColor: "bg-[#fff9ed]",
  },
  {
    id: 4,
    title: "Luxury Apartments",
    location: "Banana Island, Lagos",
    price: "₦350,000,000",
    description:
      "Elegant 4-bedroom apartments in the prestigious Banana Island of Lagos.",
    bedrooms: "3 Bedrooms",
    bathrooms: "3.5 Bathrooms",
    area: "2100 sqm",
    image: img_4,
    images: [img_4],
    backgroundColor: "bg-white",
  },
  {
    id: 5,
    title: "Waterfront Estate with Luxury Terraced Homes",
    location: "Lekki, Lagos",
    price: "₦650,000,000",
    description:
      "Exclusive waterfront estate in Lekki Phase 1, Lagos's most prestigious address.",
    bedrooms: "3 Bedrooms",
    bathrooms: "3 Bathrooms",
    area: "800 sqm",
    image: img_5,
    images: [img_5],
    backgroundColor: "bg-[#fff9ed]",
  },
  {
    id: 6,
    title: "City Centre Mall",
    location: "Lagos Mainland",
    price: "₦350,000,000",
    description:
      "Premium units in the stunning heart of Lekki Phase 1. Ideal for corporate headquarters or retail space.",
    complex: "Several Shopping Areas",
    area: "2500 sqm",
    image: img_6,
    images: [img_6],
    backgroundColor: "bg-white",
  },
];
