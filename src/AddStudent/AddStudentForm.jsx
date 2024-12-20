import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';

export default function AddStudentForm() {

  return (
    <Box  sx={{ display: 'flex', flexWrap:'wrap' }}>
      <div>
      < Typography variant='h6'>Student:</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'nowrap', alignContent: 'space-between'}}>

         <TextField
        //  sx={{mx: 2}}
          id="outlined-helperText"
          label="First Name"
          // defaultValue="Default Value"
          // helperText="Some important text"
        />

 <TextField
  sx={{mx: 2}}
          id="outlined-helperText"
          label="Last Name"
        />

      </Box>
    </div>
      <div>
      < Typography variant='h6'>Parent:</Typography>

      <Box sx={{ display: 'flex', flexWrap: 'nowrap'}}>

         <TextField
        //  sx={{mx: 2}}

          id="outlined-helperText"
          label="First Name"
        />
 <TextField

  // sx={{mx: 2}}
          id="outlined-helperText"
          label="Last Name"
        />
      </Box>
    </div>
    </Box>
  );
}