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
import AddIcon from "@mui/icons-material/Add";
import { insertTask } from "../api/insertData";
import uuid from "react-uuid";
import moment from "moment";
import PageLoading from "./PageLoading";
import { doneTask } from "../api/updataData";
import TaskDetails from "./TaskDetails";
import { AnimatePresence, motion } from "framer-motion";

export default function TaskList() {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedTask, setSelectTask] = useState([]);


  const initGetTask = () => {
    getTasks().then((t) => {
      setTodoList(t);
      setLoading(false);
    });
  };

  useEffect(() => {
    initGetTask();
  }, []);

  const insertNewTask = async () => {
    setLoading(true);
    let uid = uuid();
    insertTask(uid, moment().format("YYYY-MM-DD HH:mm:ss")).then((added) => {
      added && initGetTask();
    });
  };

  const onDoneTask = async (uid) => {
    setLoading(true);
    doneTask(uid).then((done) => {
      done && initGetTask();
    });
  };


  return (
    <Box>
      <Box style={{ textAlign: "-webkit-center" }}>
        <Box
          style={{
            width: 800,
            textAlign: "left",
            display: "flex",
            flexDirection: "row",
          }}
          mt={2}
        >
          <Box flex={1}>
            <Typography variant="h4" gutterBottom>
              Tasks
            </Typography>
          </Box>
          <Box>
            <IconButton
              sx={{ right: "16%" }}
              onClick={() => {
                insertNewTask();
              }}
            >
              <AddIcon color="#fff" />
            </IconButton>
          </Box>
        </Box>
        <List style={{ width: 800 }}>
          {todoList.length > 0 &&
            todoList.map((task) => (
              <>
                <ListItem
                  secondaryAction={
                    <IconButton
                      edge="end"
                      onClick={() => {
                        onDoneTask(task.uid);
                      }}
                    >
                      <CheckIcon />
                    </IconButton>
                  }
                >
                  <ListItemButton
                    style={{
                      boxShadow:
                        selectedTask.length > 0
                          ? selectedTask[0].uid === task.uid
                            ? " 1px 2px 9px 1px rgba(64,64,64,0.86)"
                            : ""
                          : "",
                    }}
                    onClick={() => {
                      setSelectTask([task]);
                    }}
                  >
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
      <PageLoading open={loading} />
      <AnimatePresence>
      {selectedTask.length > 0 && (
          <TaskDetails
            setSelectTask={setSelectTask}
            selectedTask={selectedTask}
            initGetTask={()=>{initGetTask()}}
            setLoading={setLoading}
          />
        )}
    </AnimatePresence>
 
    </Box>
  );
}
