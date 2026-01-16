export interface Environment {
  production: boolean;
  apiUrl: string;
  supabaseUrl: string;
  supabaseKey: string;
}

export const environment: Environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  supabaseUrl: 'YOUR_SUPABASE_URL',
  supabaseKey: 'YOUR_SUPABASE_ANON_KEY'
};