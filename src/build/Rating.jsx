import { CssStyle } from "./CssStyle";
import CountUp from "react-countup";

const Rating = () => {
  return (
    <>
      <CssStyle>
        <div className="rating">
          <div className="container">
            <h2 className="rating_name">Bizning kompaniyada</h2>
            <div className="rating_tatil">
              <div className="rating_list">
                <h3 className="rating_number">
                  <span>
                    <CountUp end={120} duration={4} />
                  </span>{" "}
                  +
                </h3>
                <p className="rating_text">Xodimlar soni</p>
              </div>
              <div className="rating_list">
                <h3 className="rating_number">
                  <span>
                    {" "}
                    <CountUp end={43} duration={8} />
                  </span>{" "}
                  +
                </h3>
                <p className="rating_text">Ob'ektlar</p>
              </div>
              <div className="rating_list">
                <h3 className="rating_number">
                  <span>
                    {" "}
                    <CountUp end={250} duration={5} />
                  </span>{" "}
                  +
                </h3>
                <p className="rating_text">Maxsus jihozlar</p>
              </div>
              <div className="rating_list">
                <h3 className="rating_number">
                  <span>
                    {" "}
                    <CountUp end={2} duration={12} />
                  </span>{" "}
                  +
                </h3>
                <p className="rating_text">bozorda 14 yil</p>
              </div>
            </div>
          </div>
        </div>
      </CssStyle>
    </>
  );
};
export default Rating;
