import React from 'react'
import { Container } from '@mui/material'
import SectionHeader from '../SectionHeader'
import AddStudentFormWrapper from './AddStudentFormWrapper'

const AddStudents = () => {
  return (
		< Container sx={{m:0}}>
        < SectionHeader title="Add Students" />
        < AddStudentFormWrapper />
    </Container>
  )
}

export default AddStudents