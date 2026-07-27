import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function SectionsDev() {
    const { t } = useTranslation();
    const isArabic = i18next.language === "ar";
    const links = t("sections.list", { returnObjects: true });

    return (
        <>
            <div className="flex  flex-col gap-2  w-full  pb-3  ">
                <div className="bg-linear-to-r from-[#13353D] via-[#607E5E] to-[#142833] w-45 h-15 rounded-xl flex  items-center justify-center ">
                    <h3
                        className={`${isArabic ? "font-bold text-2xl" : ""} text-white`}
                    >
                        {t("sections.title")}
                    </h3>
                </div>
                <div className="flex flex-col gap-2  ">
                    {links.map((link) => (
                        <Link
                            key={link.id}
                            to={link.path}
                            className="flex items-center gap-4 group pb-1"
                        >
                            {/* Text */}
                            <p
                                className={`${isArabic ? " font-bold text-2xl text-[#0171DE]" : ""}`}
                            >
                                {link.text}
                            </p>
                            {/* Dotted line */}
                            <div className="flex-1 border-t-4 border-dotted border-[#0077FF]"></div>
                            {/* Arrow */}
                            <div className="w-8 h-8 rounded-full border-2 border-[#0077FF] flex items-center justify-center text-[#0077FF]">
                                <IoArrowBack />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
