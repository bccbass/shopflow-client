import React from 'react'
import { Container } from '@mui/material'
import SectionHeader from '../SectionHeader'
import AddStudentForm from './AddStudentForm'

const AddStudents = () => {
  return (
		< Container sx={{m:0}}>
        < SectionHeader title="Add Students" />
        <AddStudentForm />
    </Container>
  )
}

export default AddStudents