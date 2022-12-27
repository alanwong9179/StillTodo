import { atom, selector } from "recoil";

const todoListState = atom({
    key: 'todoListState',
    default: [],
  });

const currEditTask = atom({
  key: 'currEditTask',
  default: ''
})

const sortTodoList = selector({
  key: 'sortTodoList',
  get: ({get}) => {
    let todoList = get(todoListState);
    if (todoList.lenght > 1){
      return todoList.sort((a,b) => {return a.date - b.date});
    }else{
      return todoList
    }

  }
})

const showLoading = atom({
  key: 'showLoading',
  default: false
})

export {
    todoListState,
    currEditTask,
    sortTodoList,
    showLoading
}

