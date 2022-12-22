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

const RouterCenter = () => {
  return (
    <Routes>
      <Route path="/" element={<TaskList />} />
      <Route path="/keys" element={<KeysList />} />
    </Routes>
  );
};

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
      }}>
      <Box style={{ flex: 1 }}>
        <SideBar />
      </Box>

      <Box
        style={{
          flex: 10,
        }}>
        <RouterCenter />
      </Box>

      <Box
        style={{
          flex: 1,
        }}>

      </Box>

      <PageLoading />
    </Box>
    </Box>

  );
}

export default App;
