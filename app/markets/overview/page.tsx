import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpDown } from "lucide-react"
import Footer from "@/components/footer"
import Header from "@/components/header"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#090a0c] text-white">
      {/* Header */}
    
    <Header/> 
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Market Overview */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Market Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Hot Coins */}
            <div className="bg-[#14161b] rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Hot Coins</h3>
                <Link href="/hot-coins" className="text-[#f0b90b] flex items-center text-sm">
                  More <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
              <div className="space-y-3">
                <CoinItem coin="BNB" price="$120.00" change="+1.03%" />
                <CoinItem coin="BTC" price="$31.52K" change="+5.03%" />
                <CoinItem coin="ETH" price="$1.52K" change="+1.00%" />
              </div>
            </div>

            {/* Top Gainer Coin */}
            <div className="bg-[#14161b] rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Top Gainer Coin</h3>
                <Link href="/top-gainers" className="text-[#f0b90b] flex items-center text-sm">
                  More <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
              <div className="space-y-3">
                <CoinItem coin="BNB" price="$120.00" change="+1.03%" />
                <CoinItem coin="BTC" price="$31.52K" change="+5.03%" />
                <CoinItem coin="ETH" price="$1.52K" change="+1.00%" />
              </div>
            </div>

            {/* Top Volume Price */}
            <div className="bg-[#14161b] rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Top Volume Price</h3>
                <Link href="/top-volume" className="text-[#f0b90b] flex items-center text-sm">
                  More <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
              <div className="space-y-3">
                <CoinItem coin="BNB" price="$120.00" change="+1.03%" />
                <CoinItem coin="BTC" price="$31.52K" change="+5.03%" />
                <CoinItem coin="ETH" price="$1.52K" change="+1.00%" />
              </div>
            </div>
          </div>
        </section>

        {/* Top Tokens by Market Capitalization */}
        <section className="mb-12">
          <div className="bg-[#14161b] rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Top Tokens by Market Capitalization</h2>
            <p className="text-gray-400 mb-4">
              Lorem ipsum dolor sit amet consectetur. Vulputat volutpat tempus erat maecenas congue nam in. Orci euismod
              non turpis sapien tellus ipsum. Orci laoreet lacinia dui lacinia eget. Eget urna odio lectus et sed donec.
              Tortor urna vel felis dictum facilisis est justo mi nisi. Egestas sed tempor semper augue at.
            </p>
            <button className="text-[#f0b90b] flex items-center text-sm mb-4">
              Show More <ArrowRight className="h-4 w-4 ml-1" />
            </button>

            {/* Tokens Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#2b2d32]">
                    <th className="text-left py-4 px-2 font-medium flex items-center">
                      Name <ArrowUpDown className="h-4 w-4 ml-1" />
                    </th>
                    <th className="text-left py-4 px-2 font-medium">
                      <div className="flex items-center">
                        Price <ArrowUpDown className="h-4 w-4 ml-1" />
                      </div>
                    </th>
                    <th className="text-left py-4 px-2 font-medium">
                      <div className="flex items-center">
                        24h <ArrowUpDown className="h-4 w-4 ml-1" />
                      </div>
                    </th>
                    <th className="text-left py-4 px-2 font-medium">
                      <div className="flex items-center">
                        24 Volume <ArrowUpDown className="h-4 w-4 ml-1" />
                      </div>
                    </th>
                    <th className="text-left py-4 px-2 font-medium">
                      <div className="flex items-center">
                        Market Cap <ArrowUpDown className="h-4 w-4 ml-1" />
                      </div>
                    </th>
                    <th className="text-left py-4 px-2 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(10)].map((_, index) => (
                    <TokenRow key={index} coin={index % 3 === 0 ? "BNB" : index % 3 === 1 ? "BTC" : "ETH"} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Subscribe Section */}
        <section className="py-16 text-center">
          <h2 className="text-3xl font-bold mb-8">Subscribe Now</h2>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="E-mail Address"
              className="bg-transparent border-b border-gray-600 py-2 px-4 w-full focus:outline-none focus:border-[#f0b90b]"
            />
            <button className="bg-[#f0b90b] text-black p-2 ml-2">
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}



function CoinItem({ coin, price, change }: { coin: string; price: string; change: string }) {
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

function TokenRow({ coin }: { coin: string }) {
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

function SocialIcon({ name }: { name: string }) {
  // This is a simplified version - in a real app, you'd use proper social icons
  return (
    <div className="w-6 h-6 rounded-full bg-white bg-opacity-10 flex items-center justify-center">
      <span className="sr-only">{name}</span>
      <span className="text-xs">{name.charAt(0).toUpperCase()}</span>
    </div>
  )
}