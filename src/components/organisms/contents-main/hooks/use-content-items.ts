import { ContentSortOption, ContentView } from "@/domains/content/content.type";
import { useEffect, useState } from "react";
import { loadContentItems } from "../server-side";
import { pageTake } from "../constant";

export const useContentItems = (
  pageLoc: number,
  selectSort: ContentSortOption
) => {
  const [items, setItems] = useState<ContentView[]>([]);

  useEffect(() => {
    (async () => {
      const next = await loadContentItems({
        pageNum: pageLoc,
        pageTake,
        sort: selectSort,
      });
      setItems(next);
    })();
  }, [pageLoc, selectSort]);

  return { items };
};
