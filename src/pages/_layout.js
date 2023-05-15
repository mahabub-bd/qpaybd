import { Footer, Navbar } from "@/components";
import AOS from "aos";

import { useEffect } from "react";

const Layout = ({ children }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
