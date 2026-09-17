import logo from "@/assets/Images/EnviroGets.webp";
import { Link, NavLink, useLocation } from "react-router";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import LangSwitchIcon from "@/Components/LangSwitchIcon/LangSwitchIcon.jsx";
import useOpen from "@/Hooks/useOpen.js";
import useJson from "@/Hooks/useJson.js";

export default function NavbarCom() {
  const { isOpen, setIsOpen, navRef } = useOpen();

  const { isArabic, t } = useJson();
  const links = t("navbar.links", { returnObjects: true });

  const location = useLocation();
  const currentPath = location.pathname;

  const transparentPages = [
    "/environmental-consulting",
    "/air-quality",
    "/soil-studies",
    "/Projects",
  ];
  const isTransparentPage = transparentPages.includes(currentPath);

  const textClasses = isTransparentPage ? "text-[#306784]" : "text-white";

  return (
    <nav
      ref={navRef}
      className="absolute  top-0 left-0 z-50 w-full bg-transparent"
      dir="rtl"
    >
      <div className="flex items-center justify-between mx-auto p-4">
        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex lg:hidden items-center justify-center w-10 h-10 rounded-lg bg-[linear-gradient(to_bottom,#698EAA,#306784,#63AE98)]
backdrop-blur-md hover:bg-[#165761] transition"
        >
          {isOpen ? (
            <HiOutlineX className="text-white text-2xl" />
          ) : (
            <HiOutlineMenuAlt3 className="text-white text-2xl" />
          )}
        </button>

        {/* Menu */}
        <div
          className={`
            ${isOpen ? "block" : "hidden"}
            absolute top-full left-0 w-full
            bg-white/20 backdrop-blur-md
            rounded-lg mt-2
            lg:static lg:block lg:w-auto
            lg:bg-transparent lg:backdrop-blur-none
            lg:bg-[linear-gradient(to_left,#698EAA,#306784,#63AE98,#0D5933)]
            p-4
            lg:rounded-3xl
          `}
        >
          <ul
            className={`flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-6 p-4 lg:p-0 text-[#0e3951] lg:text-white ${isArabic ? " font-semibold text-sm  md:text-base lg:text-xl" : "font-roboto text-xs md:text-base lg:text-base font-extrabold"}`}
          >
            {links.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `
                    block p-3  md:p-0
                   
                    transition duration-300
                    
                    ${isActive ? "text-gray-300 lg:text-[#165761]" : "hover:text-[#165761]"}
                  `
                  }
                >
                  {link.title}
                </NavLink>
              </li>
            ))}

            <li className="hidden md:block">
              <LangSwitchIcon />
            </li>

            <li className="md:hidden">
              <LangSwitchIcon />
            </li>

            <li className="md:hidden">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 pt-4"
              >
                <img src={logo} className="h-10" alt={t("navbar.logo")} />

                <div>
                  <h2 className={`font-bold ${textClasses}`}>
                    {t("navbar.logo")}
                  </h2>

                  <p className={`text-xs ${textClasses}`}>
                    {t("navbar.slogan")}
                  </p>
                </div>
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop Logo */}
        <Link to="/" className="hidden md:flex items-center h-full">
          <div
            className={`flex flex-col ${
              isArabic ? "items-start" : "items-end"
            }`}
          >
            <h2 className={`text-sm lg:text-2xl font-extrabold ${textClasses}`}>
              {t("navbar.logo")}
            </h2>

            <p className={`text-xs lg:text-base font-bold ${textClasses}`}>
              {t("navbar.slogan")}
            </p>
          </div>

          <div className="w-10 lg:w-13 lg:h-15 flex items-center justify-center">
            <img
              src={logo}
              className="w-full h-full mr-2"
              alt={t("navbar.logo")}
            />
          </div>
        </Link>
      </div>
    </nav>
  );
}
