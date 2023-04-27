import { LayoutBox } from "./layout.styled";

const Layout = ({ children }) => {
    return (
        <LayoutBox>
            {children}
        </LayoutBox>
    );
};

export default Layout;