import map from "@/assets/Images/map.webp";
import clients from "@/assets/Images/client.webp";
import whatsApp from "@/assets/Images/whatsApp.webp";
import facebook from "@/assets/Images/facebool.webp";
import tiktok from "@/assets/Images/tiktok.webp";
import twitter from "@/assets/Images/twitter.webp";
import linkedin from "@/assets/Images/linkedin.webp";
import useJson from "@/Hooks/useJson.js";

export default function HomeInfo() {
  const { isArabic, t } = useJson();

  const information = t("home.homeInfo", { returnObjects: true });
  return (
    <>
      <div className="flex flex-col mt-4 md:flex-row md:gap-4  justify-between items-center px-6">
        <div className="pb-3 flex items-center justify-center ">
          <img src={map} alt="map" className="lg:w-full object-cover" />
        </div>
        <div className="flex mb-40 md:mb-0 flex-col gap-8">
          <div
            dir="rtl"
            className={`flex flex-col md:flex-row text-center justify-center gap-10`}
          >
            {information.map((info, index) => (
              <div 
                key={index}
                className={`text-2xl text-[#014700] ${isArabic ? "text-right" : "text-left"}`}
              >
                <p className=" font-roboto font-bold">{info.num}+</p>
                <p
                  className={`md:text-base lg:text-2xl font-extrabold ${isArabic ? "text-right" : "text-left"}`}
                >
                  {info.text}
                </p>
              </div>
            ))}
          </div>
          <div className="hidden md:flex items-center justify-center md:gap-4 lg:gap-16">
            <div>
              <a href="#">
                <img
                  src={whatsApp}
                  alt="whatsApp"
                  // className="w-full"
                  className="duration-300 ease-in-out transition-all hover:-translate-y-2"
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.tiktok.com/@gem1_11?_r=1&_t=ZS-94tyzljPCpY"
                target="_blank"
              >
                <img
                  src={tiktok}
                  alt="tiktok"
                  className="duration-300 ease-in-out transition-all hover:-translate-y-2"
                />
              </a>
            </div>
            <div>
              <a href="https://x.com/GETES662766" target="_blank">
                <img
                  src={twitter}
                  alt="twitter"
                  className="duration-300 ease-in-out transition-all hover:-translate-y-2"
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/company/%D8%AA%D9%82%D9%86%D9%8A%D8%A9-%D8%A7%D9%84%D8%A8%D9%8A%D8%A6%D8%A9-%D8%A7%D9%84%D8%AE%D9%84%D9%8A%D8%AC%D9%8A%D8%A9-getes/"
                target="_blank"
              >
                <img
                  src={linkedin}
                  alt="linkedin"
                  className="duration-300 ease-in-out transition-all hover:-translate-y-2"
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.facebook.com/share/18FCEHt6m6/"
                target="_blank"
              >
                <img
                  src={facebook}
                  alt="facebook"
                  className="duration-300 ease-in-out transition-all hover:-translate-y-2"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="relative z-20 -mt-32 md:-mt-10 flex items-center justify-center px-4">
          <img
            src={clients}
            alt="clients"
            className="lg:w-full max-w-3xl object-contain drop-shadow-xl"
          />
        </div>
        {/* <SocialMedia  /> */}

        <div className="md:hidden my-2 grid grid-cols-5 items-center">
          <div className="w-20">
            <img src={whatsApp} alt="whatsApp" />
          </div>

          <div className="w-25">
            <a
              href="https://www.tiktok.com/@gem1_11?_r=1&_t=ZS-94tyzljPCpY"
              target="_blank"
            >
              <img src={tiktok} alt="tiktok" />
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
          </div>
        </div>
      </div>
    </>
  );
}
