import { ContentsCreateForm } from "@/components/molecules/contents-create-form";
import { Footer } from "@/components/organisms/footer";
import { Header } from "@/components/organisms/header";
import { getAuthUser } from "@/effects/authorization";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function ContentsPostPage() {
  const user = await getAuthUser(cookies);

  if (user === undefined) redirect("/users/sign-in");
  return (
    <>
      <Header user={user} />
      <ContentsCreateForm />
      <Footer />
    </>
  );
}
