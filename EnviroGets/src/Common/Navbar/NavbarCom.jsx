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

  const transparentPages = [
    "/",
    "/about",
    "/contact",
    "/laboratories",
    "/soil-studies",
    "/air-quality",
    "/sections",
  ];

  const isTransparent = transparentPages.includes(location.pathname);

  const textClasses = isTransparent ? "text-white" : "text-[#0171DE]";

  return (
    <nav
      ref={navRef}
      className="absolute top-0 left-0 z-50 w-full bg-transparent"
      dir="rtl"
    >
      <div className="flex items-center justify-between mx-auto p-4">
        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex md:hidden items-center justify-center w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md hover:bg-[#165761] transition"
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
            bg-white/10 backdrop-blur-md
            rounded-lg mt-2
            md:static md:block md:w-auto
            md:bg-transparent md:backdrop-blur-none
          `}
        >
          <ul className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 p-4 md:p-0">
            {links.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `
                    block p-3 md:p-0
                    font-semibold text-sm lg:text-xl
                    transition duration-300
                    ${textClasses}
                    ${isActive ? "text-[#165761]" : "hover:text-[#165761]"}
                  `
                  }
                >
                  {link.title}
                </NavLink>
              </li>
            ))}

            <li className="hidden md:block">
              <LangSwitchIcon isTransparent={isTransparent} />
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
                  <h2 className="font-bold text-[#0171DE]">
                    {t("navbar.logo")}
                  </h2>

                  <p className="text-xs text-[#0171DE]">{t("navbar.slogan")}</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop Logo */}
        <Link to="/" className="hidden md:flex items-center">
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

          <img
            src={logo}
            className="w-10 lg:w-20 lg:h-14 mr-2"
            alt={t("navbar.logo")}
          />
        </Link>
      </div>
    </nav>
  );
}
