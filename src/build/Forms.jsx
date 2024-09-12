import { t } from "i18next";
import { CssStyle } from "./CssStyle";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useState } from "react";

const Forms = () => {
  const [loading, setLoading] = useState(false);
  const { t, i18n } = useTranslation();
  const SendMessage = (event) => {
    setLoading(true);
    event.preventDefault();
    const token = "7473498449:AAFq3Pf2W7TbwfKm4ohkO02Z5Vg0jhh6qdw";
    const chat_id = 5027954162;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const name = document.getElementById("name").value;
    const tel = document.getElementById("tel").value;
    const messageContent = `Ismi: ${name} \nTel: ${tel}`;
    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chat_id,
        text: messageContent,
      },
    })
      .then((res) => {
        document.getElementById("myform").reset();
        alert("Muovaffaqiyatli yuborildi");
      })
      .catch((error) => {
        console.log("Yuborishda xatolik", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      <CssStyle>
        <div className="form" id="forms">
          <div className="form_img">
            <div className="container">
              <h2 className="form_name">{t("forms.form_name")}</h2>
              <form
                action=""
                class="form_list"
                id="myform"
                data-aos="fade-up"
                data-aos-duration="2000"
                onSubmit={SendMessage}
              >
                <input
                  placeholder={t("forms.input")}
                  type="name"
                  id="name"
                  name="name"
                  required
                  class="form_input"
                />
                <input
                  placeholder={t("forms.input1")}
                  type="tel"
                  id="tel"
                  name="tel"
                  maxlength="14"
                  required
                  class="form_input"
                />
                <textarea
                  placeholder={t("forms.input2")}
                  name="text"
                  id="text"
                ></textarea>
                <button type="submit" class="form_button" loading={loading}>
                  {/* {loading ? "..." : ''} */}
                  {t("forms.input3")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </CssStyle>
    </>
  );
};

export default Forms;
