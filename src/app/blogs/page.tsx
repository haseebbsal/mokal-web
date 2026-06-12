import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Logistics & Shipping Blog | MGC Freight",
  description: "Stay up to date with the latest industry news, expert logistics advice, and shipping guides on the MGC Freight blog.",
  keywords: ["blogs", "freight blogs", "MGC Freight blogs", "logistics blogs", "supply chain blogs", "transportation blogs"],
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL,
  },
  openGraph: {
    title: "Logistics & Shipping Blog | MGC Freight",
    description: "Read expert insights and updates on freight shipping and logistics.",
    type: "website",
    locale: "en_US",
    siteName: "MGC Freight",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | MGC Freight",
    description: "Latest trends and insights in logistics.",
  },
};

import { client } from "@/utils/constants";
import { Blogs } from "@/utils/types";
import BlogsClient from "@/components/page-components/blogs";


const query = ` *[_type == 'blog']{
  "authorName":Author.authorName,
    "authorImg":Author.authorImage.asset->url,
"id":_id,
  "imageUrl":image.asset->url,
    "title":title,
     "publishedAt":_createdAt,
 "content":[...contents[].children[]]}`


export default async function BlogsPage() {



  const blogsData: Blogs = await client.fetch({
    query,
    config: {
      cache: 'no-store',
    }
  }
  )


  return (
    <>
      <BlogsClient data={blogsData} />
    </>
  )
}