import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [first, setFirst] = useState("This is Title of the website");
  const [second, setSecond] = useState("https://junsjourney.site");
  const [third, setThird] = useState(
    "descript of this website / awesome in one lineescript of this website / awesome in one lineescript of this website / awesome in one lineescript of this website / awesome in one line"
  );
  const hello ="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80"
  return (
    <AppContext.Provider value={{ first, second, third ,hello}}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
