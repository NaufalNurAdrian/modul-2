
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nninaelezcuywkptiqre.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5uaW5hZWxlemN1eXdrcHRpcXJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0NjU3MDgsImV4cCI6MjA0NzA0MTcwOH0.4qzyD-JDlIQ6M08ZtAZc2P02-YdfUodj7KBUAi2_8J4"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase 