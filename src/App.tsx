import './App.css';
import { createClient } from '@supabase/supabase-js';

function App() {

  const connectToSupaBase = () => {
    console.log("Connecting to SupaBase...");
    const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
    const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
    const supabase = createClient(supabaseUrl!, supabaseKey!);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello!
        </p>
        <p>
          This is a SupaBase project created by Douglas Driving.
        </p>
        <p>
          I am using this project as a way to learn about how to work with SupaBase
          as a backend for my web apps.
        </p>
        <button onClick={connectToSupaBase}>
          Connect to SupaBase
        </button>
      </header>
    </div>
  );
}

export default App;
