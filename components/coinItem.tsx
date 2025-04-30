"use client";

import Image from "next/image";

const coins = [
  {
    name: "BNB",
    icon: "/Group.png",
    price: "$120.00",
    change: "+1.03%",
  },
  {
    name: "BTC",
    icon: "/Group (1).png",
    price: "$31.52K",
    change: "+5.03%",
  },
  {
    name: "ETH",
    icon: "/Group (2).png",
    price: "$1.52K",
    change: "+11.00%",
  },
];

export default function HotCoins() {
  return (
    <div className="-bg-[#0b0d0f] border border-[#1f2128] rounded-2xl p-4 text-white text-[13px] w-full">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[14px] font-semibold text-[#EDB546]">
          Hot Coins
        </h3>
        <button className="flex items-center gap-1 text-[12px] font-medium text-[#EDB546] hover:underline">
          More <span className="text-[14px]">➔</span>
        </button>
      </div>

      {/* Coin List */}
      <div className="flex flex-col gap-3">
        {coins.map((coin, idx) => (
          <div key={idx} className="flex items-center justify-between gap-4">
            
            {/* Left: Icon + Name */}
            <div className="flex items-center gap-2 min-w-[80px]">
              <Image
                src={coin.icon}
                alt={coin.name}
                width={24}
                height={24}
                className="rounded-full"
              />
              <span className="text-[#EDB546] font-medium">{coin.name}</span>
            </div>

            {/* Middle: Price (Hidden on Tablet only) */}
            <div className="text-[#EDB546] min-w-[60px] text-center md:hidden">
              {coin.price}
            </div>

            {/* Right: Change */}
            <div className="text-[#15b34c] text-[12px] min-w-[50px] text-right">
              {coin.change}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
