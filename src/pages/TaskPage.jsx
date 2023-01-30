import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Button, Alert, message } from "antd";

import TaskEdit from "../components/TaskEdit";
import useTasks from "../hooks/useTasks";
import defaultTask from "../types/Task";
import ErrorPage from "./ErrorPage";

const defaultAlertMessage = {
  message: "",
  type: "info",
};

const TaskPage = () => {
  const { taskId } = useParams();
  const { findTaskById } = useTasks();
  const [task, setTask] = useState(null);

  const { updateTask, deleteTask } = useTasks();

  const [alertMessage, setAlertMessage] = useState(defaultAlertMessage);

  const handleSave = async () => {
    const isDataValid = await validateData();
    if (!isDataValid) return;

    try {
      const resp = await updateTask(task);

      if (resp.status === 200) {
        setAlertMessage({ message: "successfully updated", type: "success" });
      } else {
        setAlertMessage({ message: "error while updating", type: "error" });
      }
    } catch (err) {
      setAlertMessage({ message: err.message, type: "error" });
      console.error(err);
    }
  };

  const handleDelete = async () => {
    try {
      const resp = await deleteTask(taskId);
      if (resp.status === 200) {
        message.success(`task ${task.title} removed!`);
        setTask(defaultTask);
      } else {
        setAlertMessage({ message: "error while deleting", type: "error" });
      }
    } catch (err) {
      setAlertMessage({ message: err.message, type: "error" });
      console.error(err);
    }
  };

  const validateData = async () => {
    const { title, status } = task;

    if (!title) {
      setAlertMessage({ ...alertMessage, message: "Please enter task title" });
    }

    if (!status) {
      setAlertMessage({
        ...alertMessage,
        message: "please select appropriate task status",
      });
    }

    if (!title || !status) {
      setAlertMessage({ ...alertMessage, type: "error" });
      return false;
    }

    return true;
  };

  useEffect(() => {
    const getTask = async () => {
      const taskFound = await findTaskById(taskId);
      if (taskFound) {
        setTask(taskFound);
      }
    };
    getTask();
  }, []);

  if (!task) return <ErrorPage />;

  if (!task.title) return <Navigate to="/" />;

  return (
    <div className="task-edit-container">
      {alertMessage.message && (
        <Alert
          message={alertMessage.message}
          type={alertMessage.type}
          showIcon
        />
      )}
      <TaskEdit task={task} setTask={setTask} />
      <div className="task-edit-controls">
        <Button onClick={handleSave} className="add-btn">
          Save
        </Button>
        <Button onClick={handleDelete} className="delete-btn">
          Delete
        </Button>
      </div>
    </div>
  );
};

export default TaskPage;
