"use client";

import ListingCard from '@/components/listing-card';
import { type Listing } from '@/types';
import { Bookmark } from 'lucide-react';

// Mock data for bookmarked items. In a real app, this would come from user data.
const bookmarkedListings: Listing[] = [
  {
    id: '1',
    title: 'Cozy 1BHK in Downtown',
    description: 'A cozy and modern 1BHK flat located in the heart of the city, perfect for students and young professionals.',
    type: 'Flat',
    location: 'Koramangala, Bangalore',
    rent: 25000,
    amenities: ['Wifi', 'AC', 'Kitchen', 'Parking'],
    imageUrls: ['https://placehold.co/600x400.png', 'https://placehold.co/600x400.png', 'https://placehold.co/600x400.png'],
    dataAiHints: ['modern apartment living', 'apartment kitchen', 'apartment bedroom'],
    verified: true,
  },
  {
    id: '3',
    title: 'Modern Studio Apartment',
    description: 'A stylish studio apartment with a beautiful city view. Fully furnished and ready to move in.',
    type: 'Flat',
    location: 'Bandra, Mumbai',
    rent: 35000,
    amenities: ['Wifi', 'AC', 'Gym', 'Swimming Pool'],
    imageUrls: ['https://placehold.co/600x400.png', 'https://placehold.co/600x400.png', 'https://placehold.co/600x400.png'],
    dataAiHints: ['studio apartment', 'city view', 'rooftop pool'],
    verified: true,
  },
];

export default function BookmarksPage() {
  return (
    <div>
      <h1 className="font-headline text-3xl md:text-4xl font-bold mb-8">My Bookmarks</h1>
      {bookmarkedListings.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookmarkedListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-card rounded-lg flex flex-col items-center">
            <Bookmark className="h-16 w-16 text-muted-foreground mb-4" />
          <h2 className="text-2xl font-semibold mb-2">No Bookmarks Yet</h2>
          <p className="text-muted-foreground">
            You haven't bookmarked any properties. Start exploring to find your perfect stay!
          </p>
        </div>
      )}
    </div>
  );
}
