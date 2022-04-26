module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'whitelabel-postgres'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'whitelabelstrapi'),
        username: env('DATABASE_USERNAME', 'whitelabelstrapi'),
        password: env('DATABASE_PASSWORD', 'whitelabelstrapi123'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
