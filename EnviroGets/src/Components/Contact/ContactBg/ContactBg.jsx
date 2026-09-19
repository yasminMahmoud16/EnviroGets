import bgContact from "@/assets/Images/bgContact.webp";
import useJson from "@/Hooks/useJson.js";
export default function ContactBg() {
  const { t, isArabic } = useJson();
  return (
    <>
      <div
        className="relative h-80 w-full bg-cover bg-no-repeat flex  justify-center items-center mb-5"
        style={{
          backgroundImage: `url(${bgContact})`,
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[#809c6c]/53" />

        {/* Content */}
        <div
          className={` bg-white/5 backdrop-blur-xs border border-[#9fd39db5] rounded-xl  relative z-10 flex flex-col items-center justify-center text-center py-2  px-3.5 max-w-xl  ${isArabic ? "gap-2" : "mt-13 gap-1 "}`}
        >
          <h1
            className={`text-white mb-3 ${isArabic ? " text-2xl font-extrabold" : "font-roboto font-semibold text-xl md:text-3xl"}`}
          >
            {t("contact.title")}
          </h1>
          <p
            className={`text-white font-black text-base md:text-2xl leading-relaxed ${isArabic ? "" : "font-roboto font-semibold text-xl md:text-xl"}`}
          >
            {t("contact.description")}
          </p>
        </div>
      </div>
    </>
  );
}
