import List from "@/Common/List/List.jsx";
import TitleSec from "@/Common/TitleSec/TitleSec.jsx";
import useJson from "@/Hooks/useJson.js";
import {soilImage,soilImg2,soilImg1,soilImg3,} from "@/assets/Images/Images.js";

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
            <div className="text-main flex flex-col gap-4">
              <TitleSec
                title={t("soil.title")}
                className={`${isArabic ? "text-2xl!" : "  text-2xl! md:text-3xl! font-normal!"}`}
              />
              <p
                className={`${isArabic ? "font-bold text-lg" : "font-normal  text-lg font-roboto"} text-justify leading-8`}
              >
                {t("soil.text")}
              </p>
            </div>

            <div className="flex justify-between items-center mt-5 text-main">
              {soil.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center gap-6 mt-2"
                >
                  <TitleSec
                    title={item.title}
                    className={`${isArabic ? "text-2xl!" : "text-2xl!  md:text-3xl! font-normal!"}`}
                  />

                  <div className="px-4 md:px-8 ">
                    <ul className="list-square list-outside text-main! ">
                      {item.text.map((text, i) => (
                        <List
                          key={i}
                          item={text}
                          className={`text-main! ${isArabic ? "font-bold!" : "font-semibold!"} `}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
              ))}

              <div className="hidden md:block md:w-70 lg:w-96">
                <img
                  src={soilImage}
                  alt="soil-Image"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col gap-10  mt-5">
              {soilType.map((soilType, i) => (
                <div key={i} className="text-main ">
                  {/* <h2 className={`font-bold text-3xl`}>{soilType.title}</h2> */}
                  <TitleSec
                    title={soilType.title}
                    className={`${isArabic ? "text-2xl! whitespace-break-spaces!" : "whitespace-break-spaces! text-2xl!  md:text-3xl!  font-normal!"} mb-5!`}
                  />

                  {soilType.text.map((section, j) => (
                    <div key={j} className="mb-4 flex flex-col gap-3">
                      <h3
                        className={`font-bold text-2xl underline underline-offset-4 ${isArabic ? "" : "font-roboto"}`}
                      >
                        {section.title}
                      </h3>

                      <ul
                        className={`list-disc pr-5 text-justify leading-7 ${isArabic ? "" : "font-roboto"}`}
                        style={{
                          listStyle: "square",
                        }}
                      >
                        {section.text.map((item, k) => (
                          <li
                            className={`${isArabic ? "" : "font-roboto font-semibold"}`}
                            key={k}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* {soilType.map((item, index) => (
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
            ))} */}
          </div>

          {/* images container */}
          <div
            className={`md:pt-5 mb-5  flex items-center justify-center lg:block ${isArabic ? "lg:pl-10" : "lg:pr-10"}   `}
          >
            <div className="flex flex-col gap-3 md:flex md:flex-row items-center justify-around  ">
              <div className={`w-40 lg:w-64   `}>
                <img
                  src={soilImg2}
                  loading="lazy"
                  alt="soil"
                  className="w-full h-full object-cover "
                />
              </div>
              <div className={`w-40 lg:w-64   `}>
                <img
                  src={soilImg3}
                  loading="lazy"
                  alt="soil"
                  className="   w-full h-full object-cover"
                />
              </div>
              <div className={`w-40 lg:w-64   `}>
                <img
                  src={soilImg1}
                  alt="soil"
                  loading="lazy"
                  className="   w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
