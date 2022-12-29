import React, { useState , useEffect} from "react";
import { motion } from "framer-motion";
import {
  Paper,
  Box,
  Button,
  Divider,
  Typography,
  TextField,
} from "@mui/material";
import { grey, green, yellow, teal} from "@mui/material/colors";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { updateTaskContent } from "../api/updataData";

const theme = createTheme({
    palette: {
      primary: {
        main: grey[50],
      },
      nametag:{
        main: grey[800],
      }
    },
  });
  
const buttonTheme = createTheme({
  palette: {
 
  }
})

export default function TaskDetails({ setSelectTask, selectedTask, initGetTask, setLoading }) {
  const { content, datetime, done, doneDateTime, uid } = selectedTask[0];
  const [editMode, setEditMode] = useState(false);
 
  const onUpdateTitle = () => {
    setLoading(true)
    updateTaskContent(uid, content).then(()=>{
        setEditMode(false)
        initGetTask()
    })
  }

  return (
    <ThemeProvider theme={theme}>

    <motion.div
      animate={{ width: 500 }}
      initial={{ width: 0 }}
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        height: "100vh",
        overflowX: "hidden",
      }}
      exit={{ width: 0, opacity: 1, transition: { duration: 0.3 } }}
    >
      <Paper
        sx={{ background: grey[900], height: "100%", width: "100%" }}
        elevation={24}
      >
        <Box>
          <Box p={2} display="flex" flexDirection={"row"}>
            <Box flex={1}>
              <Button
                onClick={() => {
                  setSelectTask([]);
                }}
                sx={{
                  background: grey[800],
                  "&:hover": { background: grey[700] },
                  width: "30px",
                  height: "30px",
                  minWidth: "30px",
                }}
              >
                <KeyboardArrowRightIcon
                  sx={{ color: "#FFF", fontSize: "20px" }}
                />
              </Button>
            </Box>
            <Box>
              {editMode ? (
                <Button
                  onClick={() => {
                    onUpdateTitle()
                  }}
                  sx={{
                    background: green[800],
                    "&:hover": { background: green[700] },
                    width: "30px",
                    height: "30px",
                    minWidth: "30px",
                  }}
                >
                  <DoneIcon sx={{ color: "#FFF", fontSize: "20px" }} />
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    setEditMode(true);
                  }}
                  sx={{
                    background: yellow[800],
                    "&:hover": { background: yellow[700] },
                    width: "30px",
                    height: "30px",
                    minWidth: "30px",
                  }}
                >
                  <EditIcon sx={{ color: "#FFF", fontSize: "20px" }} />
                </Button>
              )}
            </Box>
          </Box>

          <Divider color={grey[700]} style={{ marginTop: 12, height: 5 }} />
          <Box pl={2} pt={2} pr={2}>
            <Box>
            {editMode ? (
              <TextField 
              multiline
              rows={5}
              label="Tasks" 
              variant="outlined" 
              value={content}
              onChange={(e)=>{setSelectTask(selectedTask.map(s => s.uid === uid && {...s, content: e.target.value}))}}
              sx={{
                '& .MuiOutlinedInput-root': {
                    '& fieldset':{
                        borderColor: grey[50]
                    },
                    '&:hover fieldset': {
                        borderColor: grey[50],
                      },
                    color:grey[50]
                },
                '& .MuiFormLabel-root':{
                    color:grey[50]
                },
                width:'100%'
              }}/>
            ) : (
              <Typography variant="h5" gutterBottom color={"#FFF"}>
                {content}
              </Typography>
            )}
            </Box>
              <Divider  color={grey[700]}  />
            <Box mt={1}>
            <Typography variant="h6" gutterBottom color={"#FFF"}>Follow By</Typography>
            <Button variant="contained" color="nametag" sx={{color:'#FFF'}}>ME</Button>
            </Box>
        
          </Box>
        </Box>
      </Paper>
    </motion.div>
            
    </ThemeProvider>
  );
}
