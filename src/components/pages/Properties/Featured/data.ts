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

import img_1 from "../../../../assets/images/properties/new/img_1.jpeg";
import img_2 from "../../../../assets/images/properties/new/img_2.jpeg";
import img_3 from "../../../../assets/images/properties/new/img_3.jpeg";
import img_4 from "../../../../assets/images/properties/new/img_4.jpeg";
import img_5 from "../../../../assets/images/properties/new/img_5.jpeg";
import img_6 from "../../../../assets/images/properties/new/img_6.jpeg";
import img_7 from "../../../../assets/images/properties/new/img_7.jpeg";
import img_8 from "../../../../assets/images/properties/new/img_8.jpeg";
import img_9 from "../../../../assets/images/properties/new/img_9.jpeg";
import img_10 from "../../../../assets/images/properties/new/img_10.jpeg";

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
  {
    id:5,
    title: "Luxurious 6 Bedroom Fully Detached",
    location: "Lekki, Phase 1",
    price: "₦1,100,000,000",
    description: "A luxurious 6 bedroom fully detached house with a bq, located in a secured estate in Lekki Phase 1. The house features modern architecture, spacious rooms, pop ceiling, wardrobes, indoor and outdoor swimming pool, water heaters, fully fitted kitchen, balcony, cinema room, and more.",
    area: "—",
    features: ["Secured estate", "Interlocking street", "Modern structure", "Spacious Rooms", "Pop ceiling", "Wardrobes", "Indoor and outdoor swimming pool", "Water heaters", "All rooms ensuit", "Fully fitted kitchen", "Balcony", "2 Bq", "Cinema"],
    image: img_1,
    images: [img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8, img_9, img_10],
    backgroundColor: "bg-[#fff9ed]",
    }
];
