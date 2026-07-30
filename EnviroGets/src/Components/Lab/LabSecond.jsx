import List from "@/Common/List/List.jsx";
import TitleSec from "@/Common/TitleSec/TitleSec.jsx";
import useJson from "@/Hooks/useJson.js";
import animation1 from "@/assets/Images/animation4.jpg";
import animation2 from "@/assets/Images/animation2.jpg";
import animation4 from "@/assets/Images/swiper1.jpg";
import animation3 from "@/assets/Images/animation3.png";
import { useState } from "react";

export default function LabSecond() {
    const { t } = useJson();
    const labText = t("lab.text2", { returnObjects: true });
    const labText3 = t("lab.text3", { returnObjects: true });
    const [active, setActive] = useState(null);

    const cards = [
        { id: 1, image: animation1, bordered: true, imgClass: "w-72 h-44" },
        {
            id: 2,
            image: animation2,
            bordered: true,
            imgClass: "absolute bottom-0 w-65 h-44",
        },
        { id: 3, image: animation3, bordered: true, imgClass: "w-64 h-44" },
        { id: 4, image: animation4, bordered: true, imgClass: "w-60 h-44" },
    ];
    return (
        <>
            {/* parent */}
            <div className="flex flex-col  px-8">
                {/* content */}
                <div className="px-6">
                    <TitleSec title={t("lab.labTitle")} className="text-white pb-4" />

                    <div className="flex flex-col md:flex-row  items-center gap-24 px-8">
                        <div>
                            {labText.map((item, index) => (
                                <List item={item} index={index} className="" />
                            ))}
                        </div>
                        <div>
                            {labText3.map((item, index) => (
                                <List item={item} index={index} className="" />
                            ))}
                        </div>
                    </div>
                </div>
                {/* images */}

                <div className="grid grid-cols-2 lg:flex lg:flex-nowrap items-center justify-center justify-items-center gap-4 md:gap-6 py-6 md:py-10">
                    {cards.map((card) => {
                        const isActive = active === card.id;
                        const isOtherActive = active !== null && active !== card.id;

                        return (
                            <div
                                key={card.id}
                                onMouseEnter={() => setActive(card.id)}
                                onMouseLeave={() => setActive(null)}
                                className={`relative flex items-center justify-center rounded-4xl transition-all duration-500 scale-[0.6] md:scale-100 origin-center  w-72 h-53
                ${card.bordered ? "border-2 border-[#80CC28]" : ""}
                ${isActive ? "lg:-translate-y-8" : ""}
                ${isOtherActive ? "lg:translate-y-8" : ""}
                `}
                            >
                                <div className={`${card.imgClass} rounded-4xl`}>
                                    <img
                                        src={card.image}
                                        alt=""
                                        className="w-full h-full rounded-4xl object-cover"
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
