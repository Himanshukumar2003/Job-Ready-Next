"use client";

import Link from "next/link";
import { FiChevronsRight } from "react-icons/fi";
import { LongTermsJson } from "./corsesApi";
import Image from "next/image";

const LongTermsCoursesCard = () => {
  return (
    <>
      {LongTermsJson.map((item, index) => (
        <div className="col-span-12 md:col-span-4" key={index}>
          <div className="p30 h-full rounded-lg group border border-solid border-gray-300 ">
            <div className="mb20 min-w-20 w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center">
              <Image
              width={48}
              height={48}
                className=" transition-transform duration-200 ease-in-out group-hover:scale-90 group-hover:-translate-y-1"
                src={item.icon}
                alt={item.name}
              />
            </div>
            <div>
              <h4 className="font-extrabold text-lg mb-2">{item.name}</h4>
              <Link href={`/long-term-course/${item.sulg}`} className="writebtn mt-4 flex items-center">
                <span>Read More</span>
                <FiChevronsRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default LongTermsCoursesCard;
