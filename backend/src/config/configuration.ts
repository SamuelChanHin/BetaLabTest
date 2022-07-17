export const configuration = () => ({
  DATABASE_HOST: process.env.POSTGRES_HOST || 'localhost',
  DATABASE_USERNAME: process.env.POSTGRES_USER || 'postgres',
  DATABASE_PASSWORD: process.env.POSTGRES_PASSWORD || 'postgres',
  DATABASE_DATABASE: process.env.POSTGRES_DB,
  DATABASE_PORT: process.env.POSTGRES_PORT || 5432,
  PORT: parseInt(process.env.PORT) || 3000,
});
