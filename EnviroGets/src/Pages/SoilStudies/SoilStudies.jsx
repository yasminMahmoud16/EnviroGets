import List from "@/Common/List/List.jsx";
import TitleSec from "@/Common/TitleSec/TitleSec.jsx";
import useJson from "@/Hooks/useJson.js";
// import soilImg2 from "@/assets/Images/soilImg2.webp";
// import soilImg3 from "@/assets/Images/soilImg3.webp";

export default function SoilStudies() {
  const { isArabic, t } = useJson();
  const soil = t("soil.soilList", { returnObjects: true });

  const soilType = t("soil.soilTypes", { returnObjects: true });
  console.log(soil);
  return (
    <>
      <section className="min-h-screen  relative ">
        <div className="flex flex-col  justify-between px-8">
          {/* container */}
          <div className="px-8 pt-30   pb-2">
            <div className="text-[#2C6FA0] flex flex-col gap-4">
              <TitleSec title={t("soil.title")} className="" />
              <p
                className={`${isArabic ? "font-bold text-lg" : "font-semibold text-2xl font-roboto"} text-justify leading-8`}
              >
                {t("soil.text")}
              </p>
            </div>

            {soil.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-center gap-6 mt-2"
              >
                <TitleSec title={item.title} className="text-[#2C6FA0]" />

                <div className="px-8">
                  <ul className="list-square list-outside text-[#2C6FA0]!">
                    {item.text.map((text, i) => (
                      <List key={i} item={text} className="text-[#2C6FA0]!" />
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {soilType.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-center gap-6 mt-3"
              >
                <TitleSec title={item.title} className="text-white" />
                <div key={index} className="px-8 ">
                  <ul className="list-square list-outside">
                    {item.text.map((text, i) => (
                      <List key={i} item={text} />
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* images container */}
          <div
            className={`md:pt-30  flex items-center justify-center lg:block ${isArabic ? "lg:pl-10" : "lg:pr-10"}   `}
          >
            {/* <div className="hidden lg:block relative">
                <div className={`hidden md:block w-64 absolute z-20  `}>
                  <img
                    src={soilImg2}
                    alt="soil"
                    className="w-full h-full object-cover "
                  />
                </div>
                <div
                  className={`hidden md:block w-64 absolute ${isArabic ? "left-60 top-30" : "right-30 top-45"}   `}
                >
                  <img
                    src={soilImg3}
                    alt="soil"
                    className="   w-full h-full object-cover"
                  />
                </div>
              </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
