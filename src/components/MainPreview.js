import React from "react";
import styled from "styled-components";
import GooglePreview from "./GooglePreview"
import { useAppContext } from "../context/AppContext";
import FacebookPreview from "./FacebookPreview";
import TwitterPreview from "./TwitterPreview";

function MainPreview({data}) {

    const { first, second, third ,hello} = useAppContext();

  return (
    <Wrapper className="main__preview">
      <h1 className="preview">preview</h1>

      <main className="preview__main">
        <article className="preview__box">

          <div className="preview__header">
            <h1 className="preview__title">google</h1>
            <div className="preview__line"></div>
          </div>

          <GooglePreview first={data.title} second={second} third={data.description} />

        </article>

        <article className="preview__box">
    
          <div className="preview__header">
            <h1 className="preview__title">facebook</h1>
            <div className="preview__line"></div>
          </div>

        <FacebookPreview first={data.title} second={second} third={data.description} hello={data.image} />

        </article>

        <article className="preview__box">

          <div className="preview__header">
            <h1 className="preview__title">twitter</h1>
            <div className="preview__line"></div>
          </div>

          <TwitterPreview first={data.title} second={second} third={data.description} hello={data.image} />
        </article>
      </main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
margin-bottom:2rem;
  .preview {
    font-size: 1rem;
    text-transform: uppercase;
    text-align: center;
    font-family: var(--font-roboto);
    margin: 2rem 0;
  }
  .preview__main {
      padding: 0 2rem;
    .preview__box {
      .preview__header {
        display: flex;
        align-items: center;
        .preview__title {
            margin-right: 2rem;
            font-family:var(--font-roboto);
            color: var(--color-lightgrey);
        }
        .preview__line {
            background: var(--color-lightgrey);
          width: 100%;
          height: 1px;
        }
      }
    }
  }
`;

export default MainPreview;
