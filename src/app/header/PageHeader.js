"use client";

import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ Router import किया
import courses from "../courses/courses-api";
import { LongTermsJson } from "../long-term-course/corsesApi";
import SearchInput from "../search/Search";

const BreadcrumbDesign = ({
  BreadCrumbImg,
  BreacrumbHeading,
  BreadcrumbPara,
}) => {
  return (
    <div>
      <div className="container">
        <div className="rounded-xl p30 relative breadcrumb -bg--theme-dark-gradient">
          <div className="grid grid-cols-12 gap-x-0 md:gap-x-10">
            <div className="col-span-12 md:col-span-7">
              <div className="flex flex-col justify-center h-full">
                <h2 className="-text--theme-sm md:-text--theme-2xl capitalize -font--theme-Extrabold mb10 -text--theme-light">
                  {BreacrumbHeading}
                </h2>
                <p className="-text--theme-light mb20">{BreadcrumbPara}</p>

                <SearchInput></SearchInput>
              </div>
            </div>
            <div className="col-span-12 md:col-span-5">
              <Image
                src={BreadCrumbImg}
                alt="Breadcrumb Image"
                height={540}
                width={516}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbDesign;
