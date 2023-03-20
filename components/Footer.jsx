/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import gsap, { Power4 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector("#button"),
      {
        x: -100,
      },
      {
        x: 0,
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom center",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <Container ref={ref}>
      <Wrapper>
        <Heading>Let's work together</Heading>
        <Email>adwihersa@gmail.com</Email>
        <ButtonWrapper>
          <Line />
          <Button id="button">Get in touch</Button>
        </ButtonWrapper>
        <Number>+62 811 6211 727</Number>

        <SocialWrapper>
          <SocialHeading>SOCIALS</SocialHeading>
          <SocialLinks>
            <Link>Instagram</Link>
            <Link>Linkedin</Link>
            <Link>Twitter</Link>
            <Link>Dribbble</Link>
          </SocialLinks>
        </SocialWrapper>
        <Copyright>
          <CopyrightHeading>COPYRIGHT</CopyrightHeading>
          <CopyrightText>© Adwitya Hersa</CopyrightText>
        </Copyright>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #000;
  padding: 10%;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
const Heading = styled.h3`
  font-weight: 300;
  font-size: ${(props) => props.theme.fontxs};
  color: #fff;
`;
const Email = styled.h1`
  font-weight: 300;
  font-size: ${(props) => props.theme.fontlg};
  color: #fff;
  margin-top: 1.5rem;
  position: relative;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #fff;
    transition: all 0.4s cubic-bezier(0.11, 0.72, 1, 0.48);
  }

  &:hover::after {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    font-size: ${(props) => props.theme.fontxxl};
  }
`;
const ButtonWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;
const Line = styled.hr`
  position: absolute;
  top: 50%;
  width: 100%;
  height: 2px;
  background-color: #fff;
  z-index: 1;
`;

const Button = styled.button`
  border: none;
  background-color: #fff;
  outline: none;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  font-size: ${(props) => props.theme.fontlg};
  margin: 3rem 1.5rem 3rem 0;
  z-index: 2;
  transition: all 0.4s ease-in-out;
  border: 1px solid #fff;
  cursor: pointer;

  &:hover {
    background-color: #000;
    color: #fff;
  }

  @media screen and (min-width: 425px) {
    width: 170px;
    height: 170px;
  }

  @media screen and (min-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;
const Number = styled.button`
  border: 1px solid #fff;
  padding: 1rem 1.5rem;
  background-color: transparent;
  border-radius: 40px;
  color: #fff;
  font-size: ${(props) => props.theme.fontmd};
  font-weight: 300;
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  &:hover {
    background-color: #fff;
    color: #000;
  }

  @media screen and (min-width: 375px) {
    font-size: ${(props) => props.theme.fontlg};
  }

  @media screen and (min-width: 425px) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;
const SocialWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 2rem;
`;
const SocialHeading = styled.h5`
  color: #fff;
  font-weight: 300;
  font-size: ${(props) => props.theme.fontxs};
  opacity: 0.5;
`;
const SocialLinks = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Link = styled.p`
  margin-right: 1.5rem;
  margin-top: 0.5rem;
  font-weight: 300;
  color: #fff;
  font-size: ${(props) => props.theme.fontxs};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #dedede;
  }
`;
const Copyright = styled.div`
  color: #fff;
  cursor: default;

  @media screen and (min-width: 768px) {
    margin: 1rem 0;
  }
`;
const CopyrightHeading = styled(SocialHeading)``;
const CopyrightText = styled.p`
  font-size: ${(props) => props.theme.fontxs};
  font-weight: 300;
  margin-top: 0.5rem;
`;
