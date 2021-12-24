import React from "react";
import styled from "styled-components";
import { FaQuestion } from "react-icons/fa";
import { useAppContext } from "../context/AppContext";


function MetaData() {
const {hello}=useAppContext();

  return (
    <Wrapper className="main__meta">
      <h1 className="metadata">metadata</h1>

      <div className="form__control">
        <h4 className="meta__title">Title</h4>
        <textarea
          maxLength={60}
          rows={2}
          className="meta__text meta__title__text"
        ></textarea>
      </div>

      <div className="form__control">
        <h4 className="meta__title">Description</h4>
        <textarea
          maxLength={150}
          rows={5}
          className="meta__text meta__description__text"
        ></textarea>
      </div>

      <div className="form__control">
        <h4 className="meta__title">image</h4>
        <div className="meta__image" style={{background:`url(${hello}) center/cover no-repeat`}} >
          {!hello && <FaQuestion />}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  flex-basis: 40%;

  .metadata {
    font-size: 1rem;
    text-transform: uppercase;
    text-align: center;
    font-family: var(--font-roboto);
    margin: 2rem 0;
  }
  .form__control {
    margin: 2rem;
    .meta__title {
      margin-bottom: 2px;
    }
    .meta__text {
      border-radius: 5px;
      padding: 12px;
      width: 100%;
      resize: none;
    }
    .meta__image {
      width: 100%;
      height: 10rem;
      border-radius: 10px;
      display:grid;
      place-items:center;
      svg{
          font-size:1.5rem;
      }
    }
  }
`;

export default MetaData;
