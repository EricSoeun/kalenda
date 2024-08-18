import { z } from "zod";

export const ProduceSchema = z.object({
  _id: z.string(),
  title: z.string(),
  latinTitle: z.string(),
  produceType: z.string(),
  image: z.string(),
  description: z.string(),
  startAt: z.number(),
  endAt: z.number(),
  isExotic: z.boolean(),
  totalDays: z.number(),
  remainingDays: z.number(),
  spendingDays: z.number(),
  __v: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const ProducesSchema = z.array(ProduceSchema);