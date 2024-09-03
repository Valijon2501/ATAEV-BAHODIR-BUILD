import { CssStyle } from "./CssStyle";

const Forms = () => {
  return (
    <>
      <CssStyle>
        <div className="form">
          <div className="container">
            <h2 className="form_name">Savol, taklif va murojaatlar bormi?</h2>
            <form action="" class="form_list">
              <input
                placeholder="Ismingiz"
                type="name"
                id="name"
                name="name"
                required=""
                class="form_input"
              />
              <input
                placeholder="Telefon raqamingiz"
                type="tel"
                id="tel"
                name="tel"
                maxlength="14"
                required=""
                class="form_input"
              />
              <textarea
                placeholder="Sizning xabaringiz..."
                name="tel"
                id="tel"
              ></textarea>
              <button type="submit" class="form_button">
                Yuborish
              </button>
            </form>
          </div>
        </div>
      </CssStyle>
    </>
  );
};

export default Forms;
