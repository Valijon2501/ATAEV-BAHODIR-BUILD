import { PjHeader } from "./PjHeadreStyle";
import { useTranslation } from "react-i18next";
import React, { useState, useEffect } from "react";

const ProjectsHeader = () => {
  const { t, i18n } = useTranslation();
  const laungages = localStorage.getItem("i18nextLng");

  const handleChange = (event) => {
    const selectedLaungage = event.target.value;
    i18n.changeLanguage(selectedLaungage);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <PjHeader>
        <div className="navbar">
          <div className="container">
            <ul className="navbar_listr">
              <li className="navbar_item">
                <a className="navbar_links" href="">
                  {t("header.Ma'lumotlar")}
                </a>
              </li>
              <li className="navbar_item">
                <a className="navbar_links" href="">
                  {t("header.Biz haqimizda")}
                </a>
              </li>
              <li className="navbar_item">
                <a className="navbar_links" href="">
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
                <a className="navbar_links" href="">
                  {t("header.Yangiliklar")}
                </a>
              </li>
              <li className="navbar_item">
                <a className="navbar_links" href="">
                  {t("header.Aloqa")}
                </a>
              </li>
              <li className="navbar_item">
                <select
                  className="select"
                  name="Lng"
                  id="lng"
                  value={laungages}
                  onChange={handleChange}
                >
                  <option value="uz">Uzb</option>
                  <option value="en">Eng</option>
                  <option value="ru">Rus</option>
                </select>
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
      </PjHeader>
    </>
  );
};

export default ProjectsHeader;
