import { useTranslation } from "react-i18next";
import { CiGlobe } from "react-icons/ci";

export default function LangSwitchIcon() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
  };
  return (
    <>
      <div
        onClick={toggleLanguage}
        className=" w-8 h-8 flex items-center justify-center  relative group"
      >
        <CiGlobe
          className={` text-[#0e3951] md:text-[#0e3951] md:dark:text-[#0e3951] lg:text-white lg:dark:text-white   w-8 h-8 md:w-6 md:h-6 transition-all duration-300 ease-in-out group-hover:text-[#165761] group-hover:cursor-pointer `}
        />
        <span
          className={`absolute top-6 right-6 md:top-5.5 md:right-4 transition-all duration-300 ease-in-out  text-[#0e3951] md:text-[#0e3951] md:dark:text-[#0e3951] lg:text-white lg:dark:text-white  font-semibold group-hover:text-[#165761] group-hover:cursor-pointer text-xs   font-roboto `}
        >
          {i18n.language === "ar" ? "En" : "ع"}
        </span>
      </div>
    </>
  );
}
