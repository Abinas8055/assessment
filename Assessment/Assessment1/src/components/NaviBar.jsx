import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NaviBar = () => {
  return (
    <div>
       <AppBar color='primary'>
        <Toolbar>
            <Typography align='left'sx={{ flexGrow: 1 }} style={{color : "Black" , textDecoration : "none"}}>BLOG</Typography>
            <Button> <Link to={'/Home'} style={{color:'black'}}>Home</Link></Button>
            <Button> <Link to={'/'}  style={{color:'black'}} >ADD</Link></Button>
        
        </Toolbar>
       </AppBar>
    </div>
  )
}

export default NaviBar