import { Box } from "@mui/system";
import React from "react";
import { useRecoilValue } from "recoil";
import { todoListState } from "../RecoilStates";

export default function TodayTasks() {
  const todoList = useRecoilValue(todoListState);

  return (
    <Box>
      {todoList.map((task) => (
        <div>{task}</div>
      ))}
    </Box>
  );
}
