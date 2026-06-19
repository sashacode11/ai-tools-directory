import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://ljjcbcxyinpykmcueykm.supabase.co',
  'sb_publishable_Opn0yui1j33Ohiz5biMsqQ_Yx6GxsMO',
);

const { count } = await supabase
  .from('tools')
  .select('*', { count: 'exact', head: true });

console.log(`Total tools in database: ${count}`);
