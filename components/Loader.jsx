import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <Container
      initial={{
        y: 0,
        opacity: 1,
      }}
      animate={{
        y: "-100%",
        opacity: 1,
      }}
      transition={{
        duration: 2,
        delay: 2,
      }}
    >
      <Text
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        Make yourself at home
      </Text>
    </Container>
  );
};

export default Loader;

const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  touch-action: none;
  overflow: hidden;

  width: 100vw;
  height: 100vh;

  background-color: #000;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Text = styled(motion.h1)`
  color: #fff;
  font-weight: 300;
`;
