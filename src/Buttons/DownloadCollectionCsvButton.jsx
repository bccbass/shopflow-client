/** @format */

import React from "react";
import { mkConfig, generateCsv, download } from "export-to-csv";
import { dateStamp, nullDate } from "../assets/dateHelpers";
import { Button, Tooltip } from "@mui/material";

const DownloadCollectionCsvButton = ({
  data,
  collection = false,
  format = "leads",
}) => {
  if (!data.length) return null;
  const fileName = `${collection}_${dateStamp}`;
  const csvConfig = mkConfig({
    useKeysAsHeaders: true,
    filename: fileName,
    title: fileName,
    showTitle: false,
  });

  const generateCSVDataFromInput = (format, inputData) => {
    if (format == "leads") {
      return inputData.map((d) => {
        return {
          Created: d.createdDate,
          Student: d.studentFullName,
          Adult: !d.isMinor,
          Instrument: d.student.instrument,
          Age: d.student.age,
          Guardian: d.guardianFullName,
          Phone: d.contact.phone,
          Email: d.contact.email,
          "Group Class": d.groupClass,
          "Trial Lesson": d.bookedTrial,
          Enrolled: d.enrolled,
          "Follup History": d.followUp.length + d.trialLesson.followUp.length,
          "Trial Teacher": d.trialLesson.teacher,
          "Trial Date": !nullDate(d.trialLesson.date)
            ? `${d.trialDate}, ${d.trialTime}`
            : "",
        };
      });
    }
    if (format == "repairs") {
      return inputData.map((d) => {
        return {
          created: d.createdDate,
          name: d.firstLast,
          instrument: d.instrument,
          job: d.jobDescription,
          phone: d.phone,
          email: d.email,
          status: d.status,
        };
      });
    }
  };

  const csvData = generateCSVDataFromInput(format, data);

  const csv = generateCsv(csvConfig)(csvData);

  const handleClick = () => download(csvConfig)(csv);

  return (
    <Tooltip title={`Download ${collection} CSV`}>
      <Button variant="outlined" onClick={handleClick} sx={{ px: 2 }}>
        Download CSV
      </Button>
    </Tooltip>
  );
};

export default DownloadCollectionCsvButton;
