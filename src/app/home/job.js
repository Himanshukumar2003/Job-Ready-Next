"use client";
const JobsCard = () => {
  const JobsMaping = [
    {
      id: 1,
      JobsIcons: "/assets/jobs/ui.png",
      JobName: "UX/UI Designer",
      JobCompany: "by Jobs Ready in Design & Creative",
      JobItems: {
        JobLocation: "Delhi",
        Jobbrid: "Remote",
        JobSalary: "$500",
      },
      jobDaysLeft: `150 days left to apply`,
    },
    {
      id: 2,
      JobsIcons: "/assets/jobs/ui.png",
      JobName: "UX/UI Designer",
      JobCompany: "by Jobs Ready in Design & Creative",
      JobItems: {
        JobLocation: "Delhi",
        Jobbrid: "Remote",
        JobSalary: "$500",
      },
      jobDaysLeft: "150 days left to apply",
    },
    {
      id: 3,
      JobsIcons: "/assets/jobs/ui.png",
      JobName: "UX/UI Designer",
      JobCompany: "by Jobs Ready in Design & Creative",
      JobItems: {
        JobLocation: "Delhi",
        Jobbrid: "Remote",
        JobSalary: "$500",
      },
      jobDaysLeft: "150 days left to apply",
    },
    {
      id: 4,
      JobsIcons: "/assets/jobs/ui.png",
      JobName: "UX/UI Designer",
      JobCompany: "by Jobs Ready in Design & Creative",
      JobItems: {
        JobLocation: "Delhi",
        Jobbrid: "Remote",
        JobSalary: "$500",
      },
      jobDaysLeft: "150 days left to apply",
    },
    {
      id: 5,
      JobsIcons: "/assets/jobs/ui.png",
      JobName: "UX/UI Designer",
      JobCompany: "by Jobs Ready in Design & Creative",
      JobItems: {
        JobLocation: "Delhi",
        Jobbrid: "Remote",
        JobSalary: "$500",
      },
      jobDaysLeft: "150 days left to apply",
    },
    {
      id: 6,
      JobsIcons: "/assets/jobs/ui.png",
      JobName: "/assets/jobs/ui.png",
      JobCompany: "by Jobs Ready in Design & Creative",
      JobItems: {
        JobLocation: "Delhi",
        Jobbrid: "Remote",
        JobSalary: "$500",
      },
      jobDaysLeft: "150 days left to apply",
    },
  ];
  return (
    <div className="ptb60 sm:ptb30">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-8">
            <h2 className="lefttitle">Our Latest Jobs</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              beatae, voluptatem corrupti nulla a minima ea dolorem mollitia
              illum nam, explicabo fuga, provident facilis quas maxime unde!
              Alias, enim quas.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 flex items-center justify-start mt10 md:mt-0 lg:justify-end">
            <button className="darkbtn">View All Latest Jobs</button>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-5 mt20">
          {JobsMaping.map((val) => (
            <div
              className="col-span-12 md:col-span-6 lg:col-span-4"
              key={val.id}
            >
              <div className="p20 border border-solid border-[#bdbdbd] -rounded--theme-normalradius">
                <div className="flex items-center gap-x-5 mb20">
                  <div>
                    <img className="w-14" src={val.JobsIcons} alt="" />
                  </div>
                  <div>
                    <h6 className="-font--theme-Extrabold">{val.JobName}</h6>
                    <p>{val.JobCompany}</p>
                  </div>
                </div>
                <ul className="flex items-center gap-2 md:gap-x-5 flex-wrap mb10">
                  <li className="-bg--theme-primary-one-light border border-solid -border--theme-primary-one py-[1px] px20 rounded-full -text--theme-primary-one">
                    <p>{val.JobItems.JobLocation}</p>
                  </li>
                  <li className="-bg--theme-primary-one-light border border-solid -border--theme-primary-one py-[1px] px20 rounded-full -text--theme-primary-one">
                    <p>{val.JobItems.Jobbrid}</p>
                  </li>
                  <li className="-bg--theme-primary-one-light border border-solid -border--theme-primary-one py-[1px] px20 rounded-full -text--theme-primary-one">
                    <p>{val.JobItems.JobSalary}</p>
                  </li>
                </ul>
                <p>{val.jobDaysLeft}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
