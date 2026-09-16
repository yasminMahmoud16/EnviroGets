import whatsApp from "@/assets/Images/whatsApp.webp";
import facebook from "@/assets/Images/facebool.webp";
import tiktok from "@/assets/Images/tiktok.webp";
import twitter from "@/assets/Images/twitter.webp";
import linkedin from "@/assets/Images/linkedin.webp";
import instagram from "@/assets/Images/instagram.webp";
export default function SocialMedia() {
    return (
      <>
        <div className="flex  justify-center items-center gap-8 ">
          <div className={`flex  items-center justify-center gap-3 `}>
            <div className="w-8 h-8">
              <a href="#" target="_blank">
                <img
                  src={whatsApp}
                  alt="whatsApp"
                  className="duration-300 ease-in-out transition-all hover:-translate-y-2"
                />
              </a>
            </div>
            <div className="w-8 h-8">
              <a
                href="https://www.tiktok.com/@gem1_11?_r=1&_t=ZS-99lNCvlkkIW"
                target="_blank"
              >
                <img
                  src={tiktok}
                  alt="tiktok"
                  className="duration-300 ease-in-out transition-all hover:-translate-y-2 w-full h-full"
                />
              </a>
            </div>
            <div className="w-7 h-7">
              <a href="https://x.com/GETES662766" target="_blank">
                <img
                  src={twitter}
                  alt="twitter"
                  className="duration-300 ease-in-out transition-all hover:-translate-y-2 w-full h-full"
                />
              </a>
            </div>
            <div className="w-8 h-8">
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
            <div className="w-8 h-8">
              <a
                href="https://www.facebook.com/share/1DyDSCMGYS/"
                target="_blank"
              >
                <img
                  src={facebook}
                  alt="facebook"
                  className="duration-300 ease-in-out transition-all hover:-translate-y-2 w-full h-full"
                />
              </a>
            </div>
            <div className="w-8 h-8">
              <a
                href="https://www.instagram.com/getes.2026?stkn=MXUxbmxqaG1ldGNlcA=="
                target="_blank"
              >
                <img
                  src={instagram}
                  alt="instagram"
                  className="duration-300 ease-in-out transition-all hover:-translate-y-2 w-full h-full"
                />
              </a>
            </div>
          </div>
        </div>
      </>
    );
}
