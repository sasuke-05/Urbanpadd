export interface Listing {
  id: string;
  title: string;
  description: string;
  type: 'PG' | 'Flat';
  location: string;
  rent: number;
  amenities: string[];
  imageUrls: string[];
  dataAiHints: string[];
  verified: boolean;
}
