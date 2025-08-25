export interface PropertyData {
  id: number;
  title: string;
  location: string;
  price: string;
  description: string;
  bedrooms?: string;       // "2", "3", "4", or "Multiple"
  bathrooms?: string;      // same deal
  complex?: string;        // optional
  area?: string;            // could be "—" if undefined
  features?: string[];
  image: string;           // cover image
  images?: string[];       // gallery images
  backgroundColor: string;
  availability?: string;   // reserved, hide for now
}
