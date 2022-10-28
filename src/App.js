import React, {useEffect, useState} from "react";
import Box from '@mui/material/Box';
import SideBar from "./widgets/SideBar";
import TodayTasks from "./screen/TodayTasks";
import {Routes,Route} from "react-router-dom";

const RouterCenter = () => {

  return (
    <Routes>
    <Route path="/" element={<TodayTasks />} />
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
