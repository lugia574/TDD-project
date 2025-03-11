import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface Props {
  className?: string;
}

export const ContentDetailAuthorAside = (props: Props) => {
  return (
    <aside className={clsx("mt-8", props.className)}>
      <Image width={64} height={64} alt={"lugia"} src={"/globe.svg"} />
      <Link href={`/user/id`}>{"lugia"}</Link>
    </aside>
  );
};
