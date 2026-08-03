import AboutArticle from "@/Components/About/AboutArticle/AboutArticle.jsx";
import AboutMission from "@/Components/About/AboutMission/AboutMission.jsx";
import useJson from "@/Hooks/useJson.js";
import aboutBg from "@/assets/Images/aboutBg.webp";
// import aboutBg from "@/assets/Images/aboutBg1.jpg"
export default function About() {
  const { isArabic } = useJson();
  return (
    <>
      <section className="relative min-h-screen flex flex-col justify-start px-10 overflow-hidden">
        {/* Background */}
        <div
          className={`absolute inset-0 -z-10 bg-cover bg-no-repeat  ${
            isArabic ? "-scale-x-100" : ""
          }`}
          style={{
            backgroundImage: `url(${aboutBg})`,
          }}
        />
        <div className="absolute inset-0 bg-[#00000052] z-0"></div>

        {/* Content */}
        <div className="relative z-10 mt-4">
          <AboutArticle />
        </div>

        <div
          className={` hidden  relative z-10 md:flex  gap-3 w-4xl  mb-3 `}
          dir={isArabic ? "ltr" : "rtl"}
        >
          <AboutMission />
        </div>
        <div
          className={` flex  relative z-10 md:hidden  gap-3   mb-3 `}
          dir={isArabic ? "ltr" : "rtl"}
        >
          <AboutMission />
        </div>
      </section>
    </>
  );
}
