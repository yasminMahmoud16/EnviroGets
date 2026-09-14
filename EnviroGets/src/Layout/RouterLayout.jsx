import { Outlet } from "react-router";
import NavbarCom from "../Common/Navbar/NavbarCom.jsx";
import Footer from "../Common/Footer/Footer.jsx";
// import bgSections from "@/assets/Images/bgSections.webp";
// import bgHome from "@/assets/Images/bg-home2.webp";

export default function RouterLayout() {
  // const location = useLocation();
  // const backgrounds = {
  //   "/": bgHome,
  //   "/sections": bgSections,
  //   // "/about": bgAbout,
  // };
  // const currentBackground = backgrounds[location.pathname];

    return (
      <>
        <main
          className=" relative w-full bg-cover bg-center bg-no-repeat "
          // style={{
          //   backgroundImage: `url(${currentBackground})`,
          //   backgroundPosition: "center -250px",
          //   backgroundAttachment: "fixed",
          // }}
        >
          <NavbarCom />
          <Outlet />
          <Footer />
        </main>

        {/* {![
          "/soil-studies",
          "/air-quality",
          "/about",
          "/sections",
          "/laboratories",
        ].includes(location.pathname) && <Footer />} */}
      </>
    );
}
