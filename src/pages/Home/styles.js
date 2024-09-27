import styled from "styled-components";

export const Container = styled.main`
  width: 100%;

  #userInfoSection {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding-inline: 12rem;

    width: 100%;
    height: 100vh;

    .userInfoContainer {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      width: 100%;

      .userInfoArea {
        display: flex;
        align-items: center;
        flex-direction: column;

        width: 50%;

        .userInfo {
          width: 550px;
          opacity: 1;

          .userName {
            color: #ffffff;
            font-size: 50px;
            font-family: 'Work Sans', sans-serif;
          }

          .serviceName {
            font-size: 20px;
            font-family: 'Work Sans', sans-serif;
            color: #348cf0;
          }
        }
      }
    }
  }

  #userSobreSection {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100vh;

    background-color: #f1f1f1;
  }
`