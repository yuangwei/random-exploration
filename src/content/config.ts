import { z, defineCollection } from "astro:content";

const post = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string().max(60),
      description: z.string().min(50).max(160),
      createDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      updatedDate: z
        .string()
        .optional()
        .transform((str) => (str ? new Date(str) : undefined)),
      coverImage: z
        .object({
          src: image(),
          alt: z.string(),
        })
        .optional(),
      ogImage: z.string().optional(),
    }),
});

export const collections = { post };