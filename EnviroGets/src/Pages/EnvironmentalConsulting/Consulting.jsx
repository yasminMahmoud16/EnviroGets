
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
          <div className="mt-10 w-50 py-3 rounded-2xl  flex items-center justify-center bg-main text-white">
            <h5
              className={`${isArabic ? "font-normal text-3xl" : "font-roboto font-semibold text-xl"}`}
            >
              {t("consulting.subTitle")}
            </h5>
          </div>
        </div>

        <ConInfo />
      </section>
    </>
  );
}
