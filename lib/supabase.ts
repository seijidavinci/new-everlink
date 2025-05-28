import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.SUPABASE_URL!
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey)
export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey)

export const generateSequentialID = async (prefix: string): Promise<string> => {
  const { data, error } = await supabaseAdmin.rpc("generate_sequential_id", { p_prefix: prefix })
  if (error) throw new Error(error.message)
  return data
}
