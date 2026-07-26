import HomeCarousel from "../../Components/HomeCarousel/HomeCarousel.jsx";


export default function Home() {
  
    return (
      <>
        <main>
          <section className=" min-h-screen">
            <HomeCarousel />
            
          </section>
{/* 
          <section className="flex flex-col items-center justify-center py-6 px-16 gap-0.5 bg-[#F5F0E8] ">
            <HomePolicy />
          </section>

          <section className="py-6 px-16 bg-[#053510]">
            <HomeService />
          </section>
          <section className="py-6 px-16 bg-[#F5F0E8] ">
            <HomeAudience />
          </section> */}
        </main>
      </>
    );
}
