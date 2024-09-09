import { PjHeader } from "./PjHeadreStyle";
import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const ProjectsHeader = () => {
  const { t, i18n } = useTranslation();
  const handleChange = (event) => {
    const selectedLaungage = event.target.value;
    i18n.changeLanguage(selectedLaungage); // Change the app language
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
                {/* <a className="navbar_links" href="">
                  Ma'lumotlar
                </a> */}
                <select name="Lng" id="lng" onChange={handleChange}>
                  <option value="uz">Uzb</option>
                  <option value="en">Eng</option>
                  <option value="ru">Rus</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </PjHeader>
    </>
  );
};

export default ProjectsHeader;
