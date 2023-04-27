import styled from "styled-components";

export const HeaderBox = styled.div`
position: sticky;
top: 0;
left: 0;
background: transparent;
width: 100%;
height: 120px;
display: flex;
flex-direction: column;
`;

export const LogoBox = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;

export const LogoImg = styled.div`
width:40px;
height: 35px;
`
export const Logo = styled.img`
width:40px;
height: 31px;
border: none;
outline: none;
`;

export const GreenText = styled.p`
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 28px;
line-height: 38px;
color: #28A745;
margin-right: 8px;
margin-left: 8px;
`;

export const WhiteText = styled.p`
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 28px;
line-height: 38px;
color: #FFFFFF;
`;

export const MenuList = styled.ul`
display: flex;
flex-direction: row;
list-style-type: none;
padding: 0;
`;

export const MenuItem = styled.li`
margin-right: 12px;
color: #FFFFFF;
text-decoraction: none;
text-align: none;
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 1.37;
padding: 0;

&:last-child{
    margin-right: 0;
}`