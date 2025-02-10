"use client"

import Image from "next/image"
import Link from "next/link"

const BecomeInstructor = () => {
    const BecomeMaping = [
        {
            id: 1,
            BecomeImg: "/assets/instructor1.png",
            BecomeName: "Become a Instructor",
            BecomePara: "To take a trivial example, which of us undertakes physical exercise yes is this happen here.",
            BecomeLink: "", 
        },
        {
            id: 2,
            BecomeImg: "/assets/instructor2.png",
            BecomeName: "Become a Instructor",
            BecomePara: "To take a trivial example, which of us undertakes physical exercise yes is this happen here.",
            BecomeLink: "", 
        }
    ]
  return (
    <div className='relative after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-[40%] after:-bg--theme-text-primary after:-z-10'>
        <div className="container">
            <div className="grid grid-cols-12 gap-x-5">
                {BecomeMaping.map((val)=>(
                    <div className="col-span-12 md:col-span-6 mb10 md:mb-0" key={val.id}>
                        <div className="group pt-0 bg-white shadow-lg border border-solid border-gray-300 h-full rounded-md flex  items-center gap-5 overflow-hidden transition-all duration-300 ease-linear">
                            <div className="hidden md:block relative z-10 w-auto flex-none mt-auto">
                                <Image  src={val.BecomeImg} alt={val.BecomeName || "Card Image"} height={200} width={200} className="w-full h-auto" />
                                <div className="absolute bottom-0 left-0 -z-10">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="224"
                                    height="158"
                                    viewBox="0 0 224 158"
                                    fill="none"
                                    className="text-current group-hover:-text--theme-primary-one transition-all duration-300 ease-linear"
                                    >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M-44.3643 224.756C-12.2393 262.104 53.4544 248.637 109.818 221.047C165.437 193.82 219.176 148.021 222.855 93.9472C226.613 38.7315 180.039 6.40385 124.786 1.08905C73.1398 -3.87887 16.1752 23.3672 -19.5665 70.6284C-58.3852 121.958 -77.2268 186.551 -44.3643 224.756Z"
                                        fill="currentcolor"
                                    />
                                    </svg>
                                </div>
                                <div className="absolute -top-5">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="48"
                                    height="55"
                                    viewBox="0 0 48 55"
                                    fill="none"
                                    className="text-current group-hover:-text--theme-primary-one transition-all duration-300 ease-linear"
                                    >
                                    <path
                                        d="M42.3863 32.303C40.459 26.5102 36.4329 12.9132 35.7471 4.86755"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M28.5958 42.9917C22.8296 40.9865 9.59837 35.8853 2.80371 31.5222"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M34.3513 34.837C31.2834 32.212 24.4868 25.9248 21.8428 21.7755"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinejoin="round"
                                    />
                                    </svg>
                                </div>
                            </div>
                            <div className='p20 md:p30'>
                                <h4 className="-text--theme-sm md:-text--theme-md -font--theme-Extrabold mb10">{val.BecomeName}</h4>
                                <p className="mb10">{val.BecomePara}</p>
                                <Link
                                    href={val.BecomeLink}
                                    className="darkbtn"
                                >
                                    View All
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default BecomeInstructor