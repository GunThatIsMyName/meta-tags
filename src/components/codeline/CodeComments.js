import React from "react";
import styled from "styled-components";

function CodeComments({ content }) {
  return <Comments>{content}</Comments>;
}

const Comments = styled.code`
  color: #708090;
`;

export default CodeComments;
