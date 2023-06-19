import React, { Fragment } from "react";

import Header from "../UI/Header";
import Footer from "../UI/Footer/Footer";

interface IPropChildren {
  children: React.ReactNode;
}

const Layout: React.FC<IPropChildren> = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
