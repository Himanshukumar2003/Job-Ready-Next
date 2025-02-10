"use client"

import Image from "next/image"

const Cta = () => {
    return (
      <div className='ptb30 md:pt30 md:pb-0 -bg--theme-primary-one relative'>
          <div className="container">
              <div className="grid grid-cols-12 gap-x-5">
                  <div className="col-span-12 md:col-span-4">
                      <div className="news_letter relative z-20">
                          <Image className='hidden md:block' src="/assets/cta-image.png" alt="ctaboys" height={284} width={296} />
                          <Image className="hidden md:block absolute bottom-0 -left-10 -z-10" src="/assets/cta-shape1.png" alt="ctacurve" height={146} width={428}/>
                          <Image className='hidden md:block absolute top-12 right-32 -z-10' src="/assets/cta-shape2.png" alt='ctadots' height={92} width={76}/>
                      </div>
                  </div>
                  <div className="col-span-12 md:col-span-8">
                      <div className='flex items-start h-full flex-col'>
                          <h2 className='-text--theme-light -font--theme-bold -text--theme-sm md:-text--theme-xl capitalize'>Want to stay <span className='-font--theme-Extrabold'>informed</span> about 
                      new <span className='-font--theme-Extrabold'>courses & study?</span></h2>
                          <div className='-bg--theme-light w-full md:w-[70%] py-2 px-3 -rounded--theme-normalradius mt20 flex items-center justify-between flex-wrap overflow-visible md:overflow-hidden'>
                              <input className='bg-transparent focus:outline-none w-full md:w-auto' type='text'  placeholder='Any Enquiry Fill Free to Contact us'/>
                              <button className='darkbtn'>Submit Enquiry</button>
                          </div>
                      </div>
                  </div>
              </div>
               <div className="text-curve absolute bottom-0 right-48">
                 <Image src="/assets/cta-shape3.png" height={400} width={400} alt=""/>

               </div> 
          </div>
      </div>
    )
  }
  
  export default Cta