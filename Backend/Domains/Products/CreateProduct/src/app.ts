import 'reflect-metadata';
import { createSchema } from './graphql/schema';
import { createYoga } from 'graphql-yoga';
import express from 'express';

async function startServer() {
  const app = express();
  const schema = await createSchema();

  const yoga = createYoga({ schema });

  app.use('/graphql', yoga);

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`GraphQL ready at http://localhost:${PORT}/graphql`));
}

startServer();
