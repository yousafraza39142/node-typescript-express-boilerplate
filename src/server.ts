import express from 'express';
import appRouter from './app';

const app = express();

const port = process.env?.port || 5000;

app.use('/api', appRouter);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('server is listining at port:', port);
});
