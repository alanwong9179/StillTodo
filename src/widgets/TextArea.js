import { TextField } from "@mui/material";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const textAreaTheme = createTheme({
  palette: {
    primary: {
      main: grey[800],
    },
  },
});

export default function TextArea({text, onEditing}) {


  return (
    <ThemeProvider theme={textAreaTheme}>
      <TextField multiline autoFocus rows={4} fullWidth value={text} onChange={(e)=>{onEditing(e.target.value)}}/>
    </ThemeProvider>
  );
}
