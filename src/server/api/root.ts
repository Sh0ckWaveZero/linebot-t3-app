import { createTRPCRouter } from "./trpc";
import { exampleRouter } from "./routers/example";
import { accountRouter } from './routers/account';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  account: accountRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
