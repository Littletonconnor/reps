import { unlinkSync, existsSync } from 'fs';

async function reset() {
  console.log('🔄 Resetting database...');

  const dbPath = '../lib/db/reps.db';
  if (existsSync(dbPath)) {
    unlinkSync(dbPath);
    console.log('🗑️  Deleted existing database');
  }

  console.log('✅ Database reset complete');
  console.log('💡 Run "npm run db:seed" to create fresh data');
}

reset().catch(console.error);
