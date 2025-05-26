import TodoItem from "./ToDoItem.jsx";
import styles from "./ToDoList.module.css";

export default function ToDoList({ todos, setTodos }) {
  if (todos.length === 0) {
    return (
      <div className={styles.list} style={{ textAlign: "center" }}>
        No items in the list
      </div>
    );
  }

  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.list}>
      {sortedTodos.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
