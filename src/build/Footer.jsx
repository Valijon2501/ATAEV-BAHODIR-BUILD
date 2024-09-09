import { useTranslation } from "react-i18next";
import { CssStyle } from "./CssStyle";
import { IoLogoInstagram } from "react-icons/io";
import { MdFacebook } from "react-icons/md";

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <CssStyle>
        <div className="footer">
          <div className="container">
            <div className="footer_titel">
              <div className="footer_list">
                <div className="footer_sub">
                  <img
                    className="footer_img"
                    src="./image/ataev2.563d9f6552a0ae9e7a2b.png"
                    alt=""
                  />
                </div>
                <p className="footer_texts">{t("footer.footer_texts")}</p>
                <ul className="footer_lists">
                  <li className="footer_items">
                    <a
                      className="footer_links"
                      href="https://www.instagram.com/ataev_bahodir_build/"
                    >
                      <IoLogoInstagram className="ins" />
                    </a>
                  </li>{" "}
                  <li className="footer_items">
                    <a
                      className="footer_links"
                      href="https://www.facebook.com/profile.php?id=61556409174910"
                    >
                      <MdFacebook className="fac" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer_list">
                <h2 className="footer_name">{t("footer.footer_name")}</h2>
                <ul className="footer__list">
                  <li className="footer_item">
                    <a className="footer_link" href="#navbar">
                      {t("footer.footer_link")}
                    </a>
                  </li>
                  <li className="footer_item">
                    <a className="footer_link" href="#card">
                      {t("footer.footer_link1")}
                    </a>
                  </li>
                  <li className="footer_item">
                    <a className="footer_link" href="#project">
                      {t("footer.footer_link2")}
                    </a>
                  </li>
                  <li className="footer_item">
                    <a className="footer_link" href="#section">
                      {t("footer.footer_link3")}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer_list">
                <h3 className="footer_name"> {t("footer.footer_link4")}</h3>
                <ul className="footer__list">
                  <li className="footer_item">
                    <a
                      className="footer_link"
                      href="https://T.me/+998992212505"
                    >
                      +998885222501
                    </a>
                  </li>
                  <li className="footer_item">
                    <a
                      className="footer_link"
                      href="
                    https://T.me/+998885222501
                    "
                    >
                      +998992212505
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CssStyle>
    </>
  );
};

export default Footer;
