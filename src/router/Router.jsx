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
import Footer from "../build/Footer";
import Projects from "../lokal/Projects";
import ProjectsHeader from "../lokal/ProjectsHeader";
import Meetang from "../lokal/Meetang";
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
        <Route path="/box_forms" element={<Forms />} />
        <Route path="/box_footer" element={<Footer />} />
        <Route path="/box_projects" element={<Projects />} />
        <Route path="/box_projectsHeader" element={<ProjectsHeader />} />
        <Route path="/box_meetang" element={<Meetang />} />
      </Routes>
    </>
  );
};
export default Router;
