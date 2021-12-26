import React from "react";
import styled from "styled-components";

function TwitterPreview({ title, description, domain, image }) {
  return (
    <Wrapper image={image}>
      <div className="preview__img"></div>
      <div className="preview__info">
        <h1 className="preview__subtitle">{title}</h1>
        <h1 className="description">{description}</h1>
        <h1 className="preview__title">{domain}</h1>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  cursor: pointer;
  margin: 1rem 2rem;
  width: 400px;
  .preview__img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background: url(${(props) => props.image}) center/cover no-repeat;
    width: inherit;
    height: 230px;
    border: 1px solid #c7d3d9;
  }
  .preview__info {
    border: 1px solid #c7d3d9;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 10px 12px;
    .preview__title {
      font-size: 12px;
    }
    .preview__subtitle {
      font-family: var(--font-roboto);
    }
    .description {
      margin: 5px 0;
      font-size: 14px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }

  @media screen and (max-width: 640px) {
    width: 100%;
    margin: 1rem 0;
  }
`;

export default TwitterPreview;
