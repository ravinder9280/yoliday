import React from 'react'

type Props = {}
const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Kemampuan Merangkum Tulisan",
    description:
      "Lorem Ipsum Dolor Sit Amet Consectetur. Nulla Risus Malesuada Ac Turpis Tempus.Lorem Ipsum Dolor Sit Amet Consectetur....",
    category: "BAHASA SUNDA",
    author: "Al-Baiqi Samaan",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Kemampuan Merangkum Tulisan",
    description:
      "Lorem Ipsum Dolor Sit Amet Consectetur. Nulla Risus Malesuada Ac Turpis Tempus.Lorem Ipsum Dolor Sit Amet Consectetur....",
    category: "BAHASA SUNDA",
    author: "Al-Baiqi Samaan",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Kemampuan Merangkum Tulisan",
    description:
      "Lorem Ipsum Dolor Sit Amet Consectetur. Nulla Risus Malesuada Ac Turpis Tempus.Lorem Ipsum Dolor Sit Amet Consectetur....",
    category: "BAHASA SUNDA",
    author: "Al-Baiqi Samaan",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Kemampuan Merangkum Tulisan",
    description:
      "Lorem Ipsum Dolor Sit Amet Consectetur. Nulla Risus Malesuada Ac Turpis Tempus.Lorem Ipsum Dolor Sit Amet Consectetur....",
    category: "BAHASA SUNDA",
    author: "Al-Baiqi Samaan",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Kemampuan Merangkum Tulisan",
    description:
      "Lorem Ipsum Dolor Sit Amet Consectetur. Nulla Risus Malesuada Ac Turpis Tempus.Lorem Ipsum Dolor Sit Amet Consectetur....",
    category: "BAHASA SUNDA",
    author: "Al-Baiqi Samaan",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
  },
];

const Project = (props: Props) => {
  return (
    <div className='sm:h-[450px] h-[500px] overflow-y-auto'>
      <div className='flex flex-col mt-4 gap-4'>
        {
          PORTFOLIO_ITEMS.map((item, idx) => (
            <div className='border-[1px] border-[#F4F4F4] w-[811px] shadow-custom flex' key={idx}>
              <img className='border-[1px] border-[#F4F4F4] rounded-l-[10px]' width={236} src={item.image} />
              <div className='p-4 flex flex-col gap-4'>
                <div className='flex gap-[8px] flex-col '>
                  <p className='font-medium text-[18px] text-[#303030] leading-[18px]'>{item.title}</p>
                  <p className='font-medium text-[12px] text-[#9E95A2] leading-[14.06px]'>{item.description}</p>
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex gap-[4px] flex-col'>
                    <p className='font-normal text-[12px] text-[#303030] leading-[14.06px]'>{item.category}</p>
                    <p className='font-normal text-[12px] text-[#9E95A2] leading-[14.06px]' >{item.author}</p>
                  </div>
                  
                  <button className='p-2  rounded-[5px] border-[1px] text-white border-[#F4F4F4] bg-gradient-to-r from-[#F39519] to-[#FFCD67]'>
      Add To cart
    </button>                  

                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Project