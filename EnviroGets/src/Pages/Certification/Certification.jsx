import CertificationImg from "@/Components/CertificationImg/CertificationImg.jsx";
import useJson from "@/Hooks/useJson.js";


export default function Certification() {
  const { isArabic, t } = useJson();
  const text = t("certifications.description",{returnObjects:true});
  return (
    <>
      <section className="min-h-screen ">
        <div className=" pt-30">
          {/* content */}
          <div className="px-8">
            <div
              className={`bg-linear-to-r from-[#17393F]  via-[#2C4E4B] to-[#5D7C60] w-35 h-15 ${isArabic ? "md:w-50 md:h-15 rounded-xl" : "md:w-50 md:h-10 rounded-full"}  flex  items-center justify-center `}
            >
              <h3
                className={`${isArabic ? "font-bold text-xl md:text-2xl" : "font-roboto font-semibold  text-xl md:text-2xl"} text-white`}
              >
                {t("certifications.title")}
              </h3>
            </div>

            <div>
              <div
                className={`flex flex-col ${isArabic ? "gap-8" : ""} justify-center pt-8 px-8`}
              >
                {text.map((desc, index) => (
                  <p
                    key={index}
                    className={`text-main text-justify ${
                      isArabic
                        ? "font-semibold text-base md:text-xl"
                        : "font-roboto font-normal text-base md:text-xl"
                    }`}
                  >
                    {desc.includes("EnviroGets") ? (
                      <>
                        {desc.split("EnviroGets")[0]}
                        <strong className="font-bold">EnviroGets</strong>
                        {desc.split("EnviroGets")[1]}
                      </>
                    ) : (
                      desc
                    )}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* images */}
          <CertificationImg />
        </div>
      </section>
    </>
  );
}
