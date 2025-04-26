"use client"

import { useState } from "react"
import { MoreHorizontal } from "lucide-react"

export default function OrderBook() {
  const [activeTab, setActiveTab] = useState<"buy" | "sell" | "all">("all")

  const sellOrders = [
    { price: 596.68, amount: 0.171 },
    { price: 596.67, amount: 0.446 },
    { price: 596.68, amount: 3.602 },
    { price: 596.68, amount: 32.633 },
    { price: 596.68, amount: 0.225 },
    { price: 596.68, amount: 0.045 },
    { price: 596.68, amount: 0.020 },
    { price: 596.68, amount: 0.045 },
  ]

  const buyOrders = [
    { price: 596.68, amount: 0.171 },
    { price: 596.67, amount: 0.446 },
    { price: 596.68, amount: 3.602 },
    { price: 596.68, amount: 32.633 },
    { price: 596.68, amount: 0.225 },
    { price: 596.68, amount: 0.045 },
    { price: 596.68, amount: 0.020 },
    { price: 596.68, amount: 0.045 },
    { price: 596.68, amount: 0.045 },
    { price: 596.68, amount: 0.045 },
  ]

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-[#1f2128]">
        <h3 className="font-semibold text-xs">Order Book</h3>
        <MoreHorizontal className="h-4 w-4 text-[#6f6a6b]" />
      </div>

      {/* Tabs */}
      <div className="flex text-[10px] font-medium border-b border-[#1f2128]">
        {["buy", "all", "sell"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as "buy" | "sell" | "all")}
            className={`flex-1 py-1 ${
              activeTab === tab
                ? tab === "buy"
                  ? "text-[#0ecb81] border-b-2 border-[#0ecb81]"
                  : tab === "sell"
                  ? "text-[#f6465d] border-b-2 border-[#f6465d]"
                  : "text-white border-b-2 border-white"
                : "text-[#6f6a6b]"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Column Titles */}
      <div className="grid grid-cols-3 text-[10px] text-[#6f6a6b] px-3 py-2 border-b border-[#1f2128]">
        <div>Price (USDT)</div>
        <div>Amount (BNB)</div>
        <div>Total</div>
      </div>

      {/* Orders */}
      <div className="flex-1 overflow-auto text-[10px]">
        {(activeTab === "all" || activeTab === "sell") && (
          <>
            {sellOrders.map((order, i) => (
              <div key={`sell-${i}`} className="relative flex justify-between px-3 py-1 gap-16 border-b border-[#1f2128]">
                <div className="text-left text-[#f6465d] z-10">{order.price.toFixed(2)}</div>
                <div className="z-10">{order.amount.toFixed(3)}</div>
                <div className="z-10">{(order.price * order.amount).toFixed(2)}</div>
                <div
                  className="absolute left-0 top-0 h-full bg-[#f6465d]/10"
                  style={{ width: `${Math.min(order.amount * 2, 100)}%` }}
                />
              </div>
            ))}
          </>
        )}

        {/* Current Price Row */}
        <div className="grid grid-cols-3 px-3 py-2 text-[11px] font-semibold text-white items-center justify-center text-center bg-[#1f2128]">
          <div className="text-[#0ecb81]">596.83</div>
          <div className="text-[#6f6a6b] text-[10px]">$597.73</div>
          <div className="text-[#6f6a6b] text-[10px]">▶</div>
        </div>

        {(activeTab === "all" || activeTab === "buy") && (
          <>
            {buyOrders.map((order, i) => (
              <div key={`buy-${i}`} className="relative flex justify-between px-3 py-1 gap-16 border-b border-[#1f2128]">
                <div className="text-left text-[#0ecb81] z-10">{order.price.toFixed(2)}</div>
                <div className="z-10">{order.amount.toFixed(3)}</div>
                <div className="z-10">{(order.price * order.amount).toFixed(2)}</div>
                <div
                  className="absolute left-0 top-0 h-full bg-[#0ecb81]/10"
                  style={{ width: `${Math.min(order.amount * 2, 100)}%` }}
                />
              </div>
            ))}
          </>
        )}
      </div>

      {/* Volume Bar */}
      <div className="px-3 py-2 border-t border-[#1f2128]">
        <div className="flex items-center justify-between text-[10px] text-[#6f6a6b] mb-1">
          <span className="text-[#0ecb81]">50.60% B</span>
          <span className="text-[#f6465d]">53.21% S</span>
        </div>
        <div className="relative h-1 bg-[#1f2128] rounded-full overflow-hidden">
          <div className="absolute left-0 top-0 h-full bg-[#0ecb81]" style={{ width: "50.60%" }} />
          <div className="absolute right-0 top-0 h-full bg-[#f6465d]" style={{ width: "53.21%" }} />
        </div>
      </div>
    </div>
  )
}
