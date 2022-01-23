import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function RoadMap({ backgroundImg, color, imagey }) {
  return (
    <Wrap
      id="roadmap"
      bgImage={backgroundImg}
      checkImage={imagey}
      colory={color}
    >
      <Fade bottom>
        <ItemText>
          <h2 className="mainTitle"> Road Map </h2>
        </ItemText>
        <SectionWrapper>
          <StraightLine></StraightLine>
          <AllSections>
            <SingleSection>
              <h2>25%</h2>
              <span className="pointer"></span>
              <h4>
                <strong className="title">Monkeys are Born</strong>
                <span className="description">
                  The community always comes first. The goal with this project
                  is to provide as much value as possible so that you get the
                  greatest return on your investment. We will be announcing the
                  drop release date once we are fully satisfied with all parts
                  of the project. We want to make sure we provide as much as we
                  can to the community even before our release. Once we are
                  satisfied, the beautiful 3D Metaversity Monkeys will come to
                  life.
                </span>
              </h4>
            </SingleSection>
            <SingleSection>
              <h2>50%</h2>
              <span className="pointer"></span>
              <h4>
                <strong className="title">Metaverse University</strong>
                <span className="description">
                  We are committed to helping the community to the fullest. We
                  will be bringing together a community of hustlers through
                  various media. This will be offered exclusively to The
                  Metaverse University students where each NFT holder will gain
                  full access to private seminars, events, courses, mentorship
                  and even university parties!
                </span>
              </h4>
            </SingleSection>
            <SingleSection>
              <h2>75%</h2>
              <span className="pointer"></span>
              <h4>
                <strong className="title">Monkey Madness</strong>
                <span className="description">
                  Our goal is to show that an investment in a monkey will be
                  extremely profitable for you even in the long term. As we
                  continue to expand, we plan on hosting events across the world
                  and doing promotions with massive celebrities. You will be
                  part of an exclusive club (or should we say University).
                  Metaversity Merch and Private Party: We will release our first
                  merch collection of the Metaversity Monkeys that will be
                  available only for the holder. To celebrate the achievement of
                  our goals, we are going to organize a private party for our
                  holders, where the community chooses the location.
                </span>
              </h4>
            </SingleSection>
            <SingleSection>
              <h2>100%</h2>
              <span className="pointer"></span>
              <h4>
                <strong className="title">MetaverCity</strong>
                <span className="description">
                  We have already purchased a small plot of land in Decentraland
                  for our community. As our community continues to grow, we will
                  expand our virtual real estate in various metaverses and build
                  the MetaverCity. Eventually we will begin hosting events in
                  the Metaverse.
                </span>
              </h4>
            </SingleSection>
          </AllSections>
        </SectionWrapper>
      </Fade>
    </Wrap>
  );
}

export default RoadMap;

const Wrap = styled.div`
  min-height: 200vh;
  position: relative;
`;

const ItemText = styled.div`
  color: white;
  text-align: center;
  padding: 120px 0 0 0;
  h2 {
    font-size: 60px;
    font-weight: 900;
    margin-bottom: 50px;
    @media (max-width: 960px) {
      font-size: 42px;
    }
  }
`;
const SectionWrapper = styled.div`
  position: relative;
  margin-block-start: 138px;
  -webkit-padding-before: 60px;
  padding-block-start: 60px;
  margin: 0 auto;
  max-width: 930px;
  color: white;
`;
const StraightLine = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  width: 5px;
  height: 100%;
  background: #f57305;
  @media (max-width: 960px) {
    display: none;
  }
`;
const AllSections = styled.div``;
const SingleSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  -webkit-margin-after: 120px;
  margin-block-end: 120px;
  h2 {
    display: block;
    width: calc(50% - 100px);
    flex-shrink: 0;
    text-align: right;
    font-size: 52px;
  }
  span.pointer {
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    display: block;
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 100%;
    flex-shrink: 0;
    box-shadow: 0 0 9px 9px rgb(0 0 0 / 70%);
  }
  h4 {
    max-width: 412px;
    font-size: 18px;
    line-height: 25px;
    -webkit-margin-start: auto;
    margin-inline-start: auto;
    .title {
      display: block;
      font-size: 20px;
      font-weight: 900;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
  }
  @media (max-width: 960px) {
    flex-direction: column;
    padding: 0 40px;
    align-items: start;
    h2 {
      text-align: left;
      margin-block-start: 0;
      max-width: 100%;
      margin-bottom: 0;
    }
    span.pointer {
      transform: translateX(0) translateY(15px);
      left: 10px;
    }
    h4 {
      -webkit-margin-start: unset;
      margin-inline-start: unset;
    }
  }
`;
