import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
