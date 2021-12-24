import React from "react";
import styled from "styled-components";
import { useAppContext } from "../context/AppContext";
import CodeExample from "./CodeExample";
import GooglePreview from "./GooglePreview";

function InfoExample() {
  const { first, second, third } = useAppContext();

  return (
    <InfoWrapper>
      <CodeExample first={first} third={third} />
      <GooglePreview first={first} second={second} third={third} />
    </InfoWrapper>
  );
}

const InfoWrapper = styled.article`
  background-color: var(--color-white);
  width: 1000px;
  margin: auto;
  padding: 1rem;
  border: 2px solid var(--color-black);
  border-radius: 3px;

  @media screen and (max-width: 1024px) {
    width: 90%;
  }
`;

export default InfoExample;
