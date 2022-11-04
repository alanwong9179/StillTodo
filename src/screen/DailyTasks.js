import { Box } from "@mui/system";
import React from "react";
import Memo from "../widgets/Memo";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { AnimatePresence, motion } from "framer-motion";
import moment from 'moment'

export default function DailyTasks({date, todoList}) {

  const transition = {
    duration: 1,
  };

  const isToday = date === moment().format('YYYY-MM-DD')

  return (
    <Box mb={5}>
     <Box sx={{fontSize:'2rem', mb:3}}>{isToday? 'Today': date}</Box>
      <AnimatePresence>
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
        
      </AnimatePresence>
    </Box>
  );
}
