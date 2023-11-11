import React, { useEffect, useState } from "react";
import { GIPHY_SEARCH_API_URL } from "../../fixtures/urls";

export const GiphyApiContext = React.createContext({});

/*
This component can wrap around another component and then consumer can be called like so:

      <GiphyApiContext.Consumer>
        {(value) => <p>{JSON.stringify(value)}</p>}
      </GiphyApiContext.Consumer>

furthermore, the request here is being proxied.
 */
export const GiphyApiContextProvider = (props) => {
  const [giphyResult, setGiphyResult] = useState({});

  useEffect(() => {
    fetch(GIPHY_SEARCH_API_URL)
      .then((res) => res.json())
      .then((data) => setGiphyResult(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <GiphyApiContext.Provider value={giphyResult}>
      {props.children}
    </GiphyApiContext.Provider>
  );
};
