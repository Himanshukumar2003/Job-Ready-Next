"use client";

import Image from "next/image";

export default function Empowering(params) {
  return (
    <>
      <div className="ptb60">
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-8">
              <h2 className="lefttitle">
                Welcome to Job Ready: Empowering International Talent
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-x-0 md:gap-x-10">
            <div className="col-span-12 md:col-span-6 mb20">
              <div>
                <p>
                  At Job Ready, our story goes beyond entrepreneurship—it is a
                  journey shared by countless international students in the UK.
                  When we, the founders of Job Ready, first arrived in this
                  country, we came with grand aspirations, only to be met with
                  significant challenges. Like many others, we invested in
                  renowned educational institutions, with the hope of securing
                  top-tier career opportunities. Yet, the reality we faced was
                  vastly different.
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 mb20">
              <div>
                <p>
                  From navigating visa complexities to addressing skill gaps, we
                  quickly realised that the barriers we encountered were not a
                  reflection of our talent or determination, but rather the
                  result of a system we were unprepared for. This is not just
                  our story; it mirrors the experiences of countless
                  international students striving for success, yet often being
                  held back—not by their potential, but by a lack of proper
                  guidance and opportunity.
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 mb20">
              <div>
                <p className="mb10">
                  <b>
                    That's why, in December 2024, we founded Job Ready—to
                    rewrite this narrative.
                  </b>
                </p>
                <p>
                  Our mission is straightforward but impactful: to help
                  international students confidently navigate the UK job market.
                  Having lived through these challenges ourselves, we are
                  uniquely positioned to provide the support and resources
                  necessary for success. We are here to ensure you do not face
                  these obstacles alone.
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 mb20">
              <div>
                <p className="mb10">
                  <b>
                    At Job Ready, we offer tailored solutions designed to help
                    you
                  </b>
                </p>
                <ul className="pl-0 md:pl-4">
                  <li className="list-decimal">
                    <p className="block py-1">
                      <b>Overcome visa challenges:</b> Gain a clear
                      understanding of the complexities of working in the UK and
                      how to navigate them effectively.
                    </p>
                  </li>
                  <li className="list-decimal">
                    <p className="block py-1">
                      <b>Bridge the skills gap:</b> Develop the
                      industry-relevant skills that employers value most.
                    </p>
                  </li>
                  <li className="list-decimal">
                    <p className="block py-1">
                      <b>Craft a winning strategy:</b> From perfecting your CV
                      to mastering interview techniques, we equip you with the
                      tools to stand out in a competitive job market.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-12">
              <div>
                <p className="mb10">
                  Job Ready is more than a service—it is a community. A movement
                  that celebrates the resilience, determination, and ambition of
                  international students who are ready to make their mark
                </p>
                <p>
                  If you are ready to overcome the challenges, to transform your
                  aspirations into reality, and to demonstrate the invaluable
                  contribution international talent brings to the global
                  workforce, Job Ready is here to guide you every step of the
                  way. Together, let’s break down barriers, seize opportunities,
                  and showcase the remarkable achievements of international
                  professionals.
                </p>
                <p>
                  <b>Your journey starts here. Your future awaits.</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ptb60 -bg--theme-primary-one-light">
        <div className="container">
          <div className="grid grid-cols-12 gap-x-0 md:gap-x-10">
            <div className="col-span-12 md:col-span-5">
              <div className="mb20 md:mb-0">
                <Image
                  layout="responsive"
                  height={100}
                  width={100}
                  className="-rounded--theme-normalradius -shadow--theme-darkshadow "
                  src={"/assets/about.jpg"}
                  alt=""
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-7">
              <div className="flex justify-center h-full flex-col">
                <h2 className="lefttitle">About us</h2>
                <p>
                  JOB READY is a premier recruitment and talent development firm
                  dedicated to connecting qualified students and job seekers
                  with top-tier employers across various industries. Our core
                  mission is to bridge the gap between emerging talent and
                  professional opportunities by offering personalised
                  recruitment services, career coaching, and skill development
                  resources. With a deep understanding of the evolving job
                  market, JOB READY ensures that candidates are not only
                  equipped with the right tools to succeed but strategically
                  positioned to meet the needs of employers. Whether you are a
                  student embarking on your professional journey or an
                  experienced job seeker looking for your next career move, JOB
                  READY provides the expertise and network necessary to help you
                  achieve your career goals with confidence and precision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
