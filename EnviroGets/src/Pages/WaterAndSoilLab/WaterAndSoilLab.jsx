
import LabSecond from "@/Components/Lab/LabSecond.jsx";
import LabSwiper from "@/Components/Lab/LabSwiper.jsx";
import useJson from "@/Hooks/useJson.js";

export default function WaterAndSoilLab() {
  const { isArabic } = useJson();
  return (
    <>
      <section className="min-h-screen px-4">
        <div
          className={`  pt-30  px-4 flex flex-col ${isArabic ? "items-start" : "items-start"} gap-4 `}
        >
          <LabSecond />
          <LabSwiper />
        </div>
      </section>
    </>
  );
}
