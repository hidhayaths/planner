import React, { useEffect, useState } from "react";
import useTasks from "../hooks/useTasks";
import Task from "./Task";
import NewTask from "./NewTask";

import { Button } from "antd";

const Tasks = () => {
  const { getTasks } = useTasks();
  const [openNew, setOpenNew] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loadTasks = async () => {
      const allTasks = await getTasks();
      setTasks(allTasks);
    };
    loadTasks();
  });

  return (
    <>
      <Button
        type="primary"
        shape="round"
        onClick={() => setOpenNew(true)}
        className="add-task-btn"
      >
        Add New
      </Button>
      <div className="tasks">
        {tasks.map((t) => (
          <Task task={t} key={t.id} />
        ))}
      </div>
      <NewTask openModal={openNew} setOpenModal={setOpenNew} />
    </>
  );
};

export default Tasks;
