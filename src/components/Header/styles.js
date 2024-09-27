import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 75px;

  padding: 25px;

  .navBarArea {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .navBarItems {
      display: flex;
      align-items: center;
      flex-direction: row;

      height: 75px;

      .navBarItem {
        cursor: pointer;
        background-color: transparent;
        border: none;
        margin: 0 15px;
        font-size: 14px;
        color: #fff;
      }
      .navBarItem:hover {
        color: #348cf0;
      }
    }
  }
`;