import List from "@/Common/List/List.jsx";
import TitleSec from "@/Common/TitleSec/TitleSec.jsx";
import useJson from "@/Hooks/useJson.js";
import quality from "@/assets/Images/airQuality.webp"



export default function AirMentoring() {
  const { isArabic, t } = useJson();
      const airTitles = t("airQuality.titles", { returnObjects: true }); 
      const airLists = t("airQuality.list", { returnObjects: true }); 

  return (
    <>
      {/* parent */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <div className="col-span-1">
          <img src={quality} alt="" />
        </div>
        <div className="col-span-2 text-[#2C6FA0] ">
          {/* title */}
          <div>
            {airTitles.map((title) => (
              <TitleSec
                title={title}
                className={`${isArabic ? "" : "font-roboto"} text-4xl! font-normal! `}
              />
            ))}
          </div>

          {/* list */}
          <div className="mt-4 ">
            {airLists.map((list) => (
              <List
                item={list}
                className={`text-[#2C6FA0]!  text-justify ${isArabic ? "font-bold! pr-5 " : "font-semibold! pl-5"}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* <div className="pt-40 px-8 relative flex flex-col  lg:flex-row items-center justify-between ">
        {/* content */}
      {/* <div className=" lg:w-2xl  flex flex-col justify-center gap-4">
          <TitleSec title={t("airQuality.title")} className="text-white" />
          <p
            className={`text-white text-justify ${isArabic ? "font-semibold text-xl" : "font-roboto text-base md:text-xl font-normal pr-2"} leading-8 pb-6`}
          >
            {t("airQuality.description")}
          </p>
        </div> */}
      {/* image */}
      {/* <div className="flex  gap-6 md:gap-15 md:mb-5  items-center relative ml-8">
          <div
            className={`lg:absolute ${isArabic ? "left-50 bottom-15" : "right-50 bottom-15"} w-40 h-40 rounded-full border-6 border-white`}
          >
            <img
              src={air2}
              alt="air"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="w-40 h-40 rounded-full border-6 border-white">
            <img
              src={air1}
              alt="air"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div> */}
      {/* </div>  */}
    </>
  );
}
