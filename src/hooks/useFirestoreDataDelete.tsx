import { useState } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { firestore } from "../../firebaseConfig";

export const useFirestoreDataDelete = () => {
  const [deletionStatus, setDeletionStatus] = useState<
    "idle" | "deleting" | "success" | "error"
  >("idle");

  const handleDelete = async (id: string) => {
    setDeletionStatus("deleting");

    try {
      console.log("sf", id);

      const response = await deleteDoc(doc(firestore, "task", id));
      console.log(response);
      setDeletionStatus("success");
    } catch (error) {
      console.error("Error deleting document:", error);
      setDeletionStatus("error");
    }
  };

  return {
    deletionStatus,
    handleDelete,
  };
};
