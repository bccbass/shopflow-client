import React from 'react'
import {useState} from 'react'
import { Box, TextField, Typography } from '@mui/material'
import SendEmail from './Buttons/SendEmail'

const generateMessage = (student) => student.bookedTrial ? 
`Dear ${student.isMinor ? student.guardian.firstName : student.student.firstName},
Welcome to Caringbah Music! 
    
Your lesson is scheduled for ${student.trialLesson.date}` 
    :   
`Dear ${student.isMinor ? student.guardian.firstName : student.student.firstName},
    
Thank you for enquiry. Here is information about ${student.student.instrument} lessons`

const EmailForm = ({student}) => {
    const emailSubject = student.bookedTrial ? `Caringbah Music School Lesson Confirmation` : `${student.student.instrument ? student.student.instrument[0].toUpperCase() + student.student.instrument.slice(1) : ''} Lessons at Caringbah Music`

    const defaultEmailObj = { to: 'bccbass@gmail.com', from: "info@caringbahmusic.com.au", subject: emailSubject, text: generateMessage(student) }
    const [emailObj, setEmailObj] = useState(defaultEmailObj)
  return (
    <Box>
        <Typography> Email {student.isMinor ? student.guardianFullName : student.studentFullName} </Typography>
        < TextField multiline minRows={15} name='text' value={emailObj.text} onChange={(e) => setEmailObj({...emailObj, [e.target.name]: e.target.value})} sx={{width: '500px'}}
        />
        <Box sx={{display: "flex", justifyContent: "center", width: '100%', my: 3}}>
        < SendEmail msg={emailObj} />
        </Box>
    </Box>
  )
}

export default EmailForm