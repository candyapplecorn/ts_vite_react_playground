import React, { useEffect, useState } from "react";
import { getPagesIterator } from "./get-pages-iterator";
import { PageInterface } from "../pages/interface";

export function usePages() {
  const [pages, setPages] = useState<
    Record<string, React.ComponentType<unknown>>
  >({});

  useEffect(() => {
    getPagesIterator().then((loadedPages: PageInterface<unknown>[]) => {
      const pagesObject = loadedPages.reduce(
        (
          acc: Record<string, React.ComponentType<unknown>>,
          page: PageInterface<unknown>,
        ) => {
          if (!page.hideFromMenu) {
            acc[page.title] = page.component;
          }
          return acc;
        },
        {},
      );

      setPages(pagesObject);
    });
  }, []);

  return pages;
}
