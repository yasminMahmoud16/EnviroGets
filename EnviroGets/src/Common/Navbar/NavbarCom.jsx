import logo from "@/assets/Images/EnviroGets.png";
import { Link, NavLink, useLocation } from "react-router";

import {
  Navbar,
  // NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import LangSwitchIcon from "@/Components/LangSwitchIcon/LangSwitchIcon.jsx";
import useOpen from "@/Hooks/useOpen.js";
import useJson from "@/Hooks/useJson.js";




export default function NavbarCom() {

  const { isOpen, setIsOpen, navRef } = useOpen();

  const { isArabic, t } = useJson();
  const links = t("navbar.links", { returnObjects: true });
  const location = useLocation();
  const transparentPages = ["/", "/about", "/contact", "/laboratories"];
  const isTransparent = transparentPages.includes(location.pathname);

  const textClasses = isTransparent
    ? "text-white"
    : "text-[#0171DE] dark:text-[#0171DE]";
  return (
    <>
      <Navbar
        ref={navRef}
        dir="rtl"
        fluid
        className={`absolute top-0 left-0 z-50 w-full bg-transparent dark:bg-transparent  `}
      >
        <NavbarToggle onClick={() => setIsOpen(!isOpen)} />
        <NavbarCollapse
          className={`mt-2 md:mt-0   bg-white/10 backdrop-blur-md md:bg-transparent
md:dark:bg-transparent md:dark:backdrop-blur-none
 rounded-md   ${isOpen ? "block" : "hidden md:flex"}    `}
        >
          {links.map((link, index) => (
            <NavLink
              as={NavLink}
              key={index}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`
                ${textClasses}
                border-none text-sm lg:text-xl font-medium  duration-300 transition-all ease-in-out hover:bg-[#458F9B]! md:hover:text-[#165761]! md:hover:bg-transparent!`}
            >
              {link.title}
            </NavLink>
          ))}

          <div className=" hidden md:block ">
            <LangSwitchIcon isTransparent={isTransparent} />
          </div>
          <Link
            onClick={() => setIsOpen(false)}
            to="/"
            className=" md:hidden flex justify-between"
          >
            <div className="flex  py-3">
              <div
                className={`w-30 lg:w-full flex flex-col gap-1 ${isArabic ? "items-start" : "items-start"} mr-3 `}
              >
                <h2
                  className={` text-sm  lg:text-2xl font-bold dark:text-white `}
                >
                  {t("navbar.logo")}
                </h2>
                <p className=" text-xs lg:text-base font-light dark:text-white">
                  {t("navbar.slogan")}
                </p>
              </div>
              <img
                src={logo}
                className="mr-1 h-10 lg:mr-3 lg:h-14"
                alt={t("navbar.logo")}
              />
            </div>
          </Link>
          <div className="  md:hidden pl-5 pb-8  flex items-center justify-start mr-3">
            <LangSwitchIcon />
          </div>
        </NavbarCollapse>

        {/* logo */}
        <Link to="/" className="hidden md:flex  items-center justify-center">
          <div
            className={` flex flex-col gap-1 ${isArabic ? "items-start" : "items-end"}  `}
          >
            <h2
              className={` text-sm  lg:text-2xl font-bold ${textClasses}`}
            >
              {t("navbar.logo")}
            </h2>
            <p
              className={`text-xs lg:text-base font-bold ${textClasses}`}
            >
              {t("navbar.slogan")}
            </p>
          </div>

          <div className="w-10 lg:w-20 lg:h-20 flex items-center justify-center">
            <img
              src={logo}
              className="mr-1 w-full  lg:mr-0 lg:h-14"
              alt={t("navbar.logo")}
            />
          </div>
        </Link>
      </Navbar>
    </>
  );
}
