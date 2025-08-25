export interface PropertyData {
  id: number;
  title: string;
  location: string;
  price: string;
  description: string;
  bedrooms?: string;
  bathrooms?: string;
  complex?: string;
  area: string;
  image: string;          // keep single cover image for cards
  images?: string[];      // ✅ new: gallery images
  backgroundColor: string;
  availability?: string;  // ✅ reserved for backend (hide for now)
}
