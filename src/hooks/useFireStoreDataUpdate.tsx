import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { firestore } from "../../firebaseConfig";
import { useModal } from "@/hooks";
import { useDataForm } from "@/contexts";

export const useFirestoreDataUpdate = () => {
  const [isUpdated, setIsUpdated] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [success, setSuccess] = useState(false);
  const { closeModal } = useModal();
  const { titleRef, descriptionRef, statusRef, docIDRef } = useDataForm();
  const updateCollection = async () => {
    try {
      setIsUpdated(true);
      setError(null);
      setSuccess(false);
      if (!docIDRef.current?.value) {
        throw new Error("docIDRef is undefined");
      }
      const taskRef = doc(firestore, "task", docIDRef.current.value);
      await updateDoc(taskRef, {
        title: titleRef.current?.value,
        description: descriptionRef.current?.value,
        status: statusRef.current?.value,
      });
      closeModal();
    } catch (error: any) {
      console.log(error);
      setError(error);
    } finally {
      setIsUpdated(false);
    }
  };

  return { updateCollection, isUpdated, error, success };
};
