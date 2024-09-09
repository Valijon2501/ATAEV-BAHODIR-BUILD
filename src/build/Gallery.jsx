import { useTranslation } from "react-i18next";
import { CssStyle } from "./CssStyle";

const Gallery = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <CssStyle>
        <div className="gallery" id="gallery">
          <h2 className="gallery_name">{t("gallery.gallery_name")} </h2>
          <div className="gallery_list">
            <img
              className="gallery-img"
              src="./image/gallery1.323b40a21da097cb0e9f.jpg"
              alt=""
            />
            <img
              className="gallery-img"
              src="./image/gallery2.db1310c2308c289176da.jpg"
              alt=""
            />
            <img
              className="gallery-img"
              src="./image/gallery3.b69521e967c812c792b2.jpg"
              alt=""
            />
            <img
              className="gallery-img"
              src="./image/gallary4.6864081bbc6c5f87cffa.jpg"
              alt=""
            />
            <img
              className="gallery-img"
              src="./image/gallery5.a3ea745cffd972d946a5.jpg"
              alt=""
            />
            <img
              className="gallery-img"
              src="./image/gallery6.77d03be1807faf0577c7.jpg"
              alt=""
            />
            <img
              className="gallery-img"
              src="./image/gallery7.3e69f7a0c725d2e46b7e.jpg"
              alt=""
            />
            <img
              className="gallery-img"
              src="./image/gallery8.5d8070f2b6c3aac409b1.jpg"
              alt=""
            />
          </div>
        </div>
      </CssStyle>
    </>
  );
};

export default Gallery;
