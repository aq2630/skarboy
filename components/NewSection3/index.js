import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function NewSection3({
  title,
  description,
  backgroundImg,
  color,
  paragraph,
  paragraph2,
}) {
  return (
    <Wrap id="membership" bgImage={backgroundImg} colory={color}>
      <Fade bottom>
        <TextImage>
          <h1>
            Become a Part of the <span>Community</span>
          </h1>
          <h3>
            The Metaversity: A community of like-minded side hustlers who want
            to break the 9-5 cycle.
          </h3>
          <p>
            This project was curated and driven solely off of a
            “community-first” mindset. To help expand our network and
            incentivize access, a concept of creating a high-utility project
            where users indulge inside the MetaverCity was born.
            <br />
            <br />
            The upbringing of the Metaversity Monkeys has brought together
            experienced entrepreneurs, renowned celebrities, marketing geniuses,
            and white-glove 3-D artists at one table.
            <br />
            <br />
            In time, you will be able to snag one of these monkeys for your own
            collection. A unique 1 of 9,876 monkeys can be yours.
            <br />
            <br />
            Joining the crew of early supporters will yield lavish returns.
            <br />
            <br />
            Through meticulously designed 3D artwork, our artists have perfected
            the traits and look of the New World Monkeys. In the Metaverse,
            these monkeys will be portrayed as the most alpha in their class.
            <br />
            <br />
            With the introduction of these monkeys to the Metaverse, the whole
            digital jungle will be changed forever.
            <br />
            <br />
            For now, the team is working day and night to get this project to
            our full satisfaction.
          </p>
        </TextImage>
      </Fade>
    </Wrap>
  );
}

export default NewSection3;

const Wrap = styled.div`
  background-size: cover;
  background-position: 50% 0;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/images/bg-banner-v12.jpg");
  position: relative;
  padding: 40px 0;
  @media (min-width: 960px) {
    min-height: 100vh;
  }
`;

const TextImage = styled.div`
  margin: auto 0;
  color: white;
  width: 80vw;
  h1 {
    font-size: 48px;
    margin: 0;
    padding: 0;
    text-align: center;
    text-transform: uppercase;
    span {
      color: #3a8bae;
    }
    @media (min-width: 960px) {
      font-size: 65px;
    }
  }
  h3 {
    font-size: 28px;
    margin: 20px;
    padding: 0;
    text-align: center;
    @media (min-width: 960px) {
      margin: 50px;
    }
  }
  p {
    font-size: 18px;
    text-align: center;
    line-height: 1.7;
  }
`;
