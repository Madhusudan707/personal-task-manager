import { getFirestore, doc, updateDoc } from "firebase/firestore";
import { app } from "../../firebaseConfig";

export const useFirebaseUpdate = (): {
  updateData: (data: any) => Promise<void>;
} => {
  const updateData = async (data: any) => {
    try {
      const db = getFirestore(app);
      const { collection, docId } = data;

      await updateDoc(doc(db, collection, docId), {
        ...data,
      });
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return { updateData };
};
