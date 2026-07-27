import bgSections from "../../assets/Images/bgSections.jpg";
import landing from "../../assets/Images/landing page (15) 1.png";
import SectionsDev from "../../Components/SectionsDev/SectionsDev.jsx";


export default function Sections() {



    return (
        <>
            <div
                className="absolute inset-0 -z-10 bg-cover  bg-no-repeat "
                style={{
                    backgroundImage: `url(${bgSections})`,
                    backgroundPosition: "center -250px",
                }}
            >
                <div className="absolute inset-0 bg-linear-to-b from-[#2c70a034] via-[#2c70a022] to-[#2c70a036] z-0"></div>

                <section className="relative z-10 min-h-screen flex items-end justify-center   px-8">
                    <SectionsDev />

                    <div className="w-md  ">
                        <img
                            src={landing}
                            alt="landing"
                            className="w-full object-cover"
                        />
                    </div>
                </section>
            </div>
        </>
    );
}
