import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section12({ backgroundImg, color, imagey, textColor }) {
  return (
    <Wrap
      bgImage={backgroundImg}
      checkImage={imagey}
      colory={color}
      textColor={textColor}
      id="team"
    >
      <Fade bottom>
        <ItemText>
          <h3>Meet the team</h3>
        </ItemText>
        <ImageArea>
          <ImageSection>
            <Image src="/images/team5.png" />
            <TextArea>
              <h2>Srikar</h2>
              <p>Co-Founder</p>
            </TextArea>
          </ImageSection>
          <ImageSection>
            <Image src="/images/team3.jpeg" />
            <TextArea>
              <h2>Sai</h2>
              <p>Co-Founder</p>
            </TextArea>
          </ImageSection>
          <ImageSection>
            <Image src="/images/team5.png" />
            <TextArea>
              <h2>Harsha</h2>
              <p>Community Manager</p>
            </TextArea>
          </ImageSection>
          <ImageSection>
            <Image src="/images/team3.jpeg" />
            <TextArea>
              <h2>Simon Pompan</h2>
              <p>Advisor</p>
            </TextArea>
          </ImageSection>
        </ImageArea>
      </Fade>
    </Wrap>
  );
}

export default Section12;

const Wrap = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.textColor};
  padding: 40px 80px;
  @media (max-width: 976px) {
  }
  @media (max-width: 400px) {
    justify-content: space-around;
    padding: 40px 20px;
  }
`;

const ItemText = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  h4 {
    max-width: 500px;
    padding: 0 20px;
  }

  h3 {
    font-size: 40px;
    margin: 0 0 20px 0;
    padding: 0;
    color: white;
    text-transform: uppercase;
    @media (max-width: 400px) {
      font-size: 20px;
      margin: 0px;
    }
  }
`;

const ImageSection = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 976px) {
    margin: 40px 0;
  }
  h2 {
    color: white;
    font-size: 28px;
    @media (max-width: 400px) {
      font-size: 15px;
    }
  }
  p {
    font-size: 20px;
    text-transform: uppercase;
    @media (max-width: 400px) {
      font-size: 14px;
    }
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: 240px;
  object-fit: cover;
  @media (max-width: 400px) {
    width: 200px;
    height: 200px;
  }
`;

const ImageArea = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  gap: 30px;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
  @media (max-width: 400px) {
    margin-top: 30px;
  }
`;

const TextArea = styled.div`
  bottom: -50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #c3cec3;
  padding: 20px;
  h2,
  p {
    margin: 0 0 10px 0;
  }
  @media (max-width: 400px) {
    align-items: center;
  }
`;
