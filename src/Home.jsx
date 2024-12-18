import React from 'react'
import { Container, Box, IconButton, Typography } from '@mui/material'
import Person from "@mui/icons-material/Person";


const Home = () => {
  return (
    <Container sx={{m:4}}>
      < Box >
        < Typography variant='h3' color='primary'>Welcome to Shopflow</Typography>
      </Box>
      </Container>

  )
}

export default Home