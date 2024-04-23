import { defineCollection, z } from "astro:content";

const organizers = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      featured: z.number().min(1).optional(),
      image: image(),
      name: z.string(),
      width: z.string().optional(),
    }),
});

const sponsors = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      featured: z.number().min(1).optional(),
      image: image(),
      name: z.string(),
      width: z.string().optional(),
    }),
});

export const collections = {
  organizers,
  sponsors,
};
