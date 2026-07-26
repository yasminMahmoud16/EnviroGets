import { createHashRouter, RouterProvider } from "react-router";
import "./App.css";
import RouterLayout from "./Layout/RouterLayout.jsx";
import Home from "./Pages/Home/Home.jsx";

// pages

const router = createHashRouter([
  {
    path: "",
    element: <RouterLayout />,
    children: [
      { index: true, element: <Home /> },
      // { path: "about", element: <About /> },
      // { path: "services", element: <Services /> },
      // { path: "services/:id", element: <ServicesWithId /> },
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
