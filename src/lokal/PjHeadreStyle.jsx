import styled from "styled-components";
export const PjHeader = styled.div`
  & .navbar {
    position: fixed;
    background: #222936;
    top: 0;
    width: 100%;
    & .container {
      margin: 0 auto;
      max-width: 1140px;
      padding: 0 15px;
      width: 100%;
      & .navbar_listr {
        align-items: center;
        display: flex;
        justify-content: space-between;
        list-style: none;
        margin-top: 0px;
        padding-top: 20px;
        /* & .navbar_item {
          margin: 0 10px;
          & .navbar_links {
            color: #fce8bd;
            font-family: SF Pro;
            font-size: 15.1852px;
            font-style: normal;
            font-weight: 400;
            line-height: 18px;
            padding: 0 10px 5px;
            text-decoration: none;
            & img {
              width: 120px;
            }
          }
        } */
        & .navbar_item {
          margin: 0 20px;
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
        & .meeting_text {
          color: #464646;
          font-family: Mulish;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
          width: 424px;
        }
        & .meeting_left {
          margin-left: 50px;
          & .meeting_icons {
            border-radius: 10px;
            width: 550px;
          }
        }
      }
    }
  }
`;
