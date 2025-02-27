"use client"
import React, { useState } from "react";
import { Filter, Search } from "lucide-react";
const TABS = ["Project", "Saved", "Shared", "Achievement"];

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [activeTab, setActiveTab] = useState("Project");

  return (
    <div className="p-6 overflow-y-hidden">

    <div className="border  p-[22px] rounded-[15px] bg-[#FFFFFF]">
    <p className='font-roboto font-semibold text-[22px] leading-[25.78px] tracking-normal'>Portfolio</p>

        <div className="flex items-center relative justify-between  mt-4">
        <div className="flex space-x-8 border-b-2">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`border-b-2  px-4 py-2 text-sm font-medium transition-colors
                    ${
                      activeTab === tab
                        ? "border-[#DF5532] text-primary"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            <div className="flex gap-2 items-center text-center">
                <div className="flex w-[62px] h-[22px] gap-2 items-center">
                    <Filter className="text-[#303030] w-[13.34px]"/>

                <p className="text-[#303030] font-[400] text-[16px] leading-[19.36px] tracking-normal">filter</p>
                </div>
                <div className="border-[#E0E0E0] w-[343px] rounded-[10px] flex p-1 border-[1px]">

                <input className="border-[#E0E0E0] w-[343px] focus:border-none focus:outline-none " type="text" placeholder="Search A Project" />
                <p className="bg-[#DF5532] rounded-[10px] flex items-center justify-center w-[40px] h-[40px]">
                    <Search className="text-[#FFFFFF]"/>
                </p>
                </div>
            </div>

        </div>

        {children}
    </div>
    </div>
        

     
  );
}
