"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-gray-700 text-white sticky top-0 right-0 z-10">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold">
        MyStore
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6">
        <Button variant="ghost">
          <Link href="/">Home</Link>
        </Button>

        <Button variant="ghost">
          <Link href="/products">Products</Link>
        </Button>
        <Button variant="ghost">
          <Link href="/about">About</Link>
        </Button>
        <Button variant="ghost">
          <Link href="/contact">Contact</Link>
        </Button>
      </div>

      {/* Actions (Desktop) */}
      <div className="hidden md:flex gap-3">
        <Link href="/login">
          <Button variant="outline" className="text-black">Login</Button>
        </Link>
        <Link href="/dashboard/add-product">
          <Button>Dashboard</Button>
        </Link>
      </div>

      {/* Mobile Menu */}
      <Sheet className="bg-gray-">
        <SheetTrigger asChild>
          <Button variant="ghost" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-6">
          <div className="flex flex-col gap-4">
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/login">
              <Button variant="outline" className="w-full text-black">
                Login
              </Button>
            </Link>
            <Link href="/dashboard/add-product">
              <Button className="w-full">Dashboard</Button>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
