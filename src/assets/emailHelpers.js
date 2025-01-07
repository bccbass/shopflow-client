const generateStudentEmailArray = (student, locations, admin) => [
    {
        id: initialEnquiry,
        label: 'Initial Enquiry',
        subject: `${student.student.instrument ? student.student.instrument[0].toUpperCase() + student.student.instrument.slice(1) + ' ' : ''}Lessons at Caringbah Music`,
        text: 
`Dear ${student.isMinor ? student.guardian.firstName : student.student.firstName},
    
Thank you for enquiry. Here is information about ${student.student.instrument} lessons

Warm regards,
Caringbah Music`
    },
    {
        id: trialConfirmation,
        label: 'Trial Confirmation',
        subject: `Caringbah Music School Lesson Confirmation: ${trialDate}, ${trialTime}`,
        text: 
`Dear ${student.isMinor ? student.guardian.firstName : student.student.firstName},
    
Thank you for enquiry. Here is information about ${student.student.instrument} lessons

Warm regards,
Caringbah Music`
    }
]


//     const emailSubject = student.bookedTrial ? `Caringbah Music School Lesson Confirmation` : `${student.student.instrument ? student.student.instrument[0].toUpperCase() + student.student.instrument.slice(1) : ''} Lessons at Caringbah Music`


// student.bookedTrial ? 
// `Dear ${student.isMinor ? student.guardian.firstName : student.student.firstName},
// Welcome to Caringbah Music! 
    
// Your lesson is scheduled for ${student.trialLesson.date}` 
//     :   
// `Dear ${student.isMinor ? student.guardian.firstName : student.student.firstName},
    
// Thank you for enquiry. Here is information about ${student.student.instrument} lessons`




export { generateStudentEmailArray }




