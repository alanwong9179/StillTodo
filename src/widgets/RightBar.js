import { Box } from '@mui/material'
import React from 'react'
import { grey } from '@mui/material/colors';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";

export default function RightBar() {
  const navigate = useNavigate();

  return (
    <Box
    style={{
        backgroundColor: grey[50],
        //height: '100vh',
        textAlign:'center',
        textAlign:'-webkit-center',
        
    }}
    >
      <MenuItem onClick={()=>{navigate('/')}}>Tasks </MenuItem>
      <MenuItem onClick={()=>{navigate('/keys')}}>Keychain </MenuItem>
    </Box>
  )
}
