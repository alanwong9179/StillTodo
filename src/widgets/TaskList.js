import {
  Box,
  List,
  ListItem,
  IconButton,
  Typography,
  Divider,
  ListItemButton,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { getTasks } from "../api/fetchData";
import { grey } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CheckIcon from "@mui/icons-material/Check";


export default function TaskList({ setSelectTask}) {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    getTasks().then((t) => {
      setTodoList(t);
      console.log(t);
    });
  }, []);


  return (
    <Box>
      <Box style={{ textAlign: "-webkit-center" }}>
        <Box style={{ width: 800, textAlign: "left" }} pl={2} pt={2}>
          <Typography variant="h4" gutterBottom>
            Tasks
          </Typography>
        </Box>
        <List style={{ width: 800 }}>
          {todoList.length > 0 &&
            todoList.map((task) => (
              <>
                <ListItem
                  style={{
                    "&:hover": {
                      backgroundColor: "#2200ff",
                    },
                  }}
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <CheckIcon />
                    </IconButton>
                  }
                >
                  <ListItemButton onClick={()=>{setSelectTask([task])}}>
                    <Box flex={1}>{task.content}</Box>
                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      textAlign="right"
                      color={grey[400]}
                      fontSize={"0.5rem"}
                    >
                      <Box>{task.datetime.substring(0, 10)}</Box>
                      <Box>{task.datetime.substring(11, 19)}</Box>
                    </Box>
                  </ListItemButton>
                </ListItem>
                <Divider variant="middle" />
              </>
            ))}
        </List>
      </Box>

    </Box>
  );
}
