module.exports = ({ env }) => ({
    'users-permissions': {
      config: {
        jwt: {
          jwtSecret: env('JWT_SECRET'),
          expiresIn: '7d',
        },
      },
    },
  });
   