import { useState } from "react";
import TodoList from "./TodoList"

function App() {

  const [todos, setTodos] = useState(["タスク1", "タスク2"]);
 
  return (
    <>
    <div><TodoList todos={todos}/>
    <input type="text" />
    <button>タスクを追加</button>
    <button>タスクの削除</button>
    <div>残りのタスク数: </div>
    </div>
    </>
  )
}

export default App
