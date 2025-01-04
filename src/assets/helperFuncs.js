/** @format */

const smsHref = (student) => {
	return `sms:/${student?.contact?.phone}/&body=Hi ${
		student.isMinor ? student.guardian.firstName : student.student.firstName
	}, %0D%0A %0D%0A [MESSAGE] %0D%0A %0D%0A Thank you, %0D%0A Caringbah Music Admin Team`;
};


export {smsHref}