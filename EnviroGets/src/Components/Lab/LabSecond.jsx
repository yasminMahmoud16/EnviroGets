import TitleSec from "@/Common/TitleSec/TitleSec.jsx";
import useJson from "@/Hooks/useJson.js";
import { Link } from "react-router-dom";
import { IoMdArrowBack, IoMdArrowForward } from "@/assets/Icons/icon.js";


export default function LabSecond() {
    const { t, isArabic } = useJson();
    const labText = t("lab.text2", { returnObjects: true });

    return (
        <>
            {/* parent */}
            <div className="flex flex-col  px-8">
                {/* content */}
                <div className="px-6">
                    <TitleSec title={t("lab.labTitle")} className="text-white pb-4" />

                    <div className="flex flex-col   items-end gap-10 px-8">
                        <div>
                            {labText.map((item, index) => (
                                // <List item={item} index={index} className="" />
                                <p
                                    key={index}
                                    className={`${isArabic ? " text-xl" : ""} text-white font-normal whitespace-break-spaces text-justify`}
                                >
                                    {item}
                                </p>
                            ))}
                        </div>

                        <div className="group flex justify-center items-center gap-3">
                            <Link
                                to="/lab-details"
                                className={`text-white text-2xl font-bold  transition-transform duration-300 

                                    ${isArabic ? "group-hover:-translate-x-2 " : "group-hover:translate-x-2 "}
                                    `}
                            >
                                {t("lab.button")}
                            </Link>

                            <div>
                                {isArabic ? (
                                    <IoMdArrowBack className="text-white text-2xl md:text-3xl transition-transform duration-300 group-hover:-translate-x-2" />
                                ) : (
                                    <IoMdArrowForward className="text-white text-2xl md:text-3xl transition-transform duration-300 group-hover:translate-x-2" />
                                )}
                            </div>
                        </div>

                    </div>
                </div>
                {/* images */}

                
            </div>
        </>
    );
}
