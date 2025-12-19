"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function MobileNav({
  iconColor = "text-white",
}: {
  iconColor?: string;
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="h-20 w-20 hover:bg-transparent">
          <div className="flex flex-col gap-2 w-8">
            <span className={`h-0.5 w-full ${iconColor} bg-current`} />
            <span className={`h-0.5 w-full ${iconColor} bg-current`} />
            <span className={`h-0.5 w-full ${iconColor} bg-current`} />
          </div>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full bg-[#b5aca3] border-none p-0 overflow-y-auto"
      >
        <div className="flex flex-col h-full pt-20 px-8">
          {/* Home */}
          <a href="#" className="text-[#8b6f47] font-serif text-3xl mb-8 block">
            Home
          </a>

          {/* About */}
          <div className="group mb-8">
            <div className="flex items-center justify-between cursor-pointer">
              <span className="text-white font-serif text-3xl">About</span>
              <Plus className="h-6 w-6 text-white transition-transform duration-300 group-hover:rotate-45" />
            </div>
            <div className="max-h-0 overflow-hidden transition-all duration-300 group-hover:max-h-40 group-hover:mt-4">
              <div className="space-y-4 pl-4">
                <a href="#" className="block text-white/90 text-xl">
                  Our Story
                </a>
                <a href="#" className="block text-white/90 text-xl">
                  Our Team
                </a>
              </div>
            </div>
          </div>

          {/* Bespoke Tailoring */}
          <div className="group mb-8">
            <div className="flex items-center justify-between cursor-pointer">
              <span className="text-white font-serif text-3xl">
                Bespoke Tailoring
              </span>
              <Plus className="h-6 w-6 text-white transition-transform duration-300 group-hover:rotate-45" />
            </div>
            <div className="max-h-0 overflow-hidden transition-all duration-300 group-hover:max-h-96 group-hover:mt-4">
              <div className="space-y-4 pl-4">
                <a href="#" className="block text-white/90 text-xl">
                  Bespoke Suit
                </a>
                <a href="#" className="block text-white/90 text-xl">
                  Bespoke Wedding Suit
                </a>
                <a href="#" className="block text-white/90 text-xl">
                  Bespoke Business Suit
                </a>
                <a href="#" className="block text-white/90 text-xl">
                  Bespoke Power Suit
                </a>
                <a href="#" className="block text-white/90 text-xl">
                  Bespoke Gala Suit
                </a>
              </div>
            </div>
          </div>

          {/* Fabrics */}
          <a href="#" className="text-white font-serif text-3xl mb-8 block">
            Fabrics
          </a>

          {/* Shop */}
          <div className="group mb-8">
            <div className="flex items-center justify-between cursor-pointer">
              <span className="text-white font-serif text-3xl">Shop</span>
              <Plus className="h-6 w-6 text-white transition-transform duration-300 group-hover:rotate-45" />
            </div>
            <div className="max-h-0 overflow-hidden transition-all duration-300 group-hover:max-h-40 group-hover:mt-4">
              <div className="space-y-4 pl-4">
                <a href="#" className="block text-white/90 text-xl">
                  All Products
                </a>
                <a href="#" className="block text-white/90 text-xl">
                  Accessories
                </a>
              </div>
            </div>
          </div>

          {/* Blogs */}
          <a href="#" className="text-white font-serif text-3xl mb-8 block">
            Blogs
          </a>

          {/* Testimonials */}
          <a href="#" className="text-white font-serif text-3xl mb-8 block">
            Testimonials
          </a>

          {/* FAQ */}
          <a href="#" className="text-white font-serif text-3xl mb-8 block">
            FAQ
          </a>

          {/* Careers */}
          <a href="#" className="text-white font-serif text-3xl mb-8 block">
            Careers
          </a>

          {/* Contact */}
          <a href="#" className="text-white font-serif text-3xl mb-8 block">
            Contact
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
