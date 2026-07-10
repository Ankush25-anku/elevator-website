import { NextResponse } from "next/server";

export async function GET() {
  const placeId = process.env.GOOGLE_PLACE_ID;

  const response = await fetch(
    `https://places.googleapis.com/v1/places/${placeId}`,
    {
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": process.env.GOOGLE_API_KEY,
        "X-Goog-FieldMask":
          "displayName,rating,userRatingCount,reviews",
      },
    }
  );

  const data = await response.json();

  return NextResponse.json({
    apiKeyPrefix: process.env.GOOGLE_API_KEY?.slice(0, 15),
    status: response.status,
    data,
  });
}