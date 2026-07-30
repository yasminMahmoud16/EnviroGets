import useJson from "@/Hooks/useJson.js";
import consulting1 from "@/assets/Images/Consulting1.jpg"
import consulting2 from "@/assets/Images/Consulting2.jpg"
import consulting3 from "@/assets/Images/Consulting3.jpg"
import consulting4 from "@/assets/Images/Consulting4.jpg"





export default function ConInfo() {
    const { isArabic, t } = useJson();

    const list1 = t("consulting.text1", { returnObjects: true });
    const list2 = t("consulting.text2", { returnObjects: true });
    const images = [consulting3, consulting4, consulting2, consulting1];


    return (
        <>
            <div className="">
                {/* images */}
                <div className="relative hidden md:block">
                    <div className=" flex items-center justify-center md:gap-10 lg:gap-35 translate-y-18">
                        {images.map((img, index) => (
                            <div
                                key={index}
                                className="w-28 h-28 lg:w-32 lg:h-30 rounded-full border-4 border-white overflow-hidden"
                            >
                                <img
                                    src={img}
                                    alt="consulting1"
                                    className="rounded-full w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                {/* parent */}
                <div
                    className={`bg-linear-to-r from-[#13353D] via-[#3A5D55] to-[#839F6D] hidden md:flex  ${isArabic ? "" : ""}  items-center justify-evenly h-64 px-6 `}
                >
                    {/* list */}

                    <div className="mt-10 lg:mt-20 ">
                        <ul
                            className={`list-inside  text-white ${isArabic ? "font-semibold text-xl" : "font-roboto font-normal md:text-sm lg:text-lg"}`}
                            style={{ listStyleType: "square" }}
                        >
                            {list1.map((item, index) => (
                                <li key={index} className={`${isArabic ? "pb-2" : ""}`}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-10 lg:mt-20">
                        <ul
                            className={`list-inside text-white ${isArabic ? "font-semibold text-xl" : "font-roboto font-normal md:text-sm lg:text-lg"}`}
                            style={{ listStyleType: "square" }}
                        >
                            {list2.map((item, index) => (
                                <li className={`${isArabic ? "pb-2" : ""}`} key={index}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/*================================================= mobile ====================================================== */}

                {/* parent */}
                <div
                    className={`bg-linear-to-r from-[#13353D] via-[#3A5D55] to-[#839F6D] flex flex-col md:hidden  ${isArabic ? "" : ""}  items-center justify-evenly  `}
                >
                    {/* list */}

                    <div className="relative block md:hidden pt-8">
                        <div className=" grid grid-cols-2 items-center justify-center gap-3  ">
                            {images.map((img, index) => (
                                <div
                                    key={index}
                                    className="w-20 h-20 rounded-2xl border-4 border-white overflow-hidden"
                                >
                                    <img
                                        src={img}
                                        alt="consulting1"
                                        className="rounded-2xl w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <div className="py-5 w-80">
                            <ul
                                className={`list-inside  text-white ${isArabic ? "font-semibold text-xl" : "font-roboto font-normal text-lg"}`}
                                style={{ listStyleType: "square" }}
                            >
                                {list1.map((item, index) => (
                                    <li key={index} className={`${isArabic ? "pb-2" : ""}`}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* list2 */}
                        <div className="py-5">
                            <ul
                                className={`list-inside text-white ${isArabic ? "font-semibold text-xl" : "font-roboto font-normal text-lg"}`}
                                style={{ listStyleType: "square" }}
                            >
                                {list2.map((item, index) => (
                                    <li className={`${isArabic ? "pb-2" : ""}`} key={index}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
