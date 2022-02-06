import React, { useRef } from "react";
import styled from "styled-components";
import { useOnScreen } from "../../utils/dom";
import Fade from "react-reveal/Fade";

function RoadMap({ backgroundImg, color, imagey }) {
  const singleSection1 = useRef(null);
  const singleSection2 = useRef(null);
  const singleSection3 = useRef(null);
  const singleSection4 = useRef(null);
  const singleSection5 = useRef(null);
  const section1Visible = useOnScreen(singleSection1);
  const section2Visible = useOnScreen(singleSection2);
  const section3Visible = useOnScreen(singleSection3);
  const section4Visible = useOnScreen(singleSection4);
  const section5Visible = useOnScreen(singleSection5);

  console.log(section1Visible);
  return (
    <Wrap
      id="roadmap"
      bgImage={backgroundImg}
      checkImage={imagey}
      colory={color}
    >
      <ItemText>
        <h2 className="mainTitle">ROADMAP</h2>
      </ItemText>
      <SectionWrapper>
        <StraightLine></StraightLine>
        <AllSections>
          <SingleSection isVisible={section1Visible} ref={singleSection1}>
            <h2>20%</h2>
            <span className="pointer"></span>
            <h4>
              <strong className="title">Genesis: Monkeys are Born</strong>
              <span className="description">
                The monkeys are spawned through the form of 9876 3D Metaversity
                Monkey NFTs. They are equipped with several unique traits that
                give them an appealing look. We will be announcing the drop
                release date once we are fully satisfied with all parts of the
                project. We want to make sure we provide as much as we can to
                the community even before our release. The community always
                comes first. The goal with this project is to provide as much
                value as possible so that you get the greatest return on your
                investment. Once we are fully satisfied, 9876 3D Metaversity
                Monkeys will come to life. The monkeys will be the very first
                class to enroll in The Metaverse University.
                <br />
                When your unique Metaversity Monkey is released, you will be
                assigned one of several classes - you may even be assigned
                multiple. Each class you’re assigned to will provide you with
                several perks related to your subject.
              </span>
            </h4>
          </SingleSection>
          <SingleSection isVisible={section2Visible} ref={singleSection2}>
            <h2>40%</h2>
            <span className="pointer"></span>
            <h4>
              <strong className="title">Phase I: Metaverse University</strong>
              <span className="description">
                Once all monkeys are claimed, that’s when they will first step
                foot into their new University: The Metaversity. This is where
                all monkeys will get a chance to make friends and build
                connections. Once they have settled down, their classes will
                begin for the semester.
                <br />
                Your unique Metaversity Monkey will grant you access to
                exclusive courses based on the class trait(s) you are assigned.
                The web3 enabled Metaversity website will use your NFT ownership
                to unlock access to these courses. All Metaversity Monkey
                holders will also gain access to several exclusive events that
                will be revealed in the future!
              </span>
            </h4>
          </SingleSection>
          <SingleSection isVisible={section3Visible} ref={singleSection3}>
            <h2>60%</h2>
            <span className="pointer"></span>
            <h4>
              <strong className="title">Phase II: Monkey Mayhem</strong>
              <span className="description">
                An investment in a Metaversity Monkey will be extremely
                profitable for you even in the long term. We plan on hosting
                events across the world and doing promotions with massive
                celebrities. You will be part of an exclusive club (or should we
                say University). We will soon release our first merch collection
                for The Metaversity that will be free for monkey holders with
                the merch trait. As we continue to expand, we plan to host many
                more events around the world and lots of virtual events as well.
              </span>
            </h4>
          </SingleSection>
          <SingleSection isVisible={section4Visible} ref={singleSection4}>
            <h2>80%</h2>
            <span className="pointer"></span>
            <h4>
              <strong className="title">Phase III: Monkey business</strong>
              <span className="description">
                As The Metaversity gains a lot of popularity, new users will
                want to take part of the project and own a Metaversity Monkey.
                However, not everyone will be able to afford one. Therefore, we
                will be creating a staking system where Monkey holders can stake
                their NFT and allow other users to borrow access to our side
                hustle courses and exclusive benefits. They will rent a
                Metaversity Monkey with our $MVST token and pay for the time
                that it is rented. This rent will be pooled together and
                redistributed amongst the staked monkey owners, allowing them to
                earn passive income.
              </span>
            </h4>
          </SingleSection>
          <SingleSection isVisible={section5Visible} ref={singleSection5}>
            <h2>100%</h2>
            <span className="pointer"></span>
            <h4>
              <strong className="title">Phase IV: MetaverCity</strong>
              <span className="description">
                We have already purchased a plot of land in Decentraland to
                build the first Metaversity campus. As our community continues
                to grow, we will expand our virtual real estate in various
                metaverse realms and build the MetaverCity. Eventually we will
                begin hosting events in the Metaverse. Several campuses will
                exist across the Metaverse as we grow into an international
                powerhouse in the field of side hustle education.
              </span>
            </h4>
          </SingleSection>
        </AllSections>
      </SectionWrapper>
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
  padding: 40px 0 0 0;
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
  background: #eb75f2;
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
  ${({ isVisible }) => (isVisible ? "opacity: 1;" : "opacity: 0.2;")}
  transition: opacity 0.5s ease-in-out;
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
    background: #36a2aa;
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
    span.description {
      font-size: 16px;
      font-weight: 400;
    }
  }
  @media (min-width: 960px) {
    &:nth-child(even) {
      flex-direction: row-reverse;

      h4 {
        -webkit-margin-start: 0;
        margin-inline-start: 0;
        -webkit-margin-end: auto;
        margin-inline-end: auto;
      }
      h2 {
        text-align: left;
      }
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
