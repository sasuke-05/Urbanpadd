
"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Home, Building2, UserCheck, ShieldCheck, Star } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-24 md:space-y-32">
      {/* Hero Section */}
      <section className="text-center pt-16 pb-12">
        <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight">
          Find Your <span className="text-primary">Perfect Pad</span>, Simply.
        </h1>
        <p className="max-w-3xl mx-auto mt-6 text-lg md:text-xl text-muted-foreground">
          UrbanPad is your trusted partner in finding the best rental homes and PGs.
          Hassle-free, verified, and tailored for you.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/properties">
              Start Your Search <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/add-listing">List Your Property</Link>
          </Button>
        </div>
         <div className="relative mt-16 max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-top [mask-image:linear-gradient(0deg,transparent,black)] dark:bg-grid-slate-400/[0.05]"></div>
            <Image
                src="/images/image.png"
                width={1200}
                height={600}
                alt="Hero image of a modern apartment building"
                data-ai-hint="modern apartment building"
                className="rounded-xl shadow-2xl"
            />
        </div>
      </section>

      {/* Services Section */}
      <section className="text-center">
        <h2 className="font-headline text-4xl md:text-5xl font-bold">What We Offer</h2>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
          Everything you need to find your next home, all in one place.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-card rounded-xl shadow-lg">
            <div className="flex items-center justify-center h-16 w-16 bg-primary/10 text-primary rounded-full mx-auto mb-6">
                <Search className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold font-headline">AI-Powered Search</h3>
            <p className="mt-2 text-muted-foreground">
              Our smart AI finds the best matches for your needs, from location to amenities.
            </p>
          </div>
          <div className="p-8 bg-card rounded-xl shadow-lg">
            <div className="flex items-center justify-center h-16 w-16 bg-primary/10 text-primary rounded-full mx-auto mb-6">
                <Home className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold font-headline">Diverse Listings</h3>
            <p className="mt-2 text-muted-foreground">
              A wide range of PGs and flats to suit every budget and lifestyle.
            </p>
          </div>
          <div className="p-8 bg-card rounded-xl shadow-lg">
            <div className="flex items-center justify-center h-16 w-16 bg-primary/10 text-primary rounded-full mx-auto mb-6">
                <UserCheck className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold font-headline">Verified Properties</h3>
            <p className="mt-2 text-muted-foreground">
              We verify listings to ensure they are safe, secure, and as advertised.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
        <section className="text-center">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Why Choose UrbanPad?</h2>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
                We simplify the rental process with features designed for your peace of mind.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="flex items-start text-left gap-4">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-green-500/10 text-green-500 rounded-lg">
                        <ShieldCheck className="h-6 w-6"/>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg">Trust & Safety</h4>
                        <p className="text-muted-foreground mt-1">Every listing is vetted for quality and authenticity.</p>
                    </div>
                </div>
                 <div className="flex items-start text-left gap-4">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-green-500/10 text-green-500 rounded-lg">
                        <Search className="h-6 w-6"/>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg">Smart Filters</h4>
                        <p className="text-muted-foreground mt-1">Easily narrow down your options to find the perfect fit.</p>
                    </div>
                </div>
                <div className="flex items-start text-left gap-4">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-green-500/10 text-green-500 rounded-lg">
                        <Building2 className="h-6 w-6"/>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg">Direct Contact</h4>
                        <p className="text-muted-foreground mt-1">Connect with property owners directly, no middlemen.</p>
                    </div>
                </div>
                 <div className="flex items-start text-left gap-4">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-green-500/10 text-green-500 rounded-lg">
                        <UserCheck className="h-6 w-6"/>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg">Community Focused</h4>
                        <p className="text-muted-foreground mt-1">Join a community of students and professionals.</p>
                    </div>
                </div>
            </div>
        </section>

      {/* Testimonials Section */}
      <section className="text-center">
        <h2 className="font-headline text-4xl md:text-5xl font-bold">Loved by Tenants & Owners</h2>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
          Don't just take our word for it. Here's what our users have to say.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-card rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                    <Image src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User" width={48} height={48} className="rounded-full" />
                    <div className="ml-4 text-left">
                        <p className="font-bold">Priya Sharma</p>
                        <p className="text-sm text-muted-foreground">Student</p>
                    </div>
                </div>
                <div className="flex mb-2">{Array(5).fill(0).map((_,i) => <Star key={i} className="text-amber-400 fill-amber-400 h-5 w-5" />)}</div>
                <p className="text-muted-foreground text-left">"UrbanPad made finding a PG near my college a breeze. The listings are detailed and the verified tag gave me confidence."</p>
            </div>
            <div className="p-8 bg-card rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                    <Image src="https://i.pravatar.cc/150?u=a042581f4e29026704e" alt="User" width={48} height={48} className="rounded-full" />
                    <div className="ml-4 text-left">
                        <p className="font-bold">Rohan Mehta</p>
                        <p className="text-sm text-muted-foreground">Property Owner</p>
                    </div>
                </div>
                 <div className="flex mb-2">{Array(5).fill(0).map((_,i) => <Star key={i} className="text-amber-400 fill-amber-400 h-5 w-5" />)}</div>
                <p className="text-muted-foreground text-left">"Listing my flat was incredibly easy. I found a reliable tenant within a week. Highly recommended for owners!"</p>
            </div>
             <div className="p-8 bg-card rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                    <Image src="https://i.pravatar.cc/150?u=a042581f4e29026704f" alt="User" width={48} height={48} className="rounded-full" />
                    <div className="ml-4 text-left">
                        <p className="font-bold">Ananya Singh</p>
                        <p className="text-sm text-muted-foreground">Young Professional</p>
                    </div>
                </div>
                <div className="flex mb-2">{Array(5).fill(0).map((_,i) => <Star key={i} className="text-amber-400 fill-amber-400 h-5 w-5" />)}</div>
                <p className="text-muted-foreground text-left">"The AI search is a game-changer! It saved me so much time. I found the perfect apartment with all the amenities I wanted."</p>
            </div>
        </div>
      </section>
    </div>
  );
}
