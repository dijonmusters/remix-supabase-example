import { createClient } from "@supabase/supabase-js";

const isServer = typeof window === "undefined";

const supabaseUrl = isServer
  ? process.env.SUPABASE_URL
  : window.env.SUPABASE_URL;

const supabaseAnonKey = isServer
  ? process.env.SUPABASE_ANON_KEY
  : window.env.SUPABASE_ANON_KEY;

export default createClient(supabaseUrl, supabaseAnonKey);
