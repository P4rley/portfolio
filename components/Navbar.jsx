import styled from "styled-components";
import { useState, useEffect } from "react";
import NavbarMenu from "./NavbarMenu";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const handleClick = () => {
    if (click) {
      setClick(false);
    } else {
      setClick(true);
    }
  };

  return (
    <Container scrollNav={scrollNav}>
      <Wrapper>
        <Link href="/" style={{ cursor: "pointer" }}>
          <Logo>© Adwitya Hersa</Logo>
        </Link>
        <MenuWrapper click={click} onClick={handleClick}>
          <Menu click={click}>
            <div></div>
            <div></div>
            <div></div>
          </Menu>
        </MenuWrapper>
      </Wrapper>

      <NavbarMenu click={click} setClick={setClick} />
    </Container>
  );
};

export default Navbar;

const Container = styled.section`
  width: 100%;
  padding: 2rem 10%;
  position: absolute;
  top: 0;
  z-index: 99;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: ${(props) => props.theme.index4};
`;
const Logo = styled.h3`
  cursor: pointer;
  font-size: ${(props) => props.theme.fontmd};
  z-index: ${(props) => props.theme.index5};
  font-weight: 400;
  color: ${({ click }) => (click ? "#fff" : "#000")};
`;

const Menu = styled.div`
  display: flex;
  transition: all 0.4s ease-in-out;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  div {
    width: 30px;
    height: 3px;
    border-radius: 20px;
    background-color: #fff;
    margin: 3px;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ click }) =>
        click ? "rotate(45deg) translate(-1.5px)" : "rotate(0)"};
    }
    &:nth-child(2) {
      width: 20px;
      opacity: ${({ click }) => (click ? "0" : "1")};
    }

    &:nth-child(3) {
      transform: ${({ click }) =>
        click ? "rotate(-45deg) translate(-1.5px)" : "rotate(0)"};
    }
  }
`;

const MenuWrapper = styled.div`
  position: fixed;
  right: 10%;
  z-index: ${(props) => props.theme.index5};
  background-color: #000;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  transition: all 0.4s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover ${Menu} div:nth-child(2) {
    width: 30px;
  }
`;
