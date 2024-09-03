import { Route, Routes } from "react-router-dom";
import Header from "../build/Header";
import Service from "../build/Service";
import About from "../about/About";
import Rating from "../build/Rating";
import Section from "../build/Section";
import Projectm from "../build/Projectm";
import Cards from "../build/Cards";
import Gallery from "../build/Gallery";
import Main from "../build/Main";
import Forms from "../build/Forms";
const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/box_Header" element={<Header />} />
        <Route path="/box_service" element={<Service />} />
        <Route path="/box_rating" element={<Rating />} />
        <Route path="/box_section" element={<Section />} />
        <Route path="/box_projectm" element={<Projectm />} />
        <Route path="/box_cards" element={<Cards />} />
        <Route path="/box_gallery" element={<Gallery />} />
        <Route path="/box_main" element={<Main />} />
        <Route path="/box_main" element={<Forms />} />
      </Routes>
    </>
  );
};
export default Router;
