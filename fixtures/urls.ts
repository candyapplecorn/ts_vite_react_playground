const GiphyDeveloperKey: string = import.meta.env.VITE_GIPHY_DEVELOPER_KEY;

// to make the real request, add back http://
// then comment out the code in api.mock.ts as well as
// the corresponding section in vite.config.ts
export const GIPHY_SEARCH_API_URL: string =
    "api.giphy.com/v1/gifs/search?api_key=" +
    GiphyDeveloperKey +
    "&q=cat&limit=5";
