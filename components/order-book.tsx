"use client"

import { useState } from "react"
import { ChevronRight, MoreHorizontal } from "lucide-react"
import { buyOrders, sellOrders } from "./payloads"

export default function OrderBook() {
  const [activeView, setActiveView] = useState(1)


  // Function to determine how many sell orders to show
 // Function to determine how many sell orders to show
const getSellOrders = () => {
  if (activeView === 1) {
    return sellOrders.slice(0, 13);
  } else if (activeView === 3) {
    return sellOrders.slice(0, 25);
  }
  return [];
}

// Function to determine how many buy orders to show
const getBuyOrders = () => {
  if (activeView === 1) {
    return buyOrders.slice(0, 12);
  } else if (activeView === 2) {
    return buyOrders.slice(0, 25);
  }
  return [];
}

  return (
    <div className="rounded-xl border-2 border-gray-800 text-[14px] min-h-full max-h-full pb-4 flex flex-col justify-between">

      <div className="border-b border-[#090a0c]">
        <div className="flex items-center justify-between px-4 py-1 pt-4">
          <h1 className="font-semibold text-[#edb546]">Order Book</h1>
          <button className="text-white">
            <MoreHorizontal size={20} />
          </button>
        </div>
        <div className="border-b border-gray-800"></div> {/* Added line */}
      </div>

      <div className="grow">

      <div className="flex gap-2 px-4 py-2 bg-[#090a0c]">
        <ViewToggle id={1} active={activeView === 1} onClick={() => setActiveView(1)} />
        <ViewToggle id={2} active={activeView === 2} onClick={() => setActiveView(2)} />
        <ViewToggle id={3} active={activeView === 3} onClick={() => setActiveView(3)} />
      </div>

      <div className="flex justify-between gap-8 px-4 pb-2 text-[12px] text-white">
        <div className="whitespace-nowrap">Price (USDT)</div>
        <div className="whitespace-nowrap text-left w-[100px]">Amount (BNB)</div>
        <div className="text-right">Total</div>
      </div>

      <div className="px-4">
        {/* Sell orders (red) */}
        <div className="bg-[red]"> 
        {getSellOrders().map((order, index) => (
          <div key={`sell-${index}`} className="flex py-[4px] justify-between">
            <div className="text-[#f6465d]">{order.price}</div>
            <div className="text-[#edb546]">{order.amount}</div>
            <div className="text-right text-[#edb546]">{order.time}</div>
          </div>
        ))}
        </div>

        {/* Current price indicator */}
        <div className="flex items-center justify-between py-4 border-y border-[#090a0c]">
          <div className="flex items-end justify-center">
            <span className="text-[#15b34c] leading-[100%] font-[600] text-[20px]">596.83</span>
            <span className="text-[#15b34c] ml-1">↑</span>
            <span className="text-white text-[12px] px-1">$597.73</span>
          </div>
          <ChevronRight className="text-[#edb546]" size={20} />
        </div>

        {/* Buy orders (green) */}
        <div className="bg-[green]">
        {getBuyOrders().map((order, index) => (
          <div key={`buy-${index}`} className="flex justify-between py-[4px]">
            <div className="text-[#15b34c]">{order.price}</div>
            <div className="text-[#edb546]">{order.amount}</div>
            <div className="text-right text-[#edb546]">{order.time}</div>
          </div>
        ))}
        </div>
      </div>
      </div>

      {/* Progress bar */}
      <div className="px-4 text-[12px] flex gap-2">
        <div className="flex items-center grow gap-1.5">
          <div className="text-[#15b34c]">B 50.60%</div>
          <div className="grow h-1.5 bg-[#15b34c]"></div>
        </div>
        <div className="flex items-center grow gap-1.5">
          <div className="grow h-1.5 bg-[#f6465d]"></div>
          <div className="text-[#f6465d]">53.21% S</div>
        </div>
      </div>
    </div>
  )
}

function ViewToggle({ id, active, onClick }: { id: number; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`flex h-6 w-6 items-center justify-center rounded ${active ? "bg-[#1f2128]" : "bg-transparent"}`}
    >
      <div className="relative">
        {/* Colored indicators */}
        {id === 1 && (
          <>
            <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="4" height="4" fill="#F6465D" />
              <rect x="5" width="6" height="2" fill="#D9D9D9" />
              <rect x="5" y="3.5" width="6" height="2" fill="#D9D9D9" />
              <rect x="5" y="7" width="6" height="2" fill="#D9D9D9" />
              <rect y="5" width="4" height="4" fill="#15B34C" />
            </svg>


          </>
        )}
        {id === 2 && (
          <>
            <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="5" width="6" height="2" fill="#D9D9D9" />
              <rect x="5" y="3.5" width="6" height="2" fill="#D9D9D9" />
              <rect x="5" y="7" width="6" height="2" fill="#D9D9D9" />
              <rect width="4" height="9" fill="#15B34C" />
            </svg>

          </>
        )}
        {id === 3 && (
          <>
            <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="5" width="6" height="2" fill="#D9D9D9" />
              <rect x="5" y="3.5" width="6" height="2" fill="#D9D9D9" />
              <rect x="5" y="7" width="6" height="2" fill="#D9D9D9" />
              <rect width="4" height="9" fill="#F6465D" />
            </svg>

          </>
        )}
      </div>
    </button>
  )
}
