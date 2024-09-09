import { useTranslation } from "react-i18next";
import { CssStyle } from "./CssStyle";

const Cards = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <CssStyle>
        <div className="cards" id="card">
          <div className="container">
            <h2 className="cards_name">{t("cards.cards_name")}</h2>
            <div className="cards_news">
              <div className="cards_list" data-aos="fade-right">
                <img
                  className="cards_img"
                  src="./image/construction.74a5b49f569267df13c8.jpg"
                  alt=""
                />
                <div className="cards_item">
                  <div className="cards_items">
                    <button className="cards_btn"></button>
                  </div>
                  <h2 className="cards_names">{t("cards.names")}</h2>
                  <p className="cards_text">{t("cards.text")}</p>
                </div>
              </div>
              <div className="cards_list" data-aos="fade-left">
                <img
                  className="cards_img"
                  src="./image/news.91d41923640e2fa9a037.jpg"
                  alt=""
                />
                <div className="cards_item">
                  <div className="cards_items">
                    <button className="cards_btn"></button>
                  </div>
                  <h2 className="cards_names">{t("cards.names1")}</h2>
                  <p className="cards_text">{t("cards.text1")}</p>
                </div>
              </div>
              <div className="cards_list" data-aos="fade-right">
                <img
                  className="cards_img"
                  src="./image/news2.a6503f342d0d2e748340.jpg"
                  alt=""
                />
                <div className="cards_item">
                  <div className="cards_items">
                    <button className="cards_btn"></button>
                  </div>
                  <h2 className="cards_names">{t("cards.names2")}</h2>
                  <p className="cards_text">{t("cards.text2")}</p>
                </div>
              </div>
              <div className="cards_list" data-aos="fade-left">
                <img
                  className="cards_img"
                  src="./image/news3.44f09827240dc2fb8309.jpg"
                  alt=""
                />
                <div className="cards_item">
                  <div className="cards_items">
                    <button className="cards_btn"></button>
                  </div>
                  <h2 className="cards_names">{t("cards.names3")}</h2>
                  <p className="cards_text">{t("cards.text3")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CssStyle>
    </>
  );
};

export default Cards;
