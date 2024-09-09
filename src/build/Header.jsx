import { CssStyle } from "./CssStyle";
import React, { useState, useTransition } from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
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
            <div className="navbar" id="navbar">
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
                    <select className="select" name="Lng" id="lng" onChange={handleChange}>
                      <option value="uz">Uzb</option>
                      <option value="en">Eng</option>
                      <option value="ru">Rus</option>
                    </select>
                  </div>
                </li>
              </ul>
            </div>

            <div className="header">
              <h2 className="header_name">
                ATAEV
                <br />
                BAHODIR BUILD
              </h2>
              <p className="header_text"> {t("header.Hamma narsada a'lo")}</p>
              <div className="header_modal">
                <div className="header_title">
                  <a class="header_btn" href="/box_projects">
                    {t("header.Bizning loyihalarimiz")}
                  </a>
                </div>
                <div className="header_title">
                  <a href="tel:+998974839999" class="header_btn">
                    {t("header.Bog'lanish")}
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
