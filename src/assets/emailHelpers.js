const emailURL = "support@caringbahmusic.com.au";
import { nullDate } from "./dateHelpers";

const generateInitialEnquiry = (student, info, admin) => {
  const addressee = student.isMinor
    ? student.guardian.firstName
    : student.student.firstName;
  const instrument =
    student?.student?.instrument == "drums"
      ? "drum "
      : student?.student?.instrument
      ? student?.student?.instrument + " "
      : "";
  return {
    id: "initialEnquiry",
    label: "Initial Enquiry",
    subject: `${
      student.student?.instrument
        ? instrument[0].toUpperCase() + instrument.slice(1) + " "
        : ""
    }Lessons at Caringbah Music`,
    html: `<p>Hi ${addressee}!</p>
    <p>
Thank you for reaching out and enquiring about ${instrument}lessons at Caringbah Music. We'd love to help you on your creative journey. 
</p>
All of our teachers are university qualified and experienced within the music industry. We offer lessons six days per week at our shop and studio locations, so please let us know what days and times are most suitable for you. 
<p>
We have multiple options for group lessons starting at $25, and an individual rate of $51 per half hour lesson. We also offer an introductory trial lesson at a reduced rate of $25 in order for you to get an idea of lesson structure and to meet your teacher before enrolling for the term. 
</p>
<p>
If you have any questions, please contact us at ${info?.phone} or by responding to this email. 
</p><p>
We look forward to hearing from you and seeing you at your first lesson!
</p>
<p>
Kind regards, <br>
${admin}<br>
Caringbah Music</p>`,
  };
};

const generateTrialConfirmation = (student, info, admin) => {
  const noDate = nullDate(student.trialLesson.date);
  const addressee = student.isMinor
    ? student.guardian.firstName
    : student.student.firstName;
  const studentPossesive = student.isMinor
    ? student.student.firstName + "'s"
    : "your";
  const location = info?.locations?.filter(
    (location) => student.trialLesson.location === location.name
  )[0];
  const instrument =
    student?.trialLesson?.instrument == "drums"
      ? "drum "
      : student?.trialLesson?.instrument
      ? student?.trialLesson?.instrument + " "
      : "";

  return {
    id: "trialConfirmation",
    label: "Trial Confirmation",
    subject: `Trial Lesson Info for ${student?.trialDay?.split(" ")[0]}, ${
      student.trialDate
    } at ${student.trialTime}`,
    html: `<p>Hi ${addressee},
</p>
   <p>  
Welcome to our Caringbah Music family! We're so glad to have you. Please find the details of ${studentPossesive} ${instrument}lesson below:
</p>

Your lesson will take place at our <strong> ${
      location ? location.name[0].toUpperCase() + location.name.slice(1) : ""
    } location</strong>: <br>
${location ? location.streetAddress : ""}<br> 
${location ? location.suburb + "," : ""} ${location ? location.state : ""}<br> 
<em>${location ? location.description : ""}</em><br>

<strong> Day: </strong> ${noDate ? "" : student?.trialDay?.split(" ")[0]}<br>
<strong> Date: </strong> ${noDate ? "" : student?.trialDate}<br>
<strong> Time: </strong> ${student?.trialTime}

<p>${student.trialLesson.teacher} will be ${studentPossesive} teacher.</p>

<p>
If you have not already arranged payment for your trial lesson please purchase a trial lesson voucher using <a href='https://www.caringbahmusic.com.au/products/caringbah-music-gift-card' target="_blank">this link</a> or by phone to ensure your trial time is held.
</p>
Should you need to cancel or reschedule your trial lesson please let us know with at least 24 hours notice. If less than 24 hours notice is given we may not be able to accommodate changes and your lesson fee may be forfeited.
<p>
After the trial lesson, please let us know how you felt it went. We will then see about finding you a set spot in our timetable.
</p>

<p>
If you have any questions prior to your first lesson, please don't hesitate to ask! You can reach us at ${
      info.phone
    } or by responding to this email.
</p>

<p>
Kind regards, <br>
${admin}<br>
Caringbah Music
</p>`,
  };
};

const generateTrialFollowUp = (student, info, admin) => {
  const subjectName = student.isMinor ? student.student.firstName : "you";
  const addressee = student.isMinor
    ? student.guardian.firstName
    : student.student.firstName;
  return {
    id: "trialFollowUp",
    label: "Trial Follow Up",
    subject: `Trial Lesson Info for ${student.trialDay}, ${student.trialDate} at ${student.trialTime}`,
    html: `<p>Hi ${addressee}, </p>

<p>
I hope you're well! 
</p>
<p>
I'm just following up to see how ${subjectName} enjoyed the lesson with ${
      student.trialLesson.teacher.split(" ")[0]
    }, and whether you would be keen to enroll in weekly lessons? These lessons would be for the same day and time. 
</p>
<p>
I'd also briefly like to remind you about our price packages. Our individual rate is $51 per half hour lesson. Following the NSW school calendar, we offer 10 lessons per term, and bill per term. This can be paid at the beginning of each term, or monthly through direct debit. 
</p>
<p>
If you have any other questions please reach out to us at ${
      info.phone
    } or by responding to this email.
</p>
<p>
We look forward to hearing from you! 
</p>
<p>
Kind regards, <br>
${admin}<br>
Caringbah Music
`,
  };
};

const generateJamEnquiry = (student, admin) => {
  const addressee = student.isMinor
    ? student.guardian.firstName
    : student.student.firstName;
  return {
    id: "jamEnquiry",
    label: "Jam Group Enquiry",
    subject: `Adult Jam Groups at Caringbah Music`,
    html: `
    <p>Hi ${addressee},
</p>
<p>
Thanks for your interest in the Adult Jam groups at Caringbah Music.
</p>
<p>
The Jam groups run Monday to Thursday, 7pm to 8pm. Cost is $25.
</p>
<p>
We play Rock songs from all genres and eras. These groups are primarily guitar driven ensembles with drums, bass and keys.
We have a performance at the Brass Monkey twice a year to showcase the hard work and progress of our students and ensembles.
</p>
<p>
Please let me know if you have any questions?
</p>
<p>
Kind regards, <br>
${admin}<br>
Caringbah Music`,
  };
};

const generateResendTrialConfirmation = (student, info, admin) => {
  const noDate = nullDate(student.trialLesson.date);
  const addressee = student.isMinor
    ? student.guardian.firstName
    : student.student.firstName;
  const studentPossesive = student.isMinor
    ? student.student.firstName + "'s"
    : "your";
  const location = info?.locations?.filter(
    (location) => student.trialLesson.location === location.name
  )[0];
  const instrument =
    student?.trialLesson?.instrument == "drums"
      ? "drum "
      : student?.trialLesson?.instrument
      ? student?.trialLesson?.instrument + " "
      : "";

  return {
    id: "trialUpdate",
    label: "Resend/Update Trial Info",
    subject: `Trial Lesson Info for ${student?.trialDay?.split(" ")[0]}, ${
      student.trialDate
    } at ${student.trialTime}`,
    html: `<p>Hi ${addressee},
</p>
   <p>  
Here is the info for your trial lesson:</p>

Your lesson will take place at our <strong> ${
      location ? location.name[0].toUpperCase() + location.name.slice(1) : ""
    } location</strong>: <br>
${location ? location.streetAddress : ""}<br> 
${location ? location.suburb + "," : ""} ${location ? location.state : ""}<br> 
<em>${location ? location.description : ""}</em><br>

<strong> Day: </strong> ${noDate ? "" : student?.trialDay?.split(" ")[0]}<br>
<strong> Date: </strong> ${noDate ? "" : student?.trialDate}<br>
<strong> Time: </strong> ${student?.trialTime}

<p>${student.trialLesson.teacher} will be ${studentPossesive} teacher.</p>

<p>
If you have any questions prior to your trial lesson, please don't hesitate to ask! You can reach us at ${
      info.phone
    } or by responding to this email.
</p>

<p>
Kind regards, <br>
${admin}<br>
Caringbah Music
</p>`,
  };
};

const generateBlankEnquiry = (student, admin) => {
  const addressee = student.isMinor
    ? student.guardian.firstName
    : student.student.firstName;
  return {
    id: "blank",
    label: "Blank Template",
    subject: `Music Lessons at Caringbah Music`,
    html: `<p>Dear ${addressee},
    </p>
<p>
[Message]
</p>
<p>
Kind regards, <br>
${admin}<br>
Caringbah Music`,
  };
};

const createEmailTemplateArray = (student, info, admin) => [
  generateInitialEnquiry(student, info, admin),
  generateTrialConfirmation(student, info, admin),
  generateTrialFollowUp(student, info, admin),
  generateJamEnquiry(student, admin),
  generateResendTrialConfirmation(student, info, admin),
  generateBlankEnquiry(student, admin),
];

export { createEmailTemplateArray, emailURL };
