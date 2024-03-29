import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import * as styles from "./NewSection5.module.css";

function NewSection5({
  title,
  description,
  backgroundImg,
  color,
  paragraph,
  paragraph2,
}) {
  return (
    <Wrap id="roadmap" bgImage={backgroundImg} colory={color}>
      <TextImage>
        <h1>RoadMap</h1>
        <CompleteMap>
          <div className={styles.lineUpContentCircle}>
            <div className={styles.lineUpContentCircleInner}></div>
          </div>
          <DetailsOnly>
            <h2>01</h2>
            <h3>Monkeys are Born</h3>
            <p>
              The community always comes first. The goal with this project is to
              provide as much value as possible so that you get the greatest
              return on your investment. We will be announcing the drop release
              date once we are fully satisfied with all parts of the project. We
              want to make sure we provide as much as we can to the community
              even before our release. Once we are satisfied, the beautiful 3D
              Metaversity Monkeys will come to life.
            </p>
          </DetailsOnly>
        </CompleteMap>
        <CompleteMap>
          <div className={styles.lineUpContentCircle}>
            <div className={styles.lineUpContentCircleInner}></div>
          </div>
          <DetailsOnly>
            <h2>02</h2>
            <h3>Metaverse University</h3>
            <p>
              We are committed to helping the community to the fullest. We will
              be bringing together a community of hustlers through various
              media. This will be offered exclusively to The Metaverse
              University students where each NFT holder will gain full access to
              private seminars, events, courses, mentorship and even university
              parties!
            </p>
          </DetailsOnly>
        </CompleteMap>
        <CompleteMap>
          <div className={styles.lineUpContentCircle}>
            <div className={styles.lineUpContentCircleInner}></div>
          </div>
          <DetailsOnly>
            <h2>03</h2>
            <h3>Monkey Madness</h3>
            <p>
              Our goal is to show that an investment in a monkey will be
              extremely profitable for you even in the long term. As we continue
              to expand, we plan on hosting events across the world and doing
              promotions with massive celebrities. You will be part of an
              exclusive club (or should we say University).
            </p>
          </DetailsOnly>
        </CompleteMap>
        <CompleteMap>
          <div className={styles.lineUpContentCircle}>
            <div className={styles.lineUpContentCircleInner}></div>
          </div>
          <DetailsOnly>
            <h2>04</h2>
            <h3>Metaversity Merch and Private Party</h3>
            <p>
              We will release our first merch collection of the Metaversity
              Monkeys that will be available only for the holder. To celebrate
              the achievement of our goals, we are going to organize a private
              party for our holders, where the community chooses the location.
            </p>
          </DetailsOnly>
        </CompleteMap>
        <CompleteMap>
          <div className={styles.lineUpContentCircle}>
            <div className={styles.lineUpContentCircleInner}></div>
          </div>
          <DetailsOnly>
            <h2>05</h2>
            <h3>MetaverCity</h3>
            <p>
              We have already purchased a small plot of land in Decentraland for
              our community. As our community continues to grow, we will expand
              our virtual real estate in various metaverses and build the
              MetaverCity. Eventually we will begin hosting events in the
              Metaverse.
            </p>
          </DetailsOnly>
        </CompleteMap>
      </TextImage>
    </Wrap>
  );
}

export default NewSection5;

const Wrap = styled.div`
  width: 100vw;
  background-size: 100%;
  // background-position: 50% 22%;
  // background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  // background-image: url("/images/roadmap-bg-3.png");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding: 40px 0;
  @media (min-width: 960px) {
    min-height: 100vh;
  }
`;

const TextImage = styled.div`
  margin: auto 0;
  color: white;
  width: 70vw;
  h1 {
    font-size: 48px;
    margin: 0;
    padding: 0;
    text-align: center;
    text-transform: uppercase;
    @media (min-width: 960px) {
      font-size: 65px;
    }
  }
  h2 {
    color: #3a8bae;
    font-size: 60px;
    margin: 0;
    padding: 0;
  }
  h3 {
    font-size: 36px;
    margin: 0;
    padding: 0;
    @media (min-width: 960px) {
      font-size: 50px;
    }
  }
  p {
    font-size: 18px;
    line-height: 1.7;
  }
`;

const CompleteMap = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`;
const DetailsOnly = styled.div`
  width: calc(100% - 54px);
`;
