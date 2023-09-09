import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  ReactNode,
  useRef,
} from "react";
import { formDataObject, taskCountProps } from "@/types";

export const DataFormContext = createContext<DataFormContextType | undefined>(
  undefined
);

type DataFormContextType = {
  updateDataForm: formDataObject;
  setUpdateDataForm: React.Dispatch<React.SetStateAction<formDataObject>>;
  taskCount: taskCountProps;
  setTaskCount: React.Dispatch<React.SetStateAction<taskCountProps>>;
  titleRef: React.RefObject<HTMLInputElement>;
  descriptionRef: React.RefObject<HTMLTextAreaElement>;
  statusRef: React.RefObject<HTMLSelectElement>;
  docIDRef: React.RefObject<HTMLInputElement>;
};

interface DataFormProviderProps {
  children: ReactNode;
}

const initialTaskCount: taskCountProps = {
  taskCount: 0,
};
export const DataFormProvider: React.FC<DataFormProviderProps> = ({
  children,
}) => {
  const [updateDataForm, setUpdateDataForm] = useState<formDataObject>({});
  const [taskCount, setTaskCount] = useState<taskCountProps>(initialTaskCount);
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const statusRef = useRef<HTMLSelectElement>(null);
  const docIDRef = useRef<HTMLInputElement>(null);

  const contextValue = useMemo(() => {
    return {
      updateDataForm,
      setUpdateDataForm,
      titleRef,
      descriptionRef,
      statusRef,
      docIDRef,
      taskCount,
      setTaskCount,
    };
  }, [updateDataForm, taskCount]); // Include taskCount in the dependency array

  return (
    <DataFormContext.Provider value={contextValue}>
      {children}
    </DataFormContext.Provider>
  );
};

DataFormProvider.displayName = "DataFormProvider";

export const useDataForm = () => {
  const context = useContext(DataFormContext);
  if (context === undefined) {
    throw new Error("useDataForm must be used within a DataFormProvider");
  }
  return context;
};
