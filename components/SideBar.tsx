"use client"
import React from 'react'
import { LayoutDashboard } from 'lucide-react';
import { Speech } from 'lucide-react';
import { FilePenLine } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Data=[
  {
    name:"Dashboard",
    src:"/dashboard",
    icon:LayoutDashboard
  },
  {
    name:"Portfolio",
    src:"/project",
    icon:Speech
  },
  {
    name:"Inputs",
    src:"/inputs",
    icon:FilePenLine
  },
  {
    name:"Profile",
    src:"/profile",
    icon:CircleUserRound
  },
]


type Props = {}

const SideBar = (props: Props) => {
  const Navigate=usePathname()
  console.log(Navigate)
  return (
    <div className='bg-[#DF5532] hidden sm:block w-auto h-screen border-r-[0.2px] border-[#848484]'>
       <div className="p-6">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-white" />
          <span className="text-xl text-white font-bold">LOGO</span>
        </div>
      </div>

<div className='w-[236px] flex flex-col mt-6 gap-12px'>
    {
      Data.map((item,idx)=>(
        <Link key={idx} href={item.src} className={ `${Navigate==item.src?"hover-effect":""} flex items-center gap-4  text-[#EEFFEEFE]  hover:hover-effect  p-2 px-4 `}>
        <item.icon className='text-[#EEFFEEFE]' width={20} height={20}/>
        <p className='  text-[14px] font-[400]'>{item.name}</p>
  
      </Link>
      ))
    }
</div>
    </div>
  )
}

export default SideBar