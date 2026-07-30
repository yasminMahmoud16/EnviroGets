import { useTranslation } from "react-i18next";
import { CiGlobe } from "react-icons/ci";

export default function LangSwitchIcon({ isTransparent }) {
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
          className={`${isTransparent ? "text-white" : "text-[#0171DE]"}  w-8 h-8 md:w-10 md:h-8 transition-all duration-300 ease-in-out group-hover:text-[#165761] group-hover:cursor-pointer `}
        />
        <span
          className={`absolute top-8 left-7 md:top-6 md:right-5 transition-all duration-300 ease-in-out  ${isTransparent ? "text-white" : "text-[#0171DE]"}  font-semibold group-hover:text-[#165761] group-hover:cursor-pointer  `}
        >
          {i18n.language === "ar" ? "En" : "ع"}
        </span>
      </div>
    </>
  );
}
