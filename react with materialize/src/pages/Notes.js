import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import NoteCard from '../components/NoteCard'
import {Container, Divider} from '@material-ui/core'
import Masonry from 'react-masonry-css'

export default function Notes() {

  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch('https://myserverrr.herokuapp.com/notes')
    .then(res => res.json())
    .then(data => setNotes(data))
  }, [])

  const handleDelete = async (id) => {
    await fetch('https://myserverrr.herokuapp.com/notes/' + id , {
      method: 'DELETE'
    })

    const newNotes = notes.filter(note => note.id != id )
    setNotes(newNotes)
  }

  const breakPoints = {
    default: 3,
    2000: 3,
    2500: 4,
    1100: 2,
    900: 1
  }
  return (
    <Container>
   

   
      <Masonry
      breakpointCols={breakPoints}
      className='my-masonry-grid'
      columnClassName='my-masonry-grid_column'
      >
      {
        notes.map(note => (
          <div key={note.id}  >
            <NoteCard note={note} deletee = {handleDelete} />
          </div>
        ))
      }
      </Masonry>
   
    
   
    </Container>
  )
}
