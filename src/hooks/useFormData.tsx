import { SetStateAction, useState } from "react";
import { formDataObject } from "@/types";
import debounce from "lodash.debounce";
export const useFormData = (initialFormData: formDataObject) => {
  const [formData, setFormData] = useState(initialFormData);
  const [prefilledFormData, setPrefilledFormData] = useState(initialFormData);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    const debouncedSetFormData = debounce(
      (data: SetStateAction<formDataObject>) => {
        setFormData(data);
      },
      1000
    );

    debouncedSetFormData((prevData: formDataObject) => ({
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
