import React from "react";
import Footer from "../build/Footer";
import ProjectsHeader from "./ProjectsHeader";
import { PjHeader } from "./PjHeadreStyle";
import { useTranslation } from "react-i18next";

const Meetang = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <ProjectsHeader />
      <PjHeader>
        <div className="meeting">
          <div className="container">
            <h3 className="meeting_mane">ATAEV BAHODIR BUILD haqida</h3>
            <p className="meeting_title">
              <a className="meeting_link" href="/">
                {t("meeting.meeting_link")}
              </a>
            </p>
            <div className="meeting_page">
              <p className="meeting_text">{t("meeting.meeting_text")}</p>
              <div className="meeting_left">
                <img
                  className="meeting_icons"
                  src="https://di.uz/img/bg/bg-company.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </PjHeader>
      <Footer />
    </>
  );
};

export default Meetang;
