import React from "react";

import { todoListState } from "../../Atoms";
import { useRecoilValue } from "recoil";

import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";
import TodoListFilters from "./TodoListFilters";
import TodoListStatus from "./TodoListStatus";

function TodoList() {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      <TodoListStatus />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map(todoItem => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}

export default TodoList;
