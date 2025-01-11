import React from 'react'
import { Box, Typography} from '@mui/material'

const ErrorCard = () => {
  return (
          <Box className="">
            <Box sx={{p: 6, border: '1px solid lightblue', boxShadow: '12px 12px teal', backgroundColor: 'lightskyblue', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8, ml: 10}}>
              <Typography variant='h4' color='primary' sx={{mb: 3, fontWeight: 'bold'}}>OH NO!</Typography>
              <Typography variant='h5' color='primary' sx={{mb: 6}}>  ༼ つ ◕_◕ ༽つ</Typography>
              <Typography variant='h5' color='primary' sx={{mb: 1.5, fontWeight: 'bold'}}>We've encountered an error!</Typography>
            </Box>
          </Box>
  )
}

export default ErrorCard