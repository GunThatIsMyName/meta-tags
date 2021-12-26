import { createContext, useContext, useReducer } from "react";
import { appReducer } from "../reducer/AppReducer";
import {
  AS_editPreview,
  AS_fetchError,
  AS_fetchFinish,
  AS_fetchLoading,
  AS_fetchStart,
  initState,
} from "../reducer/AppState";

const AppContext = createContext();

const apiEndPoint = "https://api.promptapi.com/meta_tags?url";
const apiKey = "eM5I1tV0szqGcWcB772yw0EqFl2wvLok";

// apikey1 === eM5I1tV0szqGcWcB772yw0EqFl2wvLok
// apikey2 === Ov6c1jTHNb2JEVesfDsZLYwbnFnm4ovP

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initState);

  const fetchData = async (url) => {
    dispatch({ type: AS_fetchStart });
    try {
      const response = await fetch(url);
      const {
        meta_tags,
        title,
        host: { domain },
      } = await response.json();
      const apiData = { meta_tags, title, domain };
      if (meta_tags.length < 3) {
        throw new Error("THIS IS ERROR 😀 💥");
      }
      dispatch({ type: AS_fetchLoading, payload: apiData });
    } catch (error) {
      dispatch({ type: AS_fetchError });
    }
    dispatch({ type: AS_fetchFinish });
  };

  const handleSubmit = (url) => {
    let dataUrl = `${apiEndPoint}=${url}&apikey=${apiKey}`;
    fetchData(dataUrl);
  };

  const editMeta = (name, value) => {
    dispatch({ type: AS_editPreview, payload: { name, value } });
  };

  return (
    <AppContext.Provider value={{ ...state, editMeta, handleSubmit }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
