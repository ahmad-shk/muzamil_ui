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
import { useEffect, useLayoutEffect } from "react"
import { useRouter } from "next/router"
import { redirect } from 'next/navigation';

export default function Page() {
  useEffect(() => {
    // const token = localStorage.getItem('token');
    window.location.href = '/projects'
    // if (token) {
    // }
    // else {
    //   window.location.href = '/auth/login'
    // }
  }, [])
  redirect('/market/overview'); // instantly redirects when visiting "/"
}
