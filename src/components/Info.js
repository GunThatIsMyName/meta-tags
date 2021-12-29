import React from "react";
import { InfoExample } from ".";
import styled from "styled-components";

import bfImage from "../image/bf.png";

function Info() {
  return (
    <Wrapper>
      <article className="info__article">
        <h1 className="info__title">What are meta tags?</h1>
        <div className="info__box">
          <p className="info__lead">
            Meta tags are areas in HTML code that contain information about a
            website. 🙌.
          </p>
          <p>
            In addition meta tags can contain information to help{" "}
            <strong>search engines</strong>
            and other technical services scan your site to figure out what its
            all about.
          </p>
        </div>

        <div className="info__image">
          <img src={bfImage} alt="before and after" />
        </div>
        <InfoExample />
      </article>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0;
  padding-top: 5rem;
  border-top: 2px solid white;
  .info__article {
    position: relative;
    grid-gap: 2rem;
    align-items: center;
    margin-bottom: 4rem;
    padding-top: 3rem;
    .info__title {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      font-size: 2rem;
      font-weight: bold;
    }
    .info__image {
      height: 50vh;
      text-align: center;
      overflow: hidden;
      position: relative;
      img {
        height: 100%;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        position: absolute;
        transition: 0.3s linear;
        cursor: pointer;
      }
    }
    .info__box {
      padding: 3rem 2rem;
      line-height: 1.7rem;
      margin-bottom: 2rem;
      font-size: 1.2rem;
      border-radius: 10px;
      color: var(--color-grey);
      background-color: var(--color-yellow);
      .info__title {
        color: var(--color-black);
      }
      .info__lead {
        margin-bottom: 2rem;
        font-weight: bold;
        font-size: 1.4rem;
        font-family: var(--font-roboto);
      }
      p {
        max-width:700px;
        margin:auto;
        strong {
          font-size: 1.4rem;
          font-family: var(--font-roboto);
        }
      }
    }
  }

  @media screen and (max-width: 1200px) {
    .info__article {
      .info__box {
        margin: 3rem auto;
        max-width: 800px;
      }
    }
  }
  @media screen and (max-width: 991px) {
    .info__article {
      .info__box {
        width: 90%;
        margin: 2rem auto;
      }
    }
  }

  @media screen and (max-width: 740px) {
    .info__article {
      .info__image {
        img {
          transform: translateX(-50%);
          width: 80%;
          height: 80%;
        }
      }
    }
  }
`;

export default Info;
