import { CssStyle } from "./CssStyle";

const Service = () => {
  return (
    <>
      <CssStyle>
        <div className="service">
          <div className="container">
            <h2 className="service_name">Bizning xizmatlarimiz</h2>
            <div className="service_list">
              <div className="service_tatile" data-aos="fade-right">
                <p className="service_text">
                  Siz kompaniyamiz mutaxassislaridan bepul ma'lumot olishingiz
                  mumkin
                </p>
                <img src="./image/gold.65c168a0380a930adc5f.png" alt="" />
              </div>
              <div className="service_tatile_to" data-aos="fade-left">
                <p className="service_text">Hujjatlarni rasmiylashtirish</p>
                <img src="./image/notebook.486f543adeb3860db378.png" alt="" />
              </div>
              <div className="service_tatile_to" data-aos="fade-right">
                <p className="service_text">Ta`mirlash tuzatish xizmati</p>
                <img src="./image/settings.c04baf6a149ca893f9bb.png" alt="" />
              </div>
              <div className="service_tatile" data-aos="fade-left">
                <p className="service_text">Professionallar jamoasi</p>
                <img src="./image/car.7a9117dbe6e748aa2f12.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </CssStyle>
    </>
  );
};
export default Service;
