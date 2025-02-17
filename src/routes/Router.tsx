
import { Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Offers from "@/pages/Offers";
import About from "@/pages/About";
import Booking from "@/pages/Booking";
import Information from "@/pages/Information";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/offres" element={<Offers />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/reservation" element={<Booking />} />
        <Route path="/informations" element={<Information />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Router;
