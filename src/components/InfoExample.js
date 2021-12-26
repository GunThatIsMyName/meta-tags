import React from "react";
import styled from "styled-components";
import { useAppContext } from "../context/AppContext";
import CodeExample from "./CodeExample";
import GooglePreview from "./preview/GooglePreview";

function InfoExample() {
  const { data:{title,description,domain}} = useAppContext();

  return (
    <InfoWrapper>
      <h1 className="title">Example</h1>
      <CodeExample title={title} description={description} />
      <GooglePreview title={title} domain={domain} description={description} />
    </InfoWrapper>
  );
}

const InfoWrapper = styled.article`
  background-color: var(--color-white);
  width: 1000px;
  margin: 2rem auto;
  padding: 1rem;
  border: 2px solid var(--color-black);
  border-radius: 3px;

  .title{
    color:var(--color-black);
    font-size:1.4rem;
    margin-bottom:10px;
  }
  @media screen and (max-width: 1024px) {
    width: 90%;
  }
`;

export default InfoExample;
