import { defineMock } from "vite-plugin-mock-dev-server";
import giphyApiSearchResult from "./giphy_api_search_result.json";
import { GIPHY_SEARCH_API_URL } from "../fixtures/urls";

export default defineMock([
  {
    url: "/api/test",
    body: { a: 1, b: 2 },
  },
  {
    url: GIPHY_SEARCH_API_URL,
    body: giphyApiSearchResult,
  },
]);
