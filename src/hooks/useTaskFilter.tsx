import { useEffect, useMemo } from "react";
import { Task } from "@/types";
import { useDataForm } from "@/contexts";

export const useTaskFilter = (tasks: Task[], filter: string) => {
  const { setTaskCount } = useDataForm();
  const filteredTasks = useMemo(() => {
    return filter
      ? tasks.filter((task: Task) => task.status === filter)
      : tasks;
  }, [tasks, filter]);

  useEffect(() => {
    setTaskCount((prevCount) => ({ taskCount: filteredTasks.length }));
  }, [filteredTasks.length, setTaskCount]);

  return {
    filteredTasks,
  };
};
