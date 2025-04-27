"use client"

import { useState } from "react"
import { ChevronDown, Clock, Maximize2, Settings } from "lucide-react"

export default function TradingChart() {
  const [timeframe, setTimeframe] = useState("1h")

  const timeframes = ["1m", "5m", "15m", "1h", "4h", "1d", "1w", "1M"]

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between px-2 py-1 border-b border-[#1f2128]">
        <div className="flex items-center gap-1">
          <div className="flex">
            {timeframes.map((tf) => (
              <button
                key={tf}
                className={`px-1.5 py-0.5 text-[9px] ${timeframe === tf ? "bg-[#1f2128] text-white" : "text-[#6f6a6b]"}`}
                onClick={() => setTimeframe(tf)}
              >
                {tf}
              </button>
            ))}
          </div>

          <button className="flex items-center gap-0.5 text-[9px] text-[#6f6a6b] hover:text-white ml-1">
            <Clock className="h-2.5 w-2.5" />
            <span>Time</span>
            <ChevronDown className="h-2.5 w-2.5" />
          </button>
        </div>

        <div className="flex items-center gap-1.5">
          <button className="text-[#6f6a6b] hover:text-white">
            <Settings className="h-3 w-3" />
          </button>
          <button className="text-[#6f6a6b] hover:text-white">
            <Maximize2 className="h-3 w-3" />
          </button>
        </div>
      </div>

      <div className="flex-1 relative">
        {/* Placeholder for the actual chart */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full bg-gradient-to-b from-[#f6465d]/5 to-[#15b34c]/5 relative overflow-hidden">
            {/* Candlestick chart mockup */}
            <svg width="100%" height="100%" viewBox="0 0 800 300" preserveAspectRatio="none">
              <g>
                {/* Price line */}
                <path
                  d="M0,150 C50,120 100,180 150,160 C200,140 250,190 300,170 C350,150 400,200 450,180 C500,160 550,210 600,190 C650,170 700,220 750,200 C800,180 850,230 900,210"
                  stroke="#edb546"
                  strokeWidth="1.5"
                  fill="none"
                />

                {/* Volume bars */}
                <g transform="translate(0, 250)">
                  {Array.from({ length: 30 }).map((_, i) => (
                    <rect
                      key={i}
                      x={i * 20}
                      y={0}
                      width={10}
                      height={-(Math.random() * 40 + 10)}
                      fill={Math.random() > 0.5 ? "#15b34c" : "#f6465d"}
                      opacity={0.7}
                    />
                  ))}
                </g>

                {/* Candlesticks */}
                {Array.from({ length: 30 }).map((_, i) => {
                  const open = 150 - Math.random() * 60 + 30
                  const close = 150 - Math.random() * 60 + 30
                  const high = Math.min(open, close) - Math.random() * 20
                  const low = Math.max(open, close) + Math.random() * 20
                  const isGreen = close < open

                  return (
                    <g key={i} transform={`translate(${i * 20 + 5}, 0)`}>
                      {/* Wick */}
                      <line x1={5} y1={high} x2={5} y2={low} stroke={isGreen ? "#15b34c" : "#f6465d"} strokeWidth={1} />
                      {/* Body */}
                      <rect
                        x={0}
                        y={Math.min(open, close)}
                        width={10}
                        height={Math.abs(close - open)}
                        fill={isGreen ? "#15b34c" : "#f6465d"}
                      />
                    </g>
                  )
                })}
              </g>
            </svg>

            {/* Current price line */}
            <div className="absolute right-0 top-[40%] left-0 border-b border-dashed border-[#edb546]/50 flex justify-end">
              <div className="bg-[#edb546]/20 text-[#edb546] text-[9px] px-1 py-0.5">596.54</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
