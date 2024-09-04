import { PjHeader } from "./PjHeadreStyle";

const ProjectsHeader = () => {
  return (
    <>
      <PjHeader>
        <div className="navbar">
          <div className="container">
            <ul className="navbar_listr">
              <li className="navbar_item">
                <a className="navbar_links" href="">
                  Ma'lumotlar
                </a>
              </li>
              <li className="navbar_item">
                <a className="navbar_links" href="">
                  Biz haqimizda
                </a>
              </li>
              <li className="navbar_item">
                <a className="navbar_links" href="">
                  Korxonalar
                </a>
              </li>
              <li className="navbar_item">
                <a className="navbar_links navbar_name" href="/">
                  <img
                    src="./image/ataev1.a8abd3c374603900fb01.png"
                    alt="foto"
                  />
                </a>
              </li>
              <li className="navbar_item">
                <a className="navbar_links" href="">
                  Afzalliklarimiz
                </a>
              </li>
              <li className="navbar_item">
                <a className="navbar_links" href="">
                  Yangiliklar
                </a>
              </li>
              <li className="navbar_item">
                <a className="navbar_links" href="">
                  Aloqa
                </a>
              </li>
              <li className="navbar_item">
                <a className="navbar_links" href="">
                  Ma'lumotlar
                </a>
              </li>
            </ul>
          </div>
        </div>
      </PjHeader>
    </>
  );
};

export default ProjectsHeader;
