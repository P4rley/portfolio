"use client";
import styled from "styled-components";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";
import WorkList from "../../components/WorkList";
import img from "../../public/Artboard.svg";

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
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni omnis ut sunt? Ad quisquam dolor nam! Laboriosam dolorum rerum, architecto consequatur facere repellat natus perferendis harum laborum a? Ipsam numquam dolorum nobis expedita, laboriosam facilis officiis? Ipsum hic esse earum aperiam ex harum tempora cum eos. Deleniti expedita sint dicta delectus consectetur ullam atque debitis inventore quaerat voluptate sunt doloribus, porro id modi odio exercitationem dolorum sed recusandae est aliquam quibusdam tenetur tempore obcaecati! Aliquam aliquid est aut non numquam nam esse aspernatur ipsam veritatis, quod ea dolores. At id qui vel quos autem dolorum explicabo officiis deleniti est doloremque.",
  },
];

const page = () => {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <title>Work | Adwitya Hersa</title>
      <Wrapper>
        {data.map((el, i) => {
          return (
            <WorkBgContainer key={i}>
              <WorkList
                img={img}
                title={el.title}
                year={el.year}
                slug={el.slug}
              />
            </WorkBgContainer>
          );
        })}
        <WorkBgContainer2>
          <Footer />
        </WorkBgContainer2>
      </Wrapper>
    </Container>
  );
};
export default page;

const Container = styled(motion.div)`
  max-height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 768px) {
    scroll-snap-type: unset;
    max-height: unset;
    padding: 20% 0;
    min-height: 100vh;
    overflow-y: unset;
  }
`;
const Wrapper = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const WorkBgContainer = styled.div`
  position: relative;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 100px;
  @media screen and (max-width: 768px) {
    scroll-snap-align: unset;
    scroll-snap-stop: unset;
    height: 300px;
    width: 300px;
    margin: 2rem;
  }
`;

const WorkBgContainer2 = styled.div`
  position: relative;
  scroll-snap-align: center;
  scroll-snap-stop: always;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    scroll-snap-align: unset;
    scroll-snap-stop: unset;
    height: 300px;
    width: 100vw;
    margin-top: 200px;
  }
`;
