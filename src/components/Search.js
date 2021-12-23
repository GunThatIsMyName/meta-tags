import React from "react";
import { FaArrowRight } from "react-icons/fa";
import styled from "styled-components";

function Search({hero,home}) {
  return (
    <Form className="form">
      <input type="text" className="form__input" />
      <button type="submit" className="form__search">
        <FaArrowRight />
      </button>
      <p className="hero__search__hint">
        Try this one : <strong>https://junsjourney.site</strong>
      </p>
    </Form>
  );
}

const Form = styled.form`

`;


export default Search;
