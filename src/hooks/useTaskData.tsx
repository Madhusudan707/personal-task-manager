import { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { useFirebaseUser } from "./useFirebaseUser";
import { app } from "../../firebaseConfig"; // Make sure you have this import correct
import { Task } from "@/types";

export const useTaskData = (): Task[] => {
  const { user, loading } = useFirebaseUser();
  const [taskData, setTaskData] = useState<Task[]>([]);

  useEffect(() => {
    if (!loading && user) {
      const db = getFirestore(app);

      const tasksCollection = collection(db, "task");

      const q = query(tasksCollection, where("user_id", "==", user.uid));

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const tasks: Task[] = [];

        querySnapshot.forEach((docSnapshot) => {
          const doc_id: string = docSnapshot.id;
          const mergedData: any = {
            doc_id,
            ...docSnapshot.data(),
          };

          tasks.push(mergedData);
        });

        setTaskData(tasks);
      });

      return () => unsubscribe();
    }
  }, [user, loading]);

  return taskData;
};
