import React from 'react'
import { DialogTitle } from '@mui/material'

const FormTitle = ({children}) => {
  return (
    <DialogTitle textAlign={"center"} variant="h5" sx={{backgroundColor: 'cornflowerblue', mb: 5, color: 'white', borderRadius: '4px'}}>
        { children}
      </DialogTitle>
  )
}

export default FormTitle