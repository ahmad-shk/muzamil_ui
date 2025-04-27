"use client";
import React, { useState } from "react";

const tabs = ["Open Order (0)", "Order History", "Trade History", "Funds"];

const OrdersPanel: React.FC = () => {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <div className="bg-transparent text-white p-4 sm:p-6 rounded-3xl border border-gray-800 min-h-[300px] sm:min-h-[250px] w-full">

            {/* Tabs */}
            <div className="flex flex-wrap gap-4 sm:gap-8 border-b border-[#1f2128] rounded-t-2xl pb-4">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`bg-none border-none text-sm sm:text-base ${activeTab === tab
                                ? "text-[#EDB546] font-bold border-b-4 border-[#f0b90b] pb-2"
                                : "text-[#ccc]"
                            } cursor-pointer`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="flex items-center justify-center h-full p-8 sm:p-20 text-center text-[#EDB546]">
                <p className="text-xs sm:text-sm">
                    <span className="underline cursor-pointer">Log in</span>
                    <span className="text-white"> or </span>
                    <span className="underline cursor-pointer">Register Now</span>
                    <span className="text-white"> to trade</span>
                </p>
            </div>
        </div>
    );
};

export default OrdersPanel;
