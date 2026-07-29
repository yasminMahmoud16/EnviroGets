
import map from "../../assets/Images/map2.png"
import logo from "../../assets/Images/EnviroGets.png"
import useJson from "../../Hooks/useJson.js";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { MdPhoneInTalk } from "react-icons/md";
import SocialMedia from "../../Common/SocialMedia/SocialMedia.jsx";
export default function ContactInfo() {
    const { t, isArabic } = useJson();

    return (
      <>
        <div className="flex flex-col lg:flex-row  items-center justify-between px-20 ">
          {/* parent container */}

          <div className="">
            <div className=" flex  items-start justify-center gap-8 p-4  ">
              {/* logo image */}
              <div className="w-15 h-25  pb-10 ">
                <img src={logo} alt="EnviroGets" className="w-full h-full" />
              </div>

              {/* container */}
              <div className="flex flex-col gap-4 ">
                <h3
                  className={` ${isArabic ? "text-right" : "text-left font-roboto font-semibold text-base md:text-3xl"} text-[#2C6FA0] font-extrabold text-xl md:text-3xl `}
                >
                  {t("contact.subTitle")}
                </h3>
                <div
                  className={`flex flex-col ${isArabic ? "items-end" : " items-start"}  gap-4`}
                >
                  <div
                    className="flex items-center justify-center text-left  gap-2"
                    dir="ltr"
                  >
                    <IoLocation className="text-xl text-[#2C6FA0]" />
                    <p
                      className={`text-[#2C6FA0] font-normal text-sm ${isArabic ? "" : "font-roboto "}`}
                    >
                      {t("contact.address")}
                    </p>
                  </div>
                  <div
                    className="flex items-center justify-center gap-2"
                    dir="ltr"
                  >
                    <MdEmail className="text-xl text-[#2C6FA0] " />
                    <p
                      className={`text-[#2C6FA0] font-normal text-sm ${isArabic ? "" : "font-roboto "}`}
                    >
                      {t("contact.email")}
                    </p>
                  </div>

                  <div
                    className="flex items-center justify-center gap-2"
                    dir="ltr"
                  >
                    <MdPhoneInTalk className="text-xl text-[#2C6FA0]" />
                    <p
                      className={`text-[#2C6FA0] font-normal text-sm ${isArabic ? "" : "font-roboto "}`}
                    >
                      {t("contact.phone")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social media  */}
            <div
              className={`flex flex-col gap-4  justify-center  items-center mt-3`}
            >
              <p
                className={`${isArabic ? "text-lg text-right " : "font-roboto text-lg text-left"} text-[#2C6FA0] font-semibold `}
              >
                {t("contact.socialAd")}
              </p>
              <SocialMedia />
            </div>
          </div>

          <div className="w-80  h-80 py-4">
            <img src={map} alt="map" className="w-full h-full rounded-xl" />
          </div>
        </div>
      </>
    );
}
