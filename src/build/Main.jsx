import { t } from "i18next";
import { CssStyle } from "./CssStyle";
import { useTranslation } from "react-i18next";

const Main = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <CssStyle>
        <div className="main">
          <div className="swiper">
            <div className="swiper_wrapper">
              <div className="container">
                <p className="main_subname">ATAEV BAHODIR BUILD</p>
                <h2
                  className="main_name"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  ATAEV BAHODIR BUILD
                </h2>
                <p
                  className="main_text"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  {t("main.main_text")}
                </p>
                <div className="main_item">
                  <a className="main_btn" href="/box_meetang">
                    {t("main.main_btn")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CssStyle>
    </>
  );
};

export default Main;
