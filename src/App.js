import './css/index.css';
import { useState } from 'react';
import StarRate from './components/StarRate';
import Dialog from './components/Dialog';

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="container">
      <h1>Rating System</h1>
      <StarRate />
      <button onClick={() => setIsDialogOpen(true)}>Open Dialog</button>
      {isDialogOpen && <Dialog onClose={() => setIsDialogOpen(false)} />}
    </div>
  );
}

export default App;