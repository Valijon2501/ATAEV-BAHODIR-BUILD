import { useTranslation } from "react-i18next";
import { CssStyle } from "./CssStyle";
import CountUp from "react-countup";

const Rating = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <CssStyle>
        <div className="rating">
          <div className="container">
            <h2 className="rating_name">{t("Rating.rating_name")}</h2>
            <div className="rating_tatil">
              <div className="rating_list">
                <h3 className="rating_number">
                  <span>
                    <CountUp end={120} duration={4} />
                  </span>{" "}
                  +
                </h3>
                <p className="rating_text">{t("Rating.rating_text")}</p>
              </div>
              <div className="rating_list">
                <h3 className="rating_number">
                  <span>
                    {" "}
                    <CountUp end={43} duration={8} />
                  </span>{" "}
                  +
                </h3>
                <p className="rating_text">{t("Rating.rating_text1")}</p>
              </div>
              <div className="rating_list">
                <h3 className="rating_number">
                  <span>
                    {" "}
                    <CountUp end={250} duration={5} />
                  </span>{" "}
                  +
                </h3>
                <p className="rating_text">{t("Rating.rating_text2")}</p>
              </div>
              <div className="rating_list">
                <h3 className="rating_number">
                  <span>
                    {" "}
                    <CountUp end={2} duration={12} />
                  </span>{" "}
                  +
                </h3>
                <p className="rating_text">{t("Rating.rating_text3")}</p>
              </div>
            </div>
          </div>
        </div>
      </CssStyle>
    </>
  );
};
export default Rating;
