import { Outlet } from "react-router";
// import Footer from "../Common/Footer/Footer.jsx";
import NavbarCom from "../Common/Navbar/NavbarCom.jsx";
import { useEffect } from "react";

export default function RouterLayout() {
  useEffect(() => {
    console.log("App Mounted");
  }, []);
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
