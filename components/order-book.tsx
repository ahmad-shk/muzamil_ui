"use client"

import { useState } from "react"
import { MoreHorizontal } from "lucide-react"

export default function OrderBook() {
  const [activeTab, setActiveTab] = useState<"buy" | "sell" | "all">("all")

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between px-3 py-2 border-b border-[#1f2128]">
        <h3 className="font-medium text-xs">Order Book</h3>
        <button className="text-[#6f6a6b] hover:text-white">
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>

      <div className="flex border-b border-[#1f2128]">
        <button
          className={`flex-1 py-1 text-[10px] font-medium ${activeTab === "buy" ? "text-[#15b34c] border-b-2 border-[#15b34c]" : "text-[#6f6a6b]"}`}
          onClick={() => setActiveTab("buy")}
        >
          Buy
        </button>
        <button
          className={`flex-1 py-1 text-[10px] font-medium ${activeTab === "all" ? "text-white border-b-2 border-white" : "text-[#6f6a6b]"}`}
          onClick={() => setActiveTab("all")}
        >
          All
        </button>
        <button
          className={`flex-1 py-1 text-[10px] font-medium ${activeTab === "sell" ? "text-[#f6465d] border-b-2 border-[#f6465d]" : "text-[#6f6a6b]"}`}
          onClick={() => setActiveTab("sell")}
        >
          Sell
        </button>
      </div>

      <div className="grid grid-cols-3 px-3 py-1 text-[10px] text-[#6f6a6b] border-b border-[#1f2128]">
        <div>Price (USDT)</div>
        <div>Amount (BNB)</div>
        <div>Total</div>
      </div>

      <div className="flex-1 overflow-auto">
        {/* Sell Orders (Red) */}
        {(activeTab === "all" || activeTab === "sell") && (
          <>
            {[
              { price: 596.51, amount: 0.171, time: "02:42:01" },
              { price: 596.67, amount: 0.446, time: "02:42:01" },
              { price: 596.68, amount: 3.602, time: "02:42:01" },
              { price: 596.88, amount: 32.633, time: "02:42:01" },
              { price: 596.89, amount: 0.225, time: "02:42:01" },
              { price: 596.92, amount: 0.045, time: "02:42:01" },
              { price: 596.93, amount: 0.02, time: "02:42:01" },
              { price: 596.94, amount: 0.045, time: "02:42:01" },
            ].map((order, i) => (
              <div
                key={`sell-${i}`}
                className="grid grid-cols-3 px-3 py-1 text-[10px] border-b border-[#1f2128]/50 relative"
              >
                <div className="text-[#f6465d] z-10">{order.price.toFixed(2)}</div>
                <div className="z-10">{order.amount.toFixed(3)}</div>
                <div className="z-10">{(order.price * order.amount).toFixed(2)}</div>
                <div
                  className="absolute left-0 top-0 h-full bg-[#f6465d]/10"
                  style={{ width: `${Math.min(order.amount * 3, 100)}%` }}
                ></div>
              </div>
            ))}
          </>
        )}

        {/* Current Price */}
        <div className="grid grid-cols-3 px-3 py-1 text-[10px] border-b border-[#1f2128] bg-[#1f2128]/50">
          <div className="text-white font-medium">596.83</div>
          <div className="text-[#6f6a6b]">$597.13</div>
          <div></div>
        </div>

        {/* Buy Orders (Green) */}
        {(activeTab === "all" || activeTab === "buy") && (
          <>
            {[
              { price: 596.82, amount: 0.171, time: "02:42:01" },
              { price: 596.67, amount: 0.446, time: "02:42:01" },
              { price: 596.66, amount: 3.602, time: "02:42:01" },
              { price: 596.65, amount: 32.633, time: "02:42:01" },
              { price: 596.64, amount: 0.225, time: "02:42:01" },
              { price: 596.63, amount: 0.045, time: "02:42:01" },
              { price: 596.62, amount: 0.02, time: "02:42:01" },
              { price: 596.61, amount: 0.045, time: "02:42:01" },
              { price: 596.6, amount: 0.045, time: "02:42:01" },
              { price: 596.59, amount: 0.045, time: "02:42:01" },
              { price: 596.58, amount: 0.045, time: "02:42:01" },
              { price: 596.57, amount: 0.045, time: "02:42:01" },
              { price: 596.56, amount: 0.045, time: "02:42:01" },
              { price: 596.55, amount: 0.045, time: "02:42:01" },
            ].map((order, i) => (
              <div
                key={`buy-${i}`}
                className="grid grid-cols-3 px-3 py-1 text-[10px] border-b border-[#1f2128]/50 relative"
              >
                <div className="text-[#15b34c] z-10">{order.price.toFixed(2)}</div>
                <div className="z-10">{order.amount.toFixed(3)}</div>
                <div className="z-10">{(order.price * order.amount).toFixed(2)}</div>
                <div
                  className="absolute left-0 top-0 h-full bg-[#15b34c]/10"
                  style={{ width: `${Math.min(order.amount * 3, 100)}%` }}
                ></div>
              </div>
            ))}
          </>
        )}
      </div>

      <div className="px-3 py-1 border-t border-[#1f2128] flex justify-between items-center">
        <div className="text-[10px]">
          <span className="text-[#15b34c]">8.50 50%</span>
          <span className="mx-2">|</span>
          <span className="text-[#f6465d]">53.37% 5</span>
        </div>
      </div>
    </div>
  )
}
