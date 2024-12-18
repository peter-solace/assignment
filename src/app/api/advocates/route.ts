  import db from "../../../db";
import {advocates} from "../../../db/schema";
import {ilike, or, sql} from "drizzle-orm";

const PAGE_LIMIT = 5;

export async function GET(req: Request) {
  const url = new URL(req.url);
  const query = url.searchParams.get("query") || "";
  const page = parseInt(url.searchParams.get("page") || "1", 10);
  const offset = (page - 1) * PAGE_LIMIT;
  const where = ilike(advocates.contentSearch, `%${query}%`);

  const items = await db
    .select()
    .from(advocates)
    .where(where)
    .limit(PAGE_LIMIT)
    .offset(offset);

  // Fetch total count for metadata
  const totalCountResult = await db
    .select({count: sql`COUNT(id)`})
    .from(advocates)
    .where(where);

  const totalCount = totalCountResult[0]?.count || 0;

  return Response.json({
    items,
    meta: {
      currentPage: page,
      totalPages: Math.ceil(totalCount / PAGE_LIMIT),
    },
  });
}