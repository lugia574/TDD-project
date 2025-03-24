import { ContentView } from "@/domains/content/content.type";
import { localizeDate } from "@/libs/sub-string";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface Props extends ContentView {
  className?: string;
}

export const ContentsItem = (props: Props) => {
  return (
    <div className={clsx("mt-8", props.className)} data-testid="content-item">
      <Link href={`/contents${props.id}`} className="flex justify-center">
        <Image
          width={600}
          height={600}
          src={props.thumbnail}
          alt={`${props.thumbnail}-thumbnail`}
        />
      </Link>
      <h2 className="text-2xl font-bold mt-4">
        <Link href={`/contents${props.id}`}>{props.title}</Link>
      </h2>
      <div className="text-neutral-400">
        <Link href={`/contents${props.id}`}>{props.body}</Link>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div className="flex items-center ">
          <Image
            width={32}
            height={32}
            src={props.author.imgUrl}
            alt={`${props.author.nickname}-image`}
            className="mr-2"
          />

          <span>{props.author.nickname}</span>
        </div>
        <div>{localizeDate(props.createdAt)}</div>
      </div>
    </div>
  );
};
