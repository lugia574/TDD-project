import { useState } from "react";

const pageInt = 1;

export const usePageLoc = () => {
  const [pageLoc, setPageLoc] = useState(1);

  const onClickPage = (page: number) => {
    setPageLoc(page);
  };

  const onSubmit = () => {
    setPageLoc(pageInt);
  };

  return { pageLoc, onClickPage, onSubmit };
};
