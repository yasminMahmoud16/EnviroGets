// import map from "@/assets/Images/map2.webp";
import {
  MdOutlineMailOutline,MdOutlinePhoneInTalk,
  IoLocationOutline,
} from "@/assets/Icons/icon.js";
import { logo } from "@/assets/Images/Images.js";

// import { MdPhoneInTalk } from "react-icons/md";
// import SocialMedia from "@/Common/SocialMedia/SocialMedia.jsx";
import useJson from "@/Hooks/useJson.js";
export default function ContactInfo() {
  const { t, isArabic } = useJson();
  const info = t("contact.information", { returnObjects: true });

  return (
    <>
      {/* parent container */}
      {/* <div className="flex flex-col lg:flex-row  items-center justify-between  gap-10 pb-8"> */}
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-25 pb-8 mx-3"
        dir={`${isArabic ? "" : "rtl"}`}
      >
        <div className="col-span-1 flex  items-center justify-between gap-8 p-4  ">
          {/* container */}
          <div className="flex flex-col gap-8 ">
            {/* general view  */}
            <div className="w-full">
              <h3
                className={`mb-5 ${isArabic ? "text-right " : "text-left font-roboto text-base md:text-3xl"} text-[#249643]  text-xl md:text-3xl font-medium  `}
              >
                {t("contact.general.title")}
              </h3>
              <p
                className={`text-main text-justify leading-7   md:w-lg  ${isArabic ? "font-medium text-base" : "font-roboto  font-medium text-base"}`}
                dir={`${isArabic ? "" : "ltr"}`}
              >
                {t("contact.general.description")}
              </p>
            </div>

            {/* clients info */}
            <div className=" flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-2 ">
              {info.map((text, index) => (
                <div
                  key={index}
                  className={`border border-[#4FA14B] shadow-md w-70 md:w-40 h-15 rounded-2xl flex flex-col items-center justify-center text-center text-[#4FA14B] ${isArabic ? " font-bold text-sm" : "font-roboto font-extrabold text-sm "}`}
                >
                  {/* {t("contact.info.clients")} */}
                  <p>{text.name1}</p>
                  <p> {text.name2}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* contact */}
        <div className="col-span-1  gap-5">
          <div className="flex flex-col gap-4 mt-5  w-full relative">
            <h3
              className={` ${isArabic ? "text-right md:text-3xl  " : "text-left font-roboto  text-base md:text-3xl"} text-[#249643]  text-xl font-medium  `}
            >
              {t("contact.subTitle")}
            </h3>
            <div
              className={`flex flex-col  ${isArabic ? "items-end" : " items-end"}  gap-4`}
            >
              <div
                className="flex items-center justify-center text-left  gap-2 font-roboto font-medium"
                dir="ltr"
              >
                <IoLocationOutline className="text-xl text-main" />
                <p className={`text-main  text-base ${isArabic ? "" : ""}`}>
                  {t("contact.address")}
                </p>
              </div>
              <div
                className="flex items-center justify-center gap-2 font-roboto font-medium"
                dir="ltr"
              >
                <MdOutlineMailOutline className="text-xl text-main " />
                <p className={`text-main  text-base ${isArabic ? "" : ""}`}>
                  {t("contact.email")}
                </p>
              </div>

              <div
                className="flex items-center justify-center gap-2 font-roboto font-medium"
                dir="ltr"
              >
                <MdOutlinePhoneInTalk className="text-xl text-main" />
                <p className={`text-main  text-base ${isArabic ? "" : " "}`}>
                  {t("contact.phone")}
                </p>
              </div>
            </div>

            <div className="md:hidden w-60 h-25 pb-10 flex justify-center absolute  top-20 left-45  -translate-x-1/4">
              <img
                src={logo}
                alt="EnviroGets"
                loading="lazy"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
