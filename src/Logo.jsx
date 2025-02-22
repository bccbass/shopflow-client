import React from 'react'
import { Typography } from '@mui/material'

const Logo = ({variant='h5', color='white', centerOffset=0}) => {
  return (
    <Typography align='center' color={color} className="audiowide" sx={{fontFamily: "Gugi", transform: 'skew(-6deg)'}} variant={variant} pl={centerOffset} noWrap component="div">
        ShopFlow
    </Typography>
  )
}

export default Logo