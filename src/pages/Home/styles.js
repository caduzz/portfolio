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
          display: flex;
          flex-direction: column;

          width: 550px;
          gap: 10px;

          .userName {
            color: #ffffff;
            font-size: 50px;
            font-family: 'Work Sans', sans-serif;
          }

          .userDescription {
            color: #afafaf;
            font-size: 18px;
          }

          .serviceName {
            font-size: 22px;
            font-family: 'Work Sans', sans-serif;
            color: #348cf0;
          }
        }
      }
      .userDescriptionArea {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;

        .userDescription {
          text-align: end;
          margin-top: 15px;
          color: #ffffff;
          font-size: 15px;
          font-family: 'Work Sans', sans-serif;
        }
      }
    }
  }

  #sobreSection {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 20px;

    width: 100%;
    height: 100vh;

    background-color: #f1f1f1;

    .sobreContainer {
      width: 100%;

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;

      .sobreHeaderArea {
        color: #333333;
        
        font-size: 22px;
        font-family: 'Work Sans', sans-serif;
        font-weight: bold;
      }

      .sobreContentArea {
        width: 50%;
        display: flex;

        p {
          font-size: 16px;
          font-family: 'Work Sans', sans-serif;
        }
      }
    } 
  }

  #projectSection {
    display: flex;
    flex-direction: column;

    padding: 20px;

    width: 100%;
    height: 100vh;

    .projectContainer {
      width: 100%;
      
      display: flex;
      align-items: center;
      justify-content: center;

      .projectHeaderArea {
        text-align: center;
        width: 100%;

        color: #ffffff;

        font-size: 22px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      }
    }
  }
`