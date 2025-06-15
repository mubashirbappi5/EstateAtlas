import Image from 'next/image';
import React from 'react';
import cardimg from '../../../public/card1.png'
import global from '../../../public/global.png'
const WhyChoose = () => {
    return (
        <div className='py-10 container mx-auto'>
            <div>
                <h1 className='text-5xl font-semibold text-center text-[#0A1532]'>Why Choose <span className='text-[#3BA1DF]'>Estate Atlas</span>?</h1>
            </div>


            <section className='grid grid-cols-12 gap-15 my-15'>
                <section className='border rounded-2xl bg-[#F7F7FD] border-[#E8F9F7] col-span-4  '>
                    <div className='p-10 space-y-3'>
                        <h3 className='text-3xl font-bold text-[#100A55]'>
                        Stop guessing, <br />Start Knowing !
                    </h3>
                    <p className='text-[#100A55]'>Make data-driven investment decisions <br /> with tools designed for accuracy, <br /> transparency, and global reach.</p>
                      <button className='py-3 px-4 bg-[#0A1532] rounded-lg text-white'>Start Now</button>
                    </div>
                  
                    <div>
                        <Image src={cardimg} alt='card1' width={500} height={300}></Image>

                    </div>

                  
                    
                </section>

                <section className='col-span-8 grid grid-cols-2 gap-5  '>
                    <div className=' space-y-6 p-4'>
                       <div>

                           <Image src={global} alt='global' width={70} height={70}></Image>
                       </div>
                       <div className='space-y-4'>
                        <h1 className='text-2xl font-bold text-[#000929]'>Global Market Coverage</h1>
                        <p className='text-[#4D5461]'>Access verified data from 100+ global  markets, updated hourly. Compare  trends, yields, and risks across regions  with a single click.</p>
                       </div>
                    </div>
                    <div className=' space-y-6 p-4'>
                       <div>

                           <Image src={global} alt='global' width={70} height={70}></Image>
                       </div>
                       <div className='space-y-4'>
                        <h1 className='text-2xl font-bold text-[#000929]'>Global Market Coverage</h1>
                        <p className='text-[#4D5461]'>Access verified data from 100+ global  markets, updated hourly. Compare  trends, yields, and risks across regions  with a single click.</p>
                       </div>
                    </div>
                    <div className=' space-y-6 p-4'>
                       <div>

                           <Image src={global} alt='global' width={70} height={70}></Image>
                       </div>
                       <div className='space-y-4'>
                        <h1 className='text-2xl font-bold text-[#000929]'>Global Market Coverage</h1>
                        <p className='text-[#4D5461]'>Access verified data from 100+ global  markets, updated hourly. Compare  trends, yields, and risks across regions  with a single click.</p>
                       </div>
                    </div>
                    <div className=' space-y-6 p-4'>
                       <div>

                           <Image src={global} alt='global' width={70} height={70}></Image>
                       </div>
                       <div className='space-y-4'>
                        <h1 className='text-2xl font-bold text-[#000929]'>Global Market Coverage</h1>
                        <p className='text-[#4D5461]'>Access verified data from 100+ global  markets, updated hourly. Compare  trends, yields, and risks across regions  with a single click.</p>
                       </div>
                    </div>
                    
                   




                </section>
               





            </section>


     
            
        </div>
    );
};

export default WhyChoose;