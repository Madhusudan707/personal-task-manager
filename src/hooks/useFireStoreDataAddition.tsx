import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../../firebaseConfig";
import { formDataObject } from "@/types";
import { useFirebaseUser, useModal } from "@/hooks";

export const useFirestoreDataAddition = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [success, setSuccess] = useState(false);
  const uniqueId: string = uuidv4();
  const { user } = useFirebaseUser();
  const { closeModal } = useModal();
  const addDataToCollection = async (newFormData: formDataObject) => {
    setIsAdding(true);
    setSuccess(false);

    try {
      const usersCollectionRef = collection(firestore, "task");

      await addDoc(usersCollectionRef, {
        id: uniqueId,
        title: newFormData.title,
        description: newFormData.description,
        status: newFormData.status,
        user_id: user?.uid,
      });
      console.log("useFSDataAddition save data");
      closeModal();
      setSuccess(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsAdding(false);
    }
  };

  return { addDataToCollection, isAdding, success };
};
