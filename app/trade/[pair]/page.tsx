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
import Header from "@/components/header"
import TradePanel from "@/components/tradePanel"

export default function Home() {
  return (
    <div className=" bg-[#090a0c] text-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="mx-auto px-4 py-8">
        {/* Trading Pair Info */}
        <div className="flex gap-3">
          <div className="flex flex-col gap-3 grow">
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


            {/* Trading Interface */}
            <div className="flex gap-3">
              {/* Order Book */}
              <div className="bg-[#14161b] rounded-lg ">
                <OrderBook />
              </div>

              {/* Chart and Trading View */}
              <div className="flex flex-col gap-3 grow">
                <div className=" rounded-lg h-[350px]">
                  <TradingChart />
                </div>
                <div className=" rounded-lg">
                  <TradePanel />
                </div>
              </div>
            </div>
          </div>

          {/* Market Trades and Buy/Sell */}
          <div className="flex flex-col gap-3">
            <div className="bg-[#14161b] rounded-lg ">
              <div className="p-2.5 bg-[#14161b] rounded-lg flex items-center">
                <CryptoTable />
              </div>
            </div>
            <div className="bg-[#14161b] rounded-lg ">
              <MarketTrades />
            </div>
            <div className="bg-[#14161b] rounded-lg ">
              <TopMovers />
            </div>
          </div>
        </div>


        {/* Order History */}
        <div className="mt-3 bg-[#14161b] rounded-lg ">
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
