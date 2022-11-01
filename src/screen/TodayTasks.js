import { Box } from "@mui/system";
import React, { forwardRef, useEffect } from "react";
import { useRecoilState } from "recoil";
import { currEditTask, todoListState } from "../RecoilStates";
import Memo from "../widgets/Memo";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { getTask } from "../api/fetchData";
import moment from "moment";
import Lottie from "lottie-react";
import loadingAnimation from "../animation/loadingAnimation.json";
import { AnimatePresence, motion } from "framer-motion";

export default function TodayTasks() {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  useEffect(() => {
    /*get task*/
    console.log("get task");
    getTask(moment().format("YYYY-MM-DD")).then((tasks) => {
      setTodoList(tasks);
    });
  }, []);

  const transition = {
    duration: 1,
  };

  return (
    <Box>
      <AnimatePresence>
        {todoList.length > 0 ? (
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={transition}
          >
            <Grid2 container spacing={5}>
              {todoList.map((task, index) => (
               <Grid2 item xs={4}>
                <motion.div
                  key={task.uid}
                  layout
                  initial={{
                    y: 0,
                    x: 200,
                    opacity: 1,
                  }}
                  animate={{
                    y: 0,
                    x: 0,
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                >
          
                  <Memo
                    content={task.content}
                    color={task.color}
                    key={index}
                    uid={task.uid}
                    date={task.datetime}
                  />
                  
                </motion.div>
                </Grid2>
               
              ))}
            </Grid2>
          </motion.div>
        ) : (
          <AnimatePresence>
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
            >
              <Lottie
                animationData={loadingAnimation}
                loop={true}
                width={400}
              />
            </motion.div>
          </AnimatePresence>
        )}
      </AnimatePresence>
    </Box>
  );
}
