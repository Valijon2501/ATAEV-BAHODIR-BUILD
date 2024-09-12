import { CssStyle } from "./CssStyle";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const laungages = localStorage.getItem("i18nextLng");

  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("navbar");
      const links = document.querySelectorAll(".navbar_links");
      const logo = document.querySelector(".navbar_links_navbar_name ");

      if (window.scrollY > 0) {
        header.classList.add("bg-gray-800");
        header.classList.remove("bg-transparent");

        links.forEach((link) => {
          link.classList.add("text-dark");
          link.classList.remove("text-light");
        });

        if (logo) {
          logo.classList.add("logo-dark");
          logo.classList.remove("logo-light");
        }
      } else {
        header.classList.add("bg-transparent");
        header.classList.remove("bg-gray-800");

        links.forEach((link) => {
          link.classList.add("text-light");
          link.classList.remove("text-dark");
        });

        if (logo) {
          logo.classList.add("logo-light");
          logo.classList.remove("logo-dark");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

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
                      value={laungages}
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
              <button className="nav_mobile_btn" onClick={toggleModal}>
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
          {/* ================================================ */}
          {isModalOpen ? (
            <div className={`nav_modalContainer_nav_show `}>
              <div className="nav_modal_content">
                <button className="navbar_close" onClick={toggleModal}>
                  <img src="./image/Без названия3.png" alt="" />
                </button>
                <ul class="navbar_modal_list">
                  <li class="navbar_modal_item">
                    <a href="" class="navbar_modal_link">
                      {t("header.Ma'lumotlar")}
                    </a>
                  </li>
                  <li class="navbar_modal_item">
                    <a href="#project" class="navbar_modal_link">
                      {t("header.Biz haqimizda")}
                    </a>
                  </li>
                  <li class="navbar_modal_item">
                    <a href="#service" class="navbar_modal_link">
                      {t("header.Korxonalar")}
                    </a>
                  </li>
                  <li class="navbar_modal_item">
                    <a href="#" class="navbar_modal_link">
                      {t("header.Afzalliklarimiz")}
                    </a>
                  </li>
                  <li class="navbar_modal_item">
                    <a href="#forms" class="navbar_modal_link">
                      {t("header.Aloqa")}
                    </a>
                  </li>
                  <li class="navbar_modal_item">
                    <a href="#card" class="navbar_modal_link">
                      {t("header.Yangiliklar")}
                    </a>
                  </li>
                  <li class="navbar_modal_item">
                    <select
                      class="nav__langs"
                      name="Lng"
                      id="lng"
                      value={laungages}
                      onChange={handleChange}
                    >
                      <option value="uz">uz</option>
                      <option value="en">en</option>
                      <option value="ru">ru</option>
                    </select>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            ""
          )}
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
