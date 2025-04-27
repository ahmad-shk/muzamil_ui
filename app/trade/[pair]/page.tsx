import Image from "next/image"
import Link from "next/link"
import { Search, StarIcon } from "lucide-react"
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
import OrdersPanel from "@/components/OrdersPanel"

export default function Home() {
  return (
    <div className=" bg-[#090a0c] text-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        {/* Trading Pair Info */}
        <div className="flex gap-3">
          <div className="flex flex-col gap-3 grow">

            <div className="w-full rounded-2xl p-3 border border-gray-800 bg-[#090A0CCC]">
              <div className="flex items-center justify-between text-white text-sm">
                <div className="flex items-center gap-1">
                  <button className="flex items-center justify-center w-8 h-8  text-gray-400 hover:text-[#edb546] transition-colors">
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="25" height="25" rx="6.5" stroke="white" />
                      <path d="M20.5709 11.2895C20.5241 11.145 20.4358 11.0174 20.3171 10.9226C20.1984 10.8278 20.0544 10.77 19.9031 10.7563L15.6859 10.3734L14.0193 6.47142C13.8962 6.18474 13.6162 5.99976 13.3046 5.99976C12.9929 5.99976 12.7128 6.18474 12.5906 6.47142L10.9239 10.3734L6.70604 10.7563C6.39682 10.7848 6.13499 10.9943 6.03826 11.2895C5.99113 11.4342 5.98746 11.5895 6.02772 11.7362C6.06797 11.8829 6.15038 12.0146 6.26473 12.1149L9.45262 14.9102L8.51269 19.0501C8.44392 19.3545 8.56205 19.6693 8.81463 19.8518C8.94692 19.9481 9.10635 19.9999 9.26995 19.9998C9.41018 19.9998 9.54779 19.9617 9.66808 19.8896L13.3046 17.7152L16.9404 19.8896C17.0708 19.9677 17.2213 20.0057 17.3732 19.999C17.525 19.9922 17.6715 19.9411 17.7946 19.8518C18.0471 19.6693 18.1653 19.3545 18.0965 19.0501L17.1565 14.9102L20.3444 12.1149C20.4588 12.0146 20.5412 11.8829 20.5815 11.7362C20.6217 11.5895 20.618 11.4342 20.5709 11.2896V11.2895Z" fill="white" fill-opacity="0.5" />
                    </svg>

                  </button>

                  <div className="flex flex-col">
                    <span className="text-[#edb546] text-base font-semibold text-[18px]">BNB/USDT</span>
                    <span className="text-[#edb546] text-[14px]">BNB Price</span>
                  </div>
                </div>

                <div className="flex flex-col">
                  <span className="text-[#f6465d] text-base font-bold">596.51</span>
                  <span className="text-[#edb546] text-xs">$596.51</span>
                </div>

                <div className="flex flex-col">
                  <span className=" text-xs">24h Change</span>
                  <span className="text-[#f6465d] text-xs">-15.10 -2.7%</span>
                </div>

                <div className="flex flex-col">
                  <span className=" text-xs">24h High</span>
                  <span className="text-[#edb546] text-xs">614.20</span>
                </div>

                <div className="flex flex-col">
                  <span className=" text-xs">24h Low</span>
                  <span className="text-[#edb546] text-xs">592.59</span>
                </div>

                <div className="flex flex-col">
                  <span className=" text-xs">24h Volume (BNB)</span>
                  <span className="text-[#edb546] text-xs">279,831.09</span>
                </div>

                <div className="flex flex-col">
                  <span className=" text-xs">24h Volume (USDT)</span>
                  <span className="text-[#edb546] text-xs">169,488,488.40</span>
                </div>

                <div className="flex flex-col">
                  <span className=" text-xs">Token Tags</span>
                  <span className="text-[#edb546] text-xs">Layer 1 / Layer 2 | BND Chain | Voll Hot</span>
                </div>
              </div>
            </div>

            {/* Trading Interface */}
            <div className="flex gap-3">
              {/* Order Book */}
              <div className="- rounded-lg ">
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
            <div className=" rounded-2xl border border-gray-800">
              <div className="p-2.5  rounded-2xl flex items-center">
                <CryptoTable />
              </div>
            </div>

            <div className=" rounded-lg ">
              <MarketTrades />
            </div>
            <div className=" rounded-lg ">
              <TopMovers />
            </div>
          </div>
        </div>


        {/* Order History */}
        <div className="mt-6 text-center">
          <OrdersPanel/>
        </div>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
