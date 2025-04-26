import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"
import TradingChart from "@/components/trading-chart"
import OrderBook from "@/components/order-book"
import MarketTrades from "@/components/market-trades"
import TradingView from "@/components/trading-view"
import BuySellPanel from "@/components/buy-sell-panel"
import TopMovers from "@/components/top-movers"
import OrderTabs from "@/components/order-tabs"
import Footer from "@/components/footer"
import CryptoTable from "@/components/CryptoTable"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#090a0c] text-white">
      {/* Header */}
      <header className="border-b border-[#1f2128] px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/markets/overview" className="flex items-center">
            <Image
              src="/logo.svg?height=36&width=140"
              alt="KGC Trading"
              width={140}
              height={36}
              className="h-9"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/trade/BTC_USDC" className="text-[#edb546] hover:text-[#edb546]/80 text-sm">
              Buy Crypto
            </Link>
            <Link href="/markets/overview" className="text-[#edb546] hover:text-[#edb546]/80 text-sm">
              Markets
            </Link>
          </nav>
        </div>
        <div>
          <Link
            href="/login"
            className="bg-[#edb546] hover:bg-[#edb546]/90 text-black font-medium px-4 py-1.5 rounded-md text-sm"
          >
            Log in
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Trading Pair Info */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-3 mb-3">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-3 p-2.5 bg-[#14161b] rounded-lg">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-[#edb546]/20 rounded-full flex items-center justify-center">
                <span className="text-[#edb546] font-bold text-xs">B</span>
              </div>
              <div>
                <h2 className="text-sm font-bold">BNB/USDT</h2>
                <p className="text-[10px] text-[#6f6a6b]">BNB Price</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 md:ml-6">
              <div className="flex flex-col">
                <span className="text-[10px] text-[#6f6a6b]">24h Change</span>
                <span className="text-[#f6465d] flex items-center text-[10px]">-10.10 -2.7%</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-[#6f6a6b]">24h High</span>
                <span className="text-[10px]">614.20</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-[#6f6a6b]">24h Low</span>
                <span className="text-[10px]">592.90</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-[#6f6a6b]">24h Volume (BNB)</span>
                <span className="text-[10px]">270,339.08</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-[#6f6a6b]">24h Volume (USDT)</span>
                <span className="text-[10px]">158,484,451.40</span>
              </div>
            </div>

            <div className="flex items-center gap-2 md:ml-auto">
              <span className="text-[10px] text-[#6f6a6b]">Token Tags:</span>
              <div className="flex gap-1">
                <span className="text-[9px] bg-[#0089d0]/20 text-[#0089d0] px-1.5 py-0.5 rounded">Layer 1</span>
                <span className="text-[9px] bg-[#0089d0]/20 text-[#0089d0] px-1.5 py-0.5 rounded">Layer 2</span>
                <span className="text-[9px] bg-[#0089d0]/20 text-[#0089d0] px-1.5 py-0.5 rounded">BNB Chain</span>
                <span className="text-[9px] bg-[#0089d0]/20 text-[#0089d0] px-1.5 py-0.5 rounded">Vol 1w</span>
              </div>
            </div>
          </div>

          <div className="p-2.5 bg-[#14161b] rounded-lg flex items-center">
            <div className="relative">
             <CryptoTable/>
            </div>
          </div>
        </div>

        {/* Trading Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr_320px] gap-3">
          {/* Order Book */}
          <div className="bg-[#14161b] rounded-lg overflow-hidden h-[500px]">
            <OrderBook />
          </div>

          {/* Chart and Trading View */}
          <div className="flex flex-col gap-3">
            <div className="bg-[#14161b] rounded-lg overflow-hidden h-[350px]">
              <TradingChart />
            </div>
            <div className="bg-[#14161b] rounded-lg overflow-hidden h-[142px]">
              <TradingView />
            </div>
          </div>

          {/* Market Trades and Buy/Sell */}
          <div className="flex flex-col gap-3">
            <div className="bg-[#14161b] rounded-lg overflow-hidden h-[200px]">
              <MarketTrades />
            </div>
            <div className="bg-[#14161b] rounded-lg overflow-hidden h-[220px]">
              <BuySellPanel />
            </div>
            <div className="bg-[#14161b] rounded-lg overflow-hidden h-[72px]">
              <TopMovers />
            </div>
          </div>
        </div>

        {/* Order History */}
        <div className="mt-3 bg-[#14161b] rounded-lg overflow-hidden">
          <OrderTabs />
        </div>

        {/* Login/Register CTA */}
        <div className="mt-6 text-center">
          <p className="text-[#6f6a6b] text-sm">
            <Link href="/login" className="text-[#edb546] hover:underline">
              Log in
            </Link>{" "}
            or{" "}
            <Link href="/register" className="text-[#edb546] hover:underline">
              Register Now
            </Link>{" "}
            to trade
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
