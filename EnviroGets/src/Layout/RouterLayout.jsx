import { Outlet } from "react-router";
// import Footer from "../Common/Footer/Footer.jsx";
import NavbarCom from "../Common/Navbar/NavbarCom.jsx";

export default function RouterLayout() {
    return (
      <>

          {/* <main className="relative "> */}
          <NavbarCom />
            <Outlet />
          {/* </main> */}

          {/* <Footer /> */}
      </>
    );
}
