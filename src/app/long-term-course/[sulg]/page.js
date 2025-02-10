"use client"

import { useState, useEffect, use } from "react";
import { LongTermsJson } from "../corsesApi";
import BreadcrumbDesign from "@/app/PageHeader";
import ApplyNowForm from "../form";

function LongTermsDetailsCard({ params }) {
  const { sulg } = use(params); 
console.log(sulg);

  const [innerdata, setInnerdata] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInner = LongTermsJson.find((val) => val.sulg === (sulg));
    if (fetchInner) {
      setInnerdata(fetchInner);
    } else {
      setError("Item not found");
    }
  }, [sulg]);

  if (error) return <p>{error}</p>;
  if (!innerdata) return <p>Loading...</p>;

  return (
    <>
      <BreadcrumbDesign 
        BreadCrumbImg={"/assets/breadcrumb1.webp"} 
        BreadcrumbPara={''} 
        BreacrumbHeading={innerdata.name} 
      />
       
      <div className='ptb60'>
        <div className="container">
          <div className="grid grid-cols-12 gap-x-0 md:gap-x-5">
            <div className="col-span-12 md:col-span-8">
              <div className="grid grid-cols-12 gap-x-0 md:gap-x-5">
                {innerdata.details.map((detail, index) => (
                  <div className="col-span-12 md:col-span-6 mtb10" key={index}>
                    <div className={`p30 h-full -rounded--theme-normalradius group border border-solid border-[#bdbdbd] transition-transform delay-75 ease-in-out group-hover:scale-90 group-hover:-translate-y-1`}>
                      <div className='mb20 min-w-20 w-20 h-20 -bg--theme-primary-one-light -rounded--theme-fullradius flex items-center justify-center'>
                        <img className='w-12 transition-all delay-75 ease-in-out group-hover:scale-90 group-hover:-translate-y-1' src={innerdata.icon} alt={innerdata.name} />
                      </div>
                      <h2 className='-font--theme-Extrabold -text--theme-sm'>
                        {innerdata.name} <span className='-text--theme-primary-one'>{detail.year}</span>
                      </h2>
                      <ul className='pl-0 md:pl-5'>
                        {detail.modules.map((module, index) => (
                          <li className='list-decimal' key={index}>{module}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-12 md:col-span-4">
               <ApplyNowForm /> 
            </div>
          </div>
        </div>
      </div> 
    </>
  );
}

export default LongTermsDetailsCard;
