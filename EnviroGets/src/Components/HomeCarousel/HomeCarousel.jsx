import carouselImage1 from "../../assets/Images/Carousel1.png";
import carouselImage2 from "../../assets/Images/Carousel2.png";
import carouselImage3 from "../../assets/Images/Carousel3.png";
import carouselImage4 from "../../assets/Images/Carousel4.png";
// import { IoIosArrowRoundBack } from "react-icons/io";
// import { IoIosArrowRoundForward } from "react-icons/io";
import hero from "../../assets/Images/hero.png";

import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, EffectFade } from "swiper/modules";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function HomeCarousel() {

  const swiperRef = useRef(null);
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language === "ar";
  
useEffect(() => {
  const swiper = swiperRef.current;
  if (!swiper) return;

  swiper.changeDirection(i18n.language === "ar" ? "rtl" : "ltr");
  swiper.loopDestroy();
  swiper.loopCreate();
  swiper.update();
  swiper.slideTo(0, 0);
  swiper.autoplay.start();
}, [i18n.language]);

  return (
    <>
      <div className="relative w-full h-[70dvh] md:h-[85dvh] lg:h-dvh  ">
        <Swiper
          // style={{ height: "100%" }}
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
              loading="lazy"
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
          className="absolute inset-0 z-[2] 
    bg-[linear-gradient(to_left,rgba(69,143,155,0.75)_0%,rgba(69,143,155,0.45)_45%,rgba(69,143,155,0.15)_100%)]"
        ></div>

        <div
          className={`absolute   ${
            isArabic ? "top-30 md:top-65 xl:top-55" : "top-5  xl:gap-4"
          } z-10 max-w-[95%] md:max-w-xl px-4 md:px-9 flex flex-col gap-1 md:gap-8`}
        >
          <div className=" flex flex-col gap-2 w-3xs md:w-2xl ">
            <h1
              className={`${
                isArabic
                  ? "text-3xl  md:text-5xl tracking-normal "
                  : "font-RobotoCondensed text-sm md:text-2xl xl:text-4xl "
              } text-white dark:text-white leading-[1.65] font-black  `}
            >
              {t("home.titleHero1")}
            </h1>

          </div>

          <div
            className="flex items-center justify-center w-35  xl:w-60 xl:h-30  rounded-2xl xl:rounded-3xl border border-white bg-linear-to-b from-[#f5f6f800] via-[#c3c3c559] to-[#cbcccdae] 
          text-xs xl:text-xl   shadow p-2"
          >
            <img src={hero} alt="" className="p-2 object-contain" />
          </div>

          {/* bg-white/10 backdrop-blur-md */}
        </div>
      </div>
    </>
  );
    
}


