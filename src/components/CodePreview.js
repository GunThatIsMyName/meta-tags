import React from "react";
import styled from "styled-components";

function CodePreview({ first, second, third }) {
  return (
    <PreviewWrapper>
      <h1 className="preview__title">{first}</h1>
      <h3 className="preview__subtitle">{second} ▾</h3>
      <p>{third}</p>
    </PreviewWrapper>
  );
}

const PreviewWrapper = styled.div`
    margin:1rem 2rem;
  .preview__title {
    color: var(--goo-blue);
    font-size: 18px;
    font-family:var(--font-nanum);
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  .preview__subtitle {
    color: var(--goo-green);
  }
  p {
    color: var(--goo-grey);
  }

  @media screen and (max-width:1024px){
        margin:1rem;
    }
`;

export default CodePreview;
