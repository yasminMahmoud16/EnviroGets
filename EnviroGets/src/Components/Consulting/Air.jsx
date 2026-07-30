import useJson from "../../Hooks/useJson.js";
import air1 from "../../assets/Images/air1.png"
import air2 from "../../assets/Images/air2.png"
export default function Air() {
    const { isArabic, t } = useJson();
    const airList = t("consulting.airList", {returnObjects:true});
    
    return (
      <>
        {/* parent */}
        <div className=" px-20 flex flex-col md:flex-row  items-center   py-9 ">
          {/* content */}
          <div className="flex-1">
            <h2
              className={`text-[#2C6FA0]  whitespace-nowrap ${isArabic ? "font-bold text-xl md:text-2xl" : "font-roboto font-semibold text-xl"}`}
            >
              {t("consulting.airTitle")}
            </h2>

            <div className=" pr-2 my-2">
              <ul
                className={`list-inside text-[#2C6FA0] text-justify ${isArabic ? "font-semibold text-base" : "font-roboto font-normal md:text-sm lg:text-base"}`}
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
          <div className=" relative shrink-0 ml-15  ">
            <div className="w-60 h-50 border-5 border-[#378BC8] rounded-[40px] overflow-hidden shadow-md">
              <img
                src={air1}
                alt="air1"
                className="w-full h-full object-cover rounded-3xl "
              />
            </div>
            <div className="w-30 h-30 border-4 border-[#378BC8] rounded-full absolute -bottom-8 -left-16 shadow-md">
              <img
                src={air2}
                alt="air2"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </>
    );
}
