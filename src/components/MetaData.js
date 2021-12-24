import React, { useState } from "react";
import styled from "styled-components";
import { FaQuestion } from "react-icons/fa";
import { useAppContext } from "../context/AppContext";

function MetaData({newData}) {
  const { hello } = useAppContext();

  const [cooper,setCooper]=useState({});


  // 데이터 받아오기
  newData.map(item=>{
  })



  return (
    <Wrapper className="main__meta">
      <h1 className="metadata">metadata</h1>

      <div className="form__control">
        <h4 className="meta__title">Title</h4>
        <textarea
          maxLength={60}
          rows={2}
          className="meta__text meta__title__text"
        >
        </textarea>
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
        <div
          className="meta__image"
          style={{ background: `url(${hello}) center/cover no-repeat` }}
        >
          {!hello && <FaQuestion />}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  flex-basis: 40%;
  border-right: 1px solid #f2f3f5;
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
      width: 280px;
      height: 10rem;
      border-radius: 10px;
      display: grid;
      place-items: center;
      svg {
        font-size: 1.5rem;
      }
    }
  }

  @media screen and (max-width: 991px) {
    border-right: none;
    border-bottom: 1px solid #f2f3f5;
  }
  @media screen and (max-width: 480px) {
    .form__control {
      .meta__image {
        width: 100%;
      }
    }
  }
`;

export default MetaData;
