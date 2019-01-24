import React from "react";
import Footer from "./Footer";
import styled from "styled-components";
import SideBar from "./SideBar";

const Content = styled.div`
  /* padding: 0 20px; */
  min-height: 200vh;
  grid-area: content;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 200px repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas: "sidebar content content content" "sidebar content content content" "sidebar content content content";

  height: 100vh;
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <SideBar />
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Layout;
