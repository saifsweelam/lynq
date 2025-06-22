import { betterAuth } from "better-auth"
import { prismaAdapter } from "better-auth/adapters/prisma";

export const createAuth = (...params: Parameters<typeof prismaAdapter>) => {
    return betterAuth({
        database: prismaAdapter(...params),
        emailAndPassword: {
            enabled: true
        },
    })
}

export { toNodeHandler, fromNodeHeaders } from "better-auth/node";
