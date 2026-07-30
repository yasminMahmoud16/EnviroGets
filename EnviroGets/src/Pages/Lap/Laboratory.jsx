import LabFirst from "@/Components/Lab/LabFirst.jsx";
import LabSecond from "@/Components/Lab/LabSecond.jsx";
import LabSwiper from "@/Components/Lab/LabSwiper.jsx";

export default function Laboratory() {
    return (
      <>
        <section className="min-h-screen bg-linear-to-b from-[#14363D] via-[#2E4E48] to-[#829E6D]">
                <LabFirst />
                <LabSwiper />
                <LabSecond/>
        </section>
      </>
    );
}
