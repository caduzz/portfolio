import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 75px;

  padding: 25px;

  .navBarArea {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    .navBarItems {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;
      width: 50%;
      height: 75px;

      .navBarItem {
        margin: 0 15px;
        color: #fff;
      }
      .navBarItem:hover {
        color: #348cf0;
      }
    }
  }
`;