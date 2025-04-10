import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Portfolio from "./pages/Portfolio";
import Testimonial from "./pages/Testimonial";
import Contact from "./pages/Contact";
import { Toaster } from "react-hot-toast";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Service />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="testimonial" element={<Testimonial />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    )
  );
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
      <Toaster />
    </>
  );
};

export default App;
