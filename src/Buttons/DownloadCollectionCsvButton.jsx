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
          contact_first_name: d.isMinor ? d.guardian.firstName : d.student.firstName,
          contact_last_name: d.isMinor ? d.guardian.lastName : d.student.lastName,
          Student: d.studentFullName,
          Parent: d.isMinor ? d.guardianFullName : "",
          Adult: !d.isMinor,
          Instrument: d.student.instrument,
          Age: d.student.age,
          Guardian: d.guardianFullName,
          Phone: d.contact.phone,
          Email: d.contact.email,
          "Group Class": d.groupClass,
          "Trial Lesson": d.bookedTrial,
          Enrolled: d.enrolled,
          "Follow-up History": d.followUp.length + d.trialLesson.followUp.length,
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
          first_name: d.firstName,
          last_name: d.lastName,
          phone: d.phone,
          email: d.email,
          instrument: d.instrument,
          amount: d.amount,
          paid: d.paid,
          job: d.jobDescription,
          status: d.status,
        };
      });
    }
    if (format == "orders") {
      return inputData.map((d) => {
        return {
          created: d.createdDate,
          first_name: d.firstName,
          last_name: d.lastName,
          phone: d.phone,
          email: d.email,
          item: d.item,
          order: d.orderDescription,
          "deposit amount": d.depositAmount,
          "total price": d.totalAmount,
          paid: d.paid,
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
      <Button
        variant="outlined"
        onClick={handleClick}
        sx={{ maxHeight: "3rem", px: 2 }}
      >
        Download CSV
      </Button>
    </Tooltip>
  );
};

export default DownloadCollectionCsvButton;
