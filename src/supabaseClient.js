// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://blxfllyoznxrfmmgnoss.supabase.co/';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJseGZsbHlvem54cmZtbWdub3NzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU0MDg5NTAsImV4cCI6MjA0MDk4NDk1MH0.coHfK6gExxeFD4YEox0fwsEsp3B-UYz-8PsO5N0ofUg';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
