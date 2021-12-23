import React from 'react'
import styled from 'styled-components';

function CodeExample({first,third}) {
    return (
        <ExampleWrapper className="code__examples">
        <div className="code__example">
          <pre className="code__line">
  
            {/* ✅ first line of example */}
            <span className="code-tag">{`<`}<span className="code-name">title</span>{`>`}</span>
              {first}
            <span className="code-tag">{`</ `}<span className="code-name">title</span>{`>`}</span>
            <br />
  
            {/* ✅  second Line of example */}
            <span className="code-tag">{`<`}<span className="code-name">meta </span></span>
              <span className="code-arr">name="</span>
                title 
              <span className="code-arr">"  </span>

              <span className="code-arr">content="</span>
                {first}
              <span className="code-arr">"</span>
            <span className="code-tag">{` />`}</span>
            <br />
  
            {/* ✅  last Line of example */}
            <span className="code-tag">{`<`}<span className="code-name">meta </span></span>
            <span className="code-arr">name="</span>
                description 
              <span className="code-arr">"  </span>

              <span className="code-arr">content="</span>
                {third}
              <span className="code-arr">"</span>
              <span className="code-tag">{` />`}</span>
  
  
          </pre>
        </div>
        <div className="info__example__preview"></div>
      </ExampleWrapper>
    )
}

const ExampleWrapper = styled.div`
    color:var(--color-black);
    background-color:#EBF1FA;
    margin:0 2rem;
    padding:1rem;
    border-radius:10px;
    overflow-x:scroll;
    white-space:pre;
  .code-tag {
    font-size: 1.1rem;
    letter-spacing: 2px;
    color:#0048ab;
    font-family:var(--font-nanum);
  }
  .code-arr{
    color:#0048ab;
  }
  @media screen and (max-width:1024px){
        margin:1rem;
    }
`;

export default CodeExample
