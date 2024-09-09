import { CssStyle } from "./CssStyle";
import { useTranslation } from "react-i18next";

const Service = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <CssStyle>
        <div className="service" id="service">
          <div className="container">
            <h2 className="service_name"> {t("service.title")}</h2>
            <div className="service_list">
              <div
                className="service_tatile"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <p className="service_text">{t("service.text")}</p>
                <img src="./image/gold.65c168a0380a930adc5f.png" alt="" />
              </div>
              <div className="service_tatile_to" data-aos="fade-left">
                <p className="service_text"> {t("service.text1")}</p>
                <img src="./image/notebook.486f543adeb3860db378.png" alt="" />
              </div>
              <div className="service_tatile_to" data-aos="fade-right">
                <p className="service_text"> {t("service.text2")}</p>
                <img src="./image/settings.c04baf6a149ca893f9bb.png" alt="" />
              </div>
              <div className="service_tatile" data-aos="fade-left">
                <p className="service_text"> {t("service.text3")}</p>
                <img src="./image/car.7a9117dbe6e748aa2f12.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </CssStyle>
    </>
  );
};
export default Service;
