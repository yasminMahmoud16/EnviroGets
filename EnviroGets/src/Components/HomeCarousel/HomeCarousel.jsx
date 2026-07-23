import carouselImage1 from "../../assets/Images/Property 1=Default.png";
import carouselImage2 from "../../assets/Images/Property 1=Variant4.png";
import carouselImage3 from "../../assets/Images/Property 1=Variant2.png";
import carouselImage4 from "../../assets/Images/Property 1=Variant3.png";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

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
      <div className="relative ">
        <Swiper
          className="h-52 md:h-full "
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
          <SwiperSlide className="">
            <img
              src={carouselImage1}
              className="w-full h-full object-cover"
              alt="image"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={carouselImage3}
              className="w-full h-full object-cover"
              alt="image"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={carouselImage4}
              className="w-full h-full object-cover"
              alt="image"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={carouselImage2}
              className="w-full h-full object-cover"
              alt="image"
              loading="lazy"
            />
          </SwiperSlide>
        </Swiper>

        <div
          className={`absolute  ${
            isArabic ? "top-2 md:top-6" : "top-5  xl:gap-4"
          } z-10 max-w-[95%] md:max-w-xl px-4 md:px-9 flex flex-col gap-1 md:gap-8`}
        >
          <div
            className={`${
              isArabic
                ? "font-bold text-xs xl:text-xl flex items-center justify-center"
                : "font-RobotoCondensed flex items-center justify-center text-xs xl:text-lg xl:w-96 "
            } bg-[#2D7A45] text-white px-3 py-1 xl:px-6 xl:py-3 rounded-2xl w-fit min-h-5 xl:min-h-16`}
          >
            {t("home.subTitleHero")}
          </div>

          <div>
            <h1
              className={`${
                isArabic
                  ? "text-md md:text-2xl xl:text-5xl font-semibold"
                  : "font-RobotoCondensed text-sm md:text-2xl xl:text-4xl font-semibold"
              } text-[#1A5C2C] leading-tight`}
            >
              {t("home.titleHero1")}
            </h1>

            <h1 className="text-sm md:text-2xl xl:text-4xl font-semibold text-white leading-tight">
              {t("home.titleHero2")}
            </h1>
          </div>

          <div className=" w-full">
            <p
              className={`${
                isArabic
                  ? "text-xs md:text-xl xl:text-2xl"
                  : "font-RobotoCondensed text-xs xl:text-lg"
              } font-light text-white max-w-lg leading-relaxed`}
            >
              {t("home.descriptionHero")}
            </p>
          </div>

          {/* buttons */}
          <div className="flex items-center gap-2">
            <button className="flex items-center justify-center w-20 h-6 md:w-24 md:h-10 xl:w-40 xl:h-16 rounded-2xl xl:rounded-3xl border border-[#5FCF80] bg-white/10 backdrop-blur-md text-xs xl:text-xl text-[#5FCF80] transition hover:bg-white/40 cursor-pointer shadow">
              {t("home.buttonHero1")}
            </button>
            <button className="flex items-center justify-center w-22 h-6 md:w-24 md:h-10 xl:w-40 xl:h-16 rounded-2xl xl:rounded-3xl border border-[#eff0efa5] bg-white/10 backdrop-blur-md text-xs xl:text-xl text-[#F0EDE6] transition hover:bg-white/40 cursor-pointer shadow">
              {t("home.buttonHero2")}
              {isArabic ? <IoIosArrowRoundBack /> : <IoIosArrowRoundForward />}
            </button>
          </div>
        </div>

        {/* customers */}
        <div
          className={`hidden  ${
            isArabic
              ? "bottom-2 left-4 xl:left-9 gap-4 xl:gap-10"
              : "bottom-4 right-4 xl:bottom-8 xl:right-9 gap-4 xl:gap-10"
          } absolute md:flex items-center justify-center z-10 rounded-2xl px-3 py-2 xl:px-5 xl:py-2.5 border border-white bg-white/10 backdrop-blur-xs text-base xl:text-xl text-[#F0EDE6]`}
        >
          <div>
            <p className="font-bold text-md xl:text-3xl xl:mb-1">+40</p>
            <p className="font-normal text-sm xl:text-xl">
              {t("home.SatisfiedCustomer")}
            </p>
          </div>
          <div>
            <p className="font-bold text-md xl:text-3xl xl:mb-1">+15</p>
            <p className="font-normal text-sm xl:text-xl">
              {t("home.ProfessionalExperience")}
            </p>
          </div>
          <div>
            <p className="font-bold text-md xl:text-3xl lg:mb-1">
              200
              <span className="text-[#5FCF80] font-bold text-lg xl:text-3xl">
                +
              </span>
            </p>
            <p className="font-normal text-sm xl:text-xl">
              {t("home.ExecutedProjects")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
    
}


