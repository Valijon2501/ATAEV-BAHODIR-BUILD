import { t } from "i18next";
import { CssStyle } from "./CssStyle";
import { useTranslation } from "react-i18next";

const Forms = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <CssStyle>
        <div className="form" id="forms">
          <div className="container">
            <h2 className="form_name">{t("forms.form_name")}</h2>
            <form
              action=""
              class="form_list"
              data-aos="fade-up"
              data-aos-duration="2000"
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
                name="tel"
                id="tel"
              ></textarea>
              <button type="submit" class="form_button">
                {t("forms.input3")}
              </button>
            </form>
          </div>
        </div>
      </CssStyle>
    </>
  );
};

export default Forms;
