import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppContext } from "../context/AppContext";
import MainPreview from "./MainPreview";
import MetaData from "./MetaData";
import { prac } from "../prac";

function Main() {
  const {data,loading,error}=useAppContext();

  return (
    <Wrapper>
      <MetaData data={data} />
      <MainPreview data={data} />
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


  // const [data,setData]=useState({
  //   title:"",
  //   description:"",
  //   image:"",
  // });

  // const filterData = () => {
  //   const one = prac.filter((item) => {
  //     if (item.name === "description") {
  //       return item;
  //     }
  //     if (item.property === "og:title") {
  //       return item;
  //     }
  //     if (item.property === "og:image") {
  //       return item;
  //     }
  //     if (item.property === "og:description") {
  //       return item;
  //     }
  //   });

  //   one.map(item=>{
  //     if(item.name==="description"){
  //       setData(prev=>{
  //         return{...prev,description:item.content}
  //       })
  //     }
  //     if(item.property==="og:description"){
  //       setData(prev=>{
  //         return{...prev,description:item.content}
  //       })
  //     }
  //     if(item.property==="og:title"){
  //       setData(prev=>{
  //         return{...prev,title:item.content}
  //       })
  //     }
  //     if(item.property==="og:image"){
  //       setData(prev=>{
  //         return{...prev,image:item.content}
  //       })
  //     }
  //   })
  //   setNewData(one);
  // };