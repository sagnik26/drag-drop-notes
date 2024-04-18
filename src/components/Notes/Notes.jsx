import React, { useEffect } from 'react'
import Note from './Note'

const Notes = ({ notes = [], setNotes = () => {} }) => {

  const determineNewPosition = () => {
    const maxX = window.innerWidth - 250;
    const maxY = window.innerHeight - 250;

    return {
        x: Math.floor(Math.random() * maxX),
        y: Math.floor(Math.random() * maxY)
    }
  }

  useEffect(() => {
    // LocalStorage Logic
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

    const updatedNotes = notes.map((note) => {
        const savedNote = savedNotes.find((n) => n.id === note.id);
        if(savedNote) {
            return {...note, position: savedNote.position};
        }
        else {
            const position = determineNewPosition();
            return { ...note, position };
        }
    })

    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  }, [notes.length]);

  return (
    <div>
      {
        notes.map((note) => {
            return (
                <Note
                    id={note.id}
                    content={note.text}
                    initialPos={note.position}
                />
            )
        })
      }
    </div>
  )
}

export default Notes
