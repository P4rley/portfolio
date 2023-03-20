import styled from "styled-components";

const AboutSection = () => {
  return (
    <Container>
      <Wrapper>
        <Header>Building Digital Brands</Header>
        <Desc>Helping brands thrive in the digital world</Desc>
      </Wrapper>
    </Container>
  );
};

export default AboutSection;

const Container = styled.div`
  height: 70vh;
  padding: 0 10%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #000;

  @media screen and (min-width: 425px) {
    justify-content: flex-end;
    padding: 20% 10%;
  }
`;
const Wrapper = styled.div`
  color: #fff;
`;
const Header = styled.h1`
  font-size: ${(props) => props.theme.fontxl};
  font-weight: 400;

  @media screen and (min-width: 425px) {
    font-size: ${(props) => props.theme.fontxxl};
  }
`;
const Desc = styled.p`
  font-size: ${(props) => props.theme.fontxs};
  font-weight: 300;
  margin: 10px 0;
  @media screen and (min-width: 425px) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;
