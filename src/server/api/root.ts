import { postRouter } from "~/server/api/routers/post";
import { clerkRouter } from "~/server/api/routers/clerk";
import { createTRPCRouter } from "~/server/api/trpc";
import { inngestRouter } from "./routers/inngest";
import { threadsRouter } from "./routers/threads";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  clerk: clerkRouter,
  inngest: inngestRouter,
  threads: threadsRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
