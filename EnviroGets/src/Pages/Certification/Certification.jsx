import { useTranslation } from "react-i18next";
import ArticleSubNav from "../../Common/ArticleSubNav/ArticleSubNav.jsx";
import TitleSec from "../../Common/TitleSec/TitleSEC.jsx";
import i18next from "i18next";
import CertificationsImg from "../../Components/CertificationsImg/CertificationsImg.jsx";

export default function Certification() {
    const isArabic = i18next.language === "ar";
    const { t } = useTranslation();
    return (
      <>
        <section>
          <div className="hidden md:block w-full h-40 bg-[#F3F4F5] mt-16 lg:mt-19 py-5 px-20">
            <ArticleSubNav
              mainTitle={t("certifications.mainTitle")}
              main={t("certifications.main")}
            />

            <TitleSec
              title={t("certifications.mainTitle")}
              className={`hidden md:block ${isArabic ? "text-right" : "text-left"} font-normal text-[#1A5C2C] text-xl md:text-4xl mt-2`}
            />
          </div>

          <div className="bg-white min-h-screen flex flex-col items-center justify-center gap-14 py-6 px-14">
            <div className="mt-20 md:mt-5 flex flex-col gap-6 items-center pt-10 ">
              <TitleSec
                title={t("certifications.title")}
                className="text-title font-normal leading-none text-4xl"
              />

              <p className="font-normal text-lg  xl:text-xl text-center text-[#1A5C2C] leading-10">
                {t("certifications.description")}
              </p>
            </div>

            <CertificationsImg />
          </div>
        </section>
      </>
    );
}
