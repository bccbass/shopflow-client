import React from 'react'
import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Box, TextField, Collapse, Fab} from '@mui/material'

const Search = ({searchTerm, setSearchTerm}) => {
    const [showInput, setShowInput] = useState(false)
    const handleClick = () => {
      if (showInput) {setSearchTerm('')};
       setShowInput(!showInput)
    }

  return (
    <Box sx={{display: 'flex', alignItems: 'flex-end', height: '2.5rem', mr: 10, mb: 1 }}>

        <Collapse in={showInput}>
             <TextField 
                    // focused
                    autoFocus
                    id="search" 
                    label="Search" 
                    variant="standard" 
                    value={searchTerm} 
                    sx={{mr: 2, mb: -1.1}}
                    onChange={e => setSearchTerm(e.target.value)}
            />
         </Collapse>
        <Fab size="small" color="primary" aria-label="add" sx={{}}  onClick={handleClick}>
            <SearchIcon/>
        </Fab>
    </Box>
  )
}

export default Search