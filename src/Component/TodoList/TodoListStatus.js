import React from "react";
import { useRecoilValue } from "recoil";
import { todoListStatusState } from "../../Atoms";

export default function TodoListStatus() {
  const {
    totalNum,
    totalCompleteNum,
    totalUncompleteNum,
    percentCompleted
  } = useRecoilValue(todoListStatusState);

  const formattedPercentCompleted = Math.round(percentCompleted);

  return (
    <ul>
      <li>Total items: {totalNum}</li>
      <li>Items completed: {totalCompleteNum}</li>
      <li>Items not completed: {totalUncompleteNum}</li>
      <li>Percent completed: {formattedPercentCompleted}</li>
    </ul>
  );
}
