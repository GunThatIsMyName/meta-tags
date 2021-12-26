import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Wrapper className="hero__header">
      <h1 className="hero__title">What is Meta</h1>
      <p className="hero__subtitle">
        Meta Tags is a tool to debug and generate meta tag code for any website.
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  margin-bottom: 2rem;
  .hero__title {
    font-size: 3rem;
    color: var(--color-yellow);
    font-family: var(--font-roboto);
    text-align: center;
  }
  .hero__subtitle {
    color: var(--color-lightgrey);
    text-align: center;
  }
`;

export default Header;
