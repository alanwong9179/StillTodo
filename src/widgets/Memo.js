import styled from "@emotion/styled";
import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import DoneBtn from "./DoneBtn";
import EditBtn from "./EditBtn";
import TextArea from "./TextArea";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { currEditTask, todoListState } from "../RecoilStates";

const MemoBox = styled(Box)({
  padding: 10,
  height: 200,
  borderRadius: 15,
  display: "flex",
  flexDirection: "column",
});

export default function Memo({ content, index, color, uid }) {
  const setCurrentEditTask = useSetRecoilState(currEditTask);
  const currEdit = useRecoilValue(currEditTask);
  const setTodoList = useSetRecoilState(todoListState)

  const [editingText, setEditingText] = useState(content);

  const onEdit = () => {
    setCurrentEditTask(uid);
  };

  const onSaveEdit = () => {
    console.log(editingText)
    setTodoList((og) => 
      og.uid === uid ?
      {content: editingText}
      :
      og
    )
  }




  return (
    <MemoBox
      key={index}
      style={{
        backgroundColor: color,
      }}
    >
      <Box sx={{ flex: 1, overflow: "auto" }}>
        {uid === currEdit ? <TextArea text={editingText} onEditing={setEditingText}/> : content}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Box sx={{ marginRight: 2 }}>
          <EditBtn onEdit={onEdit} isEditing={uid === currEdit} onSaveEdit={onSaveEdit}/>
        </Box>
        <Box>
          <DoneBtn isEditing={uid === currEdit} />
        </Box>
      </Box>
    </MemoBox>
  );
}
