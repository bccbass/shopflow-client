import React from 'react'
import { Box, Typography, CircularProgress } from '@mui/material'

const LoadingSpinner = ({height}) => {
  return (
    <Box fullwidth sx={{height: height, mt: -3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        < CircularProgress sx={{mb: 2}} size={'25px'}/>
        < Typography color={'primary'}>Loading</Typography>
    </Box>
  )
}

export default LoadingSpinner