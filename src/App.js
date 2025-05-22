import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    if (window.electronAPI?.notifyReactReady) {
      window.electronAPI.notifyReactReady();
    }
  }, []);

  return (
    <div className="App">

      
      
    </div>
  );
}

export default App;
