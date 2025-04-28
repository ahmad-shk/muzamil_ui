"use client";

import { useState } from "react";
import { coins } from "./payloads";

interface Coin {
  iconUrl: string;
  name: string;
  lastPrice: number;
  secondPrice: number;
  change: number;
}

export default function CryptoTable() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("New");

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="rounded-lg w-full  text-white">
      {/* Search */}
      <div className="flex items-center bg-transparent px-4 py-2 rounded-[6px] mb-4 border-2 border-gray-800">
        <span className="text-[#f0b90b] mr-2 text-lg">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.6355 15.3927L12.7529 11.2775C13.7512 10.0681 14.2982 8.54645 14.2982 6.96234C14.2982 3.26121 11.3434 0.25 7.71158 0.25C4.0798 0.25 1.125 3.26121 1.125 6.96234C1.125 10.6635 4.0798 13.6747 7.71158 13.6747C9.075 13.6747 10.3743 13.2556 11.4851 12.46L15.3973 16.6065C15.5608 16.7796 15.7807 16.875 16.0164 16.875C16.2395 16.875 16.4511 16.7883 16.6118 16.6307C16.9531 16.296 16.964 15.7409 16.6355 15.3927ZM7.71158 2.00104C10.396 2.00104 12.5799 4.22662 12.5799 6.96234C12.5799 9.69805 10.396 11.9236 7.71158 11.9236C5.02712 11.9236 2.84324 9.69805 2.84324 6.96234C2.84324 4.22662 5.02712 2.00104 7.71158 2.00104Z" fill="#EDB546" />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-transparent outline-none text-sm placeholder-white placeholder:text-[12px] flex-1"
        />
      </div>

      {/* Tabs */}
      <div className="flex items-center border-b border-[#1e1e1e]">
      <div>
          <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5709 5.28978C14.5241 5.14526 14.4358 5.01768 14.3171 4.92288C14.1984 4.82808 14.0544 4.77024 13.9031 4.75654L9.68593 4.37367L8.01927 0.471665C7.8962 0.184985 7.61623 0 7.30458 0C6.99293 0 6.71284 0.184985 6.59058 0.471665L4.92391 4.37367L0.706038 4.75654C0.396817 4.78507 0.13499 4.99451 0.0382602 5.28978C-0.00887387 5.43443 -0.0125402 5.58972 0.0277152 5.73643C0.0679706 5.88314 0.150379 6.01482 0.264733 6.11515L3.45262 8.91044L2.51269 13.0503C2.44392 13.3547 2.56205 13.6695 2.81463 13.8521C2.94692 13.9483 3.10635 14.0001 3.26995 14C3.41018 14 3.54779 13.9619 3.66808 13.8899L7.30458 11.7155L10.9404 13.8899C11.0708 13.9679 11.2213 14.0059 11.3732 13.9992C11.525 13.9925 11.6715 13.9413 11.7946 13.8521C12.0471 13.6695 12.1653 13.3547 12.0965 13.0503L11.1565 8.91047L14.3444 6.11518C14.4588 6.01485 14.5412 5.88318 14.5815 5.73646C14.6217 5.58975 14.618 5.43445 14.5709 5.28981V5.28978Z" fill="white" fillOpacity="0.5" />
          </svg>

        </div>
        <button
          onClick={() => setActiveTab("New")}
          className={`px-3 py-2 text-sm ${activeTab === "New" ? "text-[#f0b90b] font-bold border-b-2 border-[#f0b90b]" : "text-[#848e9c]"}`}
        >
          New
        </button>
        <button
          onClick={() => setActiveTab("USDT")}
          className={`px-3 py-2 text-sm ${activeTab === "USDT" ? "text-[#f0b90b] font-bold border-b-2 border-[#f0b90b]" : "text-[#848e9c]"}`}
        >
          USDT
        </button>
      </div>

      {/* Table Header */}
      <div className="flex justify-between text-[11px] px-2 py-2">
        <span>Coin</span>
        <span>Last Price</span>
        <span>24h Changes</span>
      </div>

      {/* Table Rows */}
      <div className="max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-[#848e9c]/30 scrollbar-track-transparent">
        {filteredCoins.map((coin, index) => (
          <div key={index} className="flex justify-between items-center text-sm py-2 px-2">
            {/* Coin */}
            <div className="flex items-center gap-2">
              <img src={coin.iconUrl} alt={coin.name} className="w-5 h-5" />
              <span>{coin.name}</span>
            </div>

            {/* Price */}
            <div className="flex flex-col items-end text-xs">
              <span className="text-[#eaecef]">{coin.lastPrice}</span>
              <span className="text-[#848e9c] text-[10px]">${coin.secondPrice.toFixed(8)}</span>
            </div>

            {/* 24h Change */}
            <span className={`text-xs ${coin.change >= 0 ? "text-[#0ecb81]" : "text-[#f6465d]"}`}>
              {coin.change > 0 ? `+${coin.change.toFixed(2)}%` : `${coin.change.toFixed(2)}%`}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
