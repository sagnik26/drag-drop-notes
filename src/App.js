import React, { useState } from 'react';
import './App.css';
import Notes from './components/Notes/Notes';

function App() {
  const [notes, setNotes] = useState([
    {
        id: 1,
        text: "Helllo I am Sagnik Ghosh"
    },
    {
        id: 2,
        text: "I am a software engineer"
    }
  ]);

  return (
    <div>
      <Notes notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default App;
