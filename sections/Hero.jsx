import styled, { keyframes } from "styled-components";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { motion } from "framer-motion";
// Image
import img from "../public/Foto.jpg";

// Icons
import { FaBirthdayCake, FaGlobeAsia, FaMugHot } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const variants = {
  show: { opacity: 0, y: 50 },
  hidden: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
    },
  },
};

const Hero = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <Container variants={variants} initial="show" animate="hidden">
      <Wrapper>
        <ImageWrapper>
          <Image src={img} layout="fill" objectFit="cover" alt="" />
        </ImageWrapper>
        <Quote>Make yourself at home</Quote>
      </Wrapper>

      <TextMarquee gradient={false} speed={40}>
        <Text>Adwitya Hersa</Text>
        <Text>Adwitya Hersa</Text>
      </TextMarquee>

      <PersonalContainer>
        <PersonalWrapper>
          <Data className="face1">
            <Cake /> {year - 1999} years old
          </Data>
          <Data className="face2">
            <Country /> Located in Indonesia
          </Data>
          <Data className="face3">
            <Cofee />
            Coffee Addict
          </Data>
          <Data className="face4">
            <Instagram />
            adwitya_hersa
          </Data>
        </PersonalWrapper>
      </PersonalContainer>
    </Container>
  );
};

export default Hero;

const Container = styled(motion.div)`
  width: 100%;
  height: 100vh;
  padding-top: 10rem;

  @media screen and (min-width: 768px) {
    height: 100vh;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
`;
const TextMarquee = styled(Marquee)`
  font-size: ${(props) => props.theme.fontxxxl};
  height: 30vh;

  @media screen and (min-width: 768px) {
    font-size: 7rem;
  }

  div {
    display: flex;
  }
`;
const Text = styled(motion.h1)`
  margin: 1rem;
  font-weight: 500;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ImageWrapper = styled(motion.div)`
  position: relative;
  width: 300px;
  height: 80px;

  @media screen and (min-width: 768px) {
    width: 500px;
    height: 130px;
  }
`;

const Quote = styled(motion.h3)`
  font-weight: 300;
  font-size: ${(props) => props.theme.fontmd};
  margin: 1rem;
`;
const PersonalContainer = styled(motion.div)`
  margin: 5rem 0;

  @media screen and (min-width: 768px) {
    margin: 5rem 0;
  }
`;

const Data = styled.div`
  position: absolute;
  width: 100%;
  height: 40px;
  color: #109393;
  font-size: ${(props) => props.theme.fontmd};
  display: flex;
  align-items: center;
  padding: 0 5%;
  font-weight: 300;

  &.face1 {
    color: #000;
    -webkit-transform: translateZ(40px);
    -moz-transform: translateZ(40px);
    -ms-transform: translateZ(40px);
    transform: translateZ(15px);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  &.face2 {
    color: #000;
    -webkit-transform: rotateX(90deg) translateZ(40px);
    -moz-transform: rotateX(90deg) translateZ(40px);
    -ms-transform: rotateX(90deg) translateZ(40px);
    transform: rotateX(90deg) translateZ(15px);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  &.face3 {
    color: #000;
    -webkit-transform: rotateX(180deg) translateZ(40px);
    -moz-transform: rotateX(180deg) translateZ(40px);
    -ms-transform: rotateX(180deg) translateZ(40px);
    transform: rotateX(180deg) translateZ(15px);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  &.face4 {
    color: #000;
    -webkit-transform: rotateX(270deg) translateZ(40px);
    -moz-transform: rotateX(270deg) translateZ(40px);
    -ms-transform: rotateX(270deg) translateZ(40px);
    transform: rotateX(270deg) translateZ(15px);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
`;
const Cake = styled(FaBirthdayCake)`
  margin-right: 0.5rem;
  margin-bottom: 6px;
  font-size: ${(props) => props.theme.fontlg};
`;
const Country = styled(FaGlobeAsia)`
  margin-right: 0.5rem;
  margin-bottom: 4px;
  font-size: ${(props) => props.theme.fontlg};
`;
const Instagram = styled(AiFillInstagram)`
  margin-right: 0.5rem;
  font-size: ${(props) => props.theme.fontlg};
`;
const Cofee = styled(FaMugHot)`
  margin-right: 0.5rem;
  margin-bottom: 7px;
  font-size: ${(props) => props.theme.fontlg};
`;

const spincube = keyframes`
    from,to {
	  -webkit-transform: rotateX(0deg);
      -moz-transform: rotateX(0deg);
      -ms-transform: rotateX(0deg);
      transform: rotateX(0deg);
    }
    15% {
	  -webkit-transform: rotateX(90deg);
      -moz-transform: rotateX(90deg);
      -ms-transform: rotateX(90deg);
      transform: rotateX(90deg);
    }
	25% {
	  -webkit-transform: rotateX(90deg);
      -moz-transform: rotateX(90deg);
      -ms-transform: rotateX(90deg);
      transform: rotateX(90deg);
    }
	40% {
	  -webkit-transform: rotateX(180deg);
      -moz-transform: rotateX(180deg);
      -ms-transform: rotateX(180deg);
      transform: rotateX(180deg);
    }
	50% {
	  -webkit-transform: rotateX(180deg);
      -moz-transform: rotateX(180deg);
      -ms-transform: rotateX(180deg);
      transform: rotateX(180deg);
    }
    65% {
	  -webkit-transform: rotateX(270deg);
      -moz-transform: rotateX(270deg);
      -ms-transform: rotateX(270deg);
      transform: rotateX(270deg);
    }
	75% {
	  -webkit-transform: rotateX(270deg);
      -moz-transform: rotateX(270deg);
      -ms-transform: rotateX(270deg);
      transform: rotateX(270deg);
    }
	90% {
	  -webkit-transform: rotateX(360deg);
      -moz-transform: rotateX(360deg);
      -ms-transform: rotateX(360deg);
      transform: rotateX(360deg);
    }
    100% {
	  -webkit-transform: rotateX(360deg);
      -moz-transform: rotateX(360deg);
      -ms-transform: rotateX(360deg);
      transform: rotateX(360deg);
    }
`;

const PersonalWrapper = styled.div`
  position: relative;
  animation-name: ${spincube};
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 8s;
  transform-style: preserve-3d;
  transform-origin: 20px 20px 0;
`;
