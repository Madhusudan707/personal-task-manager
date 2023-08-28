import { formDataObject } from "@/types";

export const statusOptions = [
  { value: "completed", label: "Completed" },
  { value: "progress", label: "Progress" },
  { value: "pending", label: "Pending" },
];

export const initialFormData: formDataObject = {
  title: "",
  description: "",
  status: "",
  user_id: "",
  id: "",
  doc_id: "",
};

export const baseStyles =
  "px-4 py-2 rounded-md font-semibold transition duration-300 focus:outline-none";

export const variantStyles = {
  primary: "bg-blue-500 text-white hover:bg-blue-600",
  secondary: "bg-gray-300 text-gray-800 hover:bg-gray-400",
  danger: "bg-red-500 text-white hover:bg-red-600",
  none: "bg-none text-black",
};

export const FlexBoxContainerStyle = {
  display: "flex",
};

export const staticImageLocation = "/assets/";
