
"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { type Listing } from '@/types';
import { Bookmark, MapPin, CheckCircle, IndianRupee, ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface ListingCardProps {
  listing: Listing;
}

export default function ListingCard({ listing }: ListingCardProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const { toast } = useToast();

  const handleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
    toast({
      title: isBookmarked ? "Removed from bookmarks" : "Added to bookmarks",
      description: `"${listing.title}" has been ${isBookmarked ? 'removed from' : 'added to'} your bookmarks.`,
    });
  };

  return (
    <Link href={`/listing/${listing.id}`} className="group block">
      <div className="flex flex-col overflow-hidden h-full">
        <div className="relative overflow-hidden rounded-xl">
          <Carousel className="w-full h-56">
            <CarouselContent>
              {listing.imageUrls.map((url, index) => (
                <CarouselItem key={index}>
                  <Image
                    src={url}
                    alt={`${listing.title} image ${index + 1}`}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={listing.dataAiHints[index]}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            {listing.imageUrls.length > 1 && (
              <>
                <CarouselPrevious className="absolute left-3 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CarouselNext className="absolute right-3 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </>
            )}
          </Carousel>
          <div className="absolute top-3 right-3 z-10">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-900"
              onClick={handleBookmark}
            >
              <Bookmark className={`h-5 w-5 transition-colors ${isBookmarked ? 'fill-amber-400 text-amber-500' : 'text-slate-500 dark:text-slate-400'}`} />
              <span className="sr-only">Bookmark</span>
            </Button>
          </div>
          {listing.verified && (
            <Badge className="absolute bottom-3 left-3 z-10 bg-green-100 text-green-800 border-green-200 dark:bg-green-900/50 dark:text-green-300 dark:border-green-800">
              <CheckCircle className="h-3.5 w-3.5 mr-1.5" /> Verified
            </Badge>
          )}
        </div>
        <div className="pt-4">
          <h3 className="font-semibold text-lg text-slate-800 dark:text-white truncate" title={listing.title}>
            {listing.title}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mt-1">
            <MapPin className="h-4 w-4" />
            {listing.location}
          </p>
          <p className="text-lg font-bold text-primary mt-2 flex items-center">
            <IndianRupee className="h-5 w-5" />
            {listing.rent.toLocaleString()}{' '}
            <span className="text-sm font-normal text-slate-500 dark:text-slate-400 ml-1.5">/ month</span>
          </p>
        </div>
      </div>
    </Link>
  );
}
