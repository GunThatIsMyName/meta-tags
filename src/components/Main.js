import React from "react";
import styled from "styled-components";
import { MainPreview, MetaData } from ".";
import { useAppContext } from "../context/AppContext";

function Main() {
  const {data}=useAppContext();

  return (
    <Wrapper>
      <MetaData data={data} />
      <MainPreview data={data}/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 60vh;
  display: flex;
  background: var(--color-white);
  border-radius: 10px;
  color: var(--color-grey);

  max-width: 1200px;
  margin: 0 2rem;

  .main__meta {
    flex-basis: 30%;
  }
  .main__preview {
    flex-basis: 70%;
  }

  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
`;

export default Main;
