"use client"
import {  use } from "react";

import courses from "../courses-api";
import { CiSearch } from "react-icons/ci";
import { FaTags } from "react-icons/fa"; import React, { useState } from "react";
import { AiOutlineAim } from "react-icons/ai";
import { FaBullseye } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import ContactForm from "../contact-form";
import Navbar from "@/app/nav";
import Footer from "@/app/footer";

// import ContactForm from "./ContantForm";
function CourseDetails({ params }) {
  const { slug } = use(params); 
    const course = courses.find((c) => c.slug === slug);
    if (!course) {
        return <h2 className="text-center text-red-600 text-2xl">Course Not Found</h2>;
    }


    return (
        <>
<Navbar/>
            <div className="container">
                <div className='rounded-xl p30 relative breadcrumb -bg--theme-dark-gradient' >
                    <div className="grid grid-cols-12 gap-x-0 md:gap-x-4">
                        <div className="col-span-12 lg:col-span-6">
                            <div className='flex flex-col justify-center h-full gap-2'>
                                <h2 className='-text--theme-sm md:-text--theme-2xl capitalize -font--theme-Extrabold  -text--theme-light'>{course.title}</h2>
                                <p className='-text--theme-light'>{course.description}</p>
                                <div className="flex gap-4 mb-4">
                                    <p className="mt-4  text-white text-lg font-semibold">{course.price}</p>
                                    <p className="mt-4 text-white flex  text-lg items-center gap-2 font-semibold">
                                        <FaTags />
                                        {Array.isArray(course.category) ? course.category.join(', ') : course.category}
                                    </p>

                                </div>
                                <div>
                                    <Image src={"/assets/header-logo.jpg"} height={200} width={200}  alt="Logo" />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                             <ContactForm></ContactForm> 
                        </div>
                    </div>
                </div>


                <div className="section-padding">
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 mt-4">


                        <div className="sm:col-span-12 flex flex-col ">

                            <h1 className="-text--theme-text-primary -font--theme-Extrabold -text--theme-sm md:-text--theme-xl lg:-text--theme-lg capitalize leading-tight mb20" >{course.title}</h1>
                            <p className="text-gray-700 text-xl">{course.description}</p>


                        </div>
                        {/* <div className="sm:col-span-4">
                        <img src={course.img} alt={course.title} className="w-full max-w-lg my-4 " style={{
                            width: "100%",
                            objectFit: "cover",
                            maxHeight: "500px"
                        }} />
                    </div> */}

                    </div>

                    <div className="">
                        {
                            course.targetAudience && course.targetAudience.audienceList && course.targetAudience.audienceList.length > 0 && (
                                <div className="mt-4">
                                    <h3 className="text-2xl font-medium mb-6">Who is this course for?</h3>
                                    <p className="line-clamp-1 text-gray-900 text-lg mt-4">{course.targetAudience.peraGraph}</p>
                                    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                                        {course.targetAudience.audienceList.map((audience, index) => (
                                            <li
                                                key={index}
                                                className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg shadow-sm hover:bg-[var(--theme-primary-one)] group"
                                                style={{ listStyleType: "none" }}
                                            >
                                                <span className="text-xl text-[var(--theme-primary-one)] group-hover:text-white">✔</span>
                                                <p className="text-gray-900 group-hover:text-white">{audience}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )
                        }
                    </div>
                    <div className="my-10">

                        {course.courseDetails && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-5">
                                {course.courseDetails.map((item, index) => (
                                    <div key={index} className="flex flex-col items-center text-center space-y-4 p-4 rounded-lg" style={{ border: '2px solid var(--theme-primary-one)' }}>
                                        <div className="p-3 bg-pink-50 font-bold rounded-full group-hover:bg-pink-100 transition-colors" style={{ fontSize: "35px", color: "var(--theme-primary-one)", }} >
                                            {item.icon}
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                    </div>
                                ))}
                            </div>)}
                    </div>
                    <div className="mt-6">
                        {/* Course Content Section */}
                        <h1 className="text-2xl font-medium mb-6">What does the course cover?</h1>

                        <div className="grid gap-6 md:grid-cols-2">
                            {course.courseContent && (
                                <>
                                    {Object.values(course.courseContent).map((courseContent, index) => (
                                        <div key={index} className="p-4 border rounded-lg">
                                            <div className="flex items-center gap-2 mb-3">
                                                {/* <AlertCircle className="h-5 w-5 text-red-500" /> */}
                                                <h3 className="text-lg font-semibold">{courseContent.heading}</h3>
                                            </div>
                                            <ul className="space-y-2 list-disc pl-5 text-gray-700">
                                                {courseContent.content.map((item, idx) => (
                                                    <li key={idx}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </>
                            )}
                        </div>
                    </div>
                    <div>
                        {course && course.learningOutcomes && course.learningOutcomes.heading && (<><h2 className="text-3xl font-semibold mt-6">Learning Outcomes</h2>

                            <h2 className="text-2xl font-medium mt-6">{course.learningOutcomes.heading}</h2></>
                        )}

                        <div className="flex flex-col gap-2 mt-4">
                            {course && course.learningOutcomes && course.learningOutcomes.content && course.learningOutcomes.content.length > 0 ? (
                                course.learningOutcomes.content.map((outcome, index) => (
                                    <div key={index} className="flex items-start gap-2 rounded-lg">
                                        <FaCheckCircle className="h-6 w-6 text-gray-900 mt-0.5 flex-shrink-0" />
                                        <p className="text-lg text-gray-700">{outcome}</p>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-600">No learning outcomes available.</p>
                            )}
                        </div>
                    </div>


                    <div className="mt-6">


                        {
                            course && course.aim && course.assessment && course.certification && (
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2 bg-purple-100 rounded-lg">
                                                <FaBullseye className="h-6 w-6 text-[var(--theme-primary-one)]" />
                                            </div>
                                            <h2 className="text-2xl font-semibold">Aim</h2>
                                        </div>
                                        <p className="text-lg leading-relaxed text-gray-600">
                                            {course.aim}
                                        </p>
                                    </div>
                                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2 bg-purple-100 rounded-lg">
                                                <AiOutlineAim className="h-6 w-6 text-[var(--theme-primary-one)]" />
                                            </div>
                                            <h2 className="text-2xl font-semibold">Assessment</h2>
                                        </div>
                                        <p className="text-lg leading-relaxed text-gray-600">
                                            {course.assessment}
                                        </p>
                                    </div>
                                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2 bg-purple-100 rounded-lg">
                                                <GrCertificate className="h-6 w-6 text-[var(--theme-primary-one)]" />
                                            </div>
                                            <h2 className="text-2xl font-semibold">Certificate Allocation</h2>
                                        </div>
                                        <p className="text-lg leading-relaxed text-gray-600">
                                            {course.certification}
                                        </p>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>
            <Footer/>

           
        </>
    )
}

export default CourseDetails;







