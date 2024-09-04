import { CssStyle } from "./CssStyle";

const Main = () => {
  return (
    <>
      <CssStyle>
        <div className="main">
          <div className="swiper">
            <div className="swiper_wrapper">
              <div className="container">
                <p className="main_subname">ATAEV BAHODIR BUILD</p>
                <h2 className="main_name" data-aos="fade-up">
                  ATAEV BAHODIR BUILD
                </h2>
                <p className="main_text" data-aos="fade-up">
                  Biz shunchaki loyihalar yaratmaymiz, yangi imkoniyatlar
                  yaratamiz. Davlat miqyosidagi inshootlarni qurish orqali biz
                  kelajakni quryapmiz. Biz atrof-muhit haqida qayg'uramiz:
                  kompaniya binolar va infratuzilmani qurish va ulardan
                  foydalanish bilan bog'liq ekologik jihatlar uchun to'liq
                  javobgarlikni o'z zimmasiga oladi.
                </p>
                <div className="main_item">
                  <a className="main_btn" href="/box_meetang">
                    Batafsil bilish
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

export default Main;
