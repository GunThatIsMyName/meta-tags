import React from "react";
import styled from "styled-components";
import { Header, Info, Main, Search } from "./components";

const App = () => {
  return (
    <Wrapper>
      <Header />

      <Search />

      <Main />

      <Info />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width: var(--max-width);
  min-height: calc(100vh - 8rem);
  margin: 4rem auto;
`;

export default App;
