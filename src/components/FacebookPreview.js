import React from "react";
import styled from "styled-components";

function FacebookPreview({ first, second, third, hello }) {
  return (
    <Wrapper hello={hello}>
      <div className="preview__img"></div>
      <div className="preview__info">
        <h1 className="preview__title">{first}</h1>
        <h1 className="preview__subtitle">{second}</h1>
        <h1 className="third">{third}</h1>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`

cursor: pointer;
  margin: 1rem 2rem;
  width: 400px;
  .preview__img {
    background: url(${(props) => props.hello}) center/cover no-repeat;
    width: inherit;
    height: 230px;
    border:1px solid #C7D3D9;
  }
  .preview__info {
    background: #F2F3F5;
    padding: 10px 12px;
    border:1px solid #C7D3D9;
    .preview__title {
      font-size: 12px;
    }
    .preview__subtitle {
      margin: 5px 0;
      font-family: var(--font-roboto);
    }
    .third {
      font-size: 14px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
`;

export default FacebookPreview;
