import React from "react";
import Footer from "../build/Footer";
import ProjectsHeader from "./ProjectsHeader";
import { PjHeader } from "./PjHeadreStyle";

const Meetang = () => {
  return (
    <>
      <ProjectsHeader />
      <PjHeader>
        <div className="meeting">
          <div className="container">
            <h3 className="meeting_mane">ATAEV BAHODIR BUILD haqida</h3>
            <p className="meeting_title">
              <a className="meeting_link" href="/">
                Bosh sahifa
              </a>
            </p>
            <div className="meeting_page">
              <p className="meeting_text">
                Biz shunchaki loyihalar yaratmaymiz, yangi imkoniyatlar
                yaratamiz. Davlat miqyosidagi inshootlarni qurish orqali biz
                kelajakni quryapmiz. Biz atrof-muhit haqida qayg'uramiz:
                kompaniya binolar va infratuzilmani qurish va ulardan
                foydalanish bilan bog'liq ekologik jihatlar uchun to'liq
                javobgarlikni o'z zimmasiga oladi.
              </p>
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
