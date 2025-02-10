"use clinet";
import Image from "next/image";

const WhatDoWeDo = () => {
  const WhatDoMaping = [
    {
      id: 1,
      WhatDoHead: "IT & Telecom",
      WhatDoSpan: "Transforming IT & Telecom with Job-Ready Talent",
      WhatDopara:
        "In the rapidly evolving IT and telecommunications sector, securing the right talent is crucial for success and innovation. At Job Ready, we specialize in connecting forward-thinking businesses with skilled professionals equipped to lead in this fast-paced industry. Leveraging our deep industry knowledge and an expanding network of top-tier candidates, we ensure you find the ideal match—professionals who combine technical expertise with innovative thinking. Trust Job Ready to deliver the talent that drives growth powers innovation, and positions your organization at the forefront of IT and telecom advancements.",
      WhatDoImg: "/assets/it-telecom.jpg",
    },
    {
      id: 2,
      WhatDoHead: "Law",
      WhatDoSpan: "Your Legal Talent, Job Ready for Success",
      WhatDopara:
        "Job Ready connects leading law firms with exceptional legal professionals ready to make a significant impact. Our recruitment approach goes beyond merely filling positions; we focus on identifying legal experts who align with your firm's goals, values, and culture. Whether you need seasoned attorneys or rising legal stars, we ensure the perfect fit to support your firm's growth and success in today's competitive legal landscape. Let Job Ready streamline your recruitment process, delivering top-tier talent to empower your firm's future.",
      WhatDoImg: "/assets/it-telecom.jpg",
    },
    {
      id: 3,
      WhatDoHead: "Payroll",
      WhatDoSpan: "Seamless Payroll Solutions, Powered by Job-Ready Talent",
      WhatDopara:
        "Smooth payroll management is essential for organizational efficiency and employee satisfaction. At Job Ready, we connect you with payroll professionals who specialize in tax compliance, benefits administration, and meticulous payroll processing. With a keen eye for detail and advanced technical expertise, we ensure your payroll operations run smoothly and accurately, every time. Trust Job Ready to build a reliable payroll team that supports your business's efficiency and enhances employee trust.",
      WhatDoImg: "/assets/it-telecom.jpg",
    },
    {
      id: 4,
      WhatDoHead: "Healthcare",
      WhatDoSpan: "Empowering Healthcare with Job-Ready Talent",
      WhatDopara:
        "At Job Ready, we help healthcare organizations find exceptional professionals dedicated to delivering outstanding patient care. From expert clinicians to skilled administrators and compassionate support staff, our recruitment services ensure a perfect match for your specific needs. We understand the fast-paced demands of the healthcare industry and provide candidates who bring both expertise and empathy, aligned with your commitment to high-quality care. Let Job Ready help you build a team that elevates patient outcomes and drives your healthcare mission forward.",
      WhatDoImg: "/assets/it-telecom.jpg",
    },
    {
      id: 5,
      WhatDoHead: "Accounting",
      WhatDoSpan: "Job Ready: Your Partner in Accounting Excellence",
      WhatDopara:
        "Strong financial management is the backbone of any successful organization. Job Ready connects you with skilled accounting professionals who provide accurate financial reporting, ensure compliance, and support strategic decision-making. Whether you need experienced accountants, meticulous auditors, or financial controllers, we source talent that not only meets technical requirements but also adds long-term value to your business. Let Job Ready help you build an accounting team that drives your financial growth and supports organizational success.",
      WhatDoImg: "/assets/it-telecom.jpg",
    },
    {
      id: 6,
      WhatDoHead: "Finance",
      WhatDoSpan: "Building Your Financial Future with Job-Ready Talent",
      WhatDopara:
        "Successful financial operations begin with the right people. At Job Ready, we focus on sourcing professionals who bring both technical expertise and strategic insight to your team. Whether you require experienced accountants, sharp financial analysts, or visionary leaders, we ensure the perfect match for your financial needs. Trust Job Ready to help you build a high-performing finance team that supports your growth, ensures compliance, and drives your long-term financial success.",
      WhatDoImg: "/assets/it-telecom.jpg",
    },
    {
      id: 7,
      WhatDoHead: "HR",
      WhatDoSpan: "Job Ready: Empowering Your HR Strategy with Top Talent",
      WhatDopara:
        "A strong HR team is essential to the success and growth of any organization. Job Ready connects you with skilled HR professionals who excel in talent management, employee relations, and strategic planning. By understanding your company’s culture and objectives, we ensure that our candidates bring not only expertise but also fresh ideas that align with your vision. Let Job Ready help you build a dynamic HR team that drives your organization’s success and fosters a positive, high-performing workplace.",
      WhatDoImg: "/assets/it-telecom.jpg",
    },
    {
      id: 8,
      WhatDoHead: "Permanent Staffing at Job Ready",
      WhatDoSpan: "",
      WhatDopara:
        "At Job Ready, we specialize in helping international students overcome employment barriers in the UK by connecting them with long-term career opportunities that align with their qualifications and aspirations. Our approach is tailored to address the unique challenges faced by international students, including visa status and skill gaps. We work with companies across industries like IT, Healthcare, Finance, and Law, ensuring that every candidate is both technically qualified and a perfect cultural fit. We are committed to helping your business grow with dedicated professionals who will contribute to your long-term success.",
      WhatDoImg: "/assets/it-telecom.jpg",
    },
    {
      id: 9,
      WhatDoHead: "Contract Staffing at Job Ready",
      WhatDoSpan: "",
      WhatDopara:
        "For short-term projects or specific skill requirements, Job Ready offers flexible contract staffing solutions to meet your business needs. We connect you with highly skilled international students ready to bring fresh perspectives and meet tight deadlines. Whether your project is temporary or you need additional support during peak workloads, we provide well-matched talent across sectors such as IT, Telecoms, Law, and Healthcare. Our contract staffing solutions ensure that you have the right professionals on hand to achieve your business objectives with minimal long-term commitment.",
      WhatDoImg: "/assets/it-telecom.jpg",
    },
    {
      id: 10,
      WhatDoHead: "Student Recruitment",
      WhatDoSpan: "",
      WhatDopara:
        "Thank you for participating in the recruitment process at the University of Wolverhampton, Birmingham Campus. We are committed to protecting your personal data in accordance with the General Data Protection Regulation (GDPR). By signing this consent form, you agree to allow the University of Wolverhampton, Birmingham Campus to process your image, voice, and/or likeness in photos, videos, and interviews as part of the recruitment process.",
      WhatDoImg: "/assets/it-telecom.jpg",
    },
  ];
  return (
    <div className="ptb60">
      <h2 className="text-center mb20 -text--theme-lg -font--theme-Extrabold">
        What Do We Do?
      </h2>
      {WhatDoMaping.map((val) => (
        <div className="pt30" key={val.id}>
          <div className="container">
            <div className={`grid grid-cols-12 gap-x-0 md:gap-x-10`}>
              <div
                className={`col-span-12 md:col-span-4 ${
                  val.id % 2 === 0 ? "order-1 lg:order-2 " : "order-2 lg:order-1"
                }`}
              >
                <div className="h-auto md:h-full flex items-center justify-center">
                  <Image
                    className="h-full rounded--theme-normalradius shadow--theme-darkshadow my-10 md:my-0"
                    src={val.WhatDoImg}
                    alt=""
                    layout="responsive"
                    height={100}
                    width={100}
                  />
                </div>
              </div>
              <div
                className={`col-span-12 md:col-span-8 ${
                  val.id % 2 === 0 ? "order-2 lg:order-1" : "order-2 lg:order-1"
                }`}
              >
                <div className="flex justify-center flex-col h-full border border-solid border-[#bdbdbd] bg-white -shadow--theme-lightshadow p20 md:p30 -rounded--theme-normalradius">
                  <h4 className="mb10 -font--theme-Extrabold -text--theme-md">
                    {val.WhatDoHead}
                  </h4>
                  <span className="mb10">
                    <b>{val.WhatDoSpan}</b>
                  </span>
                  <p>{val.WhatDopara}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhatDoWeDo;
