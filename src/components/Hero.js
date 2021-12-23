import React from "react";
import styled from "styled-components";
import Info from "./Info";
import Search from "./Search";



const Hero = () => {
  return (
    <Wrapper>
      <header className="hero__header">
        <h1 className="hero__title">Hello Meta</h1>
        <p className="hero__subtitle">
          Meta Tags is a tool to debug and generate meta tag code for any
          website. With Meta Tags you can edit and experiment with your content
          then preview how your webpage will look on Google, Facebook, Twitter
          and more!
        </p>
      </header>

      <Search hero={true} />

      <Info />

    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width: var(--max-width);
  min-height:100vh;
  margin: auto;
`;

export default Hero;
