import { CssStyle } from "./CssStyle";
import { IoLogoInstagram } from "react-icons/io";
import { MdFacebook } from "react-icons/md";

const Footer = () => {
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
                <p className="footer_texts">
                  Ijtimoiy tarmoqlarimizga obuna bo'ling
                </p>
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
                <h2 className="footer_name">Kompaniyamiz</h2>
                <ul className="footer__list">
                  <li className="footer_item">
                    <a className="footer_link" href="">
                      Korxonalar
                    </a>
                  </li>
                  <li className="footer_item">
                    <a className="footer_link" href="">
                      Biz haqimizda
                    </a>
                  </li>
                  <li className="footer_item">
                    <a className="footer_link" href="">
                      Yangiliklar
                    </a>
                  </li>
                  <li className="footer_item">
                    <a className="footer_link" href="">
                      Bizning loyihalarimiz
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer_list">
                <h3 className="footer_name">Aloqa</h3>
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
