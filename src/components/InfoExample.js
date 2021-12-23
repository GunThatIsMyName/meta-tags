import React, { useState } from "react";
import styled from "styled-components";
import CodeExample from "./CodeExample";
import CodePreview from "./CodePreview";

function InfoExample() {

    const [first,setFirst]=useState("This is Title of the website");
    const [second,setSecond]=useState("https://junsjourney.site");
    const [third,setThird]=useState("descript of this website / awesome in one lineescript of this website / awesome in one lineescript of this website / awesome in one lineescript of this website / awesome in one line");


    return(
        <InfoWrapper>
            <CodeExample first={first} third={third} />
            <CodePreview first={first} second={second} third={third} />
        </InfoWrapper>
    )
}

const InfoWrapper = styled.article`
    background-color:var(--color-white);
    width:1000px;
    margin:auto;
    padding:1rem;
    border:2px solid var(--color-black);
    border-radius:3px;

    @media screen and (max-width:1024px){
        width:90%;
    }
`;



export default InfoExample;
