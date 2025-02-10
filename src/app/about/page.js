"use client"

import Footer from "../footer"
import Navbar from "../nav"
import BreadcrumbDesign from "../PageHeader"
import Empowering from "./empowering"
import WhatDoWeDo from "./whatWeDo"

export default function About(params) {
    return(
        <>
        <Navbar></Navbar>
      <BreadcrumbDesign 
         BreadCrumbImg={"/assets/breadcrumb1.webp"} 
        BreadcrumbPara={'JOB READY is a premier recruitment and talent development firm dedicated to connecting qualified students and job seekers with top-tier employers across various industries.'} 
        BreacrumbHeading={'Job Ready About'}
      />
      <Empowering/>
      <WhatDoWeDo></WhatDoWeDo>
      <Footer></Footer>
        </>
    )
}