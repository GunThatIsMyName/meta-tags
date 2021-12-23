import React from "react";
import styled from "styled-components";
import Info from "./Info";
import Main from "./Main";
import Search from "./Search";



const Hero = () => {
  return (
    <Wrapper>
      <header className="hero__header">
        <h1 className="hero__title">What is Meta</h1>
        <p className="hero__subtitle">
          Meta Tags is a tool to debug and generate meta tag code for any
          website. 
        </p>
      </header>

      <Search hero={true} />

      <Main />

      <Info />

    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width: var(--max-width);
  min-height:calc(100vh - 8rem);
  margin: 4rem auto;
  .hero__header{
    margin-bottom:2rem;
    .hero__title{
      font-size:3rem;
      color:var(--color-yellow);
      font-family: var(--font-roboto);
      text-align:center;
    }
    .hero__subtitle{
      color:var(--color-lightgrey);
      text-align:center;
    }
  }
`;

export default Hero;
