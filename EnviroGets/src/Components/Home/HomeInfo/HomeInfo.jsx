import map from "@/assets/Images/map.webp";
import clients from "@/assets/Images/client.webp";


import useJson from "@/Hooks/useJson.js";

import { Link } from "react-router-dom";
import { socialLinks } from "@/Utils/data/data.js";

export default function HomeInfo() {
  const { t, isArabic } = useJson();
  const information = t("home.homeInfo", { returnObjects: true });

  return (
    <>
      <div className="flex flex-col gap-4 mt-10 md:flex-row md:gap-4  justify-around items-center px-6">
        <div className="pb-3 flex items-center justify-center  mt-4 w-50 md:w-64">
          <img src={map} alt="map" className="w-full object-cover" />
        </div>
        <div className="flex items-center justify-center  md:mb-0 flex-col gap-8 ">
          {/* button */}
          <Link
            to="/contact"
            className={`w-80  lg:w-md px-4 py-3 text-center text-white font-bold text-xl lg:text-3xl rounded-2xl
             bg-[linear-gradient(to_left,#698EAA,#306784,#63AE98,#0D5933)]
             hover:brightness-90
             transition duration-300 ${isArabic ? "" : "font-roboto"}`}
          >
            {t("home.button")}
          </Link>
          <div className=" flex flex-col  items-center justify-between gap-2">
            <div
              className={`flex gap-8 items-center justify-between z-10 rounded-2xl px-4 py-2 xl:px-5 xl:py-2.5   text-base xl:text-xl text-[#F0EDE6]`}
            >
              {socialLinks.map((social) => (
                <div key={social.name}>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9"
                  >
                    <img
                      src={social.icon}
                      alt={social.name}
                      className="w-full duration-300 ease-in-out transition-all hover:-translate-y-2"
                    />
                  </a>
                </div>
              ))}
            </div>

            {/* customers  */}
            <div
              dir="rtl"
              className={` flex flex-col md:flex-row ${
                isArabic ? " w-70 md:w-md" : "mr-6 w-70 md:w-xl"
              } gap-9 items-center justify-center  rounded-2xl px-4 py-2 xl:px-5 xl:py-2.5 border border-[#014700]  bg-white/5 backdrop-blur-xs text-base xl:text-xl text-[#014700] shadow-lg`}
            >
              {information.map((info, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center justify-center
      ${index !== 0 ? "md:border-r border-[#014700] md:pr-4" : ""}
      
    `}
                >
                  <p className="font-bold text-md xl:text-2xl xl:mb-1 font-roboto">
                    {info.num}+
                  </p>

                  <p
                    className={`font-extrabold text-sm xl:text-xl ${isArabic ? "" : "font-roboto "}`}
                  >
                    {info.text}
                  </p>
                </div>
              ))}
            </div>
            {/* <div>
              <a href="#" target="_blank" className="w-9">
                <img
                  src={whatsApp}
                  alt="whatsApp"
                  className="w-full duration-300 ease-in-out transition-all hover:-translate-y-2"
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.tiktok.com/@gem1_11?_r=1&_t=ZS-94tyzljPCpY"
                className="w-9"
                target="_blank"
              >
                <img
                  src={tiktok}
                  alt="tiktok"
                  className="w-full duration-300 ease-in-out transition-all hover:-translate-y-2"
                />
              </a>
            </div>

            <div>
              <a
                href="https://x.com/GETES662766"
                target="_blank"
                className="w-9"
              >
                <img
                  src={instagram}
                  alt="instagram"
                  className="w-full duration-300 ease-in-out transition-all hover:-translate-y-2"
                />
              </a>
            </div>
            <div>
              <a
                href="https://x.com/GETES662766"
                target="_blank"
                className="w-9"
              >
                <img
                  src={twitter}
                  alt="twitter"
                  className="w-full duration-300 ease-in-out transition-all hover:-translate-y-2"
                />
              </a>
            </div>

            <div>
              <a
                href="https://www.linkedin.com/company/%D8%AA%D9%82%D9%86%D9%8A%D8%A9-%D8%A7%D9%84%D8%A8%D9%8A%D8%A6%D8%A9-%D8%A7%D9%84%D8%AE%D9%84%D9%8A%D8%AC%D9%8A%D8%A9-getes/"
                target="_blank"
                className="w-9"
              >
                <img
                  src={linkedin}
                  alt="linkedin"
                  className="w-full duration-300 ease-in-out transition-all hover:-translate-y-2"
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.facebook.com/share/18FCEHt6m6/"
                target="_blank"
                className="w-9"
              >
                <img
                  src={facebook}
                  alt="facebook"
                  className="w-full duration-300 ease-in-out transition-all hover:-translate-y-2"
                />
              </a>
            </div> */}
          </div>

          {/* <div className=" w-full flex items-center justify-center"> */}

          {/* </div> */}
        </div>
        <div className=" flex items-center justify-center px-4 mt-4 w-50 md:w-64">
          <img
            src={clients}
            alt="clients"
            className="w-full object-contain drop-shadow-xl"
          />
        </div>
        {/* <SocialMedia  /> */}

        <div className="hidden my-2  grid-cols-5 items-center">
          {socialLinks.map((social) => (
            <div className="w-20" key={social.name}>
              <a href={social.link} target="_blank" rel="noopener noreferrer">
                <img src={social.icon} alt={social.name} />
              </a>
            </div>
          ))}
          {/* <div className="w-20">
            <img src={whatsApp} alt="whatsApp" />
          </div> */}

          {/* <div className="w-25">
            <a
              href="https://www.tiktok.com/@gem1_11?_r=1&_t=ZS-94tyzljPCpY"
              target="_blank"
            >
              <img src={tiktok} alt="tiktok" />
            </a>
          </div>
          <div className="w-25">
            <a
              href="https://www.tiktok.com/@gem1_11?_r=1&_t=ZS-94tyzljPCpY"
              target="_blank"
            >
              <img src={instagram} alt="instagram" />
            </a>
          </div>

          <div className="w-25">
            <a href="https://x.com/GETES662766" target="_blank">
              <img src={twitter} alt="twitter" />
            </a>
          </div>

          <div className="w-25">
            <a href="https://www.linkedin.com/company/..." target="_blank">
              <img src={linkedin} alt="linkedin" />
            </a>
          </div>

          <div>
            <a
              href="https://www.facebook.com/share/18FCEHt6m6/"
              target="_blank"
            >
              <img src={facebook} alt="facebook" />
            </a>
          </div> */}
        </div>
      </div>
    </>
  );
}
