import React, { useState } from "react";
import { motion } from "framer-motion";
import { IconButton } from "@mui/material";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../RecoilStates";
import uuid from 'react-uuid';


export default function MemoBall({ color, show, index }) {
  const setTodoList = useSetRecoilState(todoListState);

  const addTask = () => {
    setTodoList((og) => [...og, {color: color, content: 'test', uid: uuid()}]);
  };

  const variants = {
    hide: { y: -30, opacity: 0 },
    show: { y: (index + 1) * 20, opacity: 1 },
  };

  const transition = {
    type: "spring",
    duration: show ? 0.8 : 0.3,
    bounce: show ? 0.6 : 0,
  };

  return (
    <motion.div
      animate={show ? "show" : "hide"}
      initial={false}
      variants={variants}
      transition={transition}
    >
      <IconButton
        size={"small"}
        sx={{
          width: 13,
          height: 13,
          backgroundColor: color,
          "&:hover": {
            backgroundColor: color,
          },
        }}
        onClick={()=>{addTask(color)}}
      ></IconButton>
    </motion.div>
  );
}
