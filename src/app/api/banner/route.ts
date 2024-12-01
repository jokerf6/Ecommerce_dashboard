import { parseQueryParams } from "@/lib/queryParsed";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const { limit, skip, filterObj } = parseQueryParams(req);

  try {
    const banners = await prisma.banner.findMany({
      where: filterObj,
      skip: skip,
      take: limit,
    });

    return NextResponse.json(
      {
        message: "Get Banners Successfully",
        data: banners,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching banners", error: error.message },
      { status: 500 }
    );
  }
}
