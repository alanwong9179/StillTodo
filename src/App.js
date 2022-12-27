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
import { IconButton, Paper, Button} from "@mui/material";

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const TaskDetails = ({setShowDetail}) => {

  return(
    <motion.div animate={{width:500}} initial={{width: 0}} style={{position:'absolute', top: 0, right: 0, height:'100vh', overflowX: 'hidden'}}  exit={{width:0, opacity: 1}}  transition={{ type: "spring", bounce: 0.3, duration: 0.2}} >
      <Paper sx={{background:grey[900], height:'100%', width:'100%'}} elevation={24} >
        <Box>
          <Button 
          onClick={()=>{setShowDetail(false)}}
          sx={{
            background:grey[700],
            "&:hover": {background:grey[800]},
            width:'40px',
            height:'40px',
            minWidth:'40px'
            }}>
              <KeyboardArrowRightIcon sx={{color: '#FFF', fontSize:'30px'}} />
          </Button>
        </Box>
      </Paper>
    </motion.div>

  )

}

function App() {
  const [showDetail, setShowDetail] = useState(false)
  
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
            <Route path="/" element={<TaskList setShowDetail={setShowDetail}/>} />
            <Route path="/keys" element={<KeysList />} />
          </Routes>
        </Box>

        <Box
          style={{flex: 1}}>

        </Box>

        <PageLoading />
      </Box>
      <AnimatePresence>
      {showDetail && <TaskDetails setShowDetail={setShowDetail}/>}
      </AnimatePresence>
    </Box>

  );
}

export default App;
