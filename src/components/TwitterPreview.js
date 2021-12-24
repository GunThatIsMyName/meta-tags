import React from "react";
import styled from "styled-components";

function TwitterPreview({ first, second, third, hello }) {
  return (
    <Wrapper hello={hello}>
      <div className="preview__img"></div>
      <div className="preview__info">
        <h1 className="preview__subtitle">{second}</h1>
        <h1 className="third">{third}</h1>
        <h1 className="preview__title">{first}</h1>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
cursor: pointer;
  margin: 1rem 2rem;
  width: 400px;
  .preview__img {
      border-top-left-radius:5px;
      border-top-right-radius:5px;
    background: url(${(props) => props.hello}) center/cover no-repeat;
    width: inherit;
    height: 230px;
    border:1px solid #C7D3D9;
}
.preview__info {
      border:1px solid #C7D3D9;
      border-bottom-left-radius:5px;
      border-bottom-right-radius:5px;
    padding: 10px 12px;
    .preview__title {
      font-size: 12px;
    }
    .preview__subtitle {
        font-family: var(--font-roboto);
    }
    .third {
        margin: 5px 0;
      font-size: 14px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
`;

export default TwitterPreview;
