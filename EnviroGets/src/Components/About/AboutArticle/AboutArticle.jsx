import useJson from "@/Hooks/useJson.js";
import { lazy, Suspense } from "react";
const AboutImage = lazy(
  () => import("@/Components/About/AboutImage/AboutImage.jsx"),
);

export default function AboutArticle() {
  const { t, isArabic } = useJson();
  const aboutText = t("about.article", { returnObjects: true });

  return (
    <>
      {/* container */}
      <div
        className=" relative flex flex-col lg:flex-row items-center md:justify-between mt-25 "
        // dir={isArabic?"":"rtl"}
      >
        {/* Article */}
        <div className=" lg:w-3xl flex flex-col  gap-6 justify-center">
          <div className="bg-linear-to-b from-[#378BC8]  to-[#2C6FA0] w-35 h-15 md:w-45 md:h-15 rounded-xl flex  items-center justify-center ">
            <h3
              className={`${isArabic ? "font-bold text-xl md:text-2xl" : "font-roboto font-semibold  text-xl md:text-2xl"} text-white`}
            >
              {t("about.title")}
            </h3>
          </div>
          <div className="text-white text-justify">
            {aboutText.map((item) => (
              <p
                className={`${isArabic ? "font-semibold text-2xl" : "font-roboto text-base md:text-xl font-normal"}text-white leading-8 pb-6`}
              >
                {item.text}
              </p>
            ))}
          </div>
        </div>

        {/* animation image  */}

        <Suspense fallback={null}>
        <AboutImage />
        </Suspense>
      </div>
    </>
  );
}
