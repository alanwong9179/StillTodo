import React, {useState, useEffect} from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Box } from '@mui/system'
import { getTitle } from '../function/getTitleByPath'
import { Scrollbars } from 'react-custom-scrollbars-2';
import TodayTasks from './TodayTasks';
import { useRecoilState, useRecoilValue } from 'recoil';
import { todoListState, sortTodoList } from '../RecoilStates';
import { getUndoneTask } from '../api/fetchData'
import DailyTasks from './DailyTasks' ;

export default function TaskArea() {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const sortedList = useRecoilValue(sortTodoList);

  useEffect(() => {
    getUndoneTask().then(t => {
      setTodoList(t)
    })
  }, []);

  return (
    <Scrollbars>
    <Box sx={{mt:10, ml: 4, mr: 4,}}>
     {
      todoList.map(todo => (
        todo.data.length > 0 &&
          <DailyTasks date={todo.date} todoList={todo.data} />
      ))
     }
    </Box>
    </Scrollbars>
  )
}
