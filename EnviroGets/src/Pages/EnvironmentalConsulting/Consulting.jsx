// import TitleSec from "@/Common/TitleSec/TitleSec.jsx";
// import Air from "@/Components/Consulting/Air.jsx";
import ConInfo from "@/Components/Consulting/ConInfo.jsx";
import useJson from "@/Hooks/useJson.js";

export default function Consulting() {
  const { isArabic, t } = useJson();
  return (
    <>
      <section className="min-h-screen px-4">
        <div
          className={`  pt-15  px-4 flex flex-col ${isArabic ? "items-start" : "items-start"} gap-4 `}
        >
          <div className="mt-10 w-50 py-3 rounded-2xl  flex items-center justify-center bg-[#2C6FA0] text-white">
            <h5
              className={`${isArabic ? "font-normal text-3xl" : "font-roboto font-semibold text-xl"}`}
            >
              {t("consulting.subTitle")}
            </h5>
          </div>
          {/* <h2
              className={`text-main  whitespace-nowrap ${isArabic ? "font-bold text-2xl" : "font-roboto font-semibold text-xl"}`}
            >
              {t("consulting.title")}
            </h2> */}
        </div>

        <ConInfo />
      </section>
    </>
  );
}
