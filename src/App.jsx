import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";
import Layout from "./components/Layout";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Faq = lazy(() => import("./pages/Faq"));

// Router Setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout wraps everything
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> }, // Ensure this is correct
      { path: "/faq", element: <Faq /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
