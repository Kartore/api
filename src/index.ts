import { Hono } from 'hono';
import github from '~/github';

const app = new Hono();

app.route('/github', github);

app.get('/', (c) => {
  return c.text('Hello Hono!');
});

export default app;
