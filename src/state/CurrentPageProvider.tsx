import React, { useState } from "react";
import { defaultPage } from "../constants/default-page";

export const CurrentPageContext = React.createContext<{
  currentPageTitle: string;
  setCurrentPage: (currentPage: string) => void;
}>({
  currentPageTitle: defaultPage,
  setCurrentPage: () => {},
});

export const CurrentPageContextProvider = (props) => {
  const [currentPage, setCurrentPage] = useState(defaultPage);

  return (
    <CurrentPageContext.Provider
      value={{ currentPageTitle: currentPage, setCurrentPage }}
    >
      {props.children}
    </CurrentPageContext.Provider>
  );
};
