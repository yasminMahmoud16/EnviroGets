import TitleSec from "@/Common/TitleSec/TitleSec.jsx";
import useJson from "@/Hooks/useJson.js";

export default function Goals() {
  const { isArabic, t } = useJson();
    const goals = t("airQuality.list", { returnObjects: true }); 
    console.log(goals);
    

  return (
    <div className="px-8 relative">
      <TitleSec title={t("airQuality.subTitle")} className="text-white" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mt-8">
        {goals.map((goal, index) => (
          <div key={index} className="flex items-start gap-4 ">
            {/* number badge */}
            <span className="shrink-0 flex items-center justify-center w-11 h-11 rounded-md bg-[#004834] text-white text-sm font-bold rounded-tr-2xl rounded-bl-2xl">
              {String(goal.number ?? index + 1).padStart(2, "0")}
            </span>

            {/* text */}
            <p
              className={`text-white text-justify  ${isArabic ? "text-sm md:text-lg leading-relaxed font-semibold" : " font-roboto font-medium text-sm md:text-lg"} `}
            >
              {goal}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
