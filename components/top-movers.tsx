"use client"

import { ChevronDown } from "lucide-react"

export default function TopMovers() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between px-3 py-2 border-b border-[#1f2128]">
        <h3 className="font-medium text-xs">Top Movers</h3>
        <button className="text-[#6f6a6b] hover:text-white">
          <ChevronDown className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="grid grid-cols-3 px-3 py-1 text-[10px] text-[#6f6a6b] border-b border-[#1f2128]">
        <div>All</div>
        <div>Change</div>
        <div>New High/Low</div>
      </div>

      <div className="flex-1 overflow-auto">
        {[
          { pair: "ALPHA/USDT", price: "0.23453", change: "-2.51%", direction: "down" },
          { pair: "WING/USDT", price: "0.23453", change: "+2.51%", direction: "up" },
        ].map((item, i) => (
          <div
            key={i}
            className="grid grid-cols-3 px-3 py-1 text-[10px] border-b border-[#1f2128]/50 hover:bg-[#1f2128]/50"
          >
            <div className="flex flex-col">
              <span>{item.pair}</span>
              <span className="text-[#6f6a6b] text-[8px]">[1min] Small Bias</span>
            </div>
            <div className={item.direction === "up" ? "text-[#15b34c]" : "text-[#f6465d]"}>{item.change}</div>
            <div>
              <div className={`w-4 h-2.5 rounded ${item.direction === "up" ? "bg-[#15b34c]" : "bg-[#f6465d]"}`}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
