import React, { useState } from "react";
import styled from "styled-components";

function InfoExample() {

    const [first,setFirst]=useState("This is Title of the website");
    const [second,setSecond]=useState("this is Title also");
    const [third,setThird]=useState("descript of this website / awesome in one line");


  return (
    <CodeExample className="code__examples">
      <div className="code__example">
        <pre className="code__line">

          {/* ✅ first line of example */}
          <span className="code-tag">{`< `}<span className="code-name">title</span>{` >`}</span>
            {first}
          <span className="code-tag">{`</ `}<span className="code-name">title</span>{` >`}</span>
          <br />

          {/* ✅  second Line of example */}
          <span className="code-tag">{`< `}<span className="code-name">meta</span></span>
             name="title" content="{second}"
          <span className="code-tag">{`  />`}</span>
          <br />

          {/* ✅  last Line of example */}
          <span className="code-tag">{`< `}<span className="code-name">meta</span></span>
          <span> name="description" </span>
            <span>content=</span>
            "{third}"
            <span className="code-tag">{`/>`}</span>


        </pre>
      </div>
      <div className="info__example__preview"></div>
    </CodeExample>
  );
}

const CodeExample = styled.div`
  .code-tag {
    font-size: 1.1rem;
    color: grey;
    letter-spacing: 2px;
  }
`;

export default InfoExample;
