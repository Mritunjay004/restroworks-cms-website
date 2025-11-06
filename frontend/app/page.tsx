import { getPage } from "@/lib/api";
import BlockRenderer from "@/components/BlockRenderer";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage("home");

  return {
    title: page?.seo?.title || "Home",
    description: page?.seo?.description || "",
    openGraph: {
      title: page?.seo?.title || "Home",
      description: page?.seo?.description || "",
      images: page?.seo?.image?.url ? [page.seo.image.url] : [],
    },
  };
}

export default async function Home() {
  const page = await getPage("home");

  if (!page) {
    return <div>Page not found</div>;
  }

  return (
    <div>
      {page.blocks?.map((block: any, index: number) => (
        <BlockRenderer key={index} block={block} />
      ))}
    </div>
  );
}
