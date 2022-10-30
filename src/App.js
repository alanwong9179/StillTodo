import React, {useEffect, useState} from "react";
import Box from '@mui/material/Box';
import SideBar from "./widgets/SideBar";
import TodayTasks from "./screen/TodayTasks";
import {Routes,Route} from "react-router-dom";
import TaskArea from "./screen/TaskArea";
import Notes from "./screen/Notes";

const RouterCenter = () => {

  return (
    <Routes>
    
    <Route path="/" element={<TaskArea />}>
      <Route path="today" element={<TodayTasks />} />
      <Route path="notes" element={<Notes />} />
    </Route>
    </Routes>
  )
}


function App() {
  return (
    <Box style={{
      display: 'flex',
      flexDirection: 'row'
    }}>
      <Box style={{ flex: 1, }}>
      <SideBar />
      </Box>

      <Box style={{
        flex: 10
      }}>
      <RouterCenter />
      </Box>


    </Box>
  );
}

export default App;
