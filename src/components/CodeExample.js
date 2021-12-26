import React from "react";
import styled from "styled-components";
import CodeArr from "./codeline/CodeArr";
import CodeTerm from "./codeline/CodeTerm";

function CodeExample({ title, description }) {
  return (
    <ExampleWrapper className="code__examples">
      <div className="code__example">
        <pre className="code__line">
          <CodeTerm tagStart={"<title>"} child={title} tagEnd={"</title>"} />
          <br />
          <CodeArr arrType={1} arr={"title"} content={title} />
          <br />
          <CodeArr arrType={1} arr={"description"} content={description} />
        </pre>
      </div>
      <div className="info__example__preview"></div>
    </ExampleWrapper>
  );
}

const ExampleWrapper = styled.div`
  color: var(--color-black);
  background-color: #ebf1fa;
  margin: 0 2rem;
  padding: 1rem;
  border-radius: 10px;
  overflow-x: scroll;
  white-space: pre;
  .code-tag {
    font-size: 1.1rem;
    letter-spacing: 2px;
    color: #0048ab;
    font-family: var(--font-nanum);
  }
  .code-arr {
    color: #0048ab;
  }
  @media screen and (max-width: 1024px) {
    margin: 1rem;
  }
`;

export default CodeExample;
