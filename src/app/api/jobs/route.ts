import { client } from "@/utils/constants";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const queryAll = ` *[_type == 'job']{
        ...,
            
               "publishedAt":_createdAt}`;

  const jobsAll: any = await client.fetch({
    query: queryAll,
    config: {
      cache: "no-store",
    },
  });

  const job = req.nextUrl.searchParams.get("job");
  const limit = Number(req.nextUrl.searchParams.get("limit"));
  const page = Number(req.nextUrl.searchParams.get("page"));
  const totalItems = jobsAll.length;
  const totalPages =
    totalItems / limit < 1 ? 1 : Math.round(totalItems / limit);
  const skipStart = (page - 1) * limit;
  const skipEnd = (page + 1) * limit;

  const query = ` *[_type == 'job'][${skipStart}..${limit==1?skipStart:skipEnd}][name match '${job}*']{
        ...,
            
               "publishedAt":_createdAt}`;

  const blogsData = await client.fetch({
    query,
    config: {
      cache: "no-store",
    },
  });

  const returnData = {
    page,
    totalPages,
    data: blogsData,
    totalItems,
  };
  return NextResponse.json(returnData);
}
