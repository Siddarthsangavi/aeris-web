import { useEffect, useState } from 'react';
import { fetchWithCache } from './api';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchWithCache('/')
      .then(setMessage)
      .catch(err => setMessage('Error: ' + err.message));
  }, []);

  return (
    <div className="App">
      <h1>Aeris Frontend</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
