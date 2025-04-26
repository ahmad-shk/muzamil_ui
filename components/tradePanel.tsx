"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function TradePanel() {
  const [price, setPrice] = useState(596.54);
  const [amount, setAmount] = useState(596.54);

  return (
    <div className="max-w-2xl mx-auto bg-black text-white rounded-2xl p-6 shadow-lg">
      <div className="flex justify-center space-x-4 mb-6">
        <button className="text-yellow-500 border-b-2 border-yellow-500 pb-1">Buy Long</button>
        <button className="text-gray-400">Sell Short</button>
      </div>

      <div className="text-sm text-yellow-500 mb-4">Balance: 0.00 USDT</div>

      {/* Buy Section */}
      <div className="grid grid-cols-2 gap-6">
        {/* Buy Form */}
        <div>
          <div className="space-y-4">
            <div>
              <label className="text-sm">Price</label>
              <div className="flex items-center mt-1">
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(parseFloat(e.target.value))}
                  className="w-full p-2 rounded bg-gray-800 focus:outline-none"
                />
                <span className="ml-2">USDT</span>
              </div>
            </div>
            <div>
              <label className="text-sm">Amount</label>
              <div className="flex items-center mt-1">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(parseFloat(e.target.value))}
                  className="w-full p-2 rounded bg-gray-800 focus:outline-none"
                />
                <span className="ml-2">BNB</span>
              </div>
            </div>
          </div>

          {/* Percentage Buttons */}
          <div className="flex justify-between items-center text-xs text-yellow-500 mt-4">
            {[20, 30, 40, 50, 60].map((percent) => (
              <button key={percent}>{percent}%</button>
            ))}
          </div>

          {/* AVBL and Max Buy */}
          <div className="text-xs text-gray-400 mt-4">
            <div>AVBL: - USDT</div>
            <div className="underline cursor-pointer">Max Buy: -- BNB</div>
          </div>

          <Button className="w-full mt-4 bg-green-500 hover:bg-green-600">Buy</Button>
        </div>

        {/* Sell Form */}
        <div>
          <div className="space-y-4">
            <div>
              <label className="text-sm">Price</label>
              <div className="flex items-center mt-1">
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(parseFloat(e.target.value))}
                  className="w-full p-2 rounded bg-gray-800 focus:outline-none"
                />
                <span className="ml-2">USDT</span>
              </div>
            </div>
            <div>
              <label className="text-sm">Amount</label>
              <div className="flex items-center mt-1">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(parseFloat(e.target.value))}
                  className="w-full p-2 rounded bg-gray-800 focus:outline-none"
                />
                <span className="ml-2">BNB</span>
              </div>
            </div>
          </div>

          {/* Percentage Buttons */}
          <div className="flex justify-between items-center text-xs text-yellow-500 mt-4">
            {[20, 30, 40, 50, 60].map((percent) => (
              <button key={percent}>{percent}%</button>
            ))}
          </div>

          {/* AVBL and Max Sell */}
          <div className="text-xs text-gray-400 mt-4">
            <div>AVBL: -- BNB</div>
            <div className="underline cursor-pointer">Max Buy: - USDT</div>
          </div>

          <Button className="w-full mt-4 bg-red-500 hover:bg-red-600">Sell</Button>
        </div>
      </div>
    </div>
  );
}
