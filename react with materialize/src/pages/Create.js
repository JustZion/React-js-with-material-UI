import React, {useState} from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { ButtonGroup, FormControlLabel, RadioGroup } from '@material-ui/core'
import { Container } from '@material-ui/core'
import AddShoppingCart from '@material-ui/icons/AddShoppingCart'
import {makeStyles} from '@material-ui/core'
import { TextField } from '@material-ui/core'
import Radio from '@material-ui/core/Radio'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import { useHistory } from 'react-router-dom'
import { ArrowForward } from '@material-ui/icons'
import { red } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => {
  return {
  btn: {
    fontSize: 15,
    marginTop: 15
    // backgroundColor: 'violet',
    // '&:hover': {
    //   backgroundColor: 'red'
    // }
  },

  title: {
    marginBottom: 5,
    marginTop: 10
  },

  field: {
    marginTop: 20,
    marginBottom: 40,
    display: 'block'
    
    
    
  },
   tested: {
  
   }
  }
})



export default function Create() {
  const history = useHistory()
  const classes = useStyles()
  const [details, setdetails] = useState('')
  const [title, setTitle] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [category, setCategory] = useState('money')


  const handleSubmit = (e) => {
    e.preventDefault()
    setTitleError(false)
    setDetailsError(false)


    if (details == '') {
      setTitleError(true)
    }
   

    if (details == '') {
      setDetailsError(true)
    }

     if (details && title) {
     fetch('https://myserverrr.herokuapp.com/notes', {
       method: 'POST',
       headers: {"Content-type": "application/json"},
       body: JSON.stringify({ title, details, category})
     }).then(() => history.push('/') )
     }
  }

  return (
    <Container
     className={classes.tested}>
      <Typography className={classes.title} variant='h6' color='textSecondary' noWrap 
      >
      Create a new note
      </Typography>
    <form noValidate autoComplete='off' onSubmit={handleSubmit}>
    <TextField className={classes.field} variant='outlined' color='primary'
    label='The title' fullWidth  onChange={(e) => setTitle(e.target.value) } error={detailsError
}
    ></TextField>

<TextField className={classes.field} variant='outlined' color='primary'
    label='Contents' fullWidth multiline rows={4} onChange={(e) => setdetails(e.target.value) }
    error={titleError}
    ></TextField>

<FormControl className={classes.field}>
<FormLabel>Category</FormLabel>
  <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
    <FormControlLabel value='money' control={<Radio />} label='Money' />
   
    <FormControlLabel value='web' control={<Radio />} label='Web' />
    <FormControlLabel value='time' control={<Radio />} label='Time' />
    <FormControlLabel value='star' control={<Radio />} label='Star' />
   
  </RadioGroup>

  <Button className={classes.btn}  endIcon={<ArrowForward color='white' />} 
type='submit'  variant='contained' color='primary'>
     Submit
    </Button>
   
</FormControl>

   


    </form>
    
      
     
    
    </Container>
  )
}
