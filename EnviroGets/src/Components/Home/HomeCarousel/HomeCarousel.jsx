import carouselImage1 from "@/assets/Images/Carousel1.webp";
import carouselImage2 from "@/assets/Images/Carousel2.webp";
import carouselImage3 from "@/assets/Images/Carousel3.webp";
import carouselImage4 from "@/assets/Images/Carousel4.webp";
import hero from "@/assets/Images/hero.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { useTranslation } from "react-i18next";

import useJson from "@/Hooks/useJson.js";

export default function HomeCarousel() {
  const { i18n } = useTranslation();
  const { isArabic, t } = useJson();



  return (
    <>
      <div className="relative    ">
        <Swiper
          style={{ height: "100%" }}
          className="rounded-b-2xl w-full h-full"
          key={i18n.language}
          dir={i18n.language === "ar" ? "rtl" : "ltr"}
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={500}
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide
            className="rounded-b-2xl w-full h-full block  
          "
          >
            <img
              src={carouselImage1}
              className="w-full h-full object-cover   block"
              alt="image"
            />
          </SwiperSlide>
          <SwiperSlide className="rounded-b-2xl">
            <img
              src={carouselImage3}
              className="block w-full h-full object-cover"
              alt="image"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide className="rounded-b-2xl">
            <img
              src={carouselImage4}
              className="block w-full h-full object-cover"
              alt="image"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide className="rounded-b-2xl">
            <img
              src={carouselImage2}
              className="block w-full h-full object-cover"
              alt="image"
              loading="lazy"
            />
          </SwiperSlide>
        </Swiper>

        <div
          className="absolute inset-0 z-[2] rounded-bl-2xl
    bg-[linear-gradient(to_left,rgba(69,143,155,0.75)_0%,rgba(69,143,155,0.45)_45%,rgba(69,143,155,0.15)_100%)]"
        ></div>

        <div
          className={`  lg:mt-0 absolute  inset-0 z-10 flex gap-4  justify-between items-center lg:items-end py-6`}
        >
          <div
            className={`z-10  w-[60%]  md:max-w-xl px-4 py-2 flex flex-col   gap-1 md:gap-4   rounded-3xl
              ${
                isArabic
                  ? "mr-2 md:mr-8 lg:border lg:border-white justify-content items-center"
                  : "ml-2 md:ml-8 font-roboto justify-start items-start"
              } 
            
            shadow lg:shadow-none
                `}
          >
            <h1
              className={`${
                isArabic
                  ? "text-sm md:text-2xl lg:text-2xl tracking-tighter font-black  leading-[1.65]  text-center"
                  : "font-roboto text-sm md:text-2xl xl:text-4xl leading-tight font-bold  text-left"
              } text-white dark:text-white   `}
            >
              {t("home.titleHero1")}
            </h1>

            <div
              className="flex items-center justify-center w-20 h-10 lg:w-30  xl:w-50 xl:h-25  rounded-2xl xl:rounded-3xl border border-white bg-linear-to-b from-[#F5F6F800] via-[#c3c3c593] to-[#cbcccd] 
                text-xs xl:text-xl   shadow "
            >
              <img
                src={hero}
                alt="رؤية سعودية"
                className="md:p-2 object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


