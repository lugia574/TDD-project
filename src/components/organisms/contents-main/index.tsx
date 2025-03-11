import { layoutStyles } from "@/styles/layout-styles";
import clsx from "clsx";
import { HiSearch } from "react-icons/hi";
import { list } from "radashi";
import { ContentsItem } from "@/components/molecules/contents-item";

interface Props {
  className?: string;
}

export const ContentsMain = (props: Props) => {
  return (
    <div className={clsx(layoutStyles.mx, props.className)}>
      <div className="flex items-center mx-auto max-w-96">
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
          />
          <HiSearch className="text-xl" />
        </div>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {list(0, 11).map((item) => (
          <ContentsItem key={item} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-8">
        {list(0, 1).map((item) => (
          <button
            key={item}
            className={clsx(
              `p-2 mr-2 last:mr-0 rounded`,
              item === 0 && "bg-neutral-800"
            )}
          >
            {item + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
