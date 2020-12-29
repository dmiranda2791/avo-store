import React from "react";
import { Container } from "semantic-ui-react";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <NavBar />
      <Container as="main" text>
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
