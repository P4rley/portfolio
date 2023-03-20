"use client";
import Link from "next/link";
import styled from "styled-components";

const NavbarMenu = ({ click, setClick }) => {
  return (
    <Container click={click}>
      <Wrapper>
        <MenuLink>
          <Link href="/" onClick={() => setClick(false)}>
            <LinkItem>Home</LinkItem>
          </Link>
          <Link href="/about" onClick={() => setClick(false)}>
            <LinkItem>About</LinkItem>
          </Link>
          <Link href="/work" onClick={() => setClick(false)}>
            <LinkItem>Work</LinkItem>
          </Link>
          <Link href="/contact" onClick={() => setClick(false)}>
            <LinkItem>Contact</LinkItem>
          </Link>
        </MenuLink>
        <Line />
        <MenuSocialWrapper>
          <SocialWrapper>
            <SocialHeading>SOCIALS</SocialHeading>
            <SocialLinks>
              <Link href="https://www.instagram.com/" target="_blank">
                <p>Instagram</p>
              </Link>
              <Link
                href="https://www.linkedin.com/in/adwitya-hersa-030bb5185/"
                target="_blank"
              >
                <p>Linkedin</p>
              </Link>
              <Link href="https://twitter.com/home" target="_blank">
                <p>Twitter</p>
              </Link>
              <Link href="https://dribbble.com/" target="_blank">
                <p>Dribbble</p>
              </Link>
            </SocialLinks>
          </SocialWrapper>
          <Copyright>
            <CopyrightHeading>COPYRIGHT</CopyrightHeading>
            <CopyrightText>© Adwitya Hersa</CopyrightText>
          </Copyright>
        </MenuSocialWrapper>
      </Wrapper>
    </Container>
  );
};

export default NavbarMenu;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  transform: ${({ click }) =>
    click ? "translate(0,0)" : "translate(calc(100% + 10vw),0)"};
  background-color: #000;
  transition: transform 1s cubic-bezier(0.7, 0, 0.2, 1);
  will-change: transform;
  z-index: ${(props) => props.theme.index4};
  padding: 10%;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
`;
const MenuLink = styled.ul`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const LinkItem = styled.p`
  color: #fff;
  cursor: pointer;
  font-size: ${(props) => props.theme.fontxxl};
  margin-bottom: 1rem;
  transition: all 0.4s ease-in-out;
  &:hover {
    color: #5b5b5b;
  }

  @media screen and (min-width: 768px) {
    font-size: ${(props) => props.theme.fontxxxl};
  }
`;

const Line = styled.hr`
  width: 100%;
  height: 2px;
  background-color: #fff;
  opacity: 0.5;
`;
const MenuSocialWrapper = styled.div``;
const SocialWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin: 2rem 0;
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

  p {
    margin-right: 1.5rem;
    margin-top: 0.5rem;
    font-weight: 300;
    color: #fff;
    font-size: ${(props) => props.theme.fontxs};
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: #5b5b5b;
    }
  }
`;

const Copyright = styled.div`
  color: #fff;
  cursor: default;
`;
const CopyrightHeading = styled(SocialHeading)``;
const CopyrightText = styled.p`
  font-size: ${(props) => props.theme.fontxs};
  font-weight: 300;
  margin-top: 0.5rem;
`;
