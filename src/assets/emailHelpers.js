const generateInitialEnquiry = (student, locations, admin) => {
  return {
    id: 'initialEnquiry',
    label: "Initial Enquiry",
    subject: `${
      student.student.instrument
        ? student.student.instrument[0].toUpperCase() +
          student.student.instrument.slice(1) +
          " "
        : ""
    }Lessons at Caringbah Music`,
    text: `Dear ${
      student.isMinor ? student.guardian.firstName : student.student.firstName
    },
    
Thank you for enquiry. Here is information about ${
      student.student.instrument
    } lessons

Warm regards,
Caringbah Music`,
  };
};
const generateTrialConfirmation = (student, locations, admin) => {
  return {
    id: 'trialConfirmation',
    label: "Trial Confirmation",
    subject: `Trial Lesson Confirmation: ${student.trialDate}, ${student.trialTime}`,
    text: `Dear ${
      student.isMinor ? student.guardian.firstName : student.student.firstName
    },
    
Thank you for enquiry. Here is information about your trial lesson.

...

Warm regards,
Caringbah Music`,
  };
};


export { generateInitialEnquiry, generateTrialConfirmation };
