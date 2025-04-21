import { client } from "@/utils/constants";
import IndividualBlog from "@/components/page-components/individualblog";
import { IndvidualBlog } from "@/utils/types";


export default async function Blog({params}:{params:Promise<{blogId:string}>}) {
    const {blogId}=(await params)

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
        <IndividualBlog data={individualBlogData as IndvidualBlog}/>
    )
}