import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(url, key);

// 1. Make requests
// 2. Return either stored data or error object --> Result Class?

export class SupabaseService {}
