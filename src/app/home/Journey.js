"use client";

import Image from "next/image";

const StartJourneyCard = () => {
    const JourneyMaping = [
        {
            id:1,
            JourneyIcons: "/assets/customer.png",
            JourneyName: "Learn with Experts",
            Journeypara: "Curate anding area share Pluralsight content to reach your"
        },
        {
            id:2,
            JourneyIcons: "/assets/customer.png",
            JourneyName: "Learn Anything",
            Journeypara: "Curate anding area share Pluralsight content to reach your"
        },
        {
            id:3,
            JourneyIcons: "/assets/customer.png",
            JourneyName: "Get Online Certificate",
            Journeypara: "Curate anding area share Pluralsight content to reach your"
        },
        {
            id:4,
            JourneyIcons: "/assets/customer.png",
            JourneyName: "E-mail Marketing",
            Journeypara: "Curate anding area share Pluralsight content to reach your"
        }
    ]
  return (
    <div className='ptb30 md:py-28 -bg--theme-text-primary'>
        <div className="container">
            <div className="flex items-center justify-center flex-col w-full">
                <span className='-bg--theme-gradient text-white text-center py-1 px-5 -rounded--theme-fullradius mb10'>How We Start Journey</span>
                <h2 className='text-white -text--theme-sm md:-text--theme-lg -font--theme-Extrabold capitalize text-center'>Start your Learning Journey Today!</h2>
                <p className='text-white text-center'>Groove’s intuitive shared inbox makesteam members together
                organize, prioritize and.In this episode.</p>
            </div>
            <div className="grid grid-cols-12 gap-x-5 mt20">
                {JourneyMaping.map((val, index)=>(
                    <div className="col-span-12 md:col-span-4 lg:col-span-3 mx10 mtb10 md:my-0" key={index}>
                        <div>
                            <Image className='mx-auto  mb10' src={val.JourneyIcons} alt={val.JourneyName} height={80} width={80}/>
                            <h4 className='text-white text-center -text--theme-sm -font--theme-Extrabold capitalize'>{val.JourneyName}</h4>
                            <p className='text-white text-center'>{val.Journeypara}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default StartJourneyCard