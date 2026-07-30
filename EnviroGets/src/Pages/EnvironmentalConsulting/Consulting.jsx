import TitleSec from "@/Common/TitleSec/TitleSec.jsx";
import Air from "@/Components/Consulting/Air.jsx";
import ConInfo from "@/Components/Consulting/ConInfo.jsx";
import useJson from "@/Hooks/useJson.js"

export default function Consulting() {
    const { isArabic, t} = useJson();
    return (
      <>
        <section className="min-h-screen">
          <div
            className={`  mt-30  px-4 flex flex-col ${isArabic ? "items-start" : "items-start"} gap-4 `}
          >
            <div className=" w-50 py-1 rounded-full  flex items-center justify-center bg-linear-to-b from-[#378BC8] to-[#2C6FA0] text-white">
              <h5
                className={`${isArabic ? "font-bold text-xl" : "font-roboto font-semibold text-xl"}`}
              >
                {t("consulting.subTitle")}
              </h5>
            </div>
            {/* <h2
              className={`text-[#2C6FA0]  whitespace-nowrap ${isArabic ? "font-bold text-2xl" : "font-roboto font-semibold text-xl"}`}
            >
              {t("consulting.title")}
            </h2> */}
            <TitleSec
              title={t("consulting.title")}
              className="text-[#2C6FA0]"
            />
          </div>

          <ConInfo />
          <Air />
        </section>
      </>
    );
}
