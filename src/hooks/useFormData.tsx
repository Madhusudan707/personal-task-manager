import { useState } from "react";
import { formDataObject } from "@/types";

export const useFormData = (initialFormData: formDataObject) => {
  const [formData, setFormData] = useState(initialFormData);
  const [prefilledFormData, setPrefilledFormData] = useState(initialFormData);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return {
    formData,
    handleInputChange,
    setFormData,
    prefilledFormData,
    setPrefilledFormData,
  };
};
