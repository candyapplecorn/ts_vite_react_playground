import React, { useState } from "react";
import { defaultPage } from "../constants/default-page";
import { CURRENT_PAGE } from "../constants/local-storage";

export const CurrentPageContext = React.createContext<{
  currentPageTitle: string;
  setCurrentPage: (currentPage: string) => void;
}>({
  currentPageTitle: defaultPage,
  setCurrentPage: () => {},
});

function setCurrentPageWithLocalStorage(
  setter: (currentPage: string) => void,
  newPage: string,
) {
  localStorage.setItem(CURRENT_PAGE, newPage);
  setter(newPage);
}

export const CurrentPageContextProvider = (props: {
  children: React.ReactElement;
}) => {
  const [currentPage, setCurrentPage] = useState(
    localStorage.getItem(CURRENT_PAGE) || defaultPage,
  );

  return (
    <CurrentPageContext.Provider
      value={{
        currentPageTitle: currentPage,
        setCurrentPage: (newPage: string) =>
          setCurrentPageWithLocalStorage(setCurrentPage, newPage),
      }}
    >
      {props.children}
    </CurrentPageContext.Provider>
  );
};
