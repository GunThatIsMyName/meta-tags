import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import styled from "styled-components";
import { useAppContext } from "../context/AppContext";

function Search({ hero, home }) {
  const { handleSubmit, error, removeError } = useAppContext();
  const [url, setUrl] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    if (url === "") {
      return;
    }
    handleSubmit(url);
    setUrl("");
  };
  const handleInput = (e) => {
    setUrl(e.target.value);
  };

  // useEffect(() => {
  //   let timer = setTimeout(removeError, 3000);
  //   return () => clearTimeout(timer);
  //   // eslint-disable-next-line
  // }, [error]);

  return (
    <Form className="form" onSubmit={handleForm}>
      <div className="form__box">
        {error && (
          <h1 className="form__error">
            please check your site address again 🤙🏼{" "}
          </h1>
        )}
        <input
          type="text"
          onChange={handleInput}
          className="form__input"
          value={url}
          placeholder="type any website : https://junsjourney.site"
        />
        <button type="submit" className="form__btn">
          <FaArrowRight />
        </button>
      </div>

      <p className="form__hint">
        Try this one : <strong>https://junsjourney.site</strong>
      </p>
    </Form>
  );
}

const Form = styled.form`
  margin-bottom: 2rem;
  .form__box {
    position: relative;
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    margin-bottom: 1rem;
    .form__error {
      position: absolute;
      background: red;
      bottom: -45px;
      padding: 10px;
    }
    .form__input {
      width: 400px;
      font-size: 1rem;
      padding: 12px;
      margin-right: 3px;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    .form__btn {
      width: 3rem;
      background-color: var(--color-yellow);
      color: var(--color-white);
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      svg {
        transition: 0.2s linear;
      }
      &:hover {
        svg {
          font-size: 1.2rem;
        }
      }
    }
  }
  .form__hint {
    text-align: center;
  }
`;

export default Search;
