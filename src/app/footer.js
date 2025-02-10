"use Client"

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
    const FooterSocialIcon =[
        {
            id: 1,
            Social_icon: <FaFacebookF/>
        },
        {
            id: 2,
            Social_icon: <FaInstagram/>
        },
        {
            id: 3,
            Social_icon: <FaLinkedinIn/>
        },
        {
            id: 4,
            Social_icon: <FaXTwitter/>
        },
        {
            id: 5,
            Social_icon: <FaYoutube/>
        }
    ]
    const FooterQuickLinks = [
        {
            id: 1,
            Quick_Links: "Home"
        },
        {
            id: 2,
            Quick_Links: "About"
        },
        {
            id: 3,
            Quick_Links: "How it Works"
        },
        {
            id: 4,
            Quick_Links: "Gallery"
        },
        {
            id: 5,
            Quick_Links: "Contact Us"
        }
    ]
    const Year = new Date().getFullYear();
  return (
    <footer className="-bg--theme-text-primary ptb30">
        <div className="container w-full lg:w-[1024px]">
            <div className="flex items-center  justify-start md:justify-center flex-col text-left md:text-center w-full">
                <div>
                    <Image width={160} height={160} className=" md:mx-auto" src={"/assets/logo-white.png"} alt="Logo" />
                    <p className="-text--theme-text-secondary mt20">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo optio, illo quae debitis necessitatibus maiores deleniti voluptates rerum nihil perferendis, in sunt! Obcaecati, similique corporis optio rem ut iure quod.
                    </p>
                </div>
                <div className="flex items-center justify-start md:justify-center flex-wrap gap-5 mt20">
                {FooterSocialIcon.map((val) => (
                    <button
                    key={val.id}
                    className="w-10 h-10 border border-solid border-[#bdbdbd] rounded-full text-white flex items-center justify-center"
                    >
                    {val.Social_icon}
                    </button>
                ))}
                </div>
                <ul className="flex items-center justify-start md:justify-center flex-wrap gap-5 mt20 mb20">
                {FooterQuickLinks.map((val) => (
                    <li key={val.id}>
                    <p className="border border-solid border-[#bdbdbd] py-1 px-3 -rounded--theme-fullradius -text--theme-light">
                        {val.Quick_Links}
                    </p>
                    </li>
                ))}
                </ul>
            </div>
            <div className=' border-t border-dashed border-[#bdbdbd]'>
                <p className="-text--theme-light mt20 text-center">
                © Copyright & all reserved by{" "}
                <a
                    className="-text--theme-primary-one"
                    href="https://brandingwaale.com"
                    target="_blank"
                >
                    Brandingwaale Webtech
                </a>{" "}
                {Year}
                </p>
            </div>
        </div>
    </footer>

  )
}

export default Footer