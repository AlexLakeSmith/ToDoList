// We must create the different types of props.
type Todo = {
  id: string;
  task: string;
  isCompleted: boolean;
};

type TodoProps = {
  todo: Todo;
  handleDelete: (id: string) => void;
  handleComplete: (id: string) => void;
};

// Creating the row component, this would be the actual to-do itself.
export const Row = ({
  todo: { task, isCompleted, id },
  handleDelete,
  handleComplete,
}: TodoProps) => {
  return (
    <>
      <div className="divOne">
        <p className="taskText">{task}</p>
        <div className="divTwo">
          <button
            aria-label="Delete a task"
            className="deleteButton"
            onClick={() => handleDelete(id)}
          >
            X
          </button>
          <input
            type="checkbox"
            className="box"
            checked={isCompleted}
            onChange={() => handleComplete(id)}
          />
        </div>
      </div>
    </>
  );
};
