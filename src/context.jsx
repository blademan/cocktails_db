import React, { useContext } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
 return <AppContext.Provider value="Hello">{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
 return useContext(AppContext);
};

export { AppContext, AppProvider };
