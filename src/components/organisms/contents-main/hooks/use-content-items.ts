import { ContentView } from "@/domains/content/content.type";
import { useEffect, useState } from "react";
import { loadContentItems } from "../server-side";
import { pageTake } from "../constant";

export const useContentItems = (pageLoc: number) => {
  const [items, setItems] = useState<ContentView[]>([]);

  useEffect(() => {
    (async () => {
      const next = await loadContentItems({ pageNum: pageLoc, pageTake });
      setItems(next);
    })();
  }, [pageLoc]);

  return { items };
};
