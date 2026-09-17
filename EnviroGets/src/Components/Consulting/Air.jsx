import TitleSec from "@/Common/TitleSec/TitleSec.jsx";
import useJson from "@/Hooks/useJson.js";
import air1 from "@/assets/Images/air1.webp";
import air2 from "@/assets/Images/air2.webp";
export default function Air() {
    const { isArabic, t } = useJson();
    const airList = t("consulting.airList", {returnObjects:true});
    
    return (
      <>
        {/* parent */}
        <div
          className={`px-8 mb-8 flex flex-col md:flex-row  items-center ${isArabic ? "gap-4" : " gap-14 lg:gap-25"}   py-9 `}
        >
          {/* content */}
          <div className="">
            {/* <h2
              className={`text-[#2C6FA0]  whitespace-nowrap ${isArabic ? "font-bold text-xl md:text-2xl" : "font-roboto font-semibold text-xl"}`}
            >
              {t("consulting.airTitle")}
            </h2> */}
            <TitleSec
              title={t("consulting.airTitle")}
              className="text-[#2C6FA0]  text-2xl! md:text-4xl! font-normal! mb-3!"
            />

            <div className=" pr-2 my-2">
              <ul
                className={`list-inside text-[#2C6FA0] text-justify ${isArabic ? "font-bold text-base md:text-xl" : "font-roboto font-normal md:text-sm lg:text-base"}`}
                style={{ listStyleType: "square" }}
              >
                {airList.map((item, index) => (
                  <li className={`${isArabic ? "pb-2" : ""}`} key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* image */}
          <div
            className={`relative shrink-0 ml-15 ${isArabic ? "" : "my-25"} `}
          >
            {/* Front image - smaller, overlapping bottom-left */}
            <div className="w-40 h-40 lg:w-90 md:h-64  border-2 border-[#378BC8] rounded-[32px] overflow-hidden shadow-lg  bg-white">
              <img
                src={air1}
                alt="air1"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Back image - larger, top-right */}
            <div
              className={`w-40 h-40 lg:w-80 md:h-50  absolute z-10 border-2 border-[#378BC8] rounded-[32px] overflow-hidden shadow-lg ${isArabic ? "-bottom-16 -left-17 lg:-left-70 " : "-bottom-16 right-27 lg:-left-70 "}`}
            >
              <img
                src={air2}
                alt="air2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </>
    );
}
