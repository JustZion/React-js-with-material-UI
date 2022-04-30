import React from 'react'
import Card from '@material-ui/core/Card'
import { Avatar, CardContent, CardHeader, makeStyles, Typography } from '@material-ui/core'
import {IconButton} from '@material-ui/core'
import { DeleteOutlined } from '@material-ui/icons'
import { blue, green, red, yellow } from '@material-ui/core/colors'

function NoteCard({note, deletee}) {

  const useStyles = makeStyles({
    test: {
      background: 
      (note) => {
        if ( note.category == 'web') {
            return red [700]
          }

          if ( note.category == 'money') {
            return yellow[700]
          }

          if ( note.category == 'time') {
            return green[700]
      }

        return blue[700]
    
    }
  
  
  }})

  const classes= useStyles(note)
  
  return (

  

    <Card elevation={3}>
      <CardHeader
      avatar = {
        <Avatar className={classes.test}  >{note.title[0].toUpperCase()}</Avatar>
      }
      action= {
        <IconButton onClick={() => deletee(note.id)}>
          <DeleteOutlined />
        </IconButton>
      }
      title = {note.title}
      subheader ={note.category}
       />
       <CardContent>
         <Typography variant='body2' color='textSecondary'>
           {note.details}
         </Typography>
       </CardContent>
   
    </Card>
  )
}

export default NoteCard
