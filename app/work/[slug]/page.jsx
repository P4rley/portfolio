"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Footer from "../../../components/Footer";
import img from "../../../public/laekwon-oliver-oYbuLwFpxqk-unsplash.jpg";
import img2 from "../../../public/iphone-12-pro-max--graphite.svg";
import img3 from "../../../public/iphone-12-pro-max--graphite2.svg";
import img4 from "../../../public/iphone-12-pro-max--graphite3.svg";
import { motion } from "framer-motion";
import Scroll from "../../../pages/Scrollbar";

const data = [
  {
    title: "Hacktiv Times",
    year: 2022,
    slug: "Hacktiv Times".toLowerCase().replace(/[^\w-]+/g, "-"),
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni omnis ut sunt? Ad quisquam dolor nam! Laboriosam dolorum rerum, architecto consequatur facere repellat natus perferendis harum laborum a? Ipsam numquam dolorum nobis expedita, laboriosam facilis officiis? Ipsum hic esse earum aperiam ex harum tempora cum eos. Deleniti expedita sint dicta delectus consectetur ullam atque debitis inventore quaerat voluptate sunt doloribus, porro id modi odio exercitationem dolorum sed recusandae est aliquam quibusdam tenetur tempore obcaecati! Aliquam aliquid est aut non numquam nam esse aspernatur ipsam veritatis, quod ea dolores. At id qui vel quos autem dolorum explicabo officiis deleniti est doloremque.",
  },
  {
    title: "Hackpark",
    year: 2022,
    slug: "Hackpark".toLowerCase().replace(/[^\w-]+/g, "-"),
    motto: "Secure your parking spot",
    services: "Booking parking app",
    description:
      "We offer you solutions for your daily needs and provide a sense of security for your vehicle and we give you space unlike her.",
  },
];

const page = ({ params }) => {
  const { slug } = params;
  const [work, setWork] = useState({});

  useEffect(() => {
    const res = data.find((el) => el.slug === slug);

    setWork(res);
  }, []);

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: {
      opacity: 0,
      y: 50,
    },
  };

  return (
    <Scroll>
      <Container
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Background>
          <Image src={img} layout="fill" objectFit="cover" alt="" />
          <Darkbg></Darkbg>
        </Background>
        <Wrapper
          initial="hidden"
          whileInView="visible"
          variants={variants}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <HeaderWrapper>
            <Header>{work.title}</Header>
            <Motto>{work.motto}</Motto>
            <Services>{work.services}</Services>
          </HeaderWrapper>
          <Description>{work.description}</Description>
          <AppDescWrapper>
            <AppDesc>
              <AppDescTitle>Services</AppDescTitle>
              <AppDescText>Mobile App</AppDescText>
              <AppDescText>UI/UX</AppDescText>
            </AppDesc>
            <AppDesc>
              <AppDescTitle>Location</AppDescTitle>
              <AppDescText>Indonesia</AppDescText>
            </AppDesc>
            <AppDesc>
              <AppDescTitle>Year</AppDescTitle>
              <AppDescText>{work.year}</AppDescText>
            </AppDesc>
          </AppDescWrapper>
        </Wrapper>
        <ProjectImgWrapper>
          <Img
            src={img2}
            alt="Demo Picture"
            width={"100%"}
            height={"100%"}
            objectFit="contain"
          />
          <Img
            src={img3}
            alt="Demo Picture"
            width={"100%"}
            height={"100%"}
            objectFit="contain"
          />
          <Img
            src={img4}
            alt="Demo Picture"
            width={"100%"}
            height={"100%"}
            objectFit="contain"
          />
        </ProjectImgWrapper>
        <Footer />
      </Container>
    </Scroll>
  );
};
export default page;

const Container = styled(motion.section)``;

const Background = styled(motion.div)`
  position: absolute;
  height: 130vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: -4;
`;
const Wrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 130vh;
  padding-top: 10%;
  padding-right: 10%;
  padding-left: 10%;
  padding-bottom: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    padding-top: 20%;
    padding-right: 5%;
    padding-left: 5%;
  }
`;

const Darkbg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ProjectImgWrapper = styled.div`
  margin-top: 20vh;
  padding: 0 10%;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30vh;
  }
`;

const Img = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  margin: 0 2rem;
  @media screen and (max-width: 768px) {
    width: 50%;
    height: 50%;
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 460px) {
    width: 60%;
    height: 60%;
    margin-bottom: 2rem;
  }
`;

const HeaderWrapper = styled.div`
  @media screen and (max-width: 768px) {
    padding-top: 12rem;
  }
`;

const Header = styled.h1`
  color: #fff;
  font-weight: bold;
  font-size: 100px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  letter-spacing: 1.2px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`;

const Motto = styled.p`
  color: #b7c4cf;
  font-size: ${(props) => props.theme.fontmd};
  margin: 10px 0;
  letter-spacing: 1.1px;
`;
const Services = styled.p`
  color: #fff;
  font-size: 10px;
  letter-spacing: 1.2px;
`;

const Description = styled.p`
  color: #fff;
  font-weight: 500;
  font-size: 30px;
  max-width: 500px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const AppDescWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;
const AppDesc = styled.div``;
const AppDescTitle = styled.h3`
  color: #fff;
  font-weight: 400;
`;
const AppDescText = styled.p`
  color: #eef1ff;
  margin: 10px 0;
  font-weight: 300;
`;
