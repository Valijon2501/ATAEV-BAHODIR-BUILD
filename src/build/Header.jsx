import { CssStyle } from "./CssStyle";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();

  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage); // Change the app language
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("navbar");
      const links = document.querySelectorAll(".navbar_links"); // barcha linklarni olish
      const logo = document.querySelector(".navbar_links_navbar_name"); // logoni olish

      if (window.scrollY > 0) {
        header.classList.add("bg-gray-800");
        header.classList.remove("bg-transparent");

        // Text rangini qoraytirish
        links.forEach((link) => {
          link.classList.add("text-dark");
          link.classList.remove("text-light");
        });

        // Logoni qoraytirish
        if (logo) {
          logo.classList.add("logo-dark");
          logo.classList.remove("logo-light");
        }
      } else {
        header.classList.add("bg-transparent");
        header.classList.remove("bg-gray-800");

        // Text rangini ochiq rangga o'zgartirish
        links.forEach((link) => {
          link.classList.add("text-light");
          link.classList.remove("text-dark");
        });

        // Logoni och rangga o'zgartirish
        if (logo) {
          logo.classList.add("logo-light");
          logo.classList.remove("logo-dark");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <CssStyle>
        <div className="homepage">
          <div className="navbar" id="navbar">
            <div className="container">
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
                    <select
                      className="navbar_links"
                      name="Lng"
                      id="lng"
                      onChange={handleChange}
                    >
                      <option value="uz">Uzb</option>
                      <option value="en">Eng</option>
                      <option value="ru">Rus</option>
                    </select>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* ======mobil====== */}
          <div className="nav_mobile">
            <div className="container">
              <button className="nav_mobile_btn">
                <img
                  className="navbar_logo"
                  src="./image/Без названия2.png"
                  alt=""
                />
              </button>
              <a className="nav_link_name" href="/">
                <img src="./image/ataev1.a8abd3c374603900fb01.png" alt="" />
              </a>
              <a className="nav_mogile_link" href="tel:+998974839999">
                <img
                  className="navbar_icon"
                  src="./image/Без названия1.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          {/* ======== */}
          
          <div className="container">
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
                  <a href="https://T.me/+998885222501" class="header_btn">
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
