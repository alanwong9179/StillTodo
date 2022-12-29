import React, { useState } from "react";
import Box from "@mui/material/Box";
import SideBar from "./widgets/SideBar";
import { Routes, Route } from "react-router-dom";
import KeysList from "./screen/KeysList";
import TopBar from "./widgets/TopBar";
import TaskList from "./widgets/TaskList";


function App() {

  return (
    <Box>
      <Box>
        <TopBar />
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box style={{ flex: 1 }}>
          <SideBar />
        </Box>

        <Box style={{ flex: 10 }}>
          <Routes>
            <Route
              path="/"
              element={<TaskList/>}
            />
            <Route path="/keys" element={<KeysList />} />
          </Routes>
        </Box>

        <Box style={{ flex: 1 }}></Box>

      </Box>
    
    </Box>
  );
}

export default App;
