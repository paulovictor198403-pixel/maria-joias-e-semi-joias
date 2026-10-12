/* CONFIGURAÇÃO: preencha estes dois valores no painel do Supabase antes de publicar. */
window.MARIA_SUPABASE_URL = 'https://ftcwlhtsmnyyxeujjtln.supabase.co';
window.MARIA_SUPABASE_ANON_KEY = 'sb_publishable_7MUc2dLLUoPkCODuBXmOWA_6tBaWWDY';
window.MARIA_WHATSAPP = '5587991352112';
window.mariaSupabaseReady = function () {
  return window.MARIA_SUPABASE_URL.startsWith('https://') &&
    !window.MARIA_SUPABASE_URL.includes('COLE_AQUI') &&
    window.MARIA_SUPABASE_ANON_KEY.length > 30 &&
    !window.MARIA_SUPABASE_ANON_KEY.includes('COLE_AQUI') &&
    window.supabase && window.supabase.createClient;
};
window.mariaClient = function () {
  if (!window.mariaSupabaseReady()) return null;
  if (!window.__mariaClient) window.__mariaClient = window.supabase.createClient(window.MARIA_SUPABASE_URL, window.MARIA_SUPABASE_ANON_KEY);
  return window.__mariaClient;
};
