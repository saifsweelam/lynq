import type { CreateExpressContextOptions } from "@trpc/server/adapters/express"
import { auth } from "./lib/auth"
import { fromNodeHeaders } from "@repo/auth/server"

export async function createContext({ req, res }: CreateExpressContextOptions) {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  })

  return {
    user: session?.user ?? null,
    session,
    req,
    res,
  }
}

export type Context = Awaited<ReturnType<typeof createContext>>
