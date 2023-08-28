import { useState } from "react";
import { Task } from "@/types";
import { doc, updateDoc } from "firebase/firestore";
import { firestore } from "../../firebaseConfig";
import { useModal } from "@/hooks";

export const useFirestoreDataUpdate = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [success, setSuccess] = useState(false);
  const { closeModal } = useModal();
  const updateCollection = async (task: Task) => {
    try {
      setIsUpdating(true);
      setError(null);
      setSuccess(false);
      console.log(task);
      // const taskRef = doc(firestore, "task", task.doc_id);
      // console.log(taskRef);
      // const response = await updateDoc(taskRef, {
      //   title: task.title,
      //   description: task.description,
      //   status: task.status,
      // });
      // console.log(response);

      console.log("useFSDataUpdate update data");
      closeModal();
      setSuccess(true);
    } catch (error: any) {
      console.log(error);
      setError(error);
    } finally {
      setIsUpdating(false);
    }
  };

  return { updateCollection, isUpdating, error, success };
};
