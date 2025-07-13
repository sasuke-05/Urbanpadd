
'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { mockListings } from '@/lib/mock-data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from '@/components/ui/button';
import { CheckCircle, Wifi, Star, MapPin, IndianRupee, Dumbbell, Soup, WashingMachine, Zap, Shield, Monitor, Tv, Wind, Car, Waves, Sun } from 'lucide-react';

const amenityIcons: { [key: string]: React.ReactNode } = {
    'Wifi': <Wifi className="h-5 w-5" />,
    'AC': <Wind className="h-5 w-5" />,
    'Kitchen': <Soup className="h-5 w-5" />,
    'Parking': <Car className="h-5 w-5" />,
    'Food': <Soup className="h-5 w-5" />,
    'Laundry': <WashingMachine className="h-5 w-5" />,
    'Power Backup': <Zap className="h-5 w-5" />,
    'Gym': <Dumbbell className="h-5 w-5" />,
    'Swimming Pool': <Waves className="h-5 w-5" />,
    'Security': <Shield className="h-5 w-5" />,
    'Terrace': <Sun className="h-5 w-5" />,
    'Study Table': <Monitor className="h-5 w-5" />,
    'TV': <Tv className="h-5 w-5" />,
};


export default function ListingDetailPage() {
    const params = useParams();
    const { id } = params;

    const listing = mockListings.find(l => l.id === id);

    if (!listing) {
        return (
            <div className="text-center py-20">
                <h1 className="text-3xl font-bold">Listing not found</h1>
                <p className="text-muted-foreground">The property you are looking for does not exist.</p>
            </div>
        )
    }

    return (
        <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden shadow-xl border-none">
                <CardHeader className="p-0">
                    <Carousel className="w-full rounded-t-lg">
                        <CarouselContent>
                            {listing.imageUrls.map((url, index) => (
                                <CarouselItem key={index}>
                                    <Image
                                        src={url}
                                        alt={`${listing.title} image ${index + 1}`}
                                        width={1200}
                                        height={800}
                                        className="object-cover w-full h-[500px]"
                                        data-ai-hint={listing.dataAiHints[index]}
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                         {listing.imageUrls.length > 1 && (
                            <>
                                <CarouselPrevious />
                                <CarouselNext />
                            </>
                        )}
                    </Carousel>
                </CardHeader>
                <CardContent className="p-8 md:p-12">
                    <div className="flex flex-col md:flex-row justify-between md:items-start mb-4">
                        <div>
                             <CardTitle className="font-headline text-4xl md:text-5xl mb-2">{listing.title}</CardTitle>
                             <div className="flex items-center text-muted-foreground text-lg mb-4">
                                <MapPin className="h-5 w-5 mr-2" />
                                <span>{listing.location}</span>
                             </div>
                        </div>
                        <div className="text-left md:text-right mt-4 md:mt-0">
                             <p className="text-3xl font-bold text-primary flex items-center md:justify-end">
                                <IndianRupee className="h-7 w-7 mr-1"/>{listing.rent.toLocaleString()}
                                <span className="text-base font-normal text-muted-foreground ml-2">/ month</span>
                             </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                        <Badge variant="secondary" className="text-md">{listing.type}</Badge>
                        {listing.verified && (
                            <Badge variant="default" className="bg-green-600 text-white gap-2 text-md">
                                <CheckCircle className="h-4 w-4" /> Verified
                            </Badge>
                        )}
                    </div>

                    <div className="prose dark:prose-invert max-w-none text-foreground/90 mb-8">
                        <p>{listing.description}</p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold font-headline mb-4">Amenities</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {listing.amenities.map(amenity => (
                                <div key={amenity} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                                    {amenityIcons[amenity] || <Star className="h-5 w-5 text-accent" />}
                                    <span className="font-medium">{amenity}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="mt-10 text-center">
                        <Button size="lg" className="w-full md:w-auto">Contact Owner</Button>
                    </div>

                </CardContent>
            </Card>
        </div>
    );
}
