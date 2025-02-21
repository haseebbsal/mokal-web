import { client } from "@/utils/constants";
import { Blogs } from "@/utils/types";
import BlogsClient from "@/components/page-components/blogs";


const query=` *[_type == 'blog']{
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
            <BlogsClient data={blogsData}/>
        </>
    )
}