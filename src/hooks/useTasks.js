import axios from "axios";

const BASE_URL = "http://localhost:8000/tasks";

const useTasks = () => {
  const getTasks = async () => {
    const resp = await axios.get(BASE_URL);
    return resp.data;
  };

  const findTaskById = async (id) => {
    const resp = await axios.get(`${BASE_URL}/${id}`);
    return resp.data;
  };

  const addTask = async (task) => {
    return await axios.post(BASE_URL, task);
  };

  const updateTask = async (task) => {
    return await axios.put(`${BASE_URL}/${task.id}`, task);
  };

  const deleteTask = async (taskId) => {
    return await axios.delete(`${BASE_URL}/${taskId}`);
  };

  return { getTasks, findTaskById, addTask, updateTask, deleteTask };
};

export default useTasks;
