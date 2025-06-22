import express from 'express';
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import { toNodeHandler } from "@repo/auth/server";
import { renderTrpcPanel } from 'trpc-ui';
import { publicProcedure, router } from "./lib/trpc";
import { auth } from "./lib/auth";
import { createContext } from "./context";

const app = express();

const appRouter = router({
    getHelloWorld: publicProcedure
        .query(() => {
            return 'Hello, world!';
        }),
});

app.all('/api/auth/{*any}', toNodeHandler(auth));

app.use('/docs', (req, res) => {
    res.send(renderTrpcPanel(appRouter, {
        url: '/',
    }))
});

app.use(createExpressMiddleware({
    router: appRouter,
    createContext,
}));

app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});

export type AppRouter = typeof appRouter;
