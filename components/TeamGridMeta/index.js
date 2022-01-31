import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function TeamGridMeta({ backgroundImg, color, imagey, textColor }) {
  return (
    <Wrap
      bgImage={backgroundImg}
      checkImage={imagey}
      colory={color}
      textColor={textColor}
      id="team"
    >
      <ItemText>
        <h3>Meet the team</h3>
      </ItemText>
      <ImageArea>
        <ImageSection>
          <Image src="/images/team5.png" />
          <TextArea>
            <p>Co-Founder</p>
            <h2>Srikar</h2>
          </TextArea>
        </ImageSection>
        <ImageSection>
          <Image src="/images/team3.jpeg" />
          <TextArea>
            <p>Co-Founder</p>
            <h2>Sai</h2>
          </TextArea>
        </ImageSection>
        <ImageSection>
          <Image src="/images/team5.png" />
          <TextArea>
            <p>Community Manager</p>
            <h2>Harsha</h2>
          </TextArea>
        </ImageSection>
        <ImageSection>
          <Image src="/images/team3.jpeg" />
          <TextArea>
            <p>Advisor</p>
            <h2>Simon Pompan</h2>
          </TextArea>
        </ImageSection>
        <ImageSection>
          <Image src="/images/team5.png" />
          <TextArea>
            <p>Director</p>
            <h2>Cameron Dallas</h2>
          </TextArea>
        </ImageSection>
        <ImageSection>
          <Image src="/images/team3.jpeg" />
          <TextArea>
            <p>Marketing Lead</p>
            <h2>Sonny Fazio</h2>
          </TextArea>
        </ImageSection>
        <ImageSection>
          <Image src="/images/team5.png" />
          <TextArea>
            <p>Content Lead</p>
            <h2>Dixon Wixted</h2>
          </TextArea>
        </ImageSection>
        <ImageSection>
          <Image src="/images/team5.png" />
          <TextArea>
            <p>Community Manager</p>
            <h2>Harsha Tambareni</h2>
          </TextArea>
        </ImageSection>
        <ImageSection>
          <Image src="/images/team3.jpeg" />
          <TextArea>
            <p>Artist</p>
            <h2>Firky</h2>
          </TextArea>
        </ImageSection>
        <ImageSection>
          <Image src="/images/team5.png" />
          <TextArea>
            <p>Blockchain Expert</p>
            <h2>Danish Manzoor</h2>
          </TextArea>
        </ImageSection>
      </ImageArea>
    </Wrap>
  );
}

export default TeamGridMeta;

const Wrap = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
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
  border: 1px solid rgba(136, 158, 168, 0.2);
  padding: 20px;

  @media (max-width: 976px) {
    margin: 40px 0;
  }
  h2 {
    color: white;
    font-size: 24px;
    @media (max-width: 400px) {
      font-size: 14px;
    }
  }
  p {
    font-size: 12px;
    text-transform: uppercase;
    @media (max-width: 400px) {
      font-size: 10px;
    }
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: 350px;
  object-fit: contain;
  //   @media (max-width: 400px) {
  //     width: 200px;
  //     height: 200px;
  //   }
`;

const ImageArea = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  width: 100%;
  margin-top: 60px;
  gap: 30px;
  @media (max-width: 1200px) {
    flex-direction: column;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    margin-top: 30px;
    grid-template-columns: repeat(1, 1fr);
  }
`;

const TextArea = styled.div`
  bottom: -50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #c3cec3;
  padding: 20px;
  h2,
  p {
    margin: 0 0 15px 0;
  }
  @media (max-width: 400px) {
    align-items: center;
  }
`;
