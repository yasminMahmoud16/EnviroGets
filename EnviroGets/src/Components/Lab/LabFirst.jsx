import List from "@/Common/List/List.jsx";
import TitleSec from "@/Common/TitleSec/TitleSec.jsx";
import useJson from "@/Hooks/useJson.js";
import Carousel1 from "@/assets/Images/Carousel1.png"
export default function LabFirst() {
    const { t } = useJson();
    const labText = t("lab.text1", { returnObjects: true });
    return (
      <>
        {/* parent */}
        <div className="px-8 pt-30 gap-24   flex flex-col-reverse lg:flex-row items-center justify-between">
          {/* content */}
          <div className="  px-6 ">
            <TitleSec title={t("lab.title")} className="text-white pb-4" />

            {labText.map((item, index) => (
              <List item={item} index={index} className="" classList="pb-8" />
            ))}
          </div>

          {/* image */}
          <div className=" md:w-2xl h-40 rounded-3xl flex items-center ml-9">
            <img
              src={Carousel1}
              alt=""
              className="w-full h-full object-fill rounded-3xl  "
            />
          </div>
        </div>
      </>
    );
}
