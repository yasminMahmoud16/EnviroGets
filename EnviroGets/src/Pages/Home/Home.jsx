import HomeInfo from "@/Components/Home/HomeInfo/HomeInfo.jsx";
import HomeCarousel from "@/Components/Home/HomeCarousel/HomeCarousel.jsx";
import bgHome from "@/assets/Images/bg-home2.webp";
import HomeCards from "@/Components/Home/HomeCards/HomeCards.jsx";

export default function Home() {
  return (
    <>
      <div className="relative w-full">

      {/* Background */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-no-repeat opacity-50"
        style={{
          backgroundImage: `url(${bgHome})`,
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Content */}
      <section className="min-h-screen pb-4">
        <HomeCarousel />
        <HomeInfo />
        <HomeCards />
      </section>
      </div>

      {/* <section className="min-h-screen ">
      </section> */}
    </>
  );
}
