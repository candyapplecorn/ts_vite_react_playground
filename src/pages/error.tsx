import { useRouteError } from "react-router-dom";
import { PageInterface } from "./interface";
import TopNav from "../components/TopNav";

type ErrorPageProps = object;

export const pageInterface: PageInterface<ErrorPageProps> = {
  component: ErrorPage,
  title: "Error Page",
  hideFromMenu: true,
};

export default function ErrorPage() {
  const error = useRouteError() as { statusText?: string; message?: string };

  return (
    <div id="error-page">
      <TopNav />
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
    </div>
  );
}
