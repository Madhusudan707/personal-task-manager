import { useState } from "react";
import { useFormData } from "@/hooks";
import { initialFormData } from "@/LocalData";
import { useDataForm } from "@/contexts";

export const useModal = (initialState = false) => {
  const [isModalOpen, setIsModalOpen] = useState(initialState);
  const { setFormData, setPrefilledFormData } = useFormData(initialFormData);
  const { setUpdateDataForm } = useDataForm();

  const openModal = (data: any) => {
    setIsModalOpen(true);
    setFormData(data);
    setPrefilledFormData(data);
    setUpdateDataForm(data);
  };

  const closeModal = () => {
    console.log(isModalOpen);
    setIsModalOpen(false);
  };

  return {
    isModalOpen,
    openModal,
    closeModal,
  };
};
