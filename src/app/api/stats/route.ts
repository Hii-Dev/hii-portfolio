import { NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Idle clients emit "error" on unexpected disconnects; without a handler
// this throws unhandled and can crash the process.
pool.on("error", (error) => {
  console.error("Unexpected pg pool error:", error);
});

export const revalidate = 600;

const VALID_PLATFORMS = ["zenn", "note", "sizu"];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const platform = searchParams.get("platform");

  if (!platform || !VALID_PLATFORMS.includes(platform)) {
    return NextResponse.json(
      { error: "platform が指定されていないか、不正な値です" },
      { status: 400 }
    );
  }

  const client = await pool.connect();

  try {
    const { rows } = await client.query(
      `SELECT articles, likes, flowers, views
       FROM platform_stats
       WHERE platform = $1
       LIMIT 1`,
      [platform]
    );

    if (rows.length === 0) {
      return NextResponse.json(
        { error: "指定されたプラットフォームのデータが見つかりません" },
        { status: 404 }
      );
    }

    const data = rows[0];

    return NextResponse.json({
      platform,
      articles: data.articles,
      likes: data.likes,
      flowers: data.flowers,
      views: data.views,
    });
  } catch (error) {
    console.error("DBエラー:", error);
    return NextResponse.json(
      { error: "DB接続またはクエリ実行に失敗しました" },
      { status: 500 }
    );
  } finally {
    client.release();
  }
}
