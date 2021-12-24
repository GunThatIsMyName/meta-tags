import { createContext, useContext, useReducer, useState } from "react";
import {
  appReducer,
  fetchStart,
  fetchLoading,
  initState,
  fetchError,
  fetchFinish,
  errorDisappear,
} from "../reducer/AppReducer";

const AppContext = createContext();

const apiEndPoint = "https://api.promptapi.com/meta_tags?url";
const apiKey = "eM5I1tV0szqGcWcB772yw0EqFl2wvLok";

// eM5I1tV0szqGcWcB772yw0EqFl2wvLok
// Ov6c1jTHNb2JEVesfDsZLYwbnFnm4ovP

const AppProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(appReducer, initState);

  const [first, setFirst] = useState("This is Title of the website");
  const [second, setSecond] = useState("https://junsjourney.site");
  const [third, setThird] = useState(
    "descript of this website / awesome in one lineescript of this website / awesome in one lineescript of this website / awesome in one lineescript of this website / awesome in one line"
  );
  const hello =
    "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80";

  const fetchData = async (url) => {
    dispatch({ type: fetchStart });
    try {
      const response = await fetch(url);
      const {meta_tags:apiData} = await response.json();
      if(apiData.length<10){
        console.log("samll")
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

  return (
    <AppContext.Provider value={{ ...state,removeError,first, second, third, hello, handleSubmit }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
