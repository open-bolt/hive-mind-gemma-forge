// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ijjstprfqwjcyxslitgn.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqanN0cHJmcXdqY3l4c2xpdGduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM4NDM5NjgsImV4cCI6MjA1OTQxOTk2OH0.gb2XxqD3d4yryjJJfmCov4Btz4fuguLJzxZa5Y9sSPo";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);