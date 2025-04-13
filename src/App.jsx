import { useState, useRef } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: "Todo1", completed: false },
  ]);

  const todoNameRef = useRef();

  // taskの追加
  const handleAddTodo = () => {
    const name = todoNameRef.current.value;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, completed: false }];
    });
    todoNameRef.current.value = null;
  };

  //checkboxの更新
  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  // taskの削除
  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  // taskの数をカウント
  const countTask = todos.filter((todo) => !todo.completed).length;

  return (
    <>
      <div>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
        <input type="text" ref={todoNameRef}/>
        <button onClick={handleAddTodo}>タスクを追加</button>
        <button onClick={handleDeleteTodo}>タスクの削除</button>
        <div>残りのタスク数: {countTask}</div>
      </div>
    </>
  );
}

export default App;
