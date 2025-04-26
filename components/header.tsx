"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header(): JSX.Element {
  return (
    <header className="border-b border-[#1f2128] px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="KGC Trading"
            width={140}
            height={36}
            className="h-9"
            priority // optional: fast loading for logo
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/trade/BTC_USDC"
            className="text-[#edb546] hover:text-[#edb546]/80 text-sm"
          >
            Buy Crypto
          </Link>
          <Link
            href="/markets/overview"
            className="text-[#edb546] hover:text-[#edb546]/80 text-sm"
          >
            Markets
          </Link>
        </nav>
      </div>

      <div>
        <Link
          href="/login"
          className="bg-[#edb546] hover:bg-[#edb546]/90 text-black font-medium px-4 py-1.5 rounded-md text-sm"
        >
          Log in
        </Link>
      </div>
    </header>
  );
}
