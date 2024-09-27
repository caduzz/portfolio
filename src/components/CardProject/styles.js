import styled from "styled-components";

export const Container = styled.div`
  width: 400px;

  margin: 10px;

  border-radius: 10px;

  background-color: #222229;
  text-transform: capitalize;

  transition: transform 0.3s;
  overflow: hidden;
  border: 0.2px solid #333333;
  user-select: none;


  box-shadow: 0px 0px 10px -2px #0006;

  .cardProject {
    width: 100%;
    
    transition: transform 0.3s;

    .imgProject {
      -webkit-user-drag: none;
      width: 100%;
      height: 150px;
      object-fit: cover;
      scale: 1.02;
      object-position: 0px 0px;
      border-bottom: 0.2px solid #333333;
    }

    .cardContentProject {
      padding-inline: 15px;
      padding-block: 20px;
      width: 100%;
      height: 100%;

      .cardProjectTitle {
        color: #ffffff;
        font-size: 20px;
        font-weight: bold;
      }

      .cardProjectDescription {
        color: #d5d5d5;
        font-size: 13px;
        font-weight: 450;
      }
      
      .cardProjectTechs {
        margin-top: 15px;
        display: flex;

        gap: 5px;

        width: 100%;

        .cardTech {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          padding: 4px 12px;
          border-radius: 25px;
          color: #fff;
          background-color: #348cf0;
        }
      }
    }
  }

  .cardProject:hover {
    transform: scale(.95);
  }

  &:hover {
    transform: scale(1.05);
  }
`