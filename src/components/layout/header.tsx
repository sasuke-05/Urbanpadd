
"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Home, Menu, UserCircle, Bookmark, PlusCircle, LogIn, LogOut, Building } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NavLinks = () => (
  <>
    <Button variant="ghost" asChild>
      <Link href="/properties" className="flex items-center gap-2">
        <Building /> Properties
      </Link>
    </Button>
    <Button variant="ghost" asChild>
      <Link href="/bookmarks" className="flex items-center gap-2">
        <Bookmark /> My Bookmarks
      </Link>
    </Button>
    <Button asChild>
      <Link href="/add-listing" className="flex items-center gap-2">
        <PlusCircle /> Add Listing
      </Link>
    </Button>
  </>
);

const UserAuth = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  if (isLoggedIn) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-10 w-10 rounded-full">
            <Avatar className="h-10 w-10">
              <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="@user" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">User</p>
              <p className="text-xs leading-none text-muted-foreground">
                user@example.com
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" asChild>
        <Link href="/login">Login</Link>
      </Button>
      <Button asChild>
        <Link href="/signup">Sign Up</Link>
      </Button>
    </div>
  );
};


export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Mock state

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 font-bold text-lg text-primary">
          <Home className="h-7 w-7" />
          <span className="font-headline text-2xl">UrbanPad</span>
        </Link>

        <div className="hidden md:flex items-center gap-4">
          <NavLinks />
          <UserAuth isLoggedIn={isLoggedIn} />
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 p-4">
                <NavLinks />
                <UserAuth isLoggedIn={isLoggedIn} />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
