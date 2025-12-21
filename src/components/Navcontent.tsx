"use client";

import { Plus, X, Facebook, Linkedin, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

export function MobileNav({
  iconColor = "text-white",
}: {
  iconColor?: string;
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="h-10 w-10 hover:bg-transparent">
          <div className="flex flex-col gap-1.5 w-5">
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
        {/* Close Button */}
        

        <div className="flex flex-col h-full pt-20 px-8 pb-8">
          {/* Home */}
          <a href="/" className="text-[#8b6f47] font-serif text-3xl mb-8 block">
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
                <a href="/bespoke-the-brand" className="block text-white/90 text-xl">
                  Bespoke The Brand
                </a>
                <a href="/bespoke-tailors-in-islamabad" className="block text-white/90 text-xl">
                  Bespoke Tailors in Islamabad
                </a>
                <a href="/how-bespoke-works" className="block text-white/90 text-xl">
                  How Bespoke Works
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
                <a href="/bespoke-suit" className="block text-white/90 text-xl">
                  Bespoke Suit
                </a>
                <a href="/bespoke-shirt" className="block text-white/90 text-xl">
                  Bespoke Shirt
                </a>
                <a href="/bespoke-trousers" className="block text-white/90 text-xl">
                  Bespoke Trousers
                </a>
                <a href="/bespoke-wedding-suit" className="block text-white/90 text-xl">
                  Bespoke Wedding Suit
                </a>
                <a href="/bespoke-business-suit" className="block text-white/90 text-xl">
                  Bespoke Business Suit
                </a>
                <a href="/bespoke-power-suit" className="block text-white/90 text-xl">
                  Bespoke Power Suit
                </a>
                <a href="/bespoke-gala-suit" className="block text-white/90 text-xl">
                  Bespoke Gala Suit
                </a>
              </div>
            </div>
          </div>

          {/* Fabrics */}
          <a href="/fabrics" className="text-white font-serif text-3xl mb-8 block">
            Fabrics
          </a>

          {/* Shop
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
          </div> */}

          {/* Blogs */}
          <a href="/blogs" className="text-white font-serif text-3xl mb-8 block">
            Blogs
          </a>

          {/* Testimonials */}
          <a href="/testimonials" className="text-white font-serif text-3xl mb-8 block">
            Testimonials
          </a>

          {/* FAQ */}
          <a href="/faq" className="text-white font-serif text-3xl mb-8 block">
            FAQ
          </a>

          {/* Careers */}
          <a href="/careers" className="text-white font-serif text-3xl mb-8 block">
            Careers
          </a>

          {/* Contact */}
          <a href="/contact" className="text-white font-serif text-3xl mb-8 block">
            Contact
          </a>

          {/* Social Media Icons */}
          <div className="mt-auto pt-8 border-t border-white/20">
            <div className="flex items-center justify-center gap-6">
              <a
                href="#"
                className="h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                className="h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                className="h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                className="h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}