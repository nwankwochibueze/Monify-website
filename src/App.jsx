import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";
import Layout from "./components/Layout";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Faq = lazy(() => import("./pages/Faq"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Router Setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout wraps everything
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> }, //
      { path: "/faq", element: <Faq /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
