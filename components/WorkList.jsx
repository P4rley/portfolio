"use client";
import Image from "next/image";
import styled from "styled-components";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const WorkList = ({ img, title, year, slug }) => {
  const [mousePosition, setMousePosition] = useState({ x: 522, y: 313 });

  const mouseMove = (e) => {
    if (e.type === "mouseleave") {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    } else if (e.type === "mousemove") {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    } else {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    }
  };

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    },
  };

  return (
    <Wrapper
      href={`/work/${slug}`}
      onMouseLeave={mouseMove}
      onMouseEnter={mouseMove}
      onMouseMove={mouseMove}
    >
      <Cursor variants={variants} animate="default">
        See more
      </Cursor>

      <WorkImg>
        <Image
          src={img}
          layout="fill"
          objectFit="contain"
          alt=""
          priority
          sizes="100%"
        />
      </WorkImg>

      <TextWrapper>
        <Heading
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.4,
            duration: 1,
            ease: "easeOut",
          }}
        >
          {title}
        </Heading>
        <Desc
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.4,
            duration: 1,
            ease: "easeOut",
          }}
        >
          {year}
        </Desc>
      </TextWrapper>
    </Wrapper>
  );
};
export default WorkList;

const Wrapper = styled(Link)`
  width: 70%;
  height: 70%;
  background-color: #fff;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  cursor: none;
  padding: 20px;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const Cursor = styled(motion.div)`
  background-color: #000;
  color: #fff;
  border-radius: 50%;
  text-align: center;
  padding: 50px 30px;
  position: absolute;
  top: -30%;
  left: -30%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const WorkImg = styled(motion.div)`
  position: relative;
  width: 70%;
  height: 70%;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const TextWrapper = styled(motion.div)`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const Heading = styled(motion.h3)`
  font-weight: 300;
  font-size: ${(props) => props.theme.fontxl};

  @media screen and (max-width: 1024px) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;
const Desc = styled(motion.p)`
  font-weight: 300;
  font-size: ${(props) => props.theme.fontmd};
  @media screen and (max-width: 1024px) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;
