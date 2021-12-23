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
    .main__meta{
        flex-basis:30%;
    }
    .main__preview{
        flex-basis:70%;
        background-color:teal;
    }
`;



export default Main
