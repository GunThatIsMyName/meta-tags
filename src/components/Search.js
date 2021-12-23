import React from "react";
import { FaArrowRight } from "react-icons/fa";
import styled from "styled-components";

function Search({ hero, home }) {
  return (
    <Form className="form">
      <div className="form__box">
        <input type="text" className="form__input" placeholder="type any website : https://junsjourney.site" />
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
margin-bottom:2rem;
  .form__box {
    display: flex;
    justify-content: center;
    margin-bottom:1rem;
    .form__input {
      width: 400px;
      font-size: 1rem;
      padding: 12px;
      margin-right:3px;
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
