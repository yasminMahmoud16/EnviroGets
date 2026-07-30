import List from "@/Common/List/List.jsx";
import TitleSec from "@/Common/TitleSec/TitleSec.jsx";
import useJson from "@/Hooks/useJson.js"
import bgSoil from "@/assets/Images/bgSoil.jpg"
import bgSoilEn from "@/assets/Images/bgSoilEn.jpg"
import soilImg1 from "@/assets/Images/soilImg1.png"
import soilImg2 from "@/assets/Images/soilImg2.png"
import soilImg3 from "@/assets/Images/soilImg3.png"
import bottomImg from "@/assets/Images/bottomImg1.png"
import bottomImg2 from "@/assets/Images/bottomImg2.png"
import bottomEng from "@/assets/Images/bottomEng.png"
import bottomEng2 from "@/assets/Images/bottomEng2.png"
export default function SoilStudies() {
    const { isArabic, t } = useJson();
    const soil = t("soil.soilList", { returnObjects: true });
    const soilType = t("soil.soilTypes", { returnObjects: true });
    return (
        <>
            <section
                className="min-h-screen  relative"
                style={{
                    backgroundImage: `url(${isArabic ? bgSoil : bgSoilEn})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center top",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="flex flex-col md:flex-row justify-between px-8">
                    {/* container */}
                    <div className="px-8 pt-30  lg:w-3xl pb-2">
                        {soil.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col justify-center gap-6 mt-2"
                            >
                                <TitleSec title={item.title} className="text-white" />

                                <div className="px-8">
                                    <ul className="list-square list-outside">
                                        {item.text.map((text, i) => (
                                            <List key={i} item={text} />
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}

                        {soilType.map((item, index) => (
                            <>
                                <div className="flex flex-col justify-center gap-6 mt-3">
                                    <TitleSec title={item.title} className="text-white" />
                                    <div key={index} className="px-8 ">
                                        <ul className="list-square list-outside">
                                            {item.text.map((text, i) => (
                                                <List key={i} item={text} />
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>

                    {/* images container */}
                    <div className="md:pt-30  flex items-center justify-center lg:block  lg:pl-10  ">
                        <div className={`w-64 ${isArabic ? "pb-15" : "pb-6 "} `}>
                            <img
                                src={soilImg1}
                                alt="soil"
                                className="w-full h-full object-cover "
                            />
                        </div>

                        <div className="hidden lg:block relative">
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
                        </div>
                    </div>
                </div>

                <div
                    className={`${isArabic ? "hidden lg:block w-60 h-50 absolute bottom-0 left-0" : "hidden "} `}
                >
                    <img
                        src={bottomImg}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
                <div
                    dir=""
                    className={`${isArabic ? "hidden" : "hidden lg:block w-60 h-50 absolute bottom-0 right-0 "} `}
                >
                    <img
                        src={bottomEng}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
                <div
                    className={`${isArabic ? "hidden" : "hidden lg:block w-30 h-80 absolute bottom-60 right-0  "}`}
                >
                    <img
                        src={bottomEng2}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
                <div
                    className={`${isArabic ? "hidden lg:block w-40 h-80 absolute bottom-0 left-0 " : "hidden"}`}
                >
                    <img
                        src={bottomImg2}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>
        </>
    );
}
