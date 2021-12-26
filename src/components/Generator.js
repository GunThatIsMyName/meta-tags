import React from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import CodeTerm from "./codeline/CodeTerm";
import CodeComments from "./codeline/CodeComments";
import CodeArr from "./codeline/CodeArr";

function Generator({ data, setPopUp }) {
  const closePopup = (e) => {
    if (e.target.id === "popup") {
      setPopUp(false);
    }
  };
  return (
    <Wrapper id="popup" onClick={closePopup}>
      <div className="popup">
        <div className="popup__header">
          <MdClose onClick={() => setPopUp(false)} />
        </div>

        <article className="popup__box">
          <h1 className="popup__title">Your Meta Tags</h1>

          <div className="poup__meta">
            <pre className="code__line">
              {/* ✅ google */}
              <CodeComments content={"<!-- Google / Search Engine Tags -->"} />
              <br />
              <CodeTerm
                child={data.title}
              />
              <br />
              <CodeArr arrType={1} arr={"name"} content={data.title} />
              <br />
              <CodeArr
                arrType={1}
                arr={"description"}
                content={data.description}
              />
              <br />
              <br />

              {/* ✅ facebook */}
              <CodeComments content={" <!-- Facebook Meta Tags -->"} />
              <br />
              <CodeArr arrType={2} arr={"og:type"} content={"website"} />
              <br />
              <CodeArr arrType={2} arr={"og:url"} content={`https://www.${data.domain}`} />
              <br />
              <CodeArr arrType={2} arr={"og:title"} content={data.title} />
              <br />
              <CodeArr
                arrType={2}
                arr={"og:description"}
                content={data.description}
              />
              <br />
              <CodeArr arrType={2} arr={"og:image"} content={data.image} />
              <br />
              <br />
              {/* ✅ twitter */}
              <CodeComments content={" <!-- Twitter Meta Tags -->"} />
              <br />
              <CodeArr
                arrType={2}
                arr={"twitter:card"}
                content={"summary_large_image"}
              />
              <br />
              <CodeArr arrType={2} arr={"twitter:url"} content={`https://www.${data.domain}`} />
              <br />
              <CodeArr arrType={2} arr={"twitter:title"} content={data.title} />
              <br />
              <CodeArr
                arrType={2}
                arr={"twitter:description"}
                content={data.description}
              />
              <br />
              <CodeArr arrType={2} arr={"twitter:image"} content={data.image} />
              <br />
            </pre>
          </div>
        </article>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  z-index: 99;
  background-color: #000000b6;
  .popup {
    width: 100%;
    max-width: 1200px;
    max-height: 700px;
    margin: 4rem auto;
    height: 80%;
    background-color: white;
    border-radius: 5px;
    .popup__header {
      text-align: right;
      svg {
        font-size: 2rem;
        margin-right: 1rem;
        margin-top: 1rem;
        transition: 0.3s linear;
        background-color: black;
        color: white;
        border-radius: 3px;
        cursor: pointer;
        &:hover {
          transform: scale(1.2);
        }
      }
    }

    .popup__box {
      margin: 0 1rem;
      .popup__title {
        margin: 2rem 0;
        text-align: center;
        font-size: 1.5rem;
      }
      .poup__meta {
        display: flex;
        padding: 2rem 1rem;
        background-color: #ebf1fa;
        width: 100%;
        overflow-y: auto;
      }
    }
  }

  @media screen and (max-width: 1200px) {
    .popup {
      width: 80%;
    }
  }
`;

export default Generator;
