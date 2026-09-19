import useJson from "@/Hooks/useJson.js";
import {img1,border1,img2,border2,img3,img4,} from "@/assets/Images/Images.js";
import LabAnimation from "./LabAnimation.jsx";



export default function LabServices() {
    const { isArabic, t } = useJson();
    const services = t("labDetails.labs", {
        returnObjects: true,
    });



    return (
      <>
        {/* parent  */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-5">
          {/* container */}
          <div className="col-span-1">
            {/* list card */}

            <div>
              {services.map((service, index) => (
                <div key={index}>
                  <div
                    className="bg-[#378BC8] w-fit  flex items-center justify-center rounded-2xl py-3 px-2"
                  >
                    <h2
                      className={`text-white ${isArabic ? "text-2xl md:text-3xl " : "font-roboto text-2xl md:text-3xl "} font-normal`}
                    >
                      {service.title}
                    </h2>
                  </div>
                  <div>
                    <ul
                      className={`list-disc my-3  text-white/90 text-sm leading-relaxed font-bold  ${isArabic ? "text-lg pr-5" : "font-roboto text-left text-2xl font-semibold pl-5"} text-justify  `}
                      style={{ listStyleType: "square" }}
                      dir={isArabic ? "rtl" : "ltr"}
                    >
                      {service.items.map((point, i) => (
                        <li key={i} className="pb-2 ">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* images  */}
          <div className="col-span-1 relative flex flex-col items-center gap-0 py-6">
            {/* Top pair: small square + larger square, offset like a collage */}
            <div className="relative  w-56 h-40">
              {/* small top-left square */}

              <div className="absolute top-0 left-0 w-40 h-40 rounded-2xl overflow-hidden  shadow ">
                <img
                  src={img1}
                  loading="lazy"
                  alt="lab worker"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-15 right-35 w-30 h-30 rounded-2xl overflow-hidden   z-10">
                <img
                  src={border1}
                  loading="lazy"
                  alt="lab worker"
                  className="w-full h-full object-fit"
                />
              </div>
            </div>

            <div className="relative  w-56 h-40">
              {/* larger bottom-right square, overlapping */}
              <div className="absolute -top-14 left-25 w-50 h-50 rounded-2xl overflow-hidden  shadow-md z-10">
                <img
                  src={img2}
                  loading="lazy"
                  alt="lab technicians"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute left-15 top-5 w-25 h-25 rounded-xl overflow-hidden   ">
                <img
                  src={border2}
                  loading="lazy"
                  alt="lab worker"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* </div> */}

            {/* Circular buoy image */}
            {/* larger bottom-right square, overlapping */}

            <div className="relative  w-56 h-40">
              <div className="absolute top-0 left-12 w-50 h-50 rounded-3xl overflow-hidden shadow z-10">
                <img
                  src={img3}
                  loading="lazy"
                  alt="lab technicians"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-8 left-43 w-30 h-30 rounded-2xl overflow-hidden   ">
                <img
                  src={border1}
                  loading="lazy"
                  alt="lab worker"
                  className="w-full h-full object-fit"
                />
              </div>
            </div>

            {/* Bottom large image with rounded corners + logo badge overlapping */}
            <div className="relative w-56 h-56 ">
              <div className="absolute top-13 w-full h-full rounded-full overflow-hidden  shadow-md">
                <img
                  src={img4}
                  loading="lazy"
                  alt="microscope work"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <LabAnimation />
        </div>
      </>
    );
}
