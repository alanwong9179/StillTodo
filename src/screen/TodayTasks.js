import { Box } from "@mui/system";
import React from "react";
import { useRecoilValue } from "recoil";
import { currEditTask, todoListState } from "../RecoilStates";
import Memo from "../widgets/Memo";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export default function TodayTasks() {
  const todoList = useRecoilValue(todoListState);
  console.log(todoList)

  return (
    <Box>
      <Grid2 container spacing={5}>
        {todoList.map((task, index) => (
           <Grid2 item xs={4} >
            <Memo content={task.content} color={task.color} key={index} uid={task.uid}/>
           </Grid2>

        ))}
      </Grid2>
    
    </Box>
  );
}
