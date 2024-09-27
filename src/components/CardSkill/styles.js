import styled from "styled-components";

export const Container = styled.div`
  width: 85px;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: center;

  user-select: none;

  border-radius: 5px;

  background-color: #ffffff;
  box-shadow: 0px 0px 10px -2px rgba(80, 80, 120, 0.3);

  .cardSkillIcon {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 15px;
  }

  .cardSkillTitle {
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    color: #333333;
  }
`