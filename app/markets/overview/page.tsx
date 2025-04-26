import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpDown } from "lucide-react"
import Footer from "@/components/footer"
import Header from "@/components/header"
import TokenRow from "@/components/tokenRow"
import HotCoins from "@/components/coinItem"


const tokenData = [
  {
    name: "BNB",
    img: "/Group.png",
    price: "$120.00",
    change: "+1.03%",
    volume: "$500M",
    marketCap: "$20B",
    arrow: "/Frame.png",
  },
  {
    name: "BTC",
    img: "/Group (1).png",
    price: "$31.52K",
    change: "+5.03%",
    volume: "$25B",
    marketCap: "$600B",
    arrow: "/Frame.png",
  },
  {
    name: "ETH",
    img: "/Group (2).png",
    price: "$1.52K",
    change: "+11.00%",
    volume: "$10B",
    marketCap: "$200B",
    arrow: "/Frame.png",
  },
  {
    name: "BNB",
    img: "/Group.png",
    price: "$120.00",
    change: "+1.03%",
    volume: "$500M",
    marketCap: "$20B",
    arrow: "/Frame.png",
  },
  {
    name: "BTC",
    img: "/Group (1).png",
    price: "$31.52K",
    change: "+5.03%",
    volume: "$25B",
    marketCap: "$600B",
    arrow: "/Frame.png",
  },
  {
    name: "ETH",
    img: "/Group (2).png",
    price: "$1.52K",
    change: "+11.00%",
    volume: "$10B",
    marketCap: "$200B",
    arrow: "/Frame.png",
  },
  {
    name: "BNB",
    img: "/Group.png",
    price: "$120.00",
    change: "+1.03%",
    volume: "$500M",
    marketCap: "$20B",
    arrow: "/Frame.png",
  },
  {
    name: "BTC",
    img: "/Group (1).png",
    price: "$31.52K",
    change: "+5.03%",
    volume: "$25B",
    marketCap: "$600B",
    arrow: "/Frame.png",
  },
  {
    name: "ETH",
    img: "/Group (2).png",
    price: "$1.52K",
    change: "+11.00%",
    volume: "$10B",
    marketCap: "$200B",
    arrow: "/Frame.png",
  },
];


export default function Home() {
  return (
    <div className="min-h-screen bg-[#090a0c] text-white">
      {/* Header */}

      <Header />
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Market Overview */}
        <section className="mb-8">
          <h2 className="text-2xl text-[#EDB546] font-bold mb-4">Market Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Hot Coins */}

            <div className="space-y-3">
              <HotCoins />
            </div>


            {/* Top Gainer Coin */}


            <div className="space-y-3">
              <HotCoins />
            </div>

            {/* Top Volume Price */}

            <div className="space-y-3">
              <HotCoins />
            </div>

          </div>
        </section>

        {/* Top Tokens by Market Capitalization */}

        <div className="mb-8 border border-[#2a2a2a] rounded-2xl p-6">
          <h2 className="text-2xl text-[#EDB546]  font-bold mb-4">Top Tokens by Market Capitalization</h2>
          <p className="text-gray-300 mb-4">
            Lorem ipsum dolor sit amet consectetur. Vulputat volutpat tempus erat maecenas congue nam in. Orci euismod
            non turpis sapien tellus ipsum. Orci laoreet lacinia dui lacinia eget. Eget urna odio lectus et sed donec.
            Tortor urna vel felis dictum facilisis est justo mi nisi. Egestas sed tempor semper augue at.
          </p>
          <button className=" flex items-center text-[#EDB546]  text-sm mb-4">
            Show More <ArrowRight className="h-4 w-4 ml-1" />
          </button>
        </div>





        <section className="mb-12">
          <div className="rounded-lg p-6 ">
            <div className="overflow-x-auto">
              <table className="w-full table-fixed">
                <thead>
                  <tr className="text-[#EDB546] text-sm">
                    <th className="text-left py-4 px-4 font-semibold">
                      <div className="flex items-center">
                        Name <ArrowUpDown className="h-4 w-4 ml-1" />
                      </div>
                    </th>
                    <th className="text-left py-4 px-4 font-semibold">
                      <div className="flex items-center">
                        Price <ArrowUpDown className="h-4 w-4 ml-1" />
                      </div>
                    </th>
                    <th className="text-left py-4 px-4 font-semibold">
                      <div className="flex items-center">
                        24h <ArrowUpDown className="h-4 w-4 ml-1" />
                      </div>
                    </th>
                    <th className="text-left py-4 px-4 font-semibold">
                      <div className="flex items-center">
                        24h Volume <ArrowUpDown className="h-4 w-4 ml-1" />
                      </div>
                    </th>
                    <th className="text-left py-4 px-4 font-semibold">
                      <div className="flex items-center">
                        Market Cap <ArrowUpDown className="h-4 w-4 ml-1" />
                      </div>
                    </th>
                    <th className="text-left py-4 px-4 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {tokenData.map((item, index) => (
                    <TokenRow
                      key={index}
                      coin={item.name}
                      img={item.img}
                      price={item.price}
                      change={item.change}
                      volume={item.volume}
                      marketCap={item.marketCap}
                      arrow={item.arrow}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}




