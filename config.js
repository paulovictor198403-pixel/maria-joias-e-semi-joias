/* CONFIGURAÇÃO: preencha estes dois valores no painel do Supabase antes de publicar. */
window.MARIA_SUPABASE_URL = 'COLE_AQUI_A_URL_DO_PROJETO_SUPABASE';
window.MARIA_SUPABASE_ANON_KEY = 'COLE_AQUI_A_CHAVE_PUBLICA_ANON';
window.MARIA_WHATSAPP = '5587991359946';
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
