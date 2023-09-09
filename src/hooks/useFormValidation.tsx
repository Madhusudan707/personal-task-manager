import { useState } from "react";
import { Errors } from "@/types";
import { useFormData, useSaveOrUpdate } from "@/hooks";
import { initialFormData } from "@/LocalData";
import { useDataForm } from "@/contexts";

export const useFormValidation = () => {
  const { formData, handleInputChange } = useFormData(initialFormData);
  const { isCallSaveOrUpdate } = useSaveOrUpdate();
  const { titleRef, descriptionRef, statusRef } = useDataForm();

  const [errors, setErrors] = useState<Errors>({});

  const validateForm = (): boolean => {
    const newErrors: Errors = {};
    console.log(titleRef.current?.value);
    if (!formData.title && titleRef.current?.value === "") {
      newErrors.title = "Title is required.";
    }

    if (!formData.description && descriptionRef.current?.value === "") {
      newErrors.description = "Description is required.";
    }

    if (!formData.status && statusRef.current?.value === "") {
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

  return { formData, errors, validateForm, handleInputChange, handleSubmit };
};
