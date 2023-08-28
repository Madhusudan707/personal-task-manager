import { Form } from "@/components";
import { ModalProps } from "@/types";
export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  HeadingLabel,
  SubHeadingLabel,
  ButtonLabel,
  label,
  formData,
}) => {
  const ModalElement = (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className=" p-6 rounded shadow-md">
        <Form
          HeadingLabel={HeadingLabel}
          SubHeadingLabel={SubHeadingLabel}
          ButtonLabel={ButtonLabel}
          label={label}
          onClose={onClose}
        />
      </div>
    </div>
  );
  return isOpen ? ModalElement : null;
};
