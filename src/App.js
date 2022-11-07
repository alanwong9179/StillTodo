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

const RouterCenter = () => {
  return (
    <Routes>
      <Route path="/" element={<TaskArea />} />
      <Route path="/keys" element={<KeysList />} />
    </Routes>
  );
};

function App() {
  return (
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
        <RightBar />
      </Box>

      <PageLoading />
    </Box>
  );
}

export default App;
