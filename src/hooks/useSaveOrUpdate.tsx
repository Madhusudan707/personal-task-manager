import { useFirestoreDataAddition, useFirestoreDataUpdate } from "@/hooks";

export const useSaveOrUpdate = () => {
  const { addDataToCollection } = useFirestoreDataAddition();
  const { updateCollection } = useFirestoreDataUpdate();

  const isCallSaveOrUpdate = (label: string, formData: any) => {
    label === "save" ? addDataToCollection(formData) : updateCollection();
  };

  return {
    isCallSaveOrUpdate,
  };
};
