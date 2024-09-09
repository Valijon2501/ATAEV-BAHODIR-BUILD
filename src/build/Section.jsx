import { useTranslation } from "react-i18next";
import { CssStyle } from "./CssStyle";

const Section = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <CssStyle>
        <div className="section">
          <h2 className="section_name">{t("section.section_name")}</h2>
          <div className="section_list">
            <img
              className="section_img"
              src="./image/house1.6506c5f9ebc7179c4e1b.jpg"
              alt=""
            />
            <img
              className="section_img"
              src="./image/house2.496bd7ea5a38fd64835b.jpg"
              alt=""
            />
            <img
              className="section_img"
              src="./image/house3.84b231f0b8621e4984d8.jpg"
              alt=""
            />
            <img
              className="section_img"
              src="./image/house4.5271b2a77e32b5cd8eb7.jpg"
              alt=""
            />
            <img
              className="section_img"
              src="./image/house5.de4d959177742b856d4d.jpg"
              alt=""
            />
            <img
              className="section_img"
              src="./image/house6.0f044c074c3e400f1049.jpg"
              alt=""
            />
          </div>
        </div>
      </CssStyle>
    </>
  );
};

export default Section;
