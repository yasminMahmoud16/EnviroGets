import useJson from "@/Hooks/useJson.js";

export default function TitleSec({ title, className = "" }) {
  const { isArabic} = useJson();
  return (
    <h2
      className={` whitespace-nowrap ${isArabic ? "font-bold text-base md:text-2xl" : "font-roboto font-semibold text-xl"}  ${className}`}
    >
      {title}
    </h2>
  );
}