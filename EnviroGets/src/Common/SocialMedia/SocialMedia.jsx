import whatsApp from "../../assets/Images/whatsApp.png";
import facebook from "../../assets/Images/facebool.png";
import tiktok from "../../assets/Images/tiktok.png";
import twitter from "../../assets/Images/twitter.png";
import linkedin from "../../assets/Images/linkedin.png";
import QR from "../../assets/Images/QR.png";
export default function SocialMedia() {
    return (
      <>
        <div className="flex  justify-center items-center gap-8 ">
          <div className={`flex  items-center justify-center gap-3 `}>
            <div className="w-10 h-10">
              <a href="#" target="_blank">
                <img
                  src={whatsApp}
                  alt="whatsApp"
                  className="duration-300 ease-in-out transition-all hover:-translate-y-2"
                />
              </a>
            </div>
            <div className="w-10 h-10">
              <a
                href="https://www.tiktok.com/@gem1_11?_r=1&_t=ZS-94tyzljPCpY"
                target="_blank"
              >
                <img
                  src={tiktok}
                  alt="tiktok"
                  className="duration-300 ease-in-out transition-all hover:-translate-y-2 w-full h-full"
                />
              </a>
            </div>
            <div className="w-10 h-10">
              <a href="https://x.com/GETES662766" target="_blank">
                <img
                  src={twitter}
                  alt="twitter"
                  className="duration-300 ease-in-out transition-all hover:-translate-y-2 w-full h-full"
                />
              </a>
            </div>
            <div className="w-10 h-10">
              <a
                href="https://www.linkedin.com/company/%D8%AA%D9%82%D9%86%D9%8A%D8%A9-%D8%A7%D9%84%D8%A8%D9%8A%D8%A6%D8%A9-%D8%A7%D9%84%D8%AE%D9%84%D9%8A%D8%AC%D9%8A%D8%A9-getes/"
                target="_blank"
              >
                <img
                  src={linkedin}
                  alt="linkedin"
                  className="duration-300 ease-in-out transition-all hover:-translate-y-2 w-full h-full"
                />
              </a>
            </div>
            <div className="w-10 h-10">
              <a
                href="https://www.facebook.com/share/18FCEHt6m6/"
                target="_blank"
              >
                <img
                  src={facebook}
                  alt="facebook"
                  className="duration-300 ease-in-out transition-all hover:-translate-y-2 w-full h-full"
                />
              </a>
            </div>
          </div>

          <div className="w-10 h-10">
            <a
              href="https://www.facebook.com/share/18FCEHt6m6/"
              target="_blank"
            >
              <img src={QR} alt="facebook" className=" w-full h-full" />
            </a>
          </div>
        </div>
      </>
    );
}
