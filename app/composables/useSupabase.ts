import { createClient } from '@supabase/supabase-js';
import { useRuntimeConfig } from '#app';

export const useSupabase = () => {
  const config = useRuntimeConfig();
  return createClient(config.public.supabaseUrl, config.public.supabaseKey);
};
