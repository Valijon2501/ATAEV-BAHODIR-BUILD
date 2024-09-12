import styled from "styled-components";
export const PjHeader = styled.div`
  & .navbar {
    position: fixed;
    background: #222936;
    top: 0;
    width: 100%;
    z-index: 1;
    @media (max-width: 1440px) {
      .container {
        width: 100%;
      }
      @media (max-width: 860px) {
        display: none;
      }
    }
    & .container {
      margin: 0 auto;
      max-width: 1140px;
      padding: 0 15px;
      width: 100%;
      @media (max-width: 1440px) {
        .container {
          width: 100%;
        }
      }
      & .navbar_listr {
        align-items: center;
        display: flex;
        justify-content: space-between;
        list-style: none;
        margin-top: 0px;
        padding-top: 20px;
        @media (max-width: 950px) {
          padding-left: 0px;
        }
        & .navbar_item {
          margin: 0 20px;
          & .select {
            background: none;
            color: rgb(252, 232, 189);
            border: none;
            & option {
              background-color: black;
            }
          }
          & .navbar_links_navbar_name {
            & img {
              width: 120px;
            }
          }
          & img {
            margin-right: 10px;
            width: 20px;
          }
          & .navbar_links {
            color: #fce8bd;
            list-style: none;
            display: block;
            padding-bottom: 5px;
            position: relative;
            text-decoration: none;
            &::after {
              content: "";
              width: 100%;
              height: 2px;
              background-color: #fff;
              position: absolute;
              bottom: 0;
              left: 0;
              border-radius: 2px;
              transform: scaleX(0);
              transition: all.5s;
            }
            &:hover {
              &::after {
                transform: scaleX(1);
              }
            }
            @media (max-width: 1050px) {
              font-size: 14px;
              @media (max-width: 950px) {
                font-size: 12px;
              }
            }
          }
        }
      }
    }
  }
  /* =======================mobile========================== */
  & .nav_mobile {
    background: rgba(44, 52, 66, 0.9);
    padding: 30px 30px 25px 15px;
    display: none;
    @media (max-width: 860px) {
      display: flex;
    }
    & .container {
      align-items: center;
      display: flex;
      justify-content: space-between;
      & .nav_mobile_btn {
        background-color: initial;
        border: none;
        width: 45px;
        & img {
          width: 35px;
        }
      }
      & .nav_link_name {
        text-decoration: none;
        & img {
          width: 120px;
        }
      }
      & .nav_mogile_link {
        text-decoration: none;
        & img {
          width: 35px;
        }
      }
    }
  }
  /* ======================================================modal */
  & .nav_modalContainer_nav_show {
    align-items: center;
    /* -webkit-backdrop-filter: blur(18px); */
    backdrop-filter: blur(18px);
    background-color: rgba(0, 0, 0, 0.5);
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    position: fixed;
    top: 0;
    z-index: 100;
    & .nav_modal_content {
      background: #fce8bd;
      height: 100vh;
      width: 250px;
      & .navbar_close {
        align-items: center;
        background: #f5e1b2;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        height: 32px;
        justify-content: center;
        left: 85%;
        position: relative;
        top: 3%;
        width: 32px;
      }
      & .navbar_modal_list {
        list-style: none;
        margin-top: 35px;
        & .navbar_modal_item {
          margin: 10px 0;
          & .navbar_modal_link {
            color: #000;
            font-family: SF Pro;
            font-size: 15.1852px;
            font-style: normal;
            font-weight: 400;
            line-height: 18px;
            text-decoration: none;
          }
          & .nav__langs {
            align-items: center;
            display: flex;
            margin-left: -10px;
            & p {
              color: #000;
              font-size: 18px;
              font-weight: 600;
              margin: 10px;
              text-transform: uppercase;
            }
          }
        }
      }
    }
  }

  /* ==============meetang================= */

  & .meeting {
    margin-top: 85px;
    background: #fff;
    padding: 70px 20px;
    & .container {
      margin: 0 auto;
      max-width: 1140px;
      padding: 0 15px;
      width: 100%;
      & .meeting_mane {
        color: #222936;
        font-family: SF Pro;
        font-size: 32px;
        font-style: normal;
        font-weight: 590;
        line-height: 38px;
        @media (max-width: 1000px) {
          font-size: 30px;
          @media (max-width: 800px) {
            text-align: center;
          }
        }
      }
      & .meeting_title {
        font-family: SF Pro;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 19px;
        & .meeting_link {
          color: rgba(0, 0, 0, 0.5);
          text-decoration: none;
        }
      }
      & .meeting_page {
        display: flex;
        @media (max-width: 800px) {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        & .meeting_text {
          color: #464646;
          font-family: Mulish;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
          width: 424px;
          @media (max-width: 800px) {
            margin-bottom: 3rem;
            width: 100%;
          }
        }
        & .meeting_left {
          margin-left: 50px;
          @media (max-width: 800px) {
            margin-left: 0px;
          }
          & .meeting_icons {
            border-radius: 10px;
            width: 550px;
            @media (max-width: 1000px) {
              width: 80%;
              @media (max-width: 800px) {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
`;
