import clsx from "clsx";
import Image from "next/image";
import { ChangeEventHandler } from "react";

interface Props {
  className?: string;
  src: string;
  url: string | undefined;
  onChange: ChangeEventHandler<HTMLInputElement>;
  "aria-label"?: string;
  alt: string;
}

export const InputImage = (props: Props) => {
  return (
    <div className={clsx(props.className)}>
      <label htmlFor="thumbnail" className="cursor-pointer">
        <Image width={200} height={200} alt={props.alt} src={props.src} />
      </label>
      <input
        type="file"
        accept="image/*"
        className="hidden"
        id="thumbnail"
        onChange={props.onChange}
        aria-label={props["aria-label"]}
      />
    </div>
  );
};
