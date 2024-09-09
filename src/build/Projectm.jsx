import { useTranslation } from "react-i18next";
import { CssStyle } from "./CssStyle";

const Projectm = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <CssStyle>
        <div className="projectm" id="project">
          <dir className="container">
            <h2 className="projectm_name">{t("projectm.projectm_name")}</h2>
            <div className="projectm_flex">
              <div className="projectm_cards">
                <div className="img_a">
                  <div className="projectm_info">
                    <h3 className="projectm_cards_title">
                      {t("projectm.title")}
                    </h3>
                    <p className="projectm_cards_info">{t("projectm.info")}</p>
                  </div>
                </div>
              </div>
              <div className="projectm_cards">
                <div className="img_ab">
                  <div className="projectm_info">
                    <h3 className="projectm_cards_title">
                      {t("projectm.title1")}
                    </h3>
                    <p className="projectm_cards_info">{t("projectm.info1")}</p>
                  </div>
                </div>
              </div>
              <div className="projectm_cards">
                <div className="img_abc">
                  <div className="projectm_info">
                    <h3 className="projectm_cards_title">
                      {t("projectm.title2")}
                    </h3>
                    <p className="projectm_cards_info">{t("projectm.info2")}</p>
                  </div>
                </div>
              </div>
              <div className="projectm_cards">
                <div className="img_abcd">
                  <div className="projectm_info">
                    <h3 className="projectm_cards_title">
                      {t("projectm.title3")}
                    </h3>
                    <p className="projectm_cards_info">{t("projectm.info3")}</p>
                  </div>
                </div>
              </div>
              <div className="projectm_cards">
                <div className="img_abcde">
                  <div className="projectm_info">
                    <h3 className="projectm_cards_title">
                      {t("projectm.title4")}
                    </h3>
                    <p className="projectm_cards_info">{t("projectm.info4")}</p>
                  </div>
                </div>
              </div>
              <div className="projectm_cards">
                <div className="img_abcdef">
                  <div className="projectm_info">
                    <h3 className="projectm_cards_title">
                      {t("projectm.title5")}
                    </h3>
                    <p className="projectm_cards_info">{t("projectm.info5")}</p>
                  </div>
                </div>
              </div>
            </div>
          </dir>
        </div>
      </CssStyle>
    </>
  );
};

export default Projectm;
