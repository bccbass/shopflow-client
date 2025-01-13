import React from 'react'
import { Typography } from '@mui/material'

const Logo = ({variant='h5'}) => {
  return (
    <Typography className="audiowide" sx={{fontFamily: "Gugi", transform: 'skew(-6deg)'}} variant={variant} noWrap component="div">
        ShopFlow
    </Typography>
  )
}

export default Logo