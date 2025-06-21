import { publicProcedure, router } from "./trpc";
import { createHTTPServer } from '@trpc/server/adapters/standalone';

const appRouter = router({
    getHelloWorld: publicProcedure.query(() => {
        return 'Hello, world!';
    }),
});

const server = createHTTPServer({
    router: appRouter,
});

server.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});