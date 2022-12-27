import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import SideBar from "./widgets/SideBar";
import TodayTasks from "./screen/TodayTasks";
import { Routes, Route } from "react-router-dom";
import TaskArea from "./screen/TaskArea";
import Notes from "./screen/Notes";
import RightBar from "./widgets/RightBar";
import PageLoading from "./widgets/PageLoading";
import KeysList from "./screen/KeysList";
import TopBar from "./widgets/TopBar";
import TaskList from "./widgets/TaskList";
import { AnimatePresence, motion } from "framer-motion";
import { grey } from "@mui/material/colors";
import { IconButton, Paper, Button, Divider} from "@mui/material";
import Typography from '@mui/material/Typography';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const TaskDetails = ({setSelectTask, selectedTask}) => {

  const {content, datetime, done, doneDateTime, uid} = selectedTask[0]

  return(
  <motion.div 
      animate={{width:500}} 
      initial={{width: 0}} 
      style={{position:'absolute', top: 0, right: 0, height:'100vh', overflowX: 'hidden'}}  
      exit={{width:0, opacity: 1, transition: {duration: 0.3}}}  
    >
        <Paper sx={{background:grey[900], height:'100%', width:'100%'}} elevation={24} >
          <Box >
            <Box pl={2} pt={2}>            
              <Button 
              onClick={()=>{setSelectTask([])}}
              sx={{
                background:grey[800],
                "&:hover": {background:grey[700]},
                width:'30px',
                height:'30px',
                minWidth:'30px'
              }}>
                <KeyboardArrowRightIcon sx={{color: '#FFF', fontSize:'20px'}} />
              </Button>
            </Box>
            <Divider color={grey[700]} style={{marginTop: 12}}/>
            <Box pl={2} pt={2} pr={2}>
            <Typography variant="h5" gutterBottom color={"#FFF"}>{content}</Typography>
            </Box>


          </Box>
        </Paper>
      </motion.div>
  )

}

function App() {
  const [selectedTask, setSelectTask] = useState([])

  console.log(selectedTask)
  
  return (
    <Box>
      <Box>
        <TopBar />
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
        }}>
        <Box style={{ flex: 1 }}>
          <SideBar />
        </Box>

        <Box
          style={{flex: 10}}>
          <Routes>
            <Route path="/" element={<TaskList setSelectTask={setSelectTask}/>} />
            <Route path="/keys" element={<KeysList />} />
          </Routes>
        </Box>

        <Box
          style={{flex: 1}}>

        </Box>

        <PageLoading />
      </Box>
      <AnimatePresence>
      {selectedTask.length > 0 &&     
      <TaskDetails setSelectTask={setSelectTask} selectedTask={selectedTask}/>
      }
      </AnimatePresence>
    </Box>

  );
}

export default App;
