"use client"

import { useState } from "react"
import { MoreHorizontal } from "lucide-react"

export default function MarketTrades() {
  const [activeTab, setActiveTab] = useState("market")

  return (
    <div className="-h-full flex flex-col rounded-xl">
      <div className="flex items-center justify-between px-4 py-2 pt-4 border-b border-[#1f2128] rounded-xl">
        <h3 className="font-medium text-xs">Market Trades</h3>
        <div className="flex items-center gap-1">
          <button
            className={`text-[10px] px-2 py-0.5 ${activeTab === "market" ? "bg-[#1f2128] rounded" : "text-[#6f6a6b]"}`}
            onClick={() => setActiveTab("market")}
          >
            Market Trades
          </button>
          <button
            className={`text-[10px] px-2 py-0.5 ${activeTab === "my" ? "bg-[#1f2128] rounded" : "text-[#6f6a6b]"}`}
            onClick={() => setActiveTab("my")}
          >
            My Trades
          </button>
          <button className="text-[#6f6a6b] hover:text-white ml-1">
            <MoreHorizontal className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 px-3 py-1 text-[10px] text-[#6f6a6b] border-b border-[#1f2128]">
        <div>Price (USDT)</div>
        <div>Amount (BNB)</div>
        <div>Time</div>
      </div>

      <div className="flex-1 overflow-auto">
        {[
          { price: 596.54, amount: 0.225, time: "02:42:01", type: "buy" },
          { price: 596.54, amount: 0.225, time: "02:42:01", type: "buy" },
          { price: 596.54, amount: 0.025, time: "02:42:01", type: "sell" },
          { price: 596.54, amount: 0.045, time: "02:42:01", type: "buy" },
          { price: 596.54, amount: 0.02, time: "02:42:01", type: "sell" },
          { price: 596.54, amount: 0.045, time: "02:42:01", type: "buy" },
          { price: 596.54, amount: 0.045, time: "02:42:01", type: "buy" },
          { price: 596.54, amount: 0.225, time: "02:42:01", type: "sell" },
          { price: 596.54, amount: 0.045, time: "02:42:01", type: "buy" },
          { price: 596.54, amount: 0.02, time: "02:42:01", type: "sell" },
          { price: 596.54, amount: 0.045, time: "02:42:01", type: "buy" },
        ].map((trade, i) => (
          <div
            key={i}
            className="flex justify-between px-3 py-1 text-[10px] border-b border-[#1f2128]/50 hover:bg-[#1f2128]/50"
          >
            <div className={trade.type === "buy" ? "text-[#15b34c]" : "text-[#f6465d]"}>{trade.price.toFixed(2)}</div>
            <div>{trade.amount.toFixed(3)}</div>
            <div className="text-[#6f6a6b]">{trade.time}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
