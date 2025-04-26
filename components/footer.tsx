"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUp, Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="mt-12 bg-[#14161b] border-t border-[#1f2128]">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col items-center mb-10">
          <Image
            src="/logo.svg?height=70&width=160"
            alt="KGC Trading"
            width={160}
            height={70}
            className="h-16 mb-6"
          />
          <h3 className="text-lg font-bold text-[#edb546] mb-4">Subscribe Now</h3>
          <div className="flex w-full max-w-md">
            <input
              type="email"
              placeholder="E-mail Address"
              className="flex-1 bg-[#1f2128] border border-[#1f2128] rounded-l-md px-3 py-1.5 text-white text-sm"
            />
            <button className="bg-[#edb546] hover:bg-[#edb546]/90 text-black font-medium px-3 py-1.5 rounded-r-md">
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex justify-center gap-5 mb-6">
          <Link href="/buy-crypto" className="text-[#edb546] hover:text-[#edb546]/80 text-sm">
            Buy Crypto
          </Link>
          <Link href="/markets" className="text-[#edb546] hover:text-[#edb546]/80 text-sm">
            Markets
          </Link>
        </div>

        <div className="flex justify-center gap-4 mb-6">
          <Link
            href="#"
            className="w-7 h-7 rounded-full bg-[#1f2128] flex items-center justify-center hover:bg-[#1f2128]/80"
          >
            <div className="text-[#edb546] w-3.5 h-3.5">●</div>
          </Link>
          <Link
            href="#"
            className="w-7 h-7 rounded-full bg-[#1f2128] flex items-center justify-center hover:bg-[#1f2128]/80"
          >
            <div className="text-[#edb546] w-3.5 h-3.5">●</div>
          </Link>
          <Link
            href="#"
            className="w-7 h-7 rounded-full bg-[#1f2128] flex items-center justify-center hover:bg-[#1f2128]/80"
          >
            <Twitter className="text-[#edb546] w-3.5 h-3.5" />
          </Link>
          <Link
            href="#"
            className="w-7 h-7 rounded-full bg-[#1f2128] flex items-center justify-center hover:bg-[#1f2128]/80"
          >
            <Facebook className="text-[#edb546] w-3.5 h-3.5" />
          </Link>
          <Link
            href="#"
            className="w-7 h-7 rounded-full bg-[#1f2128] flex items-center justify-center hover:bg-[#1f2128]/80"
          >
            <div className="text-[#edb546] w-3.5 h-3.5">●</div>
          </Link>
          <Link
            href="#"
            className="w-7 h-7 rounded-full bg-[#1f2128] flex items-center justify-center hover:bg-[#1f2128]/80"
          >
            <Instagram className="text-[#edb546] w-3.5 h-3.5" />
          </Link>
          <Link
            href="#"
            className="w-7 h-7 rounded-full bg-[#1f2128] flex items-center justify-center hover:bg-[#1f2128]/80"
          >
            <div className="text-[#edb546] w-3.5 h-3.5">@</div>
          </Link>
          <Link
            href="#"
            className="w-7 h-7 rounded-full bg-[#1f2128] flex items-center justify-center hover:bg-[#1f2128]/80"
          >
            <Youtube className="text-[#edb546] w-3.5 h-3.5" />
          </Link>
          <Link
            href="#"
            className="w-7 h-7 rounded-full bg-[#1f2128] flex items-center justify-center hover:bg-[#1f2128]/80"
          >
            <div className="text-[#edb546] w-3.5 h-3.5">●</div>
          </Link>
        </div>

        <div className="text-center text-xs text-[#6f6a6b]">Copyright © 2025 KGC - All Rights Reserved.</div>
      </div>
    </footer>
  )
}
