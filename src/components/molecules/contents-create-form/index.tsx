import { localizeDate } from "@/libs/sub-string";
import { layoutStyles } from "@/styles/layout-styles";
import { middleDot } from "@/utils/string";
import clsx from "clsx";
import { InputImage } from "../input-image";

interface Props {
  className?: string;
}

export const ContentsCreateForm = (props: Props) => {
  return (
    <form className={clsx(layoutStyles.mx, props.className)}>
      <div
        contentEditable
        suppressContentEditableWarning={true}
        className="text-4xl font-bold leading-normal outline-none"
      >
        title
      </div>
      <div className="mb-8">
        <span>{"lugia"}</span>
        <span>{`${middleDot}`}</span>
        <span>{localizeDate(new Date("2025-02-22T00:00"))}</span>
      </div>
      <div
        contentEditable
        suppressContentEditableWarning={true}
        className="leading-snug outline-none min-h-48 pb-12 border-b-2 mb-12"
      >
        body
      </div>
      <div className="flex justify-center mb-12">
        <InputImage />
      </div>
      <div className="flex justify-center mb-20">
        <button
          className="px-4 py-2 rounded font-bold bg-green-300  text-black disabled:bg-neutral-800  disabled:text-white"
          disabled
        >
          생성하기
        </button>
      </div>
    </form>
  );
};
