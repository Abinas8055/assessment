import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div>
        <br /><br /><br /> <br /> <br />
        <Typography variant='h4' style={{color : "blue",fontFamily : "ariel"}}>ADD TO BLOG</Typography>
        <br /> <br />
          <TextField label='Name' variant='outlined' name="name" ></TextField>  
          <br /> <br />
          <TextField label='Description' variant='outlined' name="des" ></TextField>
          <br /> <br />
          <TextField label='Author' variant='outlined' name="auth" ></TextField>
          <br /> <br />
          <Button variant='contained' color='success'>Submit</Button>
    </div>
  )
}

export default Add