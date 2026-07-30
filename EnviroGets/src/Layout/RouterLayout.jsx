import { Outlet } from "react-router";
import NavbarCom from "../Common/Navbar/NavbarCom.jsx";
import Footer from "../Common/Footer/Footer.jsx";

export default function RouterLayout() {

    return (
      <>

          {/* <main className="relative "> */}
          <NavbarCom />
            <Outlet />
          {/* </main> */}

          <Footer />
      </>
    );
}
