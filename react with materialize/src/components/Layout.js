import React from 'react'
import {Drawer, Box, makeStyles, Typography, List, ListItem, ListItemText
,ListItemIcon} from '@material-ui/core'
import {AddCircleOutlineOutlined, SubjectOutlined} from '@material-ui/icons'
import { useHistory, useLocation } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import {format} from 'date-fns'
import {Avatar} from '@material-ui/core'
import { purple, red, yellow } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => {

  const drawero = () => {
    return (theme.breakpoints.values,
      theme.breakpoints.down())
    }

  
  console.log(drawero())
  
  return {
   
    drawer: {
      [theme.breakpoints.down('xs')]: {
        width: '28%'
      },
      [theme.breakpoints.only('sm')]: {
        width: 175,
      },
      [theme.breakpoints.up('md')]: {
        width: 250,
      }

    },
   
    
    
    page: {
      background: '#f1f1f1',
      padding: '20px 0px 30px 0px',
      [theme.breakpoints.down('sm')]: {
        width: `calc(80%)`
      },
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - 200px)`
      }
    },
    root: {
      display: 'flex'
    },
   
    active: {
      background: '#F4F4F4'
    },

    title: {
      padding: theme.spacing(1)
    },

    appbar: {
      [theme.breakpoints.down('xs')]: {
        width: `calc(72%)`
      },
      [theme.breakpoints.only('sm')]: {
        width: `calc(100% - 175px)`
      },

      [theme.breakpoints.up('md')]: {
        width: `calc(100% - 250px)`
      },
     
     
      
    },

    toolbar: theme.mixins.toolbar
    ,

    dataa: {
      flexGrow: 1
    },

    minitext: {
      display: 'inline-block',
      marginLeft: theme.spacing(1),
      marginTop: '-10'
    },

    avatar: {
      marginLeft: theme.spacing(1.3),
      background: purple[700]
    },

    termo: {
    
      [theme.breakpoints.only('sm')]: {
       fontSize: 15,
       marginLeft: -8
      },
      [theme.breakpoints.only('xs')]: {
        fontSize: 10,
        marginLeft: -10
       },
      
      [theme.breakpoints.up('md')]: {
       fontSize: 20,
       marginLeft: -10
      },
    },

    icono: {
      [theme.breakpoints.down('sm')]: {
        transform: 'scale(0.8)',
        marginLeft: -5
       },
       [theme.breakpoints.up('sm')]: {
        transform: 'scale(1)',
        marginLeft: 7
     
       },
    
    },

    listItems: {
     marginLeft: -8
     
    },

    tools: {
      paddingLeft: 13
    }
  }
 

})

function Layout({children}) {

  const classes = useStyles()
  const  history = useHistory()
  const location = useLocation()
  const menuItems = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined color='secondary' />,
      path: '/'
    },
    {
      text: 'Create Notes',
      icon: <AddCircleOutlineOutlined color='secondary' />,
      path: '/create'
    }
  ]
  return (
<div className={classes.root}>
<AppBar elevation={0} color='white' className={classes.appbar}>
  <ToolBar className= {classes.tools}>
  <Box className={classes.dataa} sx={{display: { xs: 'none', sm: 'block' , md: 'block'}}}>
  <Typography variant='h6' className={classes.dataa}>
    <Box sx={{display: { xs: 'none', sm: 'inline' , md: 'inline'}}}>
    Welcome,</Box> 
    <Typography variant='body2' className={classes.minitext}>
     Today is the {format(new Date(), 'do MMMM Y')}
    </Typography>
    </Typography>
  </Box>

  <Box className={classes.dataa} sx={{display: { xs: 'block', sm: 'none' , md: 'none'}}}>
 
    <Typography variant='body2' className={classes.minitext}>
     {format(new Date(), 'do, MMMM Y')}
    </Typography>
  
  </Box>
    
    <Box component="span" sx={{display: { xs: 'none', sm: 'block' , md: 'block'}}} >
    <Typography> Mickey</Typography>
   </Box>
    <Avatar src='/mick.jpg' className={classes.avatar} />
  </ToolBar>
</AppBar>
    <Drawer
      className={classes.drawer}
      anchor="left"
      variant='permanent'
      classes= {{paper: classes.drawer}}
    >
      <div>
        <Typography className={classes.title} variant='h5'>
          Notes
        </Typography>
      </div>
 
    <List className= {classes.listItems}>
      {menuItems.map(menu => (
        
        <ListItem button key={menu.text} onClick={() => history.push(menu.path)}
        className={location.pathname == menu.path ? classes.active : null}
        >
          <ListItemIcon className={classes.icono}>{menu.icon}</ListItemIcon>
          <ListItemText classes={{primary: classes.termo}}
          className= {classes.termo} primary={menu.text} />
        </ListItem>
      ))}
    </List>
    </Drawer>
    <div className={classes.page}>

       <div className={classes.toolbar}>  </div>

     {children}
    </div>

    </div>
  )
}

export default Layout
