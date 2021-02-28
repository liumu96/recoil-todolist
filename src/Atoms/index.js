import { atom, selector } from "recoil";

const textState = atom({
  key: "textState",
  default: ""
});

const charCountState = selector({
  key: "charCountState",
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  }
});

const todoListState = atom({
  key: "todoListStore",
  default: []
});

const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "Show All"
});

const filterTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "Show Completed":
        return list.filter(item => item.isComplete);
      case "Show Uncompleted":
        return list.filter(item => !item.isComplete);
      default:
        return list;
    }
  }
});

const todoListStatusState = selector({
  key: "todoListStatusState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompleteNum = todoList.filter(item => item.isComplete).length;
    const totalUncompleteNUm = totalNum - totalCompleteNum;
    const percentCompleted =
      totalNum === 0 ? 0 : (totalCompleteNum / totalNum) * 100;

    return {
      totalNum,
      totalCompleteNum,
      totalUncompleteNUm,
      percentCompleted
    };
  }
});

export {
  textState,
  charCountState,
  todoListState,
  filterTodoListState,
  todoListFilterState,
  todoListStatusState
};
