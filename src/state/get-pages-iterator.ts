import { PageInterface } from "../pages/interface";

export async function getPagesIterator(): Promise<
  Array<PageInterface<unknown>>
> {
  const importedPages = import.meta.glob("../pages/*.tsx");
  const listOfPages = [];

  for (const modulePath in importedPages) {
    const imported: { pageInterface: PageInterface<unknown> } =
      (await importedPages[modulePath]()) as {
        pageInterface: PageInterface<unknown>;
      };

    if (imported.pageInterface) {
      const { title, component } = imported.pageInterface;
      if (!imported.pageInterface.hideFromMenu) {
        listOfPages.push({ title, component });
      }
    } else {
      // Handle the case where pageInterface is not defined
      console.warn(`Page interface not defined in module: ${modulePath}`);
    }
  }

  return listOfPages;
}
