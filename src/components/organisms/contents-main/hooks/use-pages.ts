import { list } from "radashi";
import { useEffect, useState } from "react";
import { loadCount } from "../server-side";

const pageStart = 1;
const pageTake = 12;

export const usePages = () => {
  const [pages, setPages] = useState<number[]>([]);

  useEffect(() => {
    (async () => {
      const count = await loadCount();
      const pageMax = Math.ceil(count / pageTake);
      const pagesNext = pageMax === 0 ? [] : list(pageStart, pageMax);
      setPages(pagesNext);
    })();
  }, []);

  const onSubmit = async (search: string) => {
    const count = await loadCount(search);
    const pageMax = Math.ceil(count / pageTake);
    const pagesNext = pageMax === 0 ? [] : list(pageStart, pageMax);
    setPages(pagesNext);
  };

  return {
    pages,
    onSubmit,
  };
};
