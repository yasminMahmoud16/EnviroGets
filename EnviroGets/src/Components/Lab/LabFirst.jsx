import List from "@/Common/List/List.jsx";
import TitleSec from "@/Common/TitleSec/TitleSec.jsx";
import useJson from "@/Hooks/useJson.js";
import { carouselImage1 } from "@/assets/Images/Images.js";
export default function LabFirst() {
    const { t, isArabic } = useJson();
    const labText = t("lab.text1", { returnObjects: true });
    return (
      <>
        {/* parent */}
        <div className="md:px-8  gap-10 md:gap-24   flex flex-col-reverse  lg:flex-row items-center justify-between">
          {/* content */}
          <div className="  px-6  ">
            <TitleSec
              title={t("lab.title")}
              className={`text-white pb-4 ${isArabic ? "md:text-3xl! font-medium!" : "font-roboto"}`}
            />

            <div className="px-8">
              {labText.map((item, index) => (
                <List item={item} index={index} className="" classList={`pb-8 ${isArabic?"md:text-xl! font-bold!":""}`} />
              ))}
            </div>
          </div>

          {/* image */}
          <div className=" md:w-2xl h-40 rounded-3xl flex items-center px-2 md:ml-9">
            <img
              src={carouselImage1}
              alt="image"
              loading="lazy"
              className="w-full h-full object-fill rounded-3xl  "
            />
          </div>
        </div>
      </>
    );
}
