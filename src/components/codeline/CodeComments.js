import React from "react";
import styled from "styled-components";

function CodeComments({ content }) {
  return <Comments>{content}</Comments>;
}

const Comments = styled.code`
  color: var(--color-comments);
`;

export default CodeComments;
