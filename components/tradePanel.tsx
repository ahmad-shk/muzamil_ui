"use client"

import { useEffect, useState } from "react"
import { IconDic, IncrimentIcon } from "./svg"
import AmountInput from "./amountInput"
import PriceInput from "./PriceInput"

export default function TradingInterface() {
  const [buyPrice, setBuyPrice] = useState(596.54)
  const [buyAmount, setBuyAmount] = useState(596.54)
  const [sellPrice, setSellPrice] = useState(596.54)
  const [sellAmount, setSellAmount] = useState(596.54)
  const [buyPercentage, setBuyPercentage] = useState(20)
  const [sellPercentage, setSellPercentage] = useState(20)

  const percentages = [20, 30, 40, 50, 60]
  const [payload, setPayload] = useState({})

  useEffect(() => {
    setPayload({
      buy: {
        price: buyPrice,
        amount: buyAmount,
        percentage: buyPercentage,
      },
      sell: {
        price: sellPrice,
        amount: sellAmount,
        percentage: sellPercentage,
      },
    })
  }, [buyPrice, buyAmount, buyPercentage, sellPrice, sellAmount, sellPercentage])

  console.log("0000000", payload)

  return (
    <div className="rounded-xl border border-gray-700 pb-6 text-white mx-auto">
      {/* Buy Long Section */}
      <div className="grid grid-cols-2 gap-6 text-[14px] font-semibold text-[#edb546] pb-1 pt-5 px-5 border-b border-[#1F2128]">
        <h2>Buy Long</h2>
        <h2>Sell Short</h2>
      </div>
      <div className="px-5 pt-3 pb-5">
        <p className="text-[12px] text-[#edb546]">Balance: 0.00 USDT</p>
      </div>

      {/* Price Input */}
      <div className="grid grid-cols-2 gap-6 px-5 text-[12px] max-[740px]:grid-cols-1 max-[740px]:grid-rows-2">
        <div>
          <PriceInput
            value={buyPrice}
            onChange={(e) => setBuyPrice(parseFloat(e.target.value))}
            onIncrement={() => setBuyPrice(prev => Math.max(prev + 1, 0))}
            onDecrement={() => setBuyPrice(prev => Math.max(prev - 1, 0))}
            label="Price"
            unit="USDT"
          />
          <div className="mb-6">
            <AmountInput
              value={buyAmount}
              onChange={(e) => setBuyAmount(parseFloat(e.target.value))}
              onIncrement={() => setBuyAmount(prev => Math.max(prev + 1, 0))}
              onDecrement={() => setBuyAmount(prev => Math.max(prev - 1, 0))}
              label="Amount"
              unit="BNB"
            />
          </div>

          {/* Percentage Selector */}
          <div className="mb-4 flex relative items-center justify-between gap-2">
            {percentages.map((percent, index) => {
              const sizes = ["h-[16px] w-[16px]", "h-[14px] w-[14px]", "h-[12px] w-[12px]", "h-[10px] w-[10px]", "h-[8px] w-[8px]"];
              const size = sizes[index] || "h-[8px] w-[8px]"; // fallback if more items

              return (
                <div key={`sell-${percent}`} className="flex flex-col items-center relative z-[1] pt-[1px]">
                  <button
                    className={`${size} rotate-45 ${buyPercentage >= percent
                        ? "bg-[#edb546]"
                        : "border border-[#edb546]"
                      }`}
                    onClick={() => setBuyPercentage(percent)}
                  />
                  <span className="mt-1 text-white">{percent}%</span>
                </div>
              );
            })}
           <div className="absolute w-[90%] h-[2px] top-1/4 left-[5%] z-[0] bg-[#1F2128] -translate-y-1/2"></div>

          </div>


          {/* AVBL and Max Buy */}
          <div className="pb-2 pt-2.5 flex justify-between">
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
        <div>
          <PriceInput
            value={sellPrice}
            onChange={(e) => setSellPrice(parseFloat(e.target.value))}
            onIncrement={() => setSellPrice(prev => Math.max(prev + 1, 0))}
            onDecrement={() => setSellPrice(prev => Math.max(prev - 1, 0))}
            label="Price"
            unit="USDT"
          />
          <div className="mb-6">
            <AmountInput
              value={sellAmount}
              onChange={(e) => setSellAmount(parseFloat(e.target.value))}
              onIncrement={() => setSellAmount(prev => Math.max(prev + 1, 0))}
              onDecrement={() => setSellAmount(prev => Math.max(prev - 1, 0))}
              label="Amount"
              unit="BNB"
            />
          </div>

          {/* Percentage Selector */}
          <div className="mb-4 flex relative items-center justify-between gap-2">
            {percentages.map((percent, index) => {
              const sizes = ["h-[16px] w-[16px]", "h-[14px] w-[14px]", "h-[12px] w-[12px]", "h-[10px] w-[10px]", "h-[8px] w-[8px]"];
              const size = sizes[index] || "h-[8px] w-[8px]"; // fallback if more items

              return (
                <div key={`sell-${percent}`} className="flex flex-col items-center relative z-[1] pt-[1px]">
                  <button
                    className={`${size} rotate-45 ${sellPercentage >= percent
                        ? "bg-[#edb546]"
                        : "border border-[#edb546]"
                      }`}
                    onClick={() => setSellPercentage(percent)}
                  />
                  <span className="mt-1 text-white">{percent}%</span>
                </div>
              );
            })}
           <div className="absolute w-[90%] h-[2px] top-1/4 left-[5%] z-[0] bg-[#1F2128] -translate-y-1/2"></div>

          </div>


          {/* AVBL and Max Sell */}
          <div className="pb-2 pt-2.5 flex justify-between">
            <span className="text-white">AVBL</span>
            <span className="text-white">-- BNB</span>
          </div>
          <div className="pb-8 flex justify-between">
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
