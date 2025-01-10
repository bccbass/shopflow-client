import React from 'react'
import { Box, Typography, Container, Button } from '@mui/material'
import { useNavigate } from 'react-router'

const RouteNotFound = () => {
  const navigate = useNavigate()
  return (
    < Container >
      < Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mt: 20}} fullWidth>
        <Typography mb={6} color='primary' variant='h4'>We Can't Find That Page ¯\_(ツ)_/¯</Typography>
        < Button onClick={() => navigate('/')} variant='contained'>Let's Go Home</Button>
      </Box>
    </Container>
  )
}

export default RouteNotFound