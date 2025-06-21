import { initTRPC, TRPCError } from '@trpc/server'
import superjson from 'superjson'

const t = initTRPC.context().create({
  transformer: superjson,
})

export const router = t.router
export const publicProcedure = t.procedure
export const protectedProcedure = t.procedure.use(({ ctx, next }) => {
//   if (!ctx.user) throw new TRPCError({ code: 'UNAUTHORIZED' })
  return next({ ctx })
})
