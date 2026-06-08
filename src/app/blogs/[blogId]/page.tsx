import { client } from "@/utils/constants";
import IndividualBlog from "@/components/page-components/individualblog";
import { IndvidualBlog } from "@/utils/types";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ blogId: string }>;
}): Promise<Metadata> {
  const { blogId } = await params;
  try {
    const blog: { title: string } = await client.fetch({
      query: `*[_type == 'blog' && _id=='${blogId}'][0]{ title }`,
      config: {
        cache: "no-store",
      },
    });

    if (blog && blog.title) {
      return {
        title: `${blog.title} | MGC Freight`,
        description: `Read our latest blog: ${blog.title}. Stay updated with logistics insights from MGC Freight.`,
      };
    }
  } catch (error) {
    console.error("Error generating metadata for blog:", error);
  }

  return {
    title: "Blog | MGC Freight",
    description: "Read the MGC Freight blog for expert insights and updates on logistics.",
    keywords: ["blogs", "freight blogs", "MGC Freight blogs", "logistics blogs", "supply chain blogs", "transportation blogs"],
    openGraph: {
      title: "Blog | MGC Freight",
      description: "Read our latest blog posts for expert insights on logistics and freight shipping.",
      type: "website",
      locale: "en_US",
      siteName: "MGC Freight",
    },
    twitter: {
      card: "summary_large_image",
      title: "Blog | MGC Freight",
      description: "Expert insights on logistics and freight shipping.",
    },
  };
}



export default async function Blog({ params }: { params: Promise<{ blogId: string }> }) {
  const { blogId } = (await params)

  const individualBlogData = await client.fetch({
    query: `*[_type == 'blog' && _id=='${blogId}'][0]{
"id":_id,
  "imageUrl":image.asset->url,
    "title":title,
     "publishedAt":_createdAt,
 "content":[...contents[].children[]]}`,
    config: {
      cache: 'no-store'
    }
  })

  return (
    <IndividualBlog data={individualBlogData as IndvidualBlog} />
  )
}