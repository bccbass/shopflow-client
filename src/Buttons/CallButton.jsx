import React from 'react'
import { Tooltip } from '@mui/material'
import CallIcon from "@mui/icons-material/Call";


const CallButton = ({phoneNumber}) => {
  return (
    <Tooltip title={!phoneNumber ? 'No Valid Phone Number' : 'Call: ' + phoneNumber}>
        <a href={"tel:" + phoneNumber}>
            <CallIcon fontSize="small" sx={{ ml: 1, color: "grey" }} />
        </a>
    </Tooltip>
  )
}

export default CallButton