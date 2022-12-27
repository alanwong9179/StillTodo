import React, { useState } from "react";
import { motion } from "framer-motion";
import { IconButton } from "@mui/material";
import { useRecoilState, useSetRecoilState } from "recoil";
import { todoListState } from "../RecoilStates";
import uuid from "react-uuid";
import { insertDailyTask } from "../api/insertData";
import { getTask } from "../api/fetchData";
import moment from "moment";
import { showLoading } from "../RecoilStates";

export default function MemoBall({ color, show, index }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const setShowLoading = useSetRecoilState(showLoading)

  const addTask = async () => {
    setShowLoading(true)
    let uid = uuid();
    let createDateTime = moment().format("YYYY-MM-DD HH:mm:ss");
    await insertDailyTask(uid, color, createDateTime);
    let recordHasToday =
      todoList.filter((td) => td.date === moment().format("YYYY-MM-DD"))
        .length > 0;
    let newTaskObj = {
      color: color,
      content: "",
      uid: uid,
      datetime: createDateTime,
      done: false,
      doneDateTime: "",
    };

    if (recordHasToday) {
      let copyData =  Object.assign(todoList);
      let targetData = copyData.filter(
        (og) => og.date === moment().format("YYYY-MM-DD")
      )[0].data;

      let addedData;
      let newData;
      if (targetData.length > 0) {
        newData = Object.assign([], targetData);
        newData.push(newTaskObj)
        addedData = newData
      } else {
        addedData = [newTaskObj];
      }

      setTodoList(
        todoList.map((og) =>
          og.date === moment().format("YYYY-MM-DD")
            ? { ...og, data: addedData }
            : { ...og }
        )
      );
    } else {
      let currTodoList = JSON.parse(JSON.stringify(todoList));
      currTodoList.push({
        date: moment().format("YYYY-MM-DD"),
        data: [newTaskObj],
      });

      setTodoList(currTodoList);
    }

    setShowLoading(false)


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
        onClick={() => {
          addTask(color);
        }}
      ></IconButton>
    </motion.div>
  );
}
