import React from 'react'
import { grey } from '@mui/material/colors'
import { Button, IconButton } from '@mui/material'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const buttonTheme = createTheme({
    palette: {
        primary: {
            main: grey[800]
        }
    }
})

export default function DoneBtn({isEditing, onDone}) {
  return (
    <ThemeProvider theme={buttonTheme}>
        <Button variant="contained" size="small" sx={{padding: 1, minWidth: 0, borderRadius: 3}} disabled={isEditing} onClick={()=>{onDone()}}>
         <DoneOutlineIcon />
        </Button>
    </ThemeProvider>
  )
}
