import { LayoutBox } from "./layout.styled";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({children}) => {
    return (
        <LayoutBox>
         
        <Header />
        <main>{children}</main>
        <Footer />
  
        </LayoutBox>
    );
};

export default Layout;