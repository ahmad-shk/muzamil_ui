"use client"

import { useState } from "react"
import { ChevronUp, ChevronDown } from "lucide-react"
import {  IconDic, IncrimentIcon } from "./svg"

export default function TradingInterface() {
  const [buyPrice, setBuyPrice] = useState("596.54")
  const [buyAmount, setBuyAmount] = useState("596.54")
  const [sellPrice, setSellPrice] = useState("596.54")
  const [sellAmount, setSellAmount] = useState("596.54")
  const [buyPercentage, setBuyPercentage] = useState(20)
  const [sellPercentage, setSellPercentage] = useState(20)

  const percentages = [20, 30, 40, 50, 60]

  return (
    <div className="w-full max-w-6xl rounded-2xl border border-gray-700 text-white p-4">

      <div className="grid grid-cols-2 gap-x-6">
        {/* Buy Long Section */}
        <div>
          <h2 className="mb-4 text-xl font-medium text-[#edb546]">Buy Long</h2>
          <div className="mb-4">
            <p className="text-lg text-[#edb546]">Balance: 0.00 USDT</p>
          </div>

          {/* Price Input */}
          <div className="mb-3">
            <div className="flex overflow-hidden rounded  border border-gray-700">
              <div className="flex-1 p-2">
                <div className="flex items-center justify-between">
                  <label className="text-lg text-white">Price</label>
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={buyPrice}
                      onChange={(e) => setBuyPrice(e.target.value)}
                      className="bg-transparent text-right text-xl text-[#edb546] outline-none"
                    />
                    <span className="ml-1 text-[#edb546]">USDT</span>
                  </div>
                </div>
              </div>
              <div className="flex w-12 flex-col border-l border-gray-700">
                <button className="flex-1 hover:bg-[#0e0f12]/80">
                  {/* <ChevronUp className="mx-auto h-4 w-4 text-white" />
                   */}
                   <div className="mx-auto h-4 w-4 text-white">
                <IncrimentIcon  />
                </div>
                </button>
                <button className="flex-1 border-t border-gray-700 hover:bg-[#0e0f12]/80">
                  {/* <ChevronDown className="mx-auto h-4 w-4 text-white" /> */}
                  <div className="mx-auto h-4 w-4 text-white">
                 <IconDic/>
                 </div>
                </button>
              </div>
            </div>
          </div>

          {/* Amount Input */}
          <div className="mb-4">
            <div className="flex overflow-hidden rounded  border border-gray-700">
              <div className="flex-1 p-2">
                <div className="flex items-center justify-between">
                  <label className="text-lg text-white">Amount</label>
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={buyAmount}
                      onChange={(e) => setBuyAmount(e.target.value)}
                      className="bg-transparent text-right text-xl text-[#edb546] outline-none"
                    />
                    <span className="ml-1 text-[#edb546]">BNB</span>
                  </div>
                </div>
              </div>
              <div className="flex w-12 flex-col border-l border-gray-700">
              <button className="flex-1 hover:bg-[#0e0f12]/80">
                  {/* <ChevronUp className="mx-auto h-4 w-4 text-white" />
                   */}
                   <div className="mx-auto h-4 w-4 text-white">
                <IncrimentIcon  />
                </div>
                </button>
                <button className="flex-1 border-t border-gray-700 hover:bg-[#0e0f12]/80">
                  {/* <ChevronDown className="mx-auto h-4 w-4 text-white" /> */}
                  <div className="mx-auto h-4 w-4 text-white">
                 <IconDic/>
                 </div>
                </button>
              </div>
            </div>
          </div>

          {/* Percentage Selector */}
          <div className="mb-4 flex items-center justify-between">
            {percentages.map((percent) => (
              <div key={`buy-${percent}`} className="flex flex-col items-center">
                <button
                  className={`h-4 w-4 rotate-45 ${
                    buyPercentage === percent ? "bg-[#edb546]" : "border border-[#edb546]"
                  }`}
                  onClick={() => setBuyPercentage(percent)}
                />
                <span className="mt-2 text-white">{percent}%</span>
              </div>
            ))}
          </div>

          {/* AVBL and Max Buy */}
          <div className="mb-2 flex justify-between">
            <span className="text-white">AVBL</span>
            <span className="text-white">- USDT</span>
          </div>
          <div className="mb-4 flex justify-between">
            <button className="text-white underline">Max Buy</button>
            <span className="text-white">-- BNB</span>
          </div>

          {/* Buy Button */}
          <button className="w-full rounded-xl bg-[#15b34c] py-3 text-center text-xl font-medium text-white hover:bg-[#13a045]">
            Buy
          </button>
        </div>

        {/* Sell Short Section */}
        <div>
          <h2 className="mb-4 text-xl font-medium text-[#edb546]">Sell Short</h2>
          <div className="mb-4">
            <p className="text-lg opacity-0">Balance: 0.00 USDT</p>
          </div>

          {/* Price Input */}
          <div className="mb-3">
            <div className="flex overflow-hidden rounded  border border-gray-700">
              <div className="flex-1 p-2">
                <div className="flex items-center justify-between">
                  <label className="text-lg text-white">Price</label>
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={sellPrice}
                      onChange={(e) => setSellPrice(e.target.value)}
                      className="bg-transparent text-right text-xl text-[#edb546] outline-none"
                    />
                    <span className="ml-1 text-[#edb546]">USDT</span>
                  </div>
                </div>
              </div>
              <div className="flex w-12 flex-col border-l border-gray-700">
              <button className="flex-1 hover:bg-[#0e0f12]/80">
                  {/* <ChevronUp className="mx-auto h-4 w-4 text-white" />
                   */}
                   <div className="mx-auto h-4 w-4 text-white">
                <IncrimentIcon  />
                </div>
                </button>
                <button className="flex-1 border-t border-gray-700 hover:bg-[#0e0f12]/80">
                  {/* <ChevronDown className="mx-auto h-4 w-4 text-white" /> */}
                  <div className="mx-auto h-4 w-4 text-white">
                 <IconDic/>
                 </div>
                </button>
              </div>
            </div>
          </div>

          {/* Amount Input */}
          <div className="mb-4">
            <div className="flex overflow-hidden rounded  border border-gray-700">
              <div className="flex-1 p-2">
                <div className="flex items-center justify-between">
                  <label className="text-lg text-white">Amount</label>
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={sellAmount}
                      onChange={(e) => setSellAmount(e.target.value)}
                      className="bg-transparent text-right text-xl text-[#edb546] outline-none"
                    />
                    <span className="ml-1 text-[#edb546]">BNB</span>
                  </div>
                </div>
              </div>
              <div className="flex w-12 flex-col border-l border-gray-700">
              <button className="flex-1 hover:bg-[#0e0f12]/80">
                  {/* <ChevronUp className="mx-auto h-4 w-4 text-white" />
                   */}
                   <div className="mx-auto h-4 w-4 text-white">
                <IncrimentIcon  />
                </div>
                </button>
                <button className="flex-1 border-t border-gray-700 hover:bg-[#0e0f12]/80">
                  {/* <ChevronDown className="mx-auto h-4 w-4 text-white" /> */}
                  <div className="mx-auto h-4 w-4 text-white">
                 <IconDic/>
                 </div>
                </button>
              </div>
            </div>
          </div>

          {/* Percentage Selector */}
          <div className="mb-4 flex items-center justify-between">
            {percentages.map((percent) => (
              <div key={`sell-${percent}`} className="flex flex-col items-center">
                <button
                  className={`h-4 w-4 rotate-45 ${
                    sellPercentage === percent ? "bg-[#edb546]" : "border border-[#edb546]"
                  }`}
                  onClick={() => setSellPercentage(percent)}
                />
                <span className="mt-2 text-white">{percent}%</span>
              </div>
            ))}
          </div>

          {/* AVBL and Max Sell */}
          <div className="mb-2 flex justify-between">
            <span className="text-white">AVBL</span>
            <span className="text-white">-- BNB</span>
          </div>
          <div className="mb-4 flex justify-between">
            <button className="text-white underline">Max Sell</button>
            <span className="text-white">- USDT</span>
          </div>

          {/* Sell Button */}
          <button className="w-full rounded-xl bg-[#f6465d] py-3 text-center text-xl font-medium text-white hover:bg-[#dc3545]">
            Sell
          </button>
        </div>
      </div>
    </div>
  )
}
