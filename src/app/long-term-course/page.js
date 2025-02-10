"use client";
import Footer from "../footer";
import Navbar from "../nav";
import BreadcrumbDesign from "../PageHeader";
import { LongTermsJson } from "./corsesApi";
import LongTermsCoursesCard from "./LongTermsCoursesCard";

export default function LongTermsCourse(params) {
  return (
    <>
      <Navbar></Navbar>
      <BreadcrumbDesign
        BreadCrumbImg={"/assets/breadcrumb1.webp"}
        BreadcrumbPara={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsa sed nam esse repudiandae, similique sit perferendis saepe beatae dolorem molestias mollitia possimus dolores repellat placeat animi corrupti amet. Inventore?"
        }
        BreacrumbHeading={`Long Terms Courses`}
      />
      <div className='ptb60'>
                <div className="container">
                    <h2 className='text-center mb20 -text--theme-lg -font--theme-Extrabold'>University of Wolverhampton offers a 4-year degree programme with a foundation year, and students can choose from the following courses</h2>
                    <div className="grid grid-cols-12 gap-x-5">
                                <LongTermsCoursesCard
                                />
                           
                    </div>
                </div>
            </div>
      <Footer></Footer>
    </>
  );
}
