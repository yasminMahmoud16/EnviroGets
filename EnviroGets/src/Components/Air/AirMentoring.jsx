import TitleSec from "@/Common/TitleSec/TitleSec.jsx";
import useJson from "@/Hooks/useJson.js";
import air1 from "@/assets/Images/airQuality1.webp";
import air2 from "@/assets/Images/airQuality2.webp";
export default function AirMentoring() {
  const { isArabic,t} = useJson();
  return (
    <>
      {/* parent */}
      <div className="pt-40 px-8 relative flex flex-col  lg:flex-row items-center justify-between ">
        {/* content */}
        <div className=" lg:w-2xl  flex flex-col justify-center gap-4">
          <TitleSec title={t("airQuality.title")} className="text-white" />
          <p
            className={`text-white text-justify ${isArabic ? "font-semibold text-xl" : "font-roboto text-base md:text-xl font-normal pr-2"} leading-8 pb-6`}
          >
            {t("airQuality.description")}
          </p>
        </div>
        {/* image */}
        <div className="flex  gap-6 md:gap-15 md:mb-5  items-center relative ml-8">
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
        </div>
      </div>
    </>
  );
}
