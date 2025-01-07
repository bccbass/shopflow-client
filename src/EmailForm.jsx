import React from 'react'
import {useState} from 'react'
import { Box, TextField, Typography, Button } from '@mui/material'
import SendEmail from './Buttons/SendEmail'
import  { generateStudentEmailArray } from './assets/emailHelpers.js'


const EmailForm = ({student, setOpen}) => {
    

    const defaultEmailObj = { to: 'bccbass@gmail.com', from: "info@caringbahmusic.com.au", subject: emailSubject, text: generateMessage(student) }
    const [emailObj, setEmailObj] = useState(defaultEmailObj)
  return (
    <Box>
        <Typography variant='h5' align='center'> Email {student.isMinor ? student.guardianFullName : student.studentFullName} </Typography>
        < TextField multiline minRows={15} name='text' value={emailObj.text} onChange={(e) => setEmailObj({...emailObj, [e.target.name]: e.target.value})} sx={{width: '500px'}}
        />
        <Box sx={{display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: "center", width: '100%', my: 3}}>
        < SendEmail msg={emailObj} />
        < Button sx={{mt: 1}}  variant='text' onClick={() => setOpen(false)}  >Cancel</Button>
        </Box>
    </Box>
  )
}

export default EmailForm