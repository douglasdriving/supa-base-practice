import { createClient } from '@supabase/supabase-js';
import { useState } from 'react';
import SupaBasePlayground from './supaBasePlayground/supaBasePlayground';

function SupaBaseConnector() {

  const [connected, setConnected] = useState(false);
  const [supabase, setSupabase] = useState<any>(null);

  const connect = () => {
    console.log("Connecting to SupaBase...");

    const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
    const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

    if (supabaseUrl && supabaseKey) {
      const newSupabase = createClient(supabaseUrl, supabaseKey);
      console.log("SupaBase connected", newSupabase);
      setConnected(true);
      setSupabase(newSupabase);
    } else {
      console.error("Can't connect to SupaBase. Environment variables are not set");
    }
  }

  return (
    <>

      {!connected &&
        <button onClick={connect}>
          Connect to SupaBase
        </button>
      }

      {connected && <SupaBasePlayground supabase={supabase.supabase} connected={connected} />}

    </>
  )
}

export default SupaBaseConnector;