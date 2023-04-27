import { HeroBox, HeroTitle, HeroSubTitle, HeroBtn, HeroBtnArrowBox, HeroBtnArrow, HeroBtnText } from "./hero.styled";
import nextarr from "../../assets/images/gallery/next.png";

function Hero() {
    return (<HeroBox>
        <HeroTitle>The Sky Is The Limit</HeroTitle>
        <HeroSubTitle>We provide world class financial assistance</HeroSubTitle>
        <HeroBtn type="button">
            <HeroBtnArrowBox>
                <HeroBtnArrow src={nextarr} alt="arrow next" />
            </HeroBtnArrowBox>
            <HeroBtnText>Read More</HeroBtnText>
        </HeroBtn>
    </HeroBox>)
}

export default Hero;