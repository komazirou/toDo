import { useState, useRef } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: "Todo1", completed: false },
  ]);

  const todoNameRef = useRef();

  const handleAddTodo = () => {
    // taskの追加

    console.log(todoNameRef.current.value);

  }

  return (
    <>
      <div>
        <TodoList todos={todos} />
        <input type="text" ref={todoNameRef}/>
        <button onClick={handleAddTodo}>タスクを追加</button>
        <button>タスクの削除</button>
        <div>残りのタスク数: </div>
      </div>
    </>
  );
}

export default App;
