import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Box } from '@mui/system'
import { getTitle } from '../function/getTitleByPath'
import { Scrollbars } from 'react-custom-scrollbars-2';

export default function TaskArea() {
    const location = useLocation()
    const title = getTitle(location.pathname)

  return (
    <Scrollbars>
    <Box sx={{mt:10, ml: 4, mr: 4,}}>
     
      <Box sx={{fontSize:'2rem'}}>{title}</Box>
      <Box sx={{mt: 4}}><Outlet /></Box>
    </Box>
    </Scrollbars>
  )
}
