import { useState } from "react";
import { Errors } from "@/types";
import { useFormData, useSaveOrUpdate } from "@/hooks";
import { initialFormData } from "@/LocalData";

export const useFormValidation = () => {
  const { formData, handleInputChange } = useFormData(initialFormData);
  const { isCallSaveOrUpdate } = useSaveOrUpdate();

  const [errors, setErrors] = useState<Errors>({});

  const validateForm = (): boolean => {
    const newErrors: Errors = {};

    if (!formData.title) {
      newErrors.title = "Title is required.";
    }

    if (!formData.description) {
      newErrors.description = "Description is required.";
    }

    if (!formData.status) {
      newErrors.status = "Status is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (label: string, formData: any) => {
    const isValid = validateForm();

    if (isValid) {
      isCallSaveOrUpdate(label, formData);
    }
  };

  return { formData, errors, handleInputChange, validateForm, handleSubmit };
};
