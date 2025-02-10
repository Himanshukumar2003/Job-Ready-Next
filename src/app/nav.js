"use client";
import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [courseDropdown, setCourseDropdown] = useState(false);

  const NavbarUl = [
    { id: 1, Menu: "Home", MenuLink: "/" },
    {
      id: 2,
      Menu: "Courses",
      isDropdown: true,
      subMenu: [
        { id: 21, name: "Long Term Courses", link: "/long-term-course" },
        { id: 22, name: "Short Term Courses", link: "/courses" },
      ],
    },
    { id: 3, Menu: "How it Works", MenuLink: "" },
    { id: 4, Menu: "About", MenuLink: "/about" },
    { id: 5, Menu: "Portfolio", MenuLink: "" },
    { id: 6, Menu: "Gallery", MenuLink: "" },
    { id: 7, Menu: "Contact", MenuLink: "" },
  ];

  return (
    <div className="bg-theme-light py-3">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <Image
              className="w-40"
              alt="Logo"
              width={160}
              height={160}
              src={"/assets/logo.png"}
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-x-5">
            {NavbarUl.map((val) => (
              <li key={val.id} className="relative">
                {val.isDropdown ? (
                  <div
                    className="cursor-pointer font-theme-light text-theme-text-primary text-[19px] relative"
                    onMouseEnter={() => setCourseDropdown(true)}
                    onMouseLeave={() => setCourseDropdown(false)}
                  >
                    {val.Menu}
                    {courseDropdown && (
                      <div className="absolute top-full left-0 pt-5">
                        <ul className=" bg-white shadow-md rounded-md   w-48">
                          {val.subMenu.map((sub) => (
                            <li
                              key={sub.id}
                              className="py-2 px-4 group hover:bg-gray-100"
                            >
                              <Link
                                href={sub.link}
                                className="text-[16px] group-hover:-text--theme-primary-one"
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={val.MenuLink}
                    className="cursor-pointer font-theme-light text-theme-text-primary text-[19px]"
                  >
                    {val.Menu}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="block lg:hidden">
            <CgMenuRight
              className="text-theme-sm text-theme-text-primary cursor-pointer"
              aria-label="Menu"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="lg:hidden flex flex-col items-start mt-3 bg-white p-3 rounded shadow">
            {NavbarUl.map((val) => (
              <li key={val.id} className="py-2 w-full border-b">
                {val.isDropdown ? (
                  <div>
                    <span
                      className="block text-theme-text-primary text-[19px] cursor-pointer"
                      onClick={() => setCourseDropdown(!courseDropdown)}
                    >
                      {val.Menu}
                    </span>
                    {courseDropdown && (
                      <ul className="pl-4">
                        {val.subMenu.map((sub) => (
                          <li key={sub.id} className="py-2">
                            <Link href={sub.link}>{sub.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={val.MenuLink}
                    className="block text-theme-text-primary text-[19px]"
                    onClick={() => setIsOpen(false)}
                  >
                    {val.Menu}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
