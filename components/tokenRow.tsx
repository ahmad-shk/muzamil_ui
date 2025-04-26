import { ArrowUpDown } from "lucide-react";
import Image from "next/image";  // 🛠️ yeh line add karo!
type TokenRowProps = {
  coin: string;
  img: string;
  price: string;
  change: string;
  volume: string;
  marketCap: string;
  arrow: string;
};
export default function TokenRow({ coin, img, price, change, volume, marketCap, arrow}: TokenRowProps) {
  return (
    <tr className="border-b border-[#2b2d32] last:border-0">
    <td className="py-4 px-4">
      <div className="flex items-center gap-2">
        <Image src={img} alt={coin} width={24} height={24} className="rounded-full" />
        <span className="text-[#EDB546] font-medium">{coin}</span>
      </div>
    </td>
    <td className="py-4 px-4 text-[#EDB546] font-medium">{price}</td>
    <td className={`py-4 px-4 font-medium ${change.startsWith('-') ? 'text-red-500' : 'text-[#15b34c]'}`}>
      {change}
    </td>
    <td className="py-4 px-4 text-[#EDB546] font-medium">{volume}</td>
    <td className="py-4 px-4 text-[#EDB546] font-medium">{marketCap}</td>
    <td className="py-4 px-4">
      <Image src={arrow} alt="arrow" width={20} height={20} />
    </td>
  </tr>
  )
}
