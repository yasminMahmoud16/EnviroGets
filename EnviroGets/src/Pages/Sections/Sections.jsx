import bgSections from "../../assets/Images/bgSections.jpg";

import SectionsDev from "../../Components/SectionsDev/SectionsDev.jsx";
import useJson from "../../Hooks/useJson.js";


export default function Sections() {

  const { t } = useJson();


    return (
      <>
        {/* <div
          className="absolute inset-0 -z-10 bg-cover bg-position-[center_-1rem]
    lg:bg-position-[center_-250px]  bg-no-repeat "
          style={{
            backgroundImage: `url(${bgSections})`,
            // backgroundPosition: "center -250px",
          }}
        > */}

        <section
          className="relative bg-cover bg-position-[center_-1rem]
    lg:bg-position-[center_-250px]  bg-no-repeat z-10 min-h-screen flex md:flex-col lg:flex-row items-end md:items-end  lg:items-end md:justify-end lg:justify-between   px-10"
          style={{
            backgroundImage: `url(${bgSections})`,
            // backgroundPosition: "center -250px",
          }}
        >
          <div className="absolute inset-0 bg-linear-to-b from-[#2c70a034] via-[#2c70a022] to-[#2c70a036] z-0"></div>

          <SectionsDev />

          <div className="relative md:w-xs lg:w-md hidden md:block ">
            <img
              src={t("sections.image")}
              alt="landing"
              loading="lazy"
              className={`w-full object-cover    `}
            />
          </div>
        </section>

        {/* </div> */}
      </>
    );
}
