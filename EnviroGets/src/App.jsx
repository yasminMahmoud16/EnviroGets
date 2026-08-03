import { lazy, Suspense } from "react";
import { createHashRouter, RouterProvider } from "react-router";
import "./App.css";
import RouterLayout from "./Layout/RouterLayout.jsx";
import Loading from "./Components/Loading/Loading.jsx";

// Lazy Pages
const Home = lazy(() => import("./Pages/Home/Home.jsx"));
const Sections = lazy(() => import("./Pages/Sections/Sections.jsx"));
const About = lazy(() => import("./Pages/About/About.jsx"));
const Contact = lazy(() => import("./Pages/Contact/Contact.jsx"));
const Consulting = lazy(
  () => import("./Pages/EnvironmentalConsulting/Consulting.jsx"),
);
const Laboratory = lazy(() => import("./Pages/Lap/Laboratory.jsx"));
const SoilStudies = lazy(() => import("./Pages/SoilStudies/SoilStudies.jsx"));
const Certification = lazy(
  () => import("./Pages/Certification/Certification.jsx"),
);
const Partners = lazy(() => import("./Pages/Partners/Partners.jsx"));
const AirQuality = lazy(() => import("./Pages/AirQuality/AirQuality.jsx"));

const router = createHashRouter([
  {
    path: "",
    element: <RouterLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "sections", element: <Sections /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "laboratories", element: <Laboratory /> },
      { path: "environmental-consulting", element: <Consulting /> },
      { path: "soil-studies", element: <SoilStudies /> },
      { path: "air-quality", element: <AirQuality /> },
      { path: "clients", element: <Partners /> },
      { path: "certifications", element: <Certification /> },
    ],
  },
]);

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
