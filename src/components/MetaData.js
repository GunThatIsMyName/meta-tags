import React, { useState } from "react";
import styled from "styled-components";
import { FaQuestion } from "react-icons/fa";
import { useAppContext } from "../context/AppContext";
import { Generator } from ".";

function MetaData({ data }) {
  const { editMeta } = useAppContext();
  const [isPopUp, setPopUp] = useState(false);
  const handleChage = (e) => {
    const { name, value } = e.target;
    editMeta(name, value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setPopUp(true);
  };

  return (
    <Wrapper className="main__meta">
      {isPopUp && <Generator data={data} setPopUp={setPopUp} />}
      <h1 className="metadata">metadata</h1>

      <div className="form__control">
        <h4 className="meta__title">Title</h4>
        <textarea
          maxLength={60}
          rows={2}
          className="meta__text meta__title__text"
          onChange={handleChage}
          name="title"
          // value={data.title}
          placeholder={data.title}
        ></textarea>
      </div>

      <div className="form__control">
        <h4 className="meta__title">Description</h4>
        <textarea
          maxLength={150}
          rows={5}
          className="meta__text meta__description__text"
          onChange={handleChage}
          name="description"
          placeholder={data.description}
          // value={data.description}
        ></textarea>
      </div>

      <div className="form__control">
        <h4 className="meta__title">image</h4>
        <div
          className="meta__image"
          style={{ background: `url(${data.image}) center/cover no-repeat` }}
        >
          {!data.image && <FaQuestion />}
        </div>
      </div>

      <div className="main__generate">
        <button className="generator" onClick={handleClick}>
          Generate Meta tags
        </button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  flex-basis: 40%;
  border-right: 1px solid var(--color-lightwhite);
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
      border: 1px solid var(--color-border);
      display: grid;
      place-items: center;
      svg {
        font-size: 1.5rem;
      }
    }
  }
  .main__generate {
    text-align: center;
    margin-bottom: 2rem;
    .generator {
      background-color: var(--color-yellow);
      color: var(--color-black);
      padding: 8px;
      font-size: 1.2rem;
      border-radius: 5px;
      transition:0.3s linear;
      &:hover{
        color: var(--color-yellow);
        background-color: var(--color-black);
      }
    }
  }

  @media screen and (max-width: 991px) {
    border-right: none;
    border-bottom: 1px solid var(--color-lightwhite);
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
