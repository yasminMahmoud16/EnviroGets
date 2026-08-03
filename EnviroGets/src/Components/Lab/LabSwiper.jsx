import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import img1 from "@/assets/Images/swiper1.webp";
import img2 from "@/assets/Images/Carousel2.webp";
import img3 from "@/assets/Images/swiper3.webp";

import { useRef } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export default function LabSwiper() {
    const images = [img1, img2, img3];
    const loopImages = [...images, ...images];
    const swiperRef = useRef(null);

    return (
        <div dir="" className="w-full flex justify-center py-10 px-4 ">
            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                // loop
                spaceBetween={0}
                slidesPerView={3}
                breakpoints={{
                    340: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 3 },
                }}
                className="py-2  w-full"
            >
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="absolute left-5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition cursor-pointer"
                >
                    <div className="w-7 h-7  rounded-full border-2 border-main flex items-center justify-center  ">
                        <FaArrowLeft className="text-xl text-main" />
                    </div>
                </button>

                <button
                    onClick={() => {
                        console.log(swiperRef.current);

                        swiperRef.current?.slideNext();
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition cursor-pointer"
                >
                    <div className="w-7 h-7  rounded-full border-2 border-main flex items-center justify-center  ">
                        <FaArrowRight className="text-xl text-main" />
                    </div>
                </button>
                {loopImages.map((image, index) => (
                    <SwiperSlide key={index} className="">
                        {({ isActive }) => (
                            <div
                                className={`overflow-hidden rounded-3xl transition-all duration-500 w-full h-43  ${isActive ? "scale-100 opacity-100" : "scale-95 opacity-80"
                                    }`}
                            >
                                <img
                                    src={image}
                                    alt=""
                                    className="w-full h-full object-cover rounded-3xl"
                                />
                            </div>
                        )}
                    </SwiperSlide>
                ))}



            </Swiper>
        </div>
    );
}
