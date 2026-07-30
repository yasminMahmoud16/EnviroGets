import HomeInfo from "@/Components/Home/HomeInfo/HomeInfo.jsx";
import HomeCarousel from "@/Components/Home/HomeCarousel/HomeCarousel.jsx";
import bgHome from "@/assets/Images/bg-home.jpg";
import HomeCards from "@/Components/Home/HomeCards/HomeCards.jsx";

export default function Home() {
  return (
    <main className="relative w-full">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-50"
        style={{ backgroundImage: `url(${bgHome})` }}
      />

      {/* Content */}
      <section className="min-h-screen pb-4">
        <HomeCarousel />
        <HomeInfo />
        <HomeCards />
      </section>

      {/* <section className="min-h-screen ">
      </section> */}
    </main>
  );
}
