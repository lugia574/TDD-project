import Link from "next/link";

interface LinkItem {
  tag: string;
  href: string;
}

const links: LinkItem[] = [
  {
    tag: "컨텐츠 상세페이지",
    href: "/contents/cca7c9d9-23e7-4e64-92a9-e8332b4c073e",
  },
  {
    tag: "컨텐츠 리스트 페이지",
    href: "/contents",
  },
  {
    tag: "컨텐츠 생성 페이지",
    href: "/contents/post",
  },
  {
    tag: "컨텐츠 수정 페이지",
    href: "/contents/cca7c9d9-23e7-4e64-92a9-e8332b4c073e/edit",
  },
];

export const DevNav = () => {
  return (
    <div className={`fixed right-10 bottom-10`}>
      {links.map((item) => (
        <div key={item.tag}>
          <Link href={item.href}>{item.tag}</Link>
        </div>
      ))}
    </div>
  );
};
