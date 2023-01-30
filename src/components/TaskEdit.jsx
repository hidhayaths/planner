import TextField from "./TextField";
import SelectField from "./SelectField";

const status = ["not started", "in progress", "blocked", "completed"];

const TaskEdit = ({ task, setTask }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    const tasknew = { ...task };
    tasknew[name] = value;
    setTask(tasknew);
  };

  return (
    <>
      <div className="add-update-task-container">
        <TextField
          name="title"
          value={task.title}
          onChange={handleChange}
          title="Title"
        />
        <TextField
          name="description"
          value={task.description}
          onChange={handleChange}
          title="Description"
        />
        <TextField
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
          title="Due by"
          type="date"
        />
        <SelectField
          name="status"
          value={task.status}
          onChange={handleChange}
          title="Status"
          options={status}
        />
      </div>
    </>
  );
};

export default TaskEdit;
