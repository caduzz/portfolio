import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  overflow: hidden;

  #userInfoSection {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding-inline: 25px;

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
            text-align: justify;  
          }

          .serviceName {
            font-size: 22px;
            font-family: 'Work Sans', sans-serif;
            color: #348cf0;
          }
        }
      }
    }
  }

  #sobreSection {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 25px;

    width: 100%;
    height: 100vh;

    background-color: #f1f1f1;

    .sobreContainer {
      width: 100%;
      gap: 50px;

      padding: 85px;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      .sobreHeaderArea {
        color: #333333;
        
        font-size: 22px;
        font-family: 'Work Sans', sans-serif;
        font-weight: bold;
      }

      .sobreDescriptionArea {
        display: flex;
        flex-direction: column;
        gap: 25px;

        width: 100%;
      
        .sobreDescripiton {
          
          margin-top: 15px;

          color: #333333;

          font-size: 18px;
          font-family: "Roboto", sans-serif;
          font-weight: 400;
          text-align: justify;
        }
      }
  
    } 
  }

  #projectSection {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100vh;

    .sobreSkillsArea {
        width: 100%;
        
        color: #333333;
        font-family: "Roboto", sans-serif;

        .sobreSkillFilterArea {
          width: 100%;

          display: flex;
          gap: 15px;
        }

        .sobreSkillsContent {
          margin-top: 25px;
          width: 100%;
          display: flex;
          flex-direction: row;
          
          .sobreSkillsSwiper {
            width: 100%;

            gap: 50px;
            display: flex;
            flex-direction: row;
          }
        }
      }

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

export const ButtonFilter = styled.button`
  text-transform: capitalize;
  width: 80px;
  padding: 5px;
  color: ${p => p.active ? '#348cf0' : '#333333'};

  border-radius: 5px;
  cursor: pointer;
  border: none;
  background-color: transparent;

`