import { Row } from "./Row";
import { data } from "../todos";
import { FormEvent, useState, ChangeEvent } from "react";
import { v4 as uuid } from "uuid";
import { AddTask } from "./AddTask";

type Todo = {
  id: string;
  task: string;
  isCompleted: boolean;
};

export const Todos = () => {
  //useState, type of array of tasks.
  const [todos, setTodos] = useState<Todo[]>(data);
  // UseState hook for adding a new task.
  const [task, setTask] = useState("");

  // TasksLength: How many tasks left
  const tasksLength = todos.length;
  // HasTasks: Are there any tasks left?
  const hasTasks = tasksLength > 0;
  // Remaining Tasks: # of tasks left to do which aren't marked complete.
  const remainingTasks = todos.filter((todo) => !todo.isCompleted);

  const handleChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setTask(value);
  };

  const handleAddTask = (todo: Todo) => {
    const updatedTasks = [...todos, todo];
    setTodos(updatedTasks);
    setTask("");
  };

  const handleSubmitTask = (e: FormEvent) => {
    e.preventDefault();
    const todo = {
      id: uuid(),
      task: task,
      isCompleted: false,
    };
    task && handleAddTask(todo);
  };

  // Handler which will take an ID and delete it from the list. Look through tasks and filter out the ID which got clicked.
  // Then updates the list of tasks with the filtered vers.
  const handleDelete = (id: string) => {
    const updatedTasks = todos.filter((todo) => todo.id != id);
    setTodos(updatedTasks);
  };

  //Handler which will take the ID and map
  const handleComplete = (id: string) => {
    const updatedTasks = todos.map((todo) => {
      if (todo.id == id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
    setTodos(updatedTasks);
  };

  const RemainingMessage = () => {
    let outcome = "";
    if (!hasTasks) {
      outcome = "0 Tasks Remaining";
    } else {
      outcome = "Still tasks to complete";
    }
    return <>outcome</>;
  };

  return (
    <section>
      {todos.map((todo) => (
        <Row
          key={todo.id}
          todo={todo}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
        />
      ))}
      <AddTask
        task={task}
        handleChange={handleChange}
        handleSubmitTask={handleSubmitTask}
      />
    </section>
  );
};
