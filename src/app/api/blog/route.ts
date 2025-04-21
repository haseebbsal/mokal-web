import { client } from "@/utils/constants";
import { Blogs } from "@/utils/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const searchQuery = req.nextUrl.searchParams.get('searchQuery')


    const query = ` *[_type == 'blog'][title match '${searchQuery}*']{
    "id":_id,
      "imageUrl":image.asset->url,
        "title":title,
         "publishedAt":_createdAt,
     "content":[...contents[].children[]]}`


    const blogsData: Blogs = await client.fetch({
        query,
        config: {
            cache: 'no-store',
        }
    }
    )
    return NextResponse.json(blogsData)
}