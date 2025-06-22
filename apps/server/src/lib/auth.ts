import { createAuth } from '@repo/auth/server';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export const auth = createAuth(prisma, {
  provider: "postgresql",
});
