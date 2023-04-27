import { HeaderBox, LogoBox, LogoImg, Logo, GreenText, WhiteText, MenuList, MenuItem } from "./header.styled";
import logo from "../../assets/images/logo.png";

function Header() {
    return (<HeaderBox>
        <LogoBox>
            <LogoImg>
                <Logo src={logo} alt="logo img" />
            </LogoImg>
            <GreenText>Finance</GreenText>
                <WhiteText>Ledger</WhiteText>
        </LogoBox>
        <MenuList>
            <MenuItem>Home</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Cases</MenuItem>
            <MenuItem>Blog</MenuItem>
            <MenuItem>Contact</MenuItem>
        </MenuList>
    </HeaderBox>)
};

export default Header;