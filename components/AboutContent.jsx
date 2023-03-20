/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";

const AboutContent = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>I can help you with...</Heading>

        <BoxWrapper>
          <Box>
            <Number>01</Number>
            <Line />
            <BoxDescWrapper>
              <Title>Design</Title>
              <Desc>
                With a solid track record in designing websites and apps, I
                deliver strong and user friendly digital designs. Solid company
                branding is the foundation of any sucsecful website.
              </Desc>
            </BoxDescWrapper>
          </Box>

          <Box>
            <Number>02</Number>
            <Line />
            <BoxDescWrapper>
              <Title>Development</Title>
              <Desc>
                I build scalable websites from scratch that fit seamlessly with
                design. My focus is on micro animations, transitions, and
                interaction.
              </Desc>
            </BoxDescWrapper>
          </Box>

          <Box>
            <Number>03</Number>
            <Line />
            <BoxDescWrapper>
              <Title>The full package</Title>
              <Desc>
                A complete website from concept to implementation, that's what
                makes me stand out. My great sense for design and my development
                skills enable me to create kick-ass projects.
              </Desc>
            </BoxDescWrapper>
          </Box>
        </BoxWrapper>

        <Quote>
          "Everything you can imagine is real" <span>- Picaso -</span>
        </Quote>
      </Wrapper>
    </Container>
  );
};

export default AboutContent;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 10%;
`;
const Wrapper = styled.div``;
const Heading = styled.h3`
  font-size: ${(props) => props.theme.fontxl};
  font-weight: 400;
`;
const BoxWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 2rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
  }

  @media screen and (min-width: 1024px) {
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
const Box = styled.div`
  margin: 1rem 0;

  @media screen and (min-width: 768px) {
    width: 250px;
    margin: 2rem 1rem;
  }

  @media screen and (min-width: 1024px) {
    width: 350px;
    margin: 2rem 1rem 2rem 0;
  }
`;
const Number = styled.span``;
const Line = styled.hr`
  width: 100%;
  height: 2px;
  background-color: #5f5f5f;
  margin: 1rem 0;
`;
const BoxDescWrapper = styled.div``;
const Title = styled.h4`
  margin-bottom: 1rem;
  font-weight: 400;
  font-size: ${(props) => props.theme.fontmd};

  @media screen and (min-width: 1024px) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;
const Desc = styled.p`
  font-weight: 300;
  font-size: ${(props) => props.theme.fontxs};

  @media screen and (min-width: 1024px) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;
const Quote = styled.h1`
  height: 30vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: ${(props) => props.theme.fontlg};
  span {
    margin: 1rem 0;
  }

  @media screen and (min-width: 425px) {
    font-size: ${(props) => props.theme.fontxl};
  }

  @media screen and (min-width: 768px) {
    height: 50vh;
    font-size: ${(props) => props.theme.fontxl};
  }
`;
