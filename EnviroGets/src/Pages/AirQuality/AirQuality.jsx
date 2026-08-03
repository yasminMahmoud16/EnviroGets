import airBg from "@/assets/Images/airBg.webp";
import AirMentoring from "@/Components/Air/AirMentoring.jsx";
import Goals from "@/Components/Air/Goals.jsx";
export default function AirQuality() {
  
  return (
    <>
      <section
        className="min-h-screen bg-no-repeat bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${airBg})`,
          backgroundPosition: "center center",
        }}
      >
        <div className="absolute  inset-0 bg-linear-to-b from-[#7a966974] via-[#53715878] to-[#17393e64] z-0"></div>

        <div className="flex flex-col gap-8 py-3">
          <AirMentoring />
          <Goals />
        </div>
      </section>
    </>
  );
}
