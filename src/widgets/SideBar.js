import React from 'react'
import { grey } from '@mui/material/colors';
import { Box } from '@mui/system';
import ShowMemoButton from './ShowMemoButton';

export default function SideBar() {
  return (
    <Box style={{
        backgroundColor: grey[50],
        height: '100vh',
        textAlign:'center',
        textAlign:'-webkit-center'
    }}>
        <Box sx={{paddingTop: 4, fontWeight:'bold'}}>StillTodo</Box>
        <Box sx={{paddingTop: 4}}><ShowMemoButton /></Box>

    </Box>
  )
}
