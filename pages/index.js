import React from "react";
import styled from "styled-components";
import Head from "next/head";
import {
  Header,
  NewSection1,
  NewSection2,
  NewSection3,
  NewSection4,
  NewSection5,
  TeamCarousel,
  TeamGrid,
  RoadMapShiba,
} from "../components";

const Home = () => {
  return (
    <Container>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <Header />
      <NewSection1 />
      <NewSection2 />
      <NewSection3 />
      {/* <NewSection5 /> */}
      <RoadMapShiba />
      <TeamGrid />
      {/* <TeamCarousel /> */}
      <NewSection4 />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
  overflow-x: hidden;
  background-image: url("/images/main-bg.jpeg");
  background-attachment: local;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
`;
