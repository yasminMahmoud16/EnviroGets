import { useTranslation } from "react-i18next";
import logo from "../../assets/Images/EnviroGets.png";
import {  NavLink } from "react-router";
import i18next from "i18next";

import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import LangSwitchIcon from "../../Components/LangSwitchIcon/LangSwitchIcon.jsx";




export default function NavbarCom() {
      const isArabic = i18next.language === "ar";
  const { t } = useTranslation();
  const links = t("navbar.links", { returnObjects: true });
  console.log(links);
  return (
    <>
      <Navbar
        fluid
        className="absolute top-0 left-0 z-50 w-full bg-transparent dark:bg-transparent "
      >
        <NavbarToggle />
        <NavbarCollapse className="mt-2 md:mt-0   bg-white/10 backdrop-blur-md md:bg-transparent

 rounded-md ">
          {links.map((link, index) => (
            <NavbarLink
              as={NavLink}
              key={index}
              href={link.path}
              className="border-none text-sm lg:text-xl font-medium text-white dark:text-white duration-300 transition-all ease-in-out hover:bg-[#458F9B]! md:hover:text-[#165761]! md:hover:bg-transparent!"
            >
              {link.title}
            </NavbarLink>
          ))}

          <div className=" hidden md:block ">
            <LangSwitchIcon />
          </div>
          <NavbarBrand href="/" className=" md:hidden flex justify-between">
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

            <div className=" block md:hidden pl-5 pb-3">
              <LangSwitchIcon />
            </div>
          </NavbarBrand>
        </NavbarCollapse>

        <NavbarBrand href="/" className="hidden md:flex">
          <div
            className={`w-30 lg:w-full flex flex-col gap-1 ${isArabic ? "items-start" : "items-start"} mr-3 `}
          >
            <h2 className={` text-sm  lg:text-2xl font-bold dark:text-white `}>
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
        </NavbarBrand>
      </Navbar>
    </>
  );
}
