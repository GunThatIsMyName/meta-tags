import React from "react";
import styled from "styled-components";

function CodeTerm({child }) {
  return (
    <CodeLine>
      <span className="code__tag">{`<title>`}</span>
      {!child && "try your website"}
      {child && child}
      <span className="code__tag">{`</title>`}</span>
    </CodeLine>
  );
}

const CodeLine = styled.code`
  font-size: 1.2rem;
  .code__tag {
    color: var(--color-code);
    font-family: var(--font-roboto);
    margin: 0 4px;
  }
`;

export default CodeTerm;
