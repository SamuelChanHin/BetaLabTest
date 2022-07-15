export const configuration = () => ({
  DATABASE_HOST: process.env.DATABASE_HOST || 'localhost',
  DATABASE_USERNAME: process.env.DATABASE_USERNAME || 'postgres',
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || 'postgres',
  DATABASE_DATABASE: process.env.DATABASE_DATABASE,
  DATABASE_PORT: process.env.DATABASE_PORT || 5432,
  PORT: parseInt(process.env.PORT) || 3000,
});
