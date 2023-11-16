import { useState } from "react";
import { defaultPage } from "../constants/default-page";
import { CURRENT_PAGE } from "../constants/local-storage";
import { useNavigate } from "react-router-dom";

export function useCurrentPage() {
  const [currentPageTitle, setPage] = useState(
    localStorage.getItem(CURRENT_PAGE) || defaultPage,
  );
  const navigate = useNavigate();

  const setCurrentPage = (newPage: string) => {
    localStorage.setItem(CURRENT_PAGE, newPage);
    setPage(newPage);
    navigate(newPage);
  };

  return { currentPageTitle, setCurrentPage };
}
