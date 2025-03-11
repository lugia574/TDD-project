import { localizeDate } from "@/libs/sub-string";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface Props {
  className?: string;
}

export const ContentsItem = (props: Props) => {
  return (
    <div className={clsx("mt-8", props.className)}>
      <Link href={`/contents${"id"}`} className="flex justify-center">
        <Image width={600} height={600} src={"/file.svg"} alt="title" />
      </Link>
      <h2 className="text-2xl font-bold mt-4">
        <Link href={`/contents${"id"}`}>{`title`}</Link>
      </h2>
      <div className="text-neutral-400">
        <Link href={`/contents${"id"}`}>{`body`}</Link>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div className="flex items-center ">
          <Image
            width={32}
            height={32}
            src={"/globe.svg"}
            alt="nickname"
            className="mr-2"
          />

          <span>{"nickname"}</span>
        </div>
        <div>{localizeDate(new Date("2025-02-22T00:00"))}</div>
      </div>
    </div>
  );
};
