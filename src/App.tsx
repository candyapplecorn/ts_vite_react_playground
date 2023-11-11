import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { GiphyApiContext } from "./playground/GiphyApiContextProvider";

function App() {
  const [count, setCount] = useState(0);
  const [apiResult, setApiResult] = useState({});

  // Simple example where we're mocking the result of a simple API call
  useEffect(() => {
    fetch("https://api.apis.guru/v2/list.json", {
      mode: "no-cors",
      cors: "no-cors",
    })
      .then((res) => res.json())
      .then((data) => setApiResult(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
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

export default App;
