import { ContentsMain } from "@/components/organisms/contents-main";
import { Footer } from "@/components/organisms/footer";
import { Header } from "@/components/organisms/header";
import { getAuthUser } from "@/effects/authorization";
import { cookies } from "next/headers";

export default async function ContentsDetail() {
  const user = await getAuthUser(cookies);

  return (
    <>
      <Header user={user} />
      <ContentsMain />
      <Footer />
    </>
  );
}
