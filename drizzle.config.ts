import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/lib/db/schema.ts',
  out: './src/lib/db/migrations.ts',
  dialect: 'sqlite',
  dbCredentials: {
    url: './src/lib/db/reps.db',
  },
  verbose: true,
  strict: true,
});
