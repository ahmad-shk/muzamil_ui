"use client"

import { useState } from "react"
import { IconDic, IncrimentIcon } from "./svg"

export default function TradingInterface() {
  const [buyPrice, setBuyPrice] = useState("596.54")
  const [buyAmount, setBuyAmount] = useState("596.54")
  const [sellPrice, setSellPrice] = useState("596.54")
  const [sellAmount, setSellAmount] = useState("596.54")
  const [buyPercentage, setBuyPercentage] = useState(20)
  const [sellPercentage, setSellPercentage] = useState(20)

  const percentages = [20, 30, 40, 50, 60]

  return (
    <div className="rounded-xl border border-gray-700 pb-6 text-white mx-auto">

        {/* Buy Long Section */}
        <div className="grid grid-cols-2 gap-6 text-[14px] font-semibold text-[#edb546] pb-1 pt-5 px-5 border-b border-[#1F2128] ">
          <h2>Buy Long</h2>
          <h2>Sell Short</h2>
        </div>

        <div className="px-5 pt-3 pb-5">
            <p className="text-[12px] text-[#edb546]">Balance: 0.00 USDT</p>
        </div>

          {/* Price Input */}
          <div className="grid grid-cols-2 gap-6 px-5 text-[12px] max-[740px]:grid-cols-1 max-[740px]:grid-rows-2">
          <div>
          <div className="mb-4">
            <div className="flex rounded border border-gray-700">
              <div className="flex-1 px-4 py-3">
                <div className="flex items-center justify-between gap-2">
                  <label className=" text-white">Price</label>
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={buyPrice}
                      onChange={(e) => setBuyPrice(e.target.value)}
                      className="bg-transparent text-right text-[#edb546] outline-none"
                    />
                    <span className="ml-1 text-[#edb546]">USDT</span>
                  </div>
                </div>
              </div>
              <div className="flex w-8 flex-col border-l border-gray-700 justify-center items-center">
                <button className="flex-1 hover:bg-[#0e0f12]/80">
                  <div className="mx-auto text-white">
                    <IncrimentIcon />
                  </div>
                </button>
                <button className="flex-1 border-t border-gray-700 hover:bg-[#0e0f12]/80">
                  <div className="mx-auto text-white">
                    <IconDic />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Amount Input */}
          <div className="mb-4">
            <div className="flex rounded border border-gray-700">
              <div className="flex-1 px-4 py-3">
                <div className="flex items-center justify-between gap-2">
                  <label className=" text-white">Amount</label>
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={buyAmount}
                      onChange={(e) => setBuyAmount(e.target.value)}
                      className="bg-transparent text-right text-[#edb546] outline-none w-24 sm:w-32"
                    />
                    <span className="ml-1 text-[#edb546]">BNB</span>
                  </div>
                </div>
              </div>
              <div className="flex w-8 flex-col border-l border-gray-700 justify-center items-center">
                <button className="flex-1 hover:bg-[#0e0f12]/80">
                  <div className="mx-auto text-white">
                    <IncrimentIcon />
                  </div>
                </button>
                <button className="flex-1 border-t border-gray-700 hover:bg-[#0e0f12]/80">
                  <div className="mx-auto text-white">
                    <IconDic />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Percentage Selector */}
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            {percentages.map((percent) => (
              <div key={`buy-${percent}`} className="flex flex-col items-center">
                <button
                  className={`h-6 w-6 rotate-45 ${
                    buyPercentage === percent
                      ? "bg-[#edb546]"
                      : "border border-[#edb546]"
                  }`}
                  onClick={() => setBuyPercentage(percent)}
                />
                <span className="mt-1 text-white">{percent}%</span>
              </div>
            ))}
          </div>

          {/* AVBL and Max Buy */}
          <div className="mb-2 flex justify-between">
            <span className="text-white">AVBL</span>
            <span className="text-white">- USDT</span>
          </div>
          <div className="pb-8 flex justify-between">
            <button className="text-white underline">Max Buy</button>
            <span className="text-white">-- BNB</span>
          </div>

          {/* Buy Button */}
          <button className="w-full rounded-xl bg-[#15b34c] py-3 text-center text-[14px] font-semibold text-white hover:bg-[#13a045]">
            Buy
          </button>
        </div>




        {/* Sell Short Section */}
          {/* Price Input */}
          <div className="">
            <div className="flex overflow-hidden rounded border border-gray-700 mb-4">
              <div className="flex-1 px-4 py-3">
                <div className="flex items-center justify-between gap-2">
                  <label className=" text-white">Price</label>
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={sellPrice}
                      onChange={(e) => setSellPrice(e.target.value)}
                      className="bg-transparent text-right text-[#edb546] outline-none w-24 sm:w-32"
                    />
                    <span className="ml-1 text-[#edb546]">USDT</span>
                  </div>
                </div>
              </div>
              <div className="flex w-8 flex-col border-l border-gray-700 justify-center items-center">
                <button className="flex-1 hover:bg-[#0e0f12]/80">
                  <div className="mx-auto text-white">
                    <IncrimentIcon />
                  </div>
                </button>
                <button className="flex-1 border-t border-gray-700 hover:bg-[#0e0f12]/80">
                  <div className="mx-auto text-white">
                    <IconDic />
                  </div>
                </button>
              </div>
            </div>
  

          {/* Amount Input */}
          <div className="mb-4">
            <div className="flex overflow-hidden rounded border border-gray-700">
              <div className="flex-1 px-4 py-3">
                <div className="flex items-center justify-between gap-2">
                  <label className="text-white">Amount</label>
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={sellAmount}
                      onChange={(e) => setSellAmount(e.target.value)}
                      className="bg-transparent text-right text-[#edb546] outline-none w-24 sm:w-32"
                    />
                    <span className="ml-1 text-[#edb546]">BNB</span>
                  </div>
                </div>
              </div>
              <div className="flex w-8 flex-col border-l border-gray-700 justify-center items-center">
                <button className="flex-1 hover:bg-[#0e0f12]/80">
                  <div className="mx-auto text-white">
                    <IncrimentIcon />
                  </div>
                </button>
                <button className="flex-1 border-t border-gray-700 hover:bg-[#0e0f12]/80">
                  <div className="mx-auto text-white">
                    <IconDic />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Percentage Selector */}
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            {percentages.map((percent) => (
              <div key={`sell-${percent}`} className="flex flex-col items-center">
                <button
                  className={`h-6 w-6 rotate-45 ${
                    sellPercentage === percent
                      ? "bg-[#edb546]"
                      : "border border-[#edb546]"
                  }`}
                  onClick={() => setSellPercentage(percent)}
                />
                <span className="mt-1  text-white">{percent}%</span>
              </div>
            ))}
          </div>

          {/* AVBL and Max Sell */}
          <div className="mb-2 flex justify-between ">
            <span className="text-white">AVBL</span>
            <span className="text-white">-- BNB</span>
          </div>
          <div className="pb-8 flex justify-between ">
            <button className="text-white underline">Max Sell</button>
            <span className="text-white">- USDT</span>
          </div>

          {/* Sell Button */}
          <button className="w-full rounded-xl bg-[#f6465d] py-3 text-center font-semibold text-[14px] text-white hover:bg-[#dc3545]">
            Sell
          </button>
      </div>
      </div>
    </div>
  )
}
