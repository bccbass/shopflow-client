import React from 'react'
import { Box, Skeleton } from '@mui/material'

const TableSkeleton = ( {tabs=true}) => {
  return (
    <Box sx={{width: '100vw'}}>
        < Box sx={{width: '100%', display: 'flex', mt: 0, mb: tabs ? 1.5 : 4, pr: 2, justifyContent: 'flex-end'}}>
            < Skeleton variant='circular' width={45} height={45}/>
        </Box>
        <Box sx={{width: '100%', borderTop: 0, borderRadius: '8px'}}>
        {tabs && <Box sx={{width: '100%', display: 'flex', mb: -1.8}}>
            <Skeleton height={75}  sx={{width: '50%', border:'1px solid lightgrey', borderLeft: 0, borderRadius: '8px 8px 0 0', borderBottom: 0}}/>
            <Skeleton height={75} sx={{width: '50%', border:'1px solid lightgrey', borderLeft: 0, borderRadius: '8px 8px 0 0', borderBottom: '1px solid lightgrey'}} />
        </Box>}
        <Skeleton sx={{mb: .5}} height={50}  variant='rectangular'/>
        <Skeleton sx={{mb: .5}} height={50}  variant='rectangular'/>
        <Skeleton sx={{mb: .5}} height={50}  variant='rectangular'/>
        <Skeleton sx={{mb: .5}} height={50}  variant='rectangular'/>
        <Skeleton sx={{mb: .5}} height={50}  variant='rectangular'/>
        <Skeleton sx={{mb: .5}} height={50}  variant='rectangular'/>
        <Skeleton sx={{mb: .5}} height={50}  variant='rectangular'/>
        <Skeleton sx={{mb: .5}} height={50}  variant='rectangular'/>
        <Skeleton sx={{mb: .5}} height={50}  variant='rectangular'/>
        </Box>
        < Box sx={{width: '100%', display: 'flex', justifyContent: 'flex-end', pr: 4, mt: 4}}>
            < Skeleton variant='rounded' height={40} width={150} />
        </Box>
    </Box>
  )
}

export default TableSkeleton