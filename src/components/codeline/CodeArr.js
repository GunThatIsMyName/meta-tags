import React from "react";
import styled from "styled-components";

function CodeArr({ content, arr, arrType }) {

  return (
    <Code>
      <span className="code__tag">{`<meta`}</span>
      <span className="code__arr">{arrType === 1 ? "name" : "property"}=</span>
      {`"${arr}"`}
      <span className="code__arr code__content">content = </span>
      {`"${content ? content : "try your website"}"`}
      <span className="code__tag">{`>`}</span>
    </Code>
  );
}

const Code = styled.code`
  .code__arr {
    color: var(--color-code);
    margin-left: 4px;
  }
  .code__tag {
    font-size: 1.2rem;
    color: var(--color-code);
    font-family: var(--font-roboto);
    margin: 0 4px;
  }
`;

export default CodeArr;
