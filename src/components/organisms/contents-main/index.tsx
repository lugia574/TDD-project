"use client";

import { layoutStyles } from "@/styles/layout-styles";
import clsx from "clsx";
import { HiSearch } from "react-icons/hi";
import { list } from "radashi";
import { ContentsItem } from "@/components/molecules/contents-item";
import { useInputText } from "@/hooks/use-input-text";
import { usePages } from "./hooks/use-pages";
import { FormEventHandler } from "react";
import { usePageLoc } from "./hooks/use-page-loc";

interface Props {
  className?: string;
}

export const ContentsMain = (props: Props) => {
  const { text: searchText, onChange: searchOnChange } = useInputText("");
  const { pages, onSubmit: onSubmitPages } = usePages();
  const { pageLoc, onClickPage, onSubmit: pageLocOnSubmit } = usePageLoc();

  const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    await onSubmitPages(searchText);
    pageLocOnSubmit();
  };
  return (
    <div className={clsx(layoutStyles.mx, props.className)}>
      <form onSubmit={onSubmit} className="flex items-center mx-auto max-w-96">
        <select
          name="sort"
          id="sort"
          className="bg-neutral-800 px-2 py-1 rounded "
        >
          <option value="create-at-desc">최신순</option>
          <option value="title-asc">제목순</option>
        </select>
        <div className="flex items-center border-b-2 grow ml-4">
          <input
            type="text"
            name="search"
            id="search"
            className="bg-transparent outline-none grow px-4 py-1"
            onChange={searchOnChange}
            value={searchText}
            aria-label="search"
          />
          <HiSearch className="text-xl" />
        </div>
      </form>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {list(0, 11).map((item) => (
          <ContentsItem key={item} />
        ))}
      </div>
      <div
        className="flex justify-center items-center mt-8"
        data-testid={"pagination"}
      >
        {pages.map((c) => (
          <button
            key={c}
            className={clsx(
              "px-2 py-2 mr-2 last:mr-0 rounded data-[selected=true]:bg-neutral-800"
            )}
            onClick={() => {
              onClickPage(c);
            }}
            data-selected={c === pageLoc}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
};
