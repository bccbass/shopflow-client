import React from 'react'
import { Typography } from '@mui/material'

const Logo = ({variant='h5', color='white'}) => {
  return (
    <Typography align='center' color={color} className="audiowide" sx={{fontFamily: "Gugi", transform: 'skew(-6deg)'}} variant={variant} noWrap component="div">
        ShopFlow
    </Typography>
  )
}

export default Logo