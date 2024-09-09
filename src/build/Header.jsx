import { CssStyle } from "./CssStyle";
import React, { useState, useTransition } from "react";
// import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
// const tillar = [
//   { name: "English", flag: "/image/usa.png" },
//   { name: "Russian", flag: "/image/russia.png" },
//   { name: "Uzbek", flag: "/image/uzbekistan.png" },
// ];

const Header = () => {
  // const [tanlangan, setTanlangan] = useState("English");
  const { t, i18n } = useTranslation();

  const handleChange = (event) => {
    const selectedLaungage = event.target.value;
    i18n.changeLanguage(selectedLaungage); // Change the app language
  };
  return (
    <>
      <CssStyle>
        <div className="homepage">
          <div className="container">
            <div className="navbar">
              <ul className="navbar_listr">
                <li className="navbar_item">
                  <a className="navbar_links" href="">
                    {t("header.Ma'lumotlar")}
                  </a>
                </li>
                <li className="navbar_item">
                  <a className="navbar_links" href="#project">
                    {t("header.Biz haqimizda")}
                  </a>
                </li>
                <li className="navbar_item">
                  <a className="navbar_links" href="#service">
                    {t("header.Korxonalar")}
                  </a>
                </li>
                <li className="navbar_item">
                  <a className="navbar_links_navbar_name" href="/">
                    <img
                      src="./image/ataev1.a8abd3c374603900fb01.png"
                      alt="foto"
                    />
                  </a>
                </li>
                <li className="navbar_item">
                  <a className="navbar_links" href="">
                    {t("header.Afzalliklarimiz")}
                  </a>
                </li>
                <li className="navbar_item">
                  <a className="navbar_links" href="#card">
                    {t("header.Yangiliklar")}
                  </a>
                </li>
                <li className="navbar_item">
                  <a className="navbar_links" href="#forms">
                    {t("header.Aloqa")}
                  </a>
                </li>
                <li className="navbar_item">
                  <div>
                    <select name="Lng" id="lng" onChange={handleChange}>
                      <option value="uz">Uzb</option>
                      <option value="en">Eng</option>
                      <option value="ru">Rus</option>
                    </select>

                    {/* <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <img
                          src={
                            tillar.find((item) => item.name === tanlangan).flag
                          }
                          alt="Flag"
                          className="flag-icon"
                        />
                        {tanlangan}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {tillar.map((til) => (
                          <Dropdown.Item
                            key={til.name}
                            onClick={() => handleLanguageChange(til)}
                          >
                            <img
                              src={til.flag}
                              alt="Flag"
                              className="flag-icon"
                            />
                            <span>{til.name}</span>
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown> */}
                  </div>
                </li>
              </ul>
            </div>

            <div className="header">
              <h2 className="header_name">
              {t("ATAEV")}
                <br />
                {t("BAHODIR")}
              </h2>
              <p className="header_text"> {t("Hamma narsada a'lo")}</p>
              <div className="header_modal">
                <div className="header_title">
                  <a class="header_btn" href="/box_projects">
                    {t("Bizning loyihalarimiz")}
                  </a>
                </div>
                <div className="header_title">
                  <a href="tel:+998974839999" class="header_btn">
                    {t("Bog'lanish")}
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
