import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { Typography, Autocomplete} from "@mui/material";

import {
  instruments,
  groupClasses,
  leadSources,
} from "../assets/dbPlaceholderData.js";


export default function AddStudentForm({studentData, setStudentData }) {


  const handleChange = (e) =>
    setStudentData({ ...studentData, [e.target.name]: e.target.value });

  const handleStudentChange = (e) =>
    setStudentData({
      ...studentData,
      student: { ...studentData.student, [e.target.name]: e.target.value },
    });

  const handleGuardianChange = (e) =>
    setStudentData({
      ...studentData,
      guardian: { ...studentData.guardian, [e.target.name]: e.target.value },
    });

  const handleContactChange = (e) =>
    setStudentData({
      ...studentData,
      contact: { ...studentData.contact, [e.target.name]: e.target.value },
    });


  return (
		<Box
			sx={{
				display: "flex",
				flexWrap: "wrap",
				flexDirection: "column",
				justifyContent: "space-around",
				// maxWidth: 410,
				mx: "auto",
			}}
		>
			<Box sx={{ display: "flex", flexDirection: "column", my: 1 }}>
				<Typography variant="h6" sx={{ mb: 2 }}>
					Student:
				</Typography>
				<Box
					sx={{
						display: "flex",
						flexWrap: "nowrap",
						justifyContent: "space-between",
					}}
				>
					<TextField
						size="small"
						id="studentFirst"
						label="First Name"
						name="firstName"
						value={studentData.student.firstName}
						onChange={handleStudentChange}
					/>

					<TextField
						size="small"
						id="studentLast"
						label="Last Name"
						name="lastName"
						value={studentData.student.lastName}
						onChange={handleStudentChange}
					/>
				</Box>
				<Box
					sx={{
						my: 2,
						display: "flex",
						flexWrap: "nowrap",
						justifyContent: "space-between",
					}}
				>
					<TextField
						sx={{ width: "15ch" }}
						size="small"
						id="instrumentMain"
						label="Instrument"
						select
						name="instrument"
						value={studentData.student.instrument}
						onChange={handleStudentChange}
					>
						{instruments.map((instrument) => (
							<MenuItem value={instrument} key={instrument}>
								{instrument}
							</MenuItem>
						))}
					</TextField>

					<TextField
						size="small"
						sx={{ mx: 2, width: "20ch" }}
						select
						id="groupMain"
						label="Group Class"
						name="groupClass"
						value={studentData.student.groupClass}
						onChange={handleStudentChange}
					>
						{groupClasses.map((instrument) => (
							<MenuItem value={instrument} key={instrument}>
								{instrument}
							</MenuItem>
						))}
					</TextField>
					<TextField
						size="small"
						sx={{ width: "7ch" }}
						id="age"
						label="Age"
						name="age"
						value={studentData.student.age}
						onChange={handleStudentChange}
					/>
				</Box>
			</Box>

			<Box sx={{ display: "flex", flexDirection: "column", my: 2 }}>
				<Typography variant="h6" sx={{ mb: 2 }}>
					Parent:
				</Typography>

				<Box
					sx={{
						display: "flex",
						flexWrap: "nowrap",
						justifyContent: "space-between",
					}}
				>
					<TextField
						//  sx={{mx: 2}}
						size="small"
						id="parentFirst"
						label="First Name"
						name="firstName"
						value={studentData.guardian.firstName}
						onChange={handleGuardianChange}
					/>
					<TextField
						size="small"
						id="parentLast"
						label="Last Name"
						name="lastName"
						value={studentData.guardian.lastName}
						onChange={handleGuardianChange}
					/>
					{/* <Autocomplete
            freeSolo={true}
            size="small"
            disablePortal
            options={[studentData.student.lastName]}
            sx={{ width: "22ch" }}
            value={studentData.guardian.lastName}
            onChange={(e, newValue) =>
              setStudentData({
                ...studentData,
                guardian: {
                  ...studentData.guardian,
                  lastName: e.target.value
                },
              })
            }
            renderInput={(params) => (
              <TextField name='lastName' {...params} label="Last Name" />
            )}
          /> */}
				</Box>
			</Box>
			<Box sx={{ display: "flex", flexDirection: "column", my: 2 }}>
				<Typography variant="h6" sx={{ mb: 2 }}>
					Contact Details:
				</Typography>

				<Box
					sx={{
						display: "flex",
						flexWrap: "nowrap",
						justifyContent: "space-between",
					}}
				>
					<TextField
						size="small"
						id="phone"
						label="Phone Number"
						name="phone"
						value={studentData.contact.phone}
						onChange={handleContactChange}
					/>
					<TextField
						size="small"
						id="email"
						label="Email"
						name="email"
						value={studentData.contact.email}
						onChange={handleContactChange}
					/>
				</Box>
			</Box>
			<Box sx={{ display: "flex", flexDirection: "column", my: 2 }}>
				<Typography variant="h6" sx={{ mb: 2 }}>
					Enquiry Details:
				</Typography>
				<Box
					sx={{
						display: "flex",
						flexWrap: "nowrap",
						justifyContent: "space-between",
					}}
				>
					<TextField
						sx={{ width: "20ch" }}
						size="small"
						id="source"
						label="Lead Source"
						select
						name="leadSource"
						value={studentData.leadSource}
						onChange={handleChange}
					>
						{leadSources.map((instrument) => (
							<MenuItem value={instrument} key={instrument}>
								{instrument}
							</MenuItem>
						))}
					</TextField>

					<TextField
						size="small"
						sx={{ width: "20ch", ml: 2 }}
						helperText="Next Contact Date"
						name="nextContactDate"
						id="nextContactDate"
						type="date"
						onChange={handleChange}
						value={studentData.nextContactDate}
					/>
				</Box>
				<Box
					sx={{
						my: 2,
						display: "flex",
						flexWrap: "nowrap",
						justifyContent: "space-between",
					}}
				>
					<TextField
						size="small"
						sx={{ width: "100%" }}
						id="notes"
						label="Notes"
						multiline
						name="notes"
						value={studentData.notes}
						onChange={handleChange}
						variant="outlined"
					/>
				</Box>
			</Box>
		</Box>
	);
}
