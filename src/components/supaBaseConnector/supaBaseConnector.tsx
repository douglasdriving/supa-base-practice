import { createClient } from '@supabase/supabase-js';

function SupaBaseConnector() {

  const connectToSupaBase = () => {
    console.log("Connecting to SupaBase...");

    const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
    const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

    if (supabaseUrl && supabaseKey) {
      const supabase = createClient(supabaseUrl, supabaseKey);
      console.log("SupaBase connected", supabase);
    } else {
      console.error("Can't connect to SupaBase. Environment variables are not set");
    }
  }

  return (
    <button onClick={connectToSupaBase}>
      Connect to SupaBase
    </button>
  )
}

export default SupaBaseConnector;