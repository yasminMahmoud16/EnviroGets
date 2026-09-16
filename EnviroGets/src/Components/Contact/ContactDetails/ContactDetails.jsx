import SocialMedia from "@/Common/SocialMedia/SocialMedia.jsx";
import useJson from "@/Hooks/useJson.js";
import { logo, branch } from "@/assets/Icons/icon.js";
import ContactBranches from "../ContactBranches/ContactBranches.jsx";
import ContactForm from "@/Components/ContactForm/ContactForm.jsx";
export default function ContactDetails() {
    const { isArabic, t } = useJson();
    return (
      <>
        {/* container */}
        <div className="relative flex flex-col items-center my-5">
          {/* Logo centered between the two columns */}
          <div
            className={`hidden w-60 h-35 pb-10 lg:flex justify-center absolute  md:-top-3  ${isArabic ? " left-1/2 -translate-x-1/4" : " left-1/2 -translate-x-1/4"} `}
          >
            <img
              src={logo}
              alt="EnviroGets"
              className="w-full h-full object-contain"
            />
          </div>

          <div
            className="grid grid-cols-1  lg:grid-cols-2 w-full px-8 mt-4"
            dir={`${isArabic ? "" : "rtl"}`}
          >
            {/* Left column */}
            <div className="col-span-1 flex flex-col  lg:items-start gap-3">
              <div className="flex items-center gap-3">
                <div className="w-15 h-15">
                  <img
                    src={branch}
                    alt="فروعنا"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3
                    className={`${
                      isArabic ? "text-3xl" : "font-roboto text-2xl"
                    } font-medium text-[#2C6FA0]`}
                  >
                    {t("contact.bransheTitle")}
                  </h3>
                </div>
              </div>

              <ContactBranches />
            </div>

            {/* Right column */}
            <div className="col-span-1">
              <div
                className={`flex flex-col items-start gap-4 justify-center my-3 ${isArabic ? "lg:mr-15" : "lg:mr-15"}`}
              >
                <p
                  className={`${
                    isArabic
                      ? "text-lg text-right"
                      : "font-roboto text-lg text-left"
                  } text-[#249643] font-semibold`}
                >
                  {t("contact.socialAd")}
                </p>

                <SocialMedia />
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </>
    );
}
