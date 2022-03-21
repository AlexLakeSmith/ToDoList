import { ReactComponent as PlusIcon } from "../assets/svg/plus.svg";
import { FormEvent, useState, ChangeEvent } from "react";

// Destructure task from the props.
export type AddTodoProps = {
  task: string;
  handleSubmitTask: (e: FormEvent) => void;
  handleChange: (e: ChangeEvent) => void;
};

// Assign the created prop types to the component.
// Form for inputting a new task and an add button to add the task to the list.
export const AddTask = ({
  task,
  handleSubmitTask,
  handleChange,
}: AddTodoProps) => {
  return (
    <>
      <form onSubmit={handleSubmitTask}>
        <input
          type="text"
          name="task"
          value={task}
          onChange={handleChange}
          className="addTask"
        />
        <button type="submit" aria-label="Add task">
          <PlusIcon className="plusIcon" />
        </button>
      </form>
    </>
  );
};
