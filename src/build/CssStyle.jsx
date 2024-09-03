import styled from "styled-components";
export const CssStyle = styled.div`
  & .homepage {
    background: url(./image/city1.51e44d49b1c61434ca07.jpeg);
    height: 100%;
    width: 100%;
    background-size: cover;
    & .homepage_img {
    }
    & .navbar {
      & .navbar_listr {
        align-items: center;
        display: flex;
        justify-content: space-between;
        list-style: none;
        margin-top: 0px;
        padding-top: 20px;
        & .navbar_item {
          margin: 0 10px;
          & .navbar_links {
            color: #fff;
            list-style: none;
            display: block;
            padding-bottom: 5px;
            position: relative;
            text-decoration: none;
            & img {
              width: 120px;
            }
          }
        }
      }
    }

    & .container {
      margin: 0 auto;
      max-width: 1140px;
      padding: 0 15px;
      width: 100%;

      & .header {
        padding-top: 150px;

        & .header_name {
          color: #fff;
          font-family: SF Pro;
          font-style: normal;
          letter-spacing: 0.045em;
          font-size: 5.35rem;
          font-weight: 700;
          /* line-height: 30px; */
        }
        & .header_text {
          font-size: 20px;
          font-weight: 400;
          line-height: 26px;
          color: #fff;
          font-family: SF Pro;
          font-style: normal;
          letter-spacing: 0.045em;
        }
        & .header_modal {
          gap: 15px;
          align-items: center;
          display: flex;
          & .header_title {
            padding: 20px 0;
            & .header_btn {
              text-decoration: none;
              align-items: center;
              background-color: initial;
              border: 2px solid #fff;
              border-radius: 20px;
              color: #fff;
              cursor: pointer;
              display: flex;
              font-family: SF Pro;
              font-size: 14.7105px;
              font-style: normal;
              font-weight: 510;
              height: 40px;
              justify-content: center;
              line-height: 136.6%;
              transition: 0.3s;
              width: 130px;
            }
          }
        }
      }
    }
  }
  /* ==================================SERVICE============== */

  & .service {
    background: #fce8bd;
    padding-bottom: 50px;
    & .container {
      margin: 0 auto;
      max-width: 1140px;
      padding: 0 15px;
      width: 100%;
      padding-top: 30px;
      & .service_name {
        color: #000;
        font-size: 30px;
        font-weight: 510;
        text-align: center;
        font-family: SF Pro;
        font-style: normal;
        line-height: 136.6%;
        margin-top: 0px;
      }
      & .service_list {
        display: flex;
        flex-wrap: wrap;
        & .service_tatile {
          background: #2c3442;
          border: 1px solid #000;
          border-radius: 15px;
          cursor: pointer;
          display: flex;
          height: 179px;
          margin: 15px;
          transition: all 0.5s ease-in-out;
          width: 570px;
          & .service_text {
            color: #fff;
            font-size: 20px;
            font-weight: 400;
            padding-left: 25px;
            padding-top: 50px;
            font-family: SF Pro;
            font-style: normal;
            line-height: 136.6%;
          }
        }
        & .service_tatile_to {
          height: 179px;
          width: 400px;
          background: #2c3442;
          border: 1px solid #000;
          border-radius: 15px;
          cursor: pointer;
          display: flex;
          height: 179px;
          margin: 15px;
          transition: all 0.5s ease-in-out;
          & .service_text {
            padding-top: 70px;
            color: #fff;
            font-size: 20px;
            font-weight: 400;
            padding-left: 25px;
            /* padding-top: 50px; */
            font-family: SF Pro;
            font-style: normal;
            line-height: 136.6%;
          }
        }
      }
    }
  }

  /* ===================================rating================= */
  & .rating {
    background: url(./image/rating.9f9cda4caaf5d31ba7bb.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-top: -25px;
    padding-bottom: 135px;
    padding-top: 85px;
    & .container {
      margin: 0 auto;
      max-width: 1140px;
      padding: 0 15px;
      width: 100%;
      & .rating_name {
        font-size: 25px;
        font-weight: 400;
        color: #fff;
        font-family: SF Pro;
        font-style: normal;
        line-height: 136.6%;
      }
      & .rating_tatil {
        display: flex;
        flex-wrap: wrap;
        gap: 48px;
        & .rating_list {
          & .rating_number {
            color: #fff;
            font-family: SF Pro;
            font-style: normal;
            line-height: 136.6%;
            align-items: center;
            display: flex;
            font-size: 45px;
            font-weight: 700;
            margin-bottom: 0;
            margin-left: -20px;
            & span {
              align-items: center;
              display: flex;
              margin: 0 20px;
            }
          }
          & .rating_text {
            color: #fff;
            font-family: Space Grotesk;
            font-size: 21px;
            font-style: normal;
            font-weight: 400;
            line-height: 126.34%;
            margin-top: 0;
          }
        }
      }
    }
  }

  /* ================================section================== */
  & .section {
    & .section_name {
      text-align: center;
      color: #000;
      font-family: SF Pro;
      font-style: normal;
      font-size: 22px !important;
      letter-spacing: 2px;
      line-height: 28px !important;
    }
    & .section_list {
      display: grid;
      grid-template-columns: repeat(3, minmax(33.3%, 250px));
      margin: 0 auto;
      width: 100%;
      & .section_img {
        height: 350px;
        object-fit: cover;
        width: 100%;
      }
    }
  }

  /* =======================projectm==================== */
  & .projectm {
    padding: 30px 0 50px;
    & .container {
      margin: 0 auto;
      max-width: 1140px;
      padding: 0 15px;
      width: 100%;
      & .projectm_name {
        color: #000;
        font-family: SF Pro;
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        letter-spacing: 2px;
        line-height: 28px;
        opacity: 0.99;
      }
      & .projectm_flex {
        display: grid;
        gap: 40px;
        grid-template-columns: repeat(2, minmax(350px, 50%));
        & .projectm_cards {
          & .img_a {
            background: url(./image/projects.53437eda10adf8ee97f3.webp);
          }
          & .img_ab {
            background: url(./image/project.90d0ad1f2b01cab38a88.webp);
          }
          & .img_abc {
            background: url(./image/prezident.39ffbd8cd3007f491559.webp);
          }
          & .img_abcd {
            background: url(./image/school.40d7b4718a3ea2005b09.webp);
          }
          & .img_abcde {
            background: url(./image/image.55d1ad86051dd5af382b.webp);
          }
          & .img_abcdef {
            background: url(./image/image1.59ddf8dcd5ee2719efdc.webp);
          }
        }
      }
    }
  }

  /* ==============================Cards======================= */
  & .cards {
    background: #f7f7f7;
    padding: 50px 0;
    & .container {
      margin: 0 auto;
      max-width: 1140px;
      padding: 0 15px;
      width: 100%;
      & .cards_name {
        color: #000;
        font-family: SF Pro;
        font-style: normal;
        font-weight: 510;
        font-size: 22px !important;
        letter-spacing: 2px;
        line-height: 28px !important;
      }
      & .cards_news {
        display: grid;
        gap: 40px;
        grid-template-columns: repeat(2, minmax(350px, 50%));
        & .cards_list {
          background: #fbfbfb;
          border-radius: 24.1212px;
          box-shadow: 0 3.21616px 33.7697px rgba(0, 0, 0, 0.05);
          display: flex;
          margin: 0 auto 50px;
          & .cards_img {
            border-bottom-left-radius: 24.1212px;
            border-top-left-radius: 24.1212px;
            height: 100%;
            object-fit: cover;
            width: 250px;
          }
          & .cards_item {
            padding-left: 16px;
            padding-right: 10px;
            padding-top: 20px;
            & .cards_items {
              align-items: center;
              display: flex;
              & .cards_btn {
                background: #363f4e;
                border: 1px solid #363f4e;
                border-radius: 17.4756px;
                color: #fff;
                cursor: pointer;
                font-family: Helvetica;
                font-size: 11.2566px;
                font-style: normal;
                font-weight: 400;
                height: 26.21px;
                line-height: 18px;
                transition: 0.5s;
                width: 114.17px;
              }
            }
          }
          & .cards_names {
            color: #000;
            font-family: SF Pro;
            font-style: normal;
            font-size: 18px;
            font-weight: 510;
            line-height: 22px;
            opacity: 0.99;
          }
          & .cards_text {
            font-size: 12px;
            font-weight: 400;
            line-height: 18px;
            opacity: 0.85;
            width: 100%;
            color: #000;
            font-family: SF Pro;
            font-style: normal;
          }
        }
      }
    }
  }

  /* ========================Gallery========================== */
  & .gallery {
    padding: 30px 0;
    & .gallery_name {
      text-align: center;
      color: #000;
      font-family: SF Pro;
      font-style: normal;
      font-weight: 510;
      font-size: 22px !important;
      letter-spacing: 2px;
      line-height: 28px !important;
    }
    & .gallery_list {
      display: grid;
      grid-template-columns: repeat(4, minmax(25%, 250px));
      width: 100%;
      & .gallery-img {
        width: 100%;
      }
    }
  }
`;
