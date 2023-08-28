import { useState } from "react";
import { useFormData } from "@/hooks";
import { initialFormData } from "@/LocalData";

export const useModal = (initialState = false) => {
  const [isModalOpen, setIsModalOpen] = useState(initialState);
  const { setFormData, setPrefilledFormData } = useFormData(initialFormData);

  const openModal = (data: any) => {
    setIsModalOpen(true);
    setFormData(data);
    setPrefilledFormData(data);
  };

  const closeModal = () => {
    console.log("useModal save or update data");
    setIsModalOpen(false);
  };

  return {
    isModalOpen,
    openModal,
    closeModal,
  };
};
