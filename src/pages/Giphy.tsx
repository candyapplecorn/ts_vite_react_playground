import { useEffect, useState } from "react";
import { GiphyApiContext } from "../state/GiphyApiContextProvider";
import { PageInterface } from "./interface";

type GiphyProps = object;

export const pageInterface: PageInterface<GiphyProps> = {
  component: Giphy,
  title: "Giphy",
};

function Giphy() {
  const [apiResult, setApiResult] = useState({});

  // Simple example where we're mocking the result of a simple API call
  useEffect(() => {
    fetch("https://api.apis.guru/v2/list.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setApiResult(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <p>{JSON.stringify(apiResult).substring(0, 200)}</p>
      <GiphyApiContext.Consumer>
        {(value: undefined | { data: [] }) => (
          <div className="container">
            {value?.data?.map(
              (
                item: undefined | { images: { original: { url: string } } },
                index,
              ) => (
                <img key={index} src={item?.images.original.url} alt="Gif" />
              ),
            )}
          </div>
        )}
      </GiphyApiContext.Consumer>
    </>
  );
}

export default Giphy;
