"use client";
import Image from "next/image";
import Link from "next/link";

const ForStudent = () => {
  const StudentMaping = [
    {
      id: 1,
      StudentName: "Long Term Courses",
      StudentPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      StudentLink: "/long-term-course",
      StudentImg: "/assets/employee1.svg",
    },
    {
      id: 2,
      StudentName: "Short Term Courses",
      StudentPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      StudentLink: "/courses",
      StudentImg: "/assets/employee2.svg",
    },
  ];

  return (
    <div className="ptb60 sm:ptb30">
      <div className="container">
        <div className="grid grid-cols-12 gap-x-5">
          {StudentMaping.map((val) => (
            <div className="grid col-span-12 md:col-span-6 mb10" key={val.id}>
              <div className="-bg--theme-primary-one-light p30 -rounded--theme-normalradius flex items-center justify-between flex-wrap md:flex-nowrap gap-x-5">
                <div>
                  <h4 className="-text--theme-sm md:-text--theme-md capitalize -font--theme-Extrabold mb10">
                    {val.StudentName}
                  </h4>
                  <p className="mb20">{val.StudentPara}</p>
                  <Link href={val.StudentLink} className="darkbtn">View All</Link>
                </div>
                <div>
                  <Image height={300} width={300} src={val.StudentImg} alt="Student Image" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForStudent;
