import React, { useEffect, useState } from "react";
import { GIPHY_SEARCH_API_URL } from "../../fixtures/urls";

interface GiphyItem {
  images: {
    original: {
      url: string;
    };
  };
}

interface GiphyContextType {
  data: GiphyItem[];
}

export const GiphyApiContext = React.createContext<GiphyContextType>({
  data: [],
});

/*
This component can wrap around another component and then consumer can be called like so:

      <GiphyApiContext.Consumer>
        {(value) => <p>{JSON.stringify(value)}</p>}
      </GiphyApiContext.Consumer>

furthermore, the request here is being proxied.
 */
export const GiphyApiContextProvider = (props: {
  children: React.ReactElement;
}) => {
  const [giphyResult, setGiphyResult] = useState({ data: [] });

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
