import { CssStyle } from "./CssStyle";

const Header = () => {
  return (
    <>
      <CssStyle>
        <div className="homepage">
          <div className="navbar">
            <ul className="navbar_listr">
              <li className="navbar_item">
                <a className="navbar_links" href="">
                  Ma'lumotlar
                </a>
              </li>
              <li className="navbar_item">
                <a className="navbar_links" href="">
                  Biz haqimizda
                </a>
              </li>
              <li className="navbar_item">
                <a className="navbar_links" href="">
                  Korxonalar
                </a>
              </li>
              <li className="navbar_item">
                <a className="navbar_links navbar_name" href="">
                  <img
                    src="./image/ataev1.a8abd3c374603900fb01.png"
                    alt="foto"
                  />
                </a>
              </li>
              <li className="navbar_item">
                <a className="navbar_links" href="">
                  Afzalliklarimiz
                </a>
              </li>
              <li className="navbar_item">
                <a className="navbar_links" href="">
                  Yangiliklar
                </a>
              </li>
              <li className="navbar_item">
                <a className="navbar_links" href="">
                  Aloqa
                </a>
              </li>
              <li className="navbar_item">
                <a className="navbar_links" href="">
                  Ma'lumotlar
                </a>
              </li>
            </ul>
          </div>
          <div className="container">
            <div className="header">
              <h2 className="header_name">
                ATAEV
                <br />
                BAHODIR BUILD
              </h2>
              <p className="header_text">Hamma narsada a'lo</p>
              <div className="header_modal">
                <div className="header_title">
                  <a class="header_btn" href="/">
                    Bizning loyihalarimiz
                  </a>
                </div>
                <div className="header_title">
                  <a href="tel:+998974839999" class="header_btn">
                    Bog'lanish
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

export default Header;
