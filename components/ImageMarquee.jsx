import Image from "next/image";
import Marquee from "react-fast-marquee";
import styled from "styled-components";

// Image
import img from "../public/home-image4.jpg";
import img2 from "../public/restaurant-image2.jpg";

const ImageMarquee = () => {
  return (
    <Container>
      <Wrapper>
        <Marquee
          gradient={false}
          direction="right"
          speed={30}
          pauseOnHover={true}
        >
          <BoxImage>
            <ImageWrapper>
              <Image src={img} layout="fill" objectFit="cover" alt="" />
            </ImageWrapper>
          </BoxImage>
          <BoxImage>
            <ImageWrapper>
              <Image src={img2} layout="fill" objectFit="cover" alt="" />
            </ImageWrapper>
          </BoxImage>
          <BoxImage>
            <ImageWrapper>
              <Image src={img} layout="fill" objectFit="cover" alt="" />
            </ImageWrapper>
          </BoxImage>
        </Marquee>

        <Marquee
          gradient={false}
          direction="right"
          speed={25}
          pauseOnHover={true}
        >
          <BoxImage>
            <ImageWrapper>
              <Image src={img} layout="fill" objectFit="cover" alt="" />
            </ImageWrapper>
          </BoxImage>
          <BoxImage>
            <ImageWrapper>
              <Image src={img2} layout="fill" objectFit="cover" alt="" />
            </ImageWrapper>
          </BoxImage>
          <BoxImage>
            <ImageWrapper>
              <Image src={img} layout="fill" objectFit="cover" alt="" />
            </ImageWrapper>
          </BoxImage>
        </Marquee>
      </Wrapper>
    </Container>
  );
};

export default ImageMarquee;

const Container = styled.div`
  padding: 10% 0;
`;
const Wrapper = styled.div``;
const BoxImage = styled.div`
  background-color: #dedede;
  width: 200px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;

  @media screen and (min-width: 425px) {
    width: 300px;
    height: 250px;
  }
`;
const ImageWrapper = styled.div`
  position: relative;
  width: 150px;
  height: 100px;

  @media screen and (min-width: 425px) {
    width: 220px;
    height: 170px;
  }
`;
