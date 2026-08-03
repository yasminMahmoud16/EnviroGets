import bgContact from "@/assets/Images/bgContact.webp";
import useJson from "@/Hooks/useJson.js";
export default function ContactBg() {
  const { t, isArabic } = useJson();
  return (
    <>
      <div
        className="relative h-80 w-full bg-cover bg-no-repeat flex  justify-center items-center"
        style={{
          backgroundImage: `url(${bgContact})`,
          // backgroundPosition: "center top",
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[#809c6c]/53" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center   px-8 md:px-16 max-w-xl gap-3">
          <h1
            className={`text-[#014700] mb-3 ${isArabic ? " text-3xl md:text-4xl font-bold" : "font-roboto font-semibold text-xl md:text-3xl"}`}
          >
            {t("contact.title")}
          </h1>
          <p
            className={`text-[#014700] font-semibold text-base md:text-xl leading-relaxed ${isArabic ? "" : "font-roboto font-semibold text-xl md:text-2xl"}`}
          >
            {t("contact.description")}
          </p>
        </div>
      </div>
    </>
  );
}
