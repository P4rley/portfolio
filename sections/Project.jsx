"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Image
import img from "../public/home-image4.jpg";
import img2 from "../public/restaurant-image2.jpg";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

const getDimensionObject = (node) => {
  const rect = node.getBoundingClientRect();

  return {
    width: rect.width,
    height: rect.height,
  };
};

const useSize = () => {
  const [dimensions, setDimensions] = useState({});
  const [node, setNode] = useState();

  const ref = useCallback((node) => {
    setNode(node);
  }, []);

  useEffect(() => {
    if (node) {
      const measure = () => setDimensions(getDimensionObject(node));
      measure();
    }
  }, [node]);

  return [ref, dimensions];
};

const Project = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const { x, y } = useMousePosition();
  const isActive = 1 === activeIndex;
  const [ref, { width, height }] = useSize();

  return (
    <Container
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <Wrapper>
        <Heading>RECENT PROJECT</Heading>
        <BoxWrapper>
          <Box
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <ImgWrapper>
              <BoxImgWrapper>
                <Image src={img} layout="fill" objectFit="cover" alt="" />
              </BoxImgWrapper>
            </ImgWrapper>

            <Title>Space Tourism</Title>
            <DescWrapper>
              <Desc>Interaction & Development</Desc>
              <Year>2022</Year>
            </DescWrapper>
          </Box>

          <Box
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <ImgWrapper>
              <BoxImgWrapper>
                <Image src={img2} layout="fill" objectFit="cover" alt="" />
              </BoxImgWrapper>
            </ImgWrapper>

            <Title>Space Tourism</Title>
            <DescWrapper>
              <Desc>Interaction & Development</Desc>
              <Year>2022</Year>
            </DescWrapper>
          </Box>
        </BoxWrapper>

        <ProjectBoxWrapper
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <ProjectBox
            onMouseEnter={() => setActiveIndex(1)}
            onMouseLeave={() => setActiveIndex(-1)}
          >
            <ProjectTitle>Space Tourism</ProjectTitle>
            <ProjectTitle>Sunny Side bla bla</ProjectTitle>
            <ProjectTitle>Space Tourism</ProjectTitle>
            <ProjectTitle>Sunny Side</ProjectTitle>
            <ProjectTitle>lorem ipsum </ProjectTitle>
            <ProjectTitle>Sunny Side</ProjectTitle>
            <ProjectTitle>bla bla</ProjectTitle>
            <ProjectTitle>lorem bla</ProjectTitle>
            <ProjectTitle>Space Tourism</ProjectTitle>
            <ProjectTitle>lorem</ProjectTitle>
          </ProjectBox>
          <ProjectImgBoxWrapper>
            <ProjectImgBox>
              <ProjectImg
                active={isActive}
                x={x}
                y={y}
                ref={ref}
                style={{
                  transform: `translate(${x - width / 2}px, ${
                    y - height / 2
                  }px)`,
                }}
              >
                <Image src={img} alt="" layout="fill" objectFit="cover" />
              </ProjectImg>
            </ProjectImgBox>
          </ProjectImgBoxWrapper>
        </ProjectBoxWrapper>

        <Link href="/work">
          <Button>More Work</Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Project;

const Container = styled(motion.div)`
  width: 100%;
  padding: 10%;

  @media screen and (min-width: 425px) {
    min-height: 100vh;
  }
`;
const Heading = styled.h4`
  font-weight: 300;
  font-size: ${(props) => props.theme.fontxs};
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: 425px) {
    min-height: 100vh;
    justify-content: space-between;
  }
`;
const BoxWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 2rem 0;

  @media screen and (min-width: 820px) {
    display: none;
  }
`;
const BoxImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: all 0.4s ease-in-out;
`;
const Box = styled(motion.div)`
  width: 100%;

  @media screen and (min-width: 650px) {
    width: 70%;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  height: 200px;
  padding: 2rem;
  background-color: #dedede;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover ${BoxImgWrapper} {
    transform: scale(1.1);
  }

  @media screen and (min-width: 820px) {
    height: 300px;
  }

  @media screen and (min-width: 425px) {
    height: 250px;
  }
`;

const Title = styled.h2`
  margin: 1rem 0;
  font-weight: 400;
  font-size: ${(props) => props.theme.fontlg};
`;
const DescWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  color: darkgray;
  font-weight: 300;
`;
const Desc = styled.p``;
const Year = styled.p``;
const Button = styled(motion.p)`
  cursor: pointer;
  border: 1px solid #000;
  padding: 1rem 2rem;
  border-radius: 40px;
  text-align: center;
  transition: all 0.4s ease-in-out;
  margin: 0 auto;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const ProjectBoxWrapper = styled(motion.div)`
  position: relative;
  mix-blend-mode: difference;

  @media screen and (max-width: 820px) {
    display: none;
  }
`;
const ProjectTitle = styled.p`
  transition: opacity 0.35s cubic-bezier(0.77, 0, 0.175, 1);
  margin: 0 0.6rem 0.8rem 0;
  font-size: ${(props) => props.theme.fontxl};
  z-index: 1;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;
const ProjectBox = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  transition: all 0.35s ease-in-out;

  &:hover {
    color: #dedede;
  }
`;

const ProjectImgBoxWrapper = styled.div`
  position: relative;
  left: 0;
  width: 100%;
  height: 100%;
`;
const ProjectImgBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
`;
const ProjectImg = styled.div`
  position: absolute;
  width: 350px;
  height: 450px;
  pointer-events: none;
  opacity: ${({ active }) => (active ? "1" : "0")};
`;
