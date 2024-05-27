import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

import { faker } from "@faker-js/faker";

export const postRouter = createTRPCRouter({
  // This is the example procedure we call from the homepage
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return ctx.db.post.create({
        data: {
          name: input.name,
        },
      });
    }),

  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.post.findFirst({
      orderBy: { createdAt: "desc" },
    });
  }),

  _populateFakeUsers: publicProcedure
    .input(z.object({ count: z.number() }))
    .mutation(async ({ ctx, input }) => {
      // populate db with some data
      await ctx.db.user.createMany({
        data: Array.from({ length: input.count }).map((_) => ({
          email: faker.internet.email(),
          name: faker.person.fullName(),
        })),
      });
    }),
});
