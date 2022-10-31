import { atom } from "recoil";

const todoListState = atom({
    key: 'todoListState',
    default: [],
  });

const currEditTask = atom({
  key: 'currEditTask',
  default: ''
})

export {
    todoListState,
    currEditTask
}