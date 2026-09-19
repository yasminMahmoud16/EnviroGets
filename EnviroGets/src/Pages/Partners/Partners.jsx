import useJson from "@/Hooks/useJson.js";

import { clientArticle1, clientArticle2 } from "@/assets/Images/Images.js";


export default function Partners() {
  const { isArabic, t } = useJson();
  const images = t("clients.images", { returnObjects: true });
  return (
    <>
      <section className="min-h-screen  bg-linear-to-b from-[#17393F]  via-[#2C4E4B] to-[#5D7C60]">
        <div className=" pt-30">
          {/* parent */}
          <div className="px-8 flex flex-col items-center justify-center">
            {/* titles */}
            <div
              className={`  ${isArabic ? " rounded-xl" : " rounded-full"}  flex flex-col gap-5 md:gap-3 items-center justify-center `}
            >
              <h3
                className={`${isArabic ? "font-bold text-3xl md:text-2xl" : "font-roboto font-semibold  text-3xl md:text-xl"} text-white`}
              >
                {t("clients.title")}
              </h3>
              <p
                className={`bg-[#33A3DD] w-fit py-2 md:py-3 px-2 rounded-4xl ${isArabic ? "font-bold text-base md:text-2xl" : "font-roboto font-semibold text-center text-sm md:text-xl"} text-[#FCFAFF]`}
              >
                <span
                  className={` ${isArabic ? "border border-dashed rounded-3xl px-3 w-fit" : "py-2"}`}
                >
                  {t("clients.subTitle")}
                </span>
              </p>
            </div>

            {/* clients  */}
            <div
              className={`grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-3 my-10`}
            >
              {images.map((img, index) => (
                <div
                  key={index}
                  className="bg-white w-50 h-30 flex items-center justify-center p-4"
                >
                  <img
                    src={img.logo}
                    alt={img.name}
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>

            {/* article  */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center mb-4 items-center ">
              <div className="col-span-1 px-3 w-full lg:w-96">
                <p
                  className={` text-white  ${isArabic ? " text-justify leading-8 font-bold text-lg md:text-xl" : "font-roboto  font-extrabold text-xl  leading-7"}`}
                >
                  {t("clients.article")}
                </p>
              </div>
              <div className="col-span-1">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-50 h-50 md:w-55 md:h-55 rounded-3xl">
                    <img
                      src={clientArticle1}
                      alt="client"
                      loading="lazy"
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                  <div className="w-50 h-50 md:w-55 md:h-55 rounded-3xl">
                    <img
                      src={clientArticle2}
                      alt="client"
                      loading="lazy"
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
