import { createClient } from "@supabase/supabase-js";
import User from "../(models)/user";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(url, key);

export async function getUsers(): Promise<User[]> {
    // Fetch users from the 'users' table
    const { data: users, error } = await supabase.from('users').select('*');

    if (error) {
        console.error('Error fetching users:', error.message);
        throw new Error('Failed to fetch users');
    }

    return users || [];
}