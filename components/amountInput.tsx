"use client";

import { IncrimentIcon, IconDic } from "./svg";

// Define types for the props
interface AmountInputProps {
  value: string | number; // This can be a string or a number, depending on how you handle it
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // The function to handle input changes
  label?: string; // Optional label, default is 'Amount'
  unit?: string; // Optional unit, default is 'BNB'
  onIncrement: () => void; // Function to handle increment
  onDecrement: () => void; // Function to handle decrement
}

export default function AmountInput({
  value,
  onChange,
  label = "Amount",
  unit = "BNB",
  onIncrement,
  onDecrement,
}: AmountInputProps) {
  return (
    <div className="flex overflow-hidden rounded border border-gray-700">
      <div className="flex-1 px-4 py-3">
        <div className="flex items-center justify-between gap-2">
          <label className="text-white">{label}</label>
          <div className="flex items-center">
            <input
              type="text"
              value={value}
              onChange={onChange}
              className="bg-transparent text-right text-[#edb546] outline-none w-24 sm:w-32"
            />
            <span className="ml-1 text-[#edb546]">{unit}</span>
          </div>
        </div>
      </div>
      <div className="flex w-8 flex-col border-l border-gray-700 justify-center items-center">
        <button className="flex-1 hover:bg-[#0e0f12]/80" onClick={onIncrement}>
          <div className="mx-auto text-white">
            <IncrimentIcon />
          </div>
        </button>
        <button className="flex-1 border-t border-gray-700 hover:bg-[#0e0f12]/80" onClick={onDecrement}>
          <div className="mx-auto text-white">
            <IconDic />
          </div>
        </button>
      </div>
    </div>
  );
}
