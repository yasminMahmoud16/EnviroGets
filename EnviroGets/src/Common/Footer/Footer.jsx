import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function Footer() {

  const {t} = useTranslation();
    return (
      <>
        <footer className=" left-0 w-full z-50 bg-[linear-gradient(to_left,#698EAA,#306784,#63AE98,#0D5933)]">
          <div className="  w-full mx-auto max-w-screen-xl p-4  flex flex-col  md:flex md:flex-row md:items-center md:justify-center ">
            <ul className="flex flex-col text-white   gap-6 lg:flex-row md:flex-wrap  justify-between items-center mt-3 text-base font-extrabold text-body sm:mt-0">
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
              <li>
                <Link to="/" className="hover:underline me-4 md:me-6">
                  {t("footer.EnviroGets")}
                </Link>
              </li>
            </ul>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-2 font-RobotoCondensed text-white text-center ">
              {/* <p className="text-sm text-body sm:text-center  ">
                {t("footer.description")}
              </p> */}
              {/* <p className="text-sm text-body sm:text-center  ">
                {" "}
                EnviroGets-2026
              </p> */}

              {/* <p className="text-sm text-body sm:text-center  ">2026 </p> */}
            </div>
          </div>
        </footer>
      </>
    );
}
