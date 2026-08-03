
// import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import useJson from "@/Hooks/useJson.js";

export default function SectionsDev() {
  const { isArabic, t } = useJson();

  const links = t("sections.list", { returnObjects: true });

  return (
    <>
      <div className=" relative flex  flex-col gap-2     pb-3   px-2  "> {/*container*/}
        <div className="bg-linear-to-r from-[#13353D] via-[#607E5E] to-[#142833] w-35 h-15 md:w-45 md:h-15 rounded-xl flex  items-center justify-center ">
          <h3
            className={`${isArabic ? "font-bold text-xl md:text-2xl" : "font-roboto font-semibold  text-xl md:text-2xl"} text-white`}
          >
            {t("sections.title")}
          </h3>
        </div>
        <div className={`flex flex-col ${isArabic?"gap-2 ":"gap-4"} md:w-full lg:w-5xl`}>
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className="flex items-center gap-4 group "
            >
              {/* Text */}
              <p
                className={`${isArabic ? " font-bold  text-base md:text-xl lg:text-2xl " : "font-roboto font-semibold text-xl md:text-2xl "} text-[#0171DE]`}
              >
                {link.text}
              </p>
              {/* Dotted line */}
              <div className="flex-1 border-t-4 border-dotted border-[#0077FF]"></div>
              {/* Arrow */}
              {/* <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-[#0077FF] flex items-center justify-center text-[#0077FF]">
                                <IoArrowBack />
                            </div> */}
              <div>
                {isArabic ? (
                  <FaRegArrowAltCircleLeft className="text-[#0077FF] text-2xl md:text-3xl" />
                ) : (
                  <FaRegArrowAltCircleRight className="text-[#0077FF] text-2xl md:text-3xl" />
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
