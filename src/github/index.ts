import { githubAuth } from '@hono/oauth-providers/github';
import { Hono } from 'hono';

const github = new Hono();

github.use(
  '/login',
  githubAuth({
    oauthApp: true,
    scope: ['user:email', 'read:user', 'repo:status', 'read:org'],
  })
);

github.get('/login', async (c) => {
  const token = c.get('token');
  const user = c.get('user-github');
  const refreshToken = c.get('refresh-token');

  return c.json({
    token,
    refreshToken,
    user,
  });
});

github.post('/refresh', async (c) => {
  return c.json({});
});

export default github;
