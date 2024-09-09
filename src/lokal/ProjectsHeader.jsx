import { PjHeader } from "./PjHeadreStyle";
import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
const tillar = [
  { name: "English", flag: "/image/usa.png" },
  { name: "Russian", flag: "/image/russia.png" },
  { name: "Uzbek", flag: "/image/uzbekistan.png" },
];

const ProjectsHeader = () => {
  const [tanlangan, setTanlangan] = useState("English");

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
                <a className="navbar_links_navbar_name" href="/">
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
                {/* <a className="navbar_links" href="">
                  Ma'lumotlar
                </a> */}
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <img
                      src={tillar.find((item) => item.name === tanlangan).flag}
                      alt="Flag"
                      className="flag-icon"
                    />
                    {tanlangan}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {tillar.map((til) => (
                      <Dropdown.Item
                        key={til.name}
                        onClick={() => setTanlangan(til.name)}
                      >
                        <img src={til.flag} alt="Flag" className="flag-icon" />
                        <span>{til.name}</span>
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </ul>
          </div>
        </div>
      </PjHeader>
    </>
  );
};

export default ProjectsHeader;
