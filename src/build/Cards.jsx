import { CssStyle } from "./CssStyle";

const Cards = () => {
  return (
    <>
      <CssStyle>
        <div className="cards" id="card">
          <div className="container">
            <h2 className="cards_name">Barcha yangiliklarimiz</h2>
            <div className="cards_news">
              <div className="cards_list" data-aos="fade-right">
                <img
                  className="cards_img"
                  src="./image/construction.74a5b49f569267df13c8.jpg"
                  alt=""
                />
                <div className="cards_item">
                  <div className="cards_items">
                    <button className="cards_btn"></button>
                  </div>
                  <h2 className="cards_names">
                    Qurilish loyihasi menejeri kim?
                  </h2>
                  <p className="cards_text">
                    Discover Invest kompaniyasida qurilish loyihasi bo'yicha bir
                    nechta menejerlar mavjud. Bu mutaxassis o'ziga ishonib
                    topshirilgan qurilish ob'ektini muvaffaqiyatli amalga
                    oshirish uchun mas'uldir. U rejalashtirish bosqichidan va
                    loyiha hujjatlarini tasdiqlashdan tortib, ishga
                    tushirishgacha bo'lgan butun jarayonni boshqaradi. binoning,
                    va ba'zan ham loyihadan keyingi yordamni amalga oshiradi.
                    Eng so'nggi
                  </p>
                </div>
              </div>
              <div className="cards_list" data-aos="fade-left">
                <img
                  className="cards_img"
                  src="./image/news.91d41923640e2fa9a037.jpg"
                  alt=""
                />
                <div className="cards_item">
                  <div className="cards_items">
                    <button className="cards_btn"></button>
                  </div>
                  <h2 className="cards_names">
                    Barchani kelayotgan 2024 yil bilan tabriklayman!
                  </h2>
                  <p className="cards_text">
                    Zallarning murakkab ichki dizayni kvartiraga kirishdan oldin
                    ham qulaylik muhitini yaratadi va qulay navigatsiya tizimi
                    sizga kerakli qavatga osongina chiqishga yoki hududga
                    chiqishga yordam beradi.
                  </p>
                </div>
              </div>
              <div className="cards_list" data-aos="fade-right">
                <img
                  className="cards_img"
                  src="./image/news2.a6503f342d0d2e748340.jpg"
                  alt=""
                />
                <div className="cards_item">
                  <div className="cards_items">
                    <button className="cards_btn"></button>
                  </div>
                  <h2 className="cards_names">Manzil</h2>
                  <p className="cards_text">
                    Transport infratuzilmasi shaharning istalgan nuqtasiga
                    osongina ko'chib o'tishga imkon beradi: siz faqat kerakli va
                    kerakli yo'nalishni tanlashingiz kerak.
                  </p>
                </div>
              </div>
              <div className="cards_list" data-aos="fade-left">
                <img
                  className="cards_img"
                  src="./image/news3.44f09827240dc2fb8309.jpg"
                  alt=""
                />
                <div className="cards_item">
                  <div className="cards_items">
                    <button className="cards_btn"></button>
                  </div>
                  <h2 className="cards_names">
                    Biz sizni Discover Invest ko'p funksiyali ob'ektlari bilan
                    tanishtirishda davom etamiz.
                  </h2>
                  <p className="cards_text">
                    Biz sizlarni 'ATAEV BAHODIR BUILD' kompaniyasining ko'p
                    funksiyali ob'ektlari bilan tanishtirishda davom etamiz.
                    Ulardan biri Toshkent shahrining Yangixoyat tumanida barpo
                    etilgan 'Yangi Choshtepa turar-joy majmuasidir. Qurilishning
                    umumiy maydoni 12 gektarni tashkil etadi. Shu kungacha 29 ta
                    uy-joy qurildi. qurilgan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CssStyle>
    </>
  );
};

export default Cards;
