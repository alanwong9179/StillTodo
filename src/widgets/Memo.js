import styled from "@emotion/styled";
import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import DoneBtn from "./DoneBtn";
import EditBtn from "./EditBtn";
import TextArea from "./TextArea";
import { useRecoilState , useSetRecoilState} from "recoil";
import { currEditTask, todoListState } from "../RecoilStates";
import { Scrollbars } from "react-custom-scrollbars-2";
import { doneTask, updateTaskContent } from "../api/updataData";
import moment from "moment";
import { getTask } from "../api/fetchData";
import { showLoading } from "../RecoilStates";

const MemoBox = styled(Box)({
  padding: 20,
  height: 200,
  borderRadius: 15,
  display: "flex",
  flexDirection: "column",
});

export default function Memo({ content, index, color, uid, date }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const [currEdit, setCurrEdit] = useRecoilState(currEditTask);
  const [editingText, setEditingText] = useState(content);
  const setShowLoading = useSetRecoilState(showLoading)

  const onEdit = () => {
    setCurrEdit(uid);
  };

  const onSaveEdit = async () => {
    await updateTaskContent(
      uid,
      editingText
    );
    let targetData = todoList.filter(
      (og) => og.date === moment(date).format("YYYY-MM-DD")
    )[0].data;

    let editedData = targetData.map(c => c.uid === uid ? {...c, content: editingText} : c)

    setTodoList(
      todoList.map((og) =>
        og.date === moment(date).format("YYYY-MM-DD")
          ? { ...og, data: editedData}
          : { ...og }
      )
    );

    setCurrEdit("");
  };

  const onDone = async () => {
    setShowLoading(true)

    await doneTask(
      uid,
      editingText
    );
    let targetData = todoList.filter(
      (og) => og.date === moment(date).format("YYYY-MM-DD")
    )[0].data;

    setTodoList(
      todoList.map((og) =>
        og.date === moment(date).format("YYYY-MM-DD")
          ? { ...og, data: targetData.filter((info) => info.uid !== uid) }
          : { ...og }
      )
    );
    setShowLoading(false)


  };

  return (
    <MemoBox
      key={index}
      style={{
        backgroundColor: color,
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Scrollbars>
          {uid === currEdit ? (
            <TextArea text={editingText} onEditing={setEditingText} />
          ) : (
            <Box style={{ fontSize: 20, whiteSpace: "pre-wrap" }}>
              {content}
            </Box>
          )}
        </Scrollbars>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Box flex={1}>{moment(date).format("HH:mm:ss")}</Box>
        <Box sx={{ marginRight: 2 }}>
          <EditBtn
            onEdit={onEdit}
            isEditing={uid === currEdit}
            onSaveEdit={onSaveEdit}
          />
        </Box>
        <Box>
          <DoneBtn isEditing={uid === currEdit} onDone={onDone} />
        </Box>
      </Box>
    </MemoBox>
  );
}
