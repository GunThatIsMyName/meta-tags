import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppContext } from "../context/AppContext";
import MainPreview from "./MainPreview";
import MetaData from "./MetaData";
import { prac } from "../prac";

function Main() {
  // const {loading,error}=useAppContext();

  const [newData, setNewData] = useState();

  const filterData = () => {
    const one = prac.filter((item) => {
      if (item.name === "description") {
        return item;
      }
      if (item.property === "og:title") {
        return item;
      }
      if (item.property === "og:image") {
        return item;
      }
      if (item.property === "og:description") {
        return item;
      }
    });

    one.map(item=>{
        
    })

    console.log(one)
    setNewData(one);
  };

  useEffect(() => {
    filterData();
    // eslint-disable-next-line
  }, [prac]);

  console.log(newData, "##");

  return (
    <Wrapper>
      <MetaData newData={newData} />
      <MainPreview />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 60vh;
  display: flex;
  background: var(--color-white);
  border-radius: 10px;
  color: var(--color-grey);

  max-width: 1200px;
  margin: 0 2rem;

  .main__meta {
    flex-basis: 30%;
  }
  .main__preview {
    flex-basis: 70%;
  }

  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
`;

export default Main;
