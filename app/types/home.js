import {z} from 'zod'

export const homeZ = z.object({
  title: z.string().nullable(),
  siteTitle: z.string().nullable(),
})
