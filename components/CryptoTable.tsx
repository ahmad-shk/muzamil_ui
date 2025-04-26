"use client";

import { useState } from "react";

interface Coin {
  iconUrl: string;
  name: string;
  lastPrice: number;
  secondPrice: number;
  change: number;
}

const coins: Coin[] = [
  {
    iconUrl: "/icons/bnb.png", // Apni public folder mein icons daal dena
    name: "BNB",
    lastPrice: 0.2074,
    secondPrice: 0.2074,
    change: 1.03,
  },
  {
    iconUrl: "/icons/eth.png",
    name: "ETH",
    lastPrice: 0.1641,
    secondPrice: 0.2074,
    change: 11.0,
  },
  {
    iconUrl: "/icons/btc.png",
    name: "BTC",
    lastPrice: 0.3887,
    secondPrice: 0.2074,
    change: 5.03,
  },
  {
    iconUrl: "/icons/bnb.png",
    name: "BNB",
    lastPrice: 0.2074,
    secondPrice: 0.2074,
    change: 1.03,
  },
  {
    iconUrl: "/icons/eth.png",
    name: "ETH",
    lastPrice: 0.1641,
    secondPrice: 0.2074,
    change: 11.0,
  },
];

export default function CryptoTable() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("New");

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-[#14161b] p-4 rounded-lg w-full max-w-sm text-white">
      {/* Search */}
      <div className="flex items-center bg-[#0b0e11] px-3 py-2 rounded-md mb-4">
        <span className="text-[#f0b90b] mr-2 text-lg">🔍</span>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-transparent outline-none text-sm placeholder-[#848e9c] flex-1"
        />
      </div>

      {/* Tabs */}
      <div className="flex items-center mb-3 border-b border-[#1e1e1e]">
        <button
          onClick={() => setActiveTab("New")}
          className={`px-3 py-2 text-sm ${
            activeTab === "New" ? "text-[#f0b90b] font-bold border-b-2 border-[#f0b90b]" : "text-[#848e9c]"
          }`}
        >
          New
        </button>
        <button
          onClick={() => setActiveTab("USDT")}
          className={`px-3 py-2 text-sm ${
            activeTab === "USDT" ? "text-[#f0b90b] font-bold border-b-2 border-[#f0b90b]" : "text-[#848e9c]"
          }`}
        >
          USDT
        </button>
      </div>

      {/* Table Header */}
      <div className="flex justify-between text-[11px] text-[#848e9c] px-2 mb-2">
        <span>Coin</span>
        <span>Last Price</span>
        <span>24h Changes</span>
      </div>

      {/* Table Rows */}
      <div className="max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-[#848e9c]/30 scrollbar-track-transparent">
        {filteredCoins.map((coin, index) => (
          <div
            key={index}
            className="flex justify-between items-center text-sm py-2 px-2 border-b border-[#1e1e1e]"
          >
            {/* Coin */}
            <div className="flex items-center gap-2">
              <img src={coin.iconUrl} alt={coin.name} className="w-5 h-5" />
              <span>{coin.name}</span>
            </div>

            {/* Price */}
            <div className="flex flex-col items-end text-xs">
              <span className="text-[#eaecef]">{coin.lastPrice}</span>
              <span className="text-[#848e9c] text-[10px]">
                ${coin.secondPrice.toFixed(8)}
              </span>
            </div>

            {/* 24h Change */}
            <span
              className={`text-xs ${
                coin.change >= 0 ? "text-[#0ecb81]" : "text-[#f6465d]"
              }`}
            >
              {coin.change > 0 ? `+${coin.change.toFixed(2)}%` : `${coin.change.toFixed(2)}%`}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
