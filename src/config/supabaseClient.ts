import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabaseSKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey || !supabaseSKey) {
    throw new Error('No se logró conectar al servicio de Base de Datos');
}

export const supabase = createClient(
    supabaseUrl, 
    process.env.SUPABASE_KEY!
);

export const supabaseAdmin = createClient(
    supabaseUrl, 
    supabaseSKey!,
    {
        auth: {
            autoRefreshToken: false,
            persistSession: false
        }
    }
);