const defaultTask = {
  title: "",
  description: "",
  dueDate: new Date().toISOString().slice(0, 10),
  status: "not started",
};

export default defaultTask;
