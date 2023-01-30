import React, { useState } from "react";
import { Modal, Alert, message } from "antd";
import uuid from "react-uuid";

import defaultTask from "../types/Task";
import useTasks from "../hooks/useTasks";
import TaskEdit from "./TaskEdit";

const NewTask = ({ openModal, setOpenModal }) => {
  const [task, setTask] = useState(defaultTask);
  const [load, setLoad] = useState(false);
  const [errorText, setErrorText] = useState("");
  const { addTask } = useTasks();

  const handleClose = () => {
    setOpenModal(false);
    setTask(defaultTask);
  };

  const handleAdd = async () => {
    setLoad(true);
    const _task = { ...task, id: uuid() };
    try {
      const resp = await addTask(_task);
      if (resp.status === 201) {
        message.success(`new task ${task.title} added successfully`);
        setOpenModal(false);
      } else {
        setErrorText("not added");
      }
    } catch (err) {
      setErrorText("error adding new task");
    }

    setLoad(false);
  };

  return (
    <Modal
      title="New Task"
      open={openModal}
      onOk={handleAdd}
      onCancel={handleClose}
      maskClosable={false}
      confirmLoading={load}
    >
      {errorText && <Alert type="error" message={errorText} showIcon />}
      <TaskEdit task={task} setTask={setTask} />
    </Modal>
  );
};

export default NewTask;
