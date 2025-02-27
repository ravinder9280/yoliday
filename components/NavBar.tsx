import React from 'react'
import { Bell } from 'lucide-react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

const NavBar = () => {
  return (
    <div className='bg-[#FFFFFF] hidden sm:flex border-[#848484] border-b-[0.2px] w-[calc(100vw-238px)]  items-center justify-end p-4  '>
      <div className='flex gap-4 items-center'>
        <Bell className='text-[#303030]'/>
        <div className='flex gap-2 items-center'>
          <Image className='rounded-full' width={40} height={40} alt='avatar' src={"https://avatars.githubusercontent.com/u/168911719?v=4"}/>
          <div className='flex flex-col gap-1'>
            <p className='font-roboto text-[#303030] font-semibold text-[16px] leading-[16.41px] tracking-normal'>Lorem ips</p>
            <p className='text-[#848484] font-roboto font-normal text-[14px] leading-[16.41px] tracking-normal'>Manager</p>
          </div>
        </div>
        <ChevronDown className='text-gray-500'/>

      </div>
    </div>
  )
}

export default NavBar