import { ArrowUpDown } from "lucide-react";

export default function TokenRow({ coin }: { coin: string }) {
    return (
      <tr className="border-b border-[#2b2d32]">
        <td className="py-4 px-2">
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
        </td>
        <td className="py-4 px-2">$120.00</td>
        <td className="py-4 px-2 text-[#15b34c]">+1.03%</td>
        <td className="py-4 px-2">$120.00B</td>
        <td className="py-4 px-2">$1,587.71B</td>
        <td className="py-4 px-2">
          <div className="flex justify-center">
            <ArrowUpDown className="h-5 w-5" />
          </div>
        </td>
      </tr>
    )
  }
  