import React from "react";
import { Tooltip, Link } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchEmailButton = ({ email }) => {
  return (
    <Tooltip title="Search Email Inbox">
      <Link
        sx={{
          color: "grey",
          margin: "0 0 -20px 0",
        }}
        target="_blank"
        href={"https://mail.google.com/mail/u/2/#search/" + email}
      >
        <SearchIcon />
      </Link>
    </Tooltip>
  );
};

export default SearchEmailButton;
