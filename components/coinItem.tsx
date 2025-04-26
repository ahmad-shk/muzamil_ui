
export default function CoinItem({ coin, price, change }: { coin: string; price: string; change: string }) {
    return (
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center ${
              coin === "BNB" ? "bg-[#f0b90b]" : coin === "BTC" ? "bg-[#f7931a]" : "bg-[#5f7edd]"
            }`}
          >
            <span className="text-xs font-bold">{coin.charAt(0)}</span>
          </div>
          <span>{coin}</span>
        </div>
        <div className="text-right">
          <div>{price}</div>
          <div className="text-[#15b34c] text-sm">{change}</div>
        </div>
      </div>
    )
  }