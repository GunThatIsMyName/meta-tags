import React from 'react'
import styled from 'styled-components'
import MainPreview from './MainPreview';
import MetaData from './MetaData';

function Main() {
    return (
        <Wrapper>
            <MetaData />
            <MainPreview />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    min-height:60vh;
    display:flex;
    background:var(--color-white);
    border-radius:10px;
    color:var(--color-grey);
    .main__meta{
        flex-basis:30%;
    }
    .main__preview{
        flex-basis:70%;
    }
`;



export default Main
