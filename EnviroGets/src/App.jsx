import { createHashRouter, RouterProvider } from "react-router";
import "./App.css";
import RouterLayout from "./Layout/RouterLayout.jsx";
import Home from "./Pages/Home/Home.jsx";
import Sections from "./Pages/Sections/Sections.jsx";
import About from "./Pages/About/About.jsx";

// pages

const router = createHashRouter([
  {
    path: "",
    element: <RouterLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "sections", element: <Sections /> },
      { path: "about", element: <About /> },
      // { path: "laboratories", element: <Laboratories /> },
      // { path: "environmental-consulting", element: <environmentalConsulting /> },
      // { path: "soil-studies", element: <soilStudies /> },
      // { path: "air-quality", element: <airQuality /> },

      
      // { path: "audience", element: <Audience /> },
      // { path: "contact", element: <Contact /> },
      // { path: "clients", element: <Clients /> },
      // { path: "clients/clients-Details", element: <ClientsDetails /> },
      // { path: "certifications", element: <Certification /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
