import React, { useContext } from "react";
import { PagesContext } from "../state/PagesProvider";
import { CurrentPageContext } from "../state/CurrentPageProvider";
import DiceCalculator from "../pages/DiceCalculator";

export default function Body() {
  const availablePages = useContext(PagesContext);
  const { currentPageTitle } = useContext(CurrentPageContext);

  const Page = availablePages[currentPageTitle];

  return <div>{Page !== undefined ? <Page /> : <DiceCalculator />}</div>;
}
