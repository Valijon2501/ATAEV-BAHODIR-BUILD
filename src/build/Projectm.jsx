import { CssStyle } from "./CssStyle";

const Projectm = () => {
  return (
    <>
      <CssStyle>
        <div className="projectm">
          <dir className="container">
            <h2 className="projectm_name">Bizning loyihalarimiz</h2>
            <div className="projectm_flex">
              <div className="projectm_cards">
                <div className="projectm_info">
                  <h3 className="projectm_cards_title">Magic City</h3>
                  <p className="projectm_cards_info">
                    Bu keng ko'lamli ijtimoiy ahamiyatga ega loyiha.
                    Toshkentdagi madaniy-ko'ngilochar klaster yangi diqqatga
                    sazovor joylardan biridir.
                  </p>
                </div>
              </div>
              <div className="projectm_cards">
                <div className="projectm_info">
                  <h3 className="projectm_cards_title">Gardens Residence</h3>
                  <p className="projectm_cards_info">
                    O'zbekiston aholisiga qulaylik yaratish maqsadida yaratilgan
                    ko'p funksiyali turar-joy majmuasi.
                  </p>
                </div>
              </div>
              <div className="projectm_cards">
                <div className="projectm_info">
                  <h3 className="projectm_cards_title">Fonon</h3>
                  <p className="projectm_cards_info">
                    Poytaxt markazidagi muhtasham turar-joy massivi.
                  </p>
                </div>
              </div>
              <div className="projectm_cards">
                <div className="projectm_info">
                  <h3 className="projectm_cards_title">Invento</h3>
                  <p className="projectm_cards_info">
                    Fonon - O'zbekistonda 2020 yilda italyan zavodlari negizida
                    qurilgan zargarlik buyumlari ishlab chiqarish zavodi. Fonon
                    - Markaziy Osiyoda Yevropa va Sharq uslubida qimmatbaho
                    metallardan zargarlik buyumlari ishlab chiqaradigan yagona
                    yirik korxona
                  </p>
                </div>
              </div>
              <div className="projectm_cards">
                <div className="projectm_info">
                  <h3 className="projectm_cards_title">Presidential School</h3>
                  <p className="projectm_cards_info">
                    Tashkent City xalqaro biznes markazida joylashgan xalqaro
                    bolalar bog'chasi va maktabi.
                  </p>
                </div>
              </div>
              <div className="projectm_cards">
                <div className="projectm_info">
                  <h3 className="projectm_cards_title">Boulevard</h3>
                  <p className="projectm_cards_info">
                    Bu xalqaro darajada bilim beradigan ta'lim muassasasi
                  </p>
                </div>
              </div>
            </div>
          </dir>
        </div>
      </CssStyle>
    </>
  );
};

export default Projectm;
