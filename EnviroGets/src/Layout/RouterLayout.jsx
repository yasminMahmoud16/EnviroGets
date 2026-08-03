import { Outlet, useLocation } from "react-router";
import NavbarCom from "../Common/Navbar/NavbarCom.jsx";
import Footer from "../Common/Footer/Footer.jsx";

export default function RouterLayout() {
  const location = useLocation();

    return (
      <>
        {/* <main className="relative "> */}
        <NavbarCom />
        <Outlet />
        {/* </main> */}

        {![
          "/soil-studies",
          "/air-quality",
          "/about",
          "/sections",
          "/laboratories",
        ].includes(location.pathname) && <Footer />}
      </>
    );
}
