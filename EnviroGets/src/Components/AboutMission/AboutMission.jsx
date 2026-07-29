import useJson from "../../Hooks/useJson.js";

export default function AboutMission() {
    const { t, isArabic } = useJson();
    const scrollingData = t("about.scrollData", { returnObjects: true });

    return (
        <>
            <div className="pt-10 w-full hidden md:block">
                <div
                    className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 no-scrollbar"
                    dir={isArabic ? "ltl" : "ltr"}
                >
                    {scrollingData.map((item, index) => (
                        <div key={index} className="w-[50%] shrink-0 snap-start">
                            <div className="relative w-full  md:h-60 rounded-3xl bg-gradient-to-r from-[#2D4E86] via-[#2E7D63] to-[#2F95E1] p-6 flex flex-row items-center justify-between gap-4">
                                <div className="shrink-0 w-25 h-35 md:w-45 md:h-43 rounded-2xl overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div
                                    className={`  flex flex-col items-end justify-start w-xl h-full py-2 gap-3 ${isArabic ? "text-right" : "text-left"}`}
                                    dir={isArabic ? "ltr" : "rtl"}
                                >
                                    <div
                                        className={`bg-white px-10 py-1 rounded-2xl text-[#378BC8] font-bold shrink-0 ${isArabic ? "text-xl" : "font-roboto text-xl"} `}
                                    >
                                        <h5>{item.title}</h5>
                                    </div>

                                    <div
                                        className="px-2 flex-1 overflow-y-auto no-scrollbar"
                                        dir={isArabic ? "rtl" : "ltr"}
                                    >
                                        {Array.isArray(item.text) ? (
                                            <ul
                                                className={`list-disc  text-white/90 text-sm leading-relaxed ${isArabic ? "font-medium text-lg pr-5" : "font-roboto font-normal text-left text-base pl-5"} text-justify  `}
                                                dir={isArabic ? "rtl" : "ltr"}
                                            >
                                                {item.text.map((point, i) => (
                                                    <li key={i} className="pb-2 ">
                                                        {point}
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <ul
                                                className={` text-white/90 text-sm list-disc ${isArabic ? "font-medium text-lg text-justify leading-relaxed pr-5" : "text-left leading-7 text-base pl-5"}  space-y-2`}
                                                dir={isArabic ? "rtl" : "ltr"}
                                            >
                                                <li>{item.text}</li>
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* mobile ========================================================================================== */}

            <div className="pt-10 w-full  block md:hidden">
                <div className="flex flex-col gap-6">
                    {scrollingData.map((item, index) => (
                        <div key={index} className="w-full">
                            <div className="relative w-full h-100 rounded-3xl bg-linear-to-r from-[#2D4E86] via-[#2E7D63] to-[#2F95E1] p-6 flex  flex-col items-center justify-center gap-4">
                                <div className="shrink-0 w-full h-35 md:w-45 md:h-43 rounded-2xl overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div
                                    className={`flex flex-col items-end justify-start flex-1 h-full py-2 gap-3  w-full  ${isArabic ? "text-right" : "text-left"
                                        }`}
                                >
                                    <div
                                        className={`bg-white px-5 py-1 rounded-2xl text-[#378BC8] font-bold  ${isArabic ? "text-xl" : "font-roboto text-base  "
                                            }`}
                                    >
                                        <h5>{item.title}</h5>
                                    </div>

                                    <div
                                        className="px-2 flex-1 "
                                        dir={isArabic ? "rtl" : "ltr"}
                                    >
                                        {Array.isArray(item.text) ? (
                                            <ul
                                                className={`list-disc text-white/90 text-sm leading-relaxed  h-20 ${isArabic
                                                        ? "font-medium text-xs pr-5 text-right"
                                                        : "font-roboto font-normal text-xs text-left pl-5"
                                                    }`}
                                            >
                                                {item.text.map((point, i) => (
                                                    <li key={i} className="pb-2">
                                                        {point}
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <ul
                                                className={`list-disc text-white/90 text-sm  h-20 ${isArabic
                                                        ? "font-medium text-sx leading-relaxed text-right pr-5"
                                                        : "font-roboto text-xs leading-7 text-left pl-5"
                                                    }`}
                                            >
                                                <li>{item.text}</li>
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );



}
