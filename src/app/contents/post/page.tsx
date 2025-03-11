import { ContentsCreateForm } from "@/components/molecules/contents-create-form";
import { Footer } from "@/components/organisms/footer";
import { Header } from "@/components/organisms/header";

export default function ContentsPostPage() {
  return (
    <>
      <Header />
      <ContentsCreateForm />
      <Footer />
    </>
  );
}
