import React from "react";

import { RecoilRoot } from "recoil";

import CharacterCounter from "./Component/CharacterCounter";
import TodoList from "./Component/TodoList";

function App() {
  return (
    <RecoilRoot>
      {/* <CharacterCounter /> */}
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
