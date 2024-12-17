import React from 'react'
import { Container, Box, IconButton } from '@mui/material'
import Person from "@mui/icons-material/Person";


const Home = () => {
  return (
    <Container maxWidth="sm">
      < Box >
      <IconButton aria-label="delete" size="small">
  {/* <DeleteIcon fontSize="inherit" /> */}
    < Person fontSize='large'/>
</IconButton>
      </Box>
      </Container>

  )
}

export default Home