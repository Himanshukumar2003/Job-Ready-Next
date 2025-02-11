"use client";

import Link from "next/link";
import courses from "./courses-api";
import Image from "next/image";
import { useState } from "react";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import BreadcrumbDesign from "../PageHeader";

function OurCourses() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Filter courses based on selected category (case-insensitive)
  const filteredCourses = courses.filter((course) => {
    if (Array.isArray(course.category)) {
      return (
        selectedCategory.toLowerCase() === "all" ||
        course.category.some(
          (c) => c.toLowerCase() === selectedCategory.toLowerCase()
        )
      );
    } else {
      return (
        selectedCategory.toLowerCase() === "all" ||
        course.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
  });

  return (
    <div>
      <BreadcrumbDesign
        BreadcrumbPara={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti laborum numquam ex animi autem dicta dolores est? Assumenda, tempora laudantium"
        }
        BreadCrumbImg="/assets/breadcrumb1.webp"
        BreacrumbHeading="What do you want to learn today?"
      />

      <div className="py-10">
        <div className="container">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-8">
              <h2 className="lefttitle">Recommended Courses</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                beatae, voluptatem corrupti nulla a minima ea dolorem mollitia
                illum nam, explicabo fuga, provident facilis quas maxime unde!
                Alias, enim quas.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-4  flex flex-col   items-start">
            <h2 className="text-center text-xl font-bold mb-4">Select Corse by Category </h2>

              <select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="custom-select p-2 border border-gray-300 rounded mb-10"
              >
                <option value="All">All</option>
                <option value="Generic">Generic</option>
                <option value="Care">Care</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-x-0 md:gap-5 mt-10">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((val) => (
                <div
                  key={val.id}
                  className="col-span-12 md:col-span-4 lg:col-span-3 mtb10 md:mtb-0"
                >
                  <div
                    className="border border-solid border-[#bdbdbd] overflow-hidden -rounded--theme-normalradius relative "
                    style={{ minHeight: "420px" }}
                  >
                    <div className="h-40 overflow-hidden">
                      <Image
                        src={val.img}
                        alt={val.title}
                        width={500} // or the actual width of the image
                        height={300} // or the actual height of the image
                        className="-rounded-tr--theme-normalradius -rounded-tl--theme-normalradius h-full w-full object-cover"
                      />
                    </div>
                    <div className="-bg--theme-light -shadow--theme-lightshadow p20 -rounded-br--theme-normalradius -rounded-bl--theme-normalradius">
                      <div className="flex justify-between w-100">
                        <span className="border border-solid -border--theme-primary-one -text--theme-primary-one p-1 rounded-sm -text--theme-xs mb10 inline-block">
                          {Array.isArray(val.category)
                            ? val.category.join(", ")
                            : val.category}
                        </span>

                        <span className="border border-solid -border--theme-primary-one -text--theme-primary-one p-1 rounded-sm -text--theme-xs mb10 inline-block">
                          online batch
                        </span>
                      </div>
                      <h5 className="mb10 -font--theme-Extrabold text-lg">
                        {val.title}
                      </h5>
                      <div className="flex items-center gap-x-2 mb-1 -text--theme-primary-one">
                        <div className="flex items-center">
                          <IoIosStar />
                          <IoIosStar />
                          <IoIosStar />
                          <IoIosStarHalf />
                          <IoIosStarOutline />
                        </div>
                      </div>
                      <div className="flex items-center gap-x-2 mb10">
                        <span className="-font--theme-Extrabold">
                          {val.price}
                        </span>
                      </div>
                      {/* Link to Course Details page */}
                      <Link
                        href={`/courses/${val.slug}`}
                        className="darkbtn bottom-2 absolute"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-12">
                No courses available for the selected category.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurCourses;
