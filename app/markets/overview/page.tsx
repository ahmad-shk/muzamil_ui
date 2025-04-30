import { ArrowRight, ArrowUpDown } from "lucide-react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import TokenRow from "@/components/tokenRow";
import HotCoins from "@/components/coinItem";
import { tokenData } from "@/components/payloads";



export default function Home() {
  return (
    <div className="min-h-screen bg-[#090a0c] text-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        {/* Market Overview */}
        <section className="mb-12">
          <h2 className="text-3xl text-[#EDB546] font-bold mb-6">Market Overview</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <HotCoins />
            </div>
            <div className="space-y-4">
              <HotCoins />
            </div>
            <div className="space-y-4">
              <HotCoins />
            </div>
          </div>
        </section>

        {/* Top Tokens by Market Capitalization */}
        <section className="mb-12">
          <div className="border border-[#2a2a2a] rounded-2xl p-8">
            <h2 className="text-3xl text-[#EDB546] font-bold mb-4">Top Tokens by Market Capitalization</h2>
            <p className="text-gray-300 mb-6">
              Lorem ipsum dolor sit amet consectetur. Vulputat volutpat tempus erat maecenas congue nam in. 
              Orci euismod non turpis sapien tellus ipsum. Orci laoreet lacinia dui lacinia eget.
            </p>
            <button className="flex items-center text-[#EDB546] text-sm hover:underline">
              Show More <ArrowRight className="h-4 w-4 ml-1" />
            </button>
          </div>
        </section>

        {/* Token Table */}
        <section className="hidden md:block">
          <div className="-border border-[#2a2a2a] rounded-2xl p-8">
            <div className="overflow-x-auto">
              <table className="w-full table-fixed">
                <thead>
                  <tr className="text-[#EDB546] text-sm">
                    {["Name", "Price", "24h", "24h Volume", "Market Cap", "Action"].map((header) => (
                      <th key={header} className="text-left py-4 px-4 font-semibold">
                        <div className="flex items-center">
                          {header} {header !== "Action" && <ArrowUpDown className="h-4 w-4 ml-1" />}
                        </div>
                      </th>
                    ))}
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
  );
}
