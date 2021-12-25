import { createContext, useContext, useReducer, useState } from "react";
import {
  appReducer,
  fetchStart,
  fetchLoading,
  initState,
  fetchError,
  fetchFinish,
  errorDisappear,
  editPreview,
} from "../reducer/AppReducer";

const AppContext = createContext();

const apiEndPoint = "https://api.promptapi.com/meta_tags?url";
const apiKey = "eM5I1tV0szqGcWcB772yw0EqFl2wvLok";

// eM5I1tV0szqGcWcB772yw0EqFl2wvLok
// Ov6c1jTHNb2JEVesfDsZLYwbnFnm4ovP

const AppProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(appReducer, initState);

  const fetchData = async (url) => {
    dispatch({ type: fetchStart });
    try {
      const response = await fetch(url);
      const {meta_tags,title,host:{domain}} = await response.json();
      const apiData = {meta_tags,title,domain}
      if(meta_tags.length<3){
        throw new Error("THIS IS ERROR 😀 💥");
      }
      dispatch({ type: fetchLoading, payload: apiData });
    } catch (error) {
      dispatch({ type: fetchError });
    }
    dispatch({ type: fetchFinish });
  };

  const handleSubmit = (url) => {
    let dataUrl = `${apiEndPoint}=${url}&apikey=${apiKey}`;
    fetchData(dataUrl);
  };

  const removeError = ()=>{
    dispatch({ type: errorDisappear });
  }

  const editMeta = (name,value)=>{
    dispatch({type:editPreview,payload:{name,value}})
  }

  return (
    <AppContext.Provider value={{ ...state,removeError,editMeta ,handleSubmit }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
