import { Task } from "@/types";
export const useTaskFilter = (tasks: Task[], filter: string) => {
  const filteredTasks = filter
    ? tasks.filter((task: Task) => task.status === filter)
    : tasks;
  return {
    filteredTasks,
  };
};
