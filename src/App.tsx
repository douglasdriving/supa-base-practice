import './App.css';
import SupaBaseConnector from './components/supaBaseConnector/supaBaseConnector';

function App() {

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

        <SupaBaseConnector />
      </header>
    </div>
  );
}

export default App;
