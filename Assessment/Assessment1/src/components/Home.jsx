import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Home = () => {
  var[user,setUser]=useState([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{
      console.log(response.data)
      setUser(response.data)

    })
    .catch((err)=>(console.log(err)))

  },[])
  return (
    <div>
      <br /> <br /> <br /> <br /><Typography variant='h3' >Blog Page</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>TITLE</TableCell>
            
            </TableRow>
          </TableHead>
          <TableBody>
            {user.map((value,index)=>{
              return(
                <TableRow key={index}>
                  <TableCell>{value.id}</TableCell>
                  <TableCell>{value.title}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>


    </div>
  )
}

export default Home