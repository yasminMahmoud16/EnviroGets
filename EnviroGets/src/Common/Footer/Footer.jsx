import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function Footer() {

  const {t} = useTranslation();
    return (
      <>
        <footer className="bg-[#032F0D] text-white border-[0.5px] border-[#5fcf8165]">
          <div className="  w-full mx-auto max-w-screen-xl p-4  flex flex-col gap-2 md:flex md:flex-row md:items-center md:justify-between">
            <ul className="flex flex-col  gap-2 md:flex-row md:flex-wrap items-center mt-3 text-sm font-medium text-body sm:mt-0">
              <li>
                <Link to="/contact" className="hover:underline me-4 md:me-6">
                  {t("footer.Contact")}
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline me-4 md:me-6">
                  {t("footer.terms")}
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline me-4 md:me-6">
                  {t("footer.PrivacyPolicy")}
                </Link>
              </li>
            </ul>
            <div className="flex items-center justify-center gap-2 font-RobotoCondensed">
              <p className="text-sm text-body sm:text-center  ">
                {t("footer.description")}
              </p>
              <p className="text-sm text-body sm:text-center  "> EPECO</p>
              <p className="text-sm text-body sm:text-center  ">2026© </p>
            </div>
          </div>
        </footer>
      </>
    );
}
