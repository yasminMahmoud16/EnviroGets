import TitleSec from "@/Common/TitleSec/TitleSec.jsx";
import useJson from "@/Hooks/useJson.js";
import consulting1 from "@/assets/Images/Consulting1.webp"
import consulting2 from "@/assets/Images/Consulting2.webp"
import consulting3 from "@/assets/Images/Consulting3.webp"
import consulting4 from "@/assets/Images/Consulting4.webp"





export default function ConInfo() {
    const { isArabic, t } = useJson();

    const list1 = t("consulting.text1", { returnObjects: true });
    // console.log(list1);
    
    // const list2 = t("consulting.text2", { returnObjects: true });
    const images = [consulting3,consulting2, consulting4, consulting1];


    return (
      <>
        <div className="px-8 flex flex-col ">
          <TitleSec
            title={t("consulting.title")}
            className="text-[#2C6FA0] font-normal text-2xl! md:text-3xl! my-4"
          />

          <div className="flex  ">
            {/* list */}
            <ul
              className={`md:list-inside pb-4 pr-3 text-[#2C6FA0] text-justify ${isArabic ? "font-bold text-base md:text-xl" : "font-roboto font-normal md:text-sm lg:text-lg"}`}
              style={{ listStyleType: "square" }}
            >
              {list1.map((item, index) => (
                <li key={index} className={`${isArabic ? "pb-2" : "pb-2"}`}>
                  {item}
                </li>
              ))}
            </ul>

            {/* images  */}
            {/* <div className="relative hidden md:block"> */}
            <div
              className={`absolute top-16 ${isArabic ? "left-28" : "right-10 md:right-28"} hidden md:flex flex-col  items-center justify-center md:gap-10 lg:gap-5 translate-y-18`}
            >
              {images.map((img, index) => (
                <div
                  key={index}
                  className="w-15 h-15 lg:w-25 lg:h-25 rounded-full  overflow-hidden"
                >
                  <img
                    src={img}
                    alt="consulting1"
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            {/* </div> */}
          </div>
          {/* parent */}
          <div
            className={` hidden md:flex   items-center  justify-evenly mt-3 ${isArabic ? "" : ""}  bg-red-400 flex px-6 `}
          >
            {/* <div className="mt-10 lg:mt-20 ">
                        <ul
                            className={`list-inside  text-white ${isArabic ? "font-semibold text-xl" : "font-roboto font-normal md:text-sm lg:text-lg"}`}
                            style={{ listStyleType: "square" }}
                        >
                            {list1.map((item, index) => (
                                <li key={index} className={`${isArabic ? "pb-2" : ""}`}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-10 lg:mt-20">
                        <ul
                            className={`list-inside text-white ${isArabic ? "font-semibold text-xl" : "font-roboto font-normal md:text-sm lg:text-lg"}`}
                            style={{ listStyleType: "square" }}
                        >
                            {list2.map((item, index) => (
                                <li className={`${isArabic ? "pb-2" : ""}`} key={index}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div> */}
          </div>

          {/*================================================= mobile ====================================================== */}


        </div>
      </>
    );
}
