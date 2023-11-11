import React, { useEffect, useState } from "react";

export const PagesContext = React.createContext<
  Record<string, React.ComponentType<unknown>>
>({});

/*
This component can wrap around another component and then consumer can be called like so:

      <CurrentPageContext.Consumer>
        {(value) => <p>{JSON.stringify(value)}</p>}
      </CurrentPageContext.Consumer>

furthermore, the request here is being proxied.
 */
export const PagesContextProvider = (props) => {
  const [currentPages, setCurrentPages] = useState({});

  useEffect(() => {
    const importedPages = import.meta.glob("../pages/*.tsx");

    for (const modulePath in importedPages) {
      importedPages[modulePath]().then(
        ({ pageInterface: { title, component } }) => {
          setCurrentPages((currentPages) => ({
            ...currentPages,
            [title]: component,
          }));
        },
      );
    }
  }, []);

  return (
    <PagesContext.Provider value={currentPages}>
      {props.children}
    </PagesContext.Provider>
  );
};
