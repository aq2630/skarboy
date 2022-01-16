import React from "react";
import styled from "styled-components";
import Head from "next/head";
import {
  NewSection1,
  NewSection2,
  NewSection3,
  NewSection4,
  TeamCarousel,
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
      <NewSection1 />
      <NewSection2 />
      <NewSection3 />
      <NewSection4 />
      <TeamCarousel />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
  overflow-x: hidden;
`;
