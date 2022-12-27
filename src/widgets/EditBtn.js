import React from "react";
import { teal } from "@mui/material/colors";
import { Button, IconButton } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import DoneAllIcon from "@mui/icons-material/DoneAll";

const buttonTheme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
  },
});

export default function EditBtn({ onEdit, isEditing, onSaveEdit}) {
  return (
    <ThemeProvider theme={buttonTheme}>
      <Button
        variant="contained"
        size="small"
        sx={{ padding: 1, minWidth: 0, borderRadius: 3 }}
        onClick={() => {
          isEditing? onSaveEdit() : onEdit();
        }}
      >
        {isEditing ? <DoneAllIcon /> : <EditIcon />}
      </Button>
    </ThemeProvider>
  );
}
