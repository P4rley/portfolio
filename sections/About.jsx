/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import Link from "next/link";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <Desc
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        Hi, I'm Hersa my passion for design, code & interaction positions me in
        a unique place in the web design world. Together we will erach the
        fullest possibility.
      </Desc>
      <Line
        initial={{ opacity: 0, height: 0 }}
        whileInView={{ opacity: 1, height: 80 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      />
      <Link href="/about">
        <Button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.4 }}
        >
          <span>More about me</span>
        </Button>
      </Link>
    </Container>
  );
};

export default About;

const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10%;
`;
const Desc = styled(motion.p)`
  font-size: ${(props) => props.theme.fontsm};
  text-align: center;
  font-weight: 300;

  @media screen and (min-width: 768px) {
    font-size: ${(props) => props.theme.fontlg};
    padding: 3rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: ${(props) => props.theme.fontlg};
    padding: 3rem 14rem;
  }
`;
const Line = styled(motion.div)`
  width: 3px;
  height: 80px;
  border-radius: 40px;
  border: none;
  outline: none;
  background-color: #000;
  margin: 2rem 0;
`;
const Button = styled(motion.button)`
  border: none;
  outline: none;
  background-color: #000;
  color: #fff;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  font-size: ${(props) => props.theme.fontlg};
  transition: all 0.4s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;
