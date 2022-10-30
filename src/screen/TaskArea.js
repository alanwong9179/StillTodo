import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Box } from '@mui/system'
import { getTitle } from '../function/getTitleByPath'

export default function TaskArea() {
    const location = useLocation()
    const title = getTitle(location.pathname)

  return (
    <Box>
        <Box>{title}</Box>
    
    </Box>
  )
}
