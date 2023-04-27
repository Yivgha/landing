import styled from "styled-components";
import bg from "../../assets/images/home/showcase.jpg";


export const HeroBox = styled.div`
display: flex;
flex-direction: column;
padding: 160px 40px 105px 40px;
width: 320px;
height: 100%;
background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg});
background-size: cover;
background-repeat: no-repeat;
background-position: top center;
border-radius: 0px;
`;

export const HeroTitle = styled.h1`
font-family: 'Open Sans';
font-style: normal;
font-weight: 600;
font-size: 40px;
line-height: 1.35;
text-align: center;
color: #FFFFFF;
margin-bottom: 16px;
`;

export const HeroSubTitle = styled.h2`
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 26px;
line-height: 1.23;
text-align: center;
color: #FFFFFF;
margin-bottom: 24px;
`;

export const HeroBtn = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
align-self: center;
padding: 16px 32px;
width: 175px;
height: 57px;
background: #28A745;
border-radius: 5px;
color: #FFFFFF;
outline: none;
cursor: pointer;
border: transparent;
`;

export const HeroBtnArrowBox = styled.div`
width: 9px;
height: 18px;
outline: none;
border: transparent;
margin-right: 8px;
display: flex;
align-items: center;
`

export const HeroBtnArrow = styled.img`
width: 8px;
height: 12px;
outline: none;
border: none;
colot: #FFFFFF;
`;

export const HeroBtnText = styled.p`
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 1.38;
text-align: center;
color: #FFFFFF;
`