import '@testing-library/jest-dom'

// next/jest does not load .env.local when NODE_ENV=test, so provide
// dummy Supabase env vars to keep lib/supabase.ts import-safe in tests.
process.env.NEXT_PUBLIC_SUPABASE_URL ||= 'http://localhost:54321'
process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||= 'test-anon-key'
