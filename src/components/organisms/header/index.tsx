import { layoutStyles } from "@/styles/layout-styles";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import {
  HiChevronDown,
  HiOutlineBell,
  HiOutlineUser,
  HiSearch,
} from "react-icons/hi";

interface Props {
  className?: string;
  user?: {
    nickname: string;
  };
  contentAuthorNickname?: string;
}

export const Header = (props: Props) => {
  return (
    <div
      className={clsx(
        `flex justify-between h-14`,
        layoutStyles.px,
        props.className
      )}
      data-testid={"header"}
    >
      <div className="flex items-center">
        <Link href={`/`} aria-label="home">
          <Image
            width={16}
            height={16}
            src={"/vercel.svg"}
            alt="home"
            className="mr-4"
          ></Image>
        </Link>
        {props.contentAuthorNickname && (
          <Link
            href={`/users/c6e6f62c-a424-4a9f-bdb4-19964f51e7b5`}
            aria-label={`${props.contentAuthorNickname} - home`}
          >
            <span>
              <span>{props.contentAuthorNickname}</span>
              <span>님의 블로그</span>
            </span>
          </Link>
        )}
      </div>
      <div className="flex items-center">
        <Link href={`/notification`} className="p-3" aria-label="notification">
          <HiOutlineBell className="text-2xl" />
        </Link>

        <Link href={`/search`} className="p-3" aria-label="search">
          <HiSearch className="test-2xl" />
        </Link>
        <Link
          href={`/contents/post`}
          className="border-green-300 border-2 rounded-r-full rounded-l-full text-green-400 text-sm px-3 py-1 mr-2"
        >
          새 글 작성
        </Link>
        {props.user !== undefined ? (
          <button className="flex items-center" aria-label="user-menu">
            <HiOutlineUser className="text-2xl" />
            <HiChevronDown />
          </button>
        ) : (
          <Link
            href="/users/sign-in"
            className="font-medium bg-neutral-800 px-4 py-2 rounded-r-full rounded-l-full"
          >
            로그인
          </Link>
        )}
      </div>
    </div>
  );
};
