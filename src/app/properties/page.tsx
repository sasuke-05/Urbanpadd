
"use client";

import { useState, useEffect } from 'react';
import ListingCard from '@/components/listing-card';
import { type Listing } from '@/types';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';
import { Search, Frown, Home as HomeIcon, Building } from 'lucide-react';
import { findProperties } from '@/ai/flows/find-properties-flow';
import Image from 'next/image';
import { mockListings } from '@/lib/mock-data';

const ListingCardSkeleton = () => (
    <div className="flex flex-col space-y-3">
        <Skeleton className="h-[225px] w-full rounded-xl" />
        <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
        </div>
    </div>
);


export default function PropertiesPage() {
  const [listings, setListings] = useState<Listing[]>(mockListings);
  const [rentRange, setRentRange] = useState<[number]>([50000]);
  const [searchQuery, setSearchQuery] = useState('');
  const [propertyType, setPropertyType] = useState('any');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pageTitle, setPageTitle] = useState('Featured Properties');

  const runSearch = async (
      criteria: { location: string; propertyType: 'any' | 'PG' | 'Flat'; maxRent: number }
    ) => {
    setIsLoading(true);
    setError(null);
    setPageTitle(`Searching for properties in ${criteria.location}...`);
    try {
      const results = await findProperties(criteria);
      setListings(results);
      setPageTitle(results.length > 0 ? 'Your Search Results' : 'No Properties Found');
    } catch (e) {
      console.error(e);
      setError("Sorry, the AI search failed. Please try again in a moment.");
      setPageTitle('Search Failed');
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleSearchSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      runSearch({
        location: searchQuery || "Bangalore",
        propertyType: propertyType as 'any' | 'PG' | 'Flat',
        maxRent: rentRange[0],
      });
  }


  return (
    <div className="space-y-12">
      <div>
        <Card className="relative z-10 mx-auto w-full max-w-5xl border-none bg-white/80 shadow-2xl shadow-slate-900/10 backdrop-blur-lg dark:bg-slate-900/80">
            <CardContent className="p-4 sm:p-6">
                <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 items-end gap-4 sm:grid-cols-2 lg:grid-cols-12">
                    <div className="lg:col-span-4">
                        <label htmlFor="search" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1.5">Location</label>
                        <Input 
                            id="search" 
                            placeholder="e.g., Bangalore" 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="lg:col-span-3">
                        <label htmlFor="type" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1.5">Property Type</label>
                        <Select value={propertyType} onValueChange={setPropertyType}>
                            <SelectTrigger id="type">
                                <SelectValue placeholder="Any Type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="any">Any Type</SelectItem>
                                <SelectItem value="PG"><div className="flex items-center gap-2"><HomeIcon /> PG/Hostel</div></SelectItem>
                                <SelectItem value="Flat"><div className="flex items-center gap-2"><Building /> Flat/Apartment</div></SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="lg:col-span-3">
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1.5">
                            Max Rent: <span className="font-semibold text-primary">INR {rentRange[0].toLocaleString()}</span>
                        </label>
                        <Slider
                            value={rentRange}
                            onValueChange={(value) => setRentRange([value[0]])}
                            max={100000}
                            step={1000}
                            disabled={isLoading}
                        />
                    </div>
                    <Button type="submit" className="w-full h-10 text-base lg:col-span-2" disabled={isLoading}>
                        <Search className="mr-2 h-5 w-5" /> 
                        {isLoading ? 'Searching...' : 'Search'}
                    </Button>
                </form>
            </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="font-headline text-3xl font-bold mb-8 text-slate-900 dark:text-white">
          {pageTitle}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
          {isLoading ? (
             Array.from({ length: 8 }).map((_, index) => <ListingCardSkeleton key={index} />)
          ) : error ? (
            <div className="col-span-full">
              <Alert variant="destructive">
                <Frown className="h-4 w-4" />
                <AlertTitle>Search Failed</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            </div>
          ) : listings.length > 0 ? (
            listings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))
          ) : (
             <div className="text-center py-20 bg-slate-50 dark:bg-slate-800/50 rounded-lg flex flex-col items-center col-span-full">
                <Frown className="h-16 w-16 text-slate-400 dark:text-slate-500 mb-4" />
                <h2 className="text-2xl font-semibold mb-2 text-slate-800 dark:text-white">No Properties Found</h2>
                <p className="text-slate-500 dark:text-slate-400">
                    We couldn't find any properties matching your criteria. Try adjusting your search filters.
                </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
