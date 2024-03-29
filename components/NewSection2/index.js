import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function NewSection2({
  title,
  description,
  backgroundImg,
  color,
  paragraph,
  paragraph2,
}) {
  return (
    <Wrap id="about-us" bgImage={backgroundImg} colory={color}>
      <Container>
        <TextImage>
          <h1>
            ABOUT <span>US</span>
          </h1>
          <h3>The Metaverse Monkey Takeover.</h3>
          <p>
            In a world dominated by big, hairy apes, the cute little monkeys
            were nowhere to be seen.
            <br />
            <br />
            After countless centuries, the monkeys had decided to make a
            comeback to the world.
            <br />
            <br />
            Enter: The 3-D Metaversity Monkeys.
            <br />
            <br />
            These monkeys are not only fully equipped to survive in the
            Metaverse, but they are ready to take on any challenge they face.
            <br />
            <br />
            With their child-like faces and cute little expressions, the monkeys
            are ready to take on the world and prove themselves worthy of
            standing amongst the apes.
            <br />
            <br />
            The monkeys are perfect characters in the metaverse. They are very
            appealing to look at and are also quick to move and natural in their
            abilities. They also play and feel very much similar to an agile
            human being.
            <br />
            <br />
            Though the monkeys may be smaller than their ape counterparts, they
            are by no means any less powerful. Equipped with many
            characteristics and talents, these monkeys use their quick wits and
            trickery to their advantage.
            <br />
            <br />
            Although a king is the leader of the kingdom, it is the councilor
            that makes all the decisions and ensures the will of the citizenry
            is represented. Though apes may seem like the kings, it is the
            metaversity monkeys who are the councilors that stand for the
            people.
          </p>
        </TextImage>
        <SideImage>
          <Fade right>
            <img src="/images/newMonkey2.jpeg" />
          </Fade>
        </SideImage>
      </Container>
    </Wrap>
  );
}

export default NewSection2;

const Wrap = styled.div`
  background-size: cover;
  background-position: 50% 11%;
  background-repeat: no-repeat;
  display: flex;
  // background-image: url("/images/bg-about.jpeg");
  position: relative;
  padding: 40px 0;
  @media (min-width: 960px) {
    min-height: 100vh;
  }
`;

const Container = styled.div`
  width: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 1100px) {
    flex-direction: column-reverse;
    gap: 30px;
  }
`;

const TextImage = styled.div`
  color: white;
  width: 50%;
  h1 {
    font-size: 65px;
    margin: 0 0 20px 0;
    padding: 0;
    letter-spacing: 10px;
    font-weight: bold;
    span {
      color: #3a8bae;
    }
  }
  h3 {
    font-size: 32px;
    margin: 0 0 20px 0;
    padding: 0;
    line-height: 35px;
  }
  p {
    font-size: 18px;
  }
  @media (max-width: 1100px) {
    width: 90%;
  }
`;

const SideImage = styled.div`
  width: 50%;
  transform: scaleX(-1);
  img {
    width: 100%;
  }
  @media (max-width: 1100px) {
    width: 400px;
    height: 400px;
  }
`;
