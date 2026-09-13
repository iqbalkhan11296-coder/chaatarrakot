const SUPABASE_URL = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjcWV5aGN5Y3drc2l1Ym1saWxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkyODI5NDcsImV4cCI6MjEwNDg1ODk0N30.Tg9x00zKospcR3zyqebeMLkDPkLUJ1rDJcruNB3Itsw";

const SUPABASE_KEY = "sb_publishable_YdIvl7IqdpT0UZOHBumEiw_ZThYEsgV";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);
