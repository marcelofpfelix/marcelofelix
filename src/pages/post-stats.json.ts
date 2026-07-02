import { postStats } from "../data/post-stats";

export function GET() {
  return Response.json(postStats);
}

export const POST = GET;
