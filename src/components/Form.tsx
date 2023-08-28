import { FormProps } from "@/types";
import {
  useSaveOrUpdate,
  useFormData,
  useFormValidation,
  useModal,
} from "@/hooks";
import { statusOptions, initialFormData } from "@/LocalData";
import {
  FlexBoxContainer,
  Heading,
  Paragraph,
  Label,
  Input,
  TextArea,
  Button,
  Select,
  ErrorMessage,
} from ".";
import { XIcon } from "@heroicons/react/solid";
export const Form: React.FC<FormProps> = ({
  HeadingLabel,
  SubHeadingLabel,
  ButtonLabel,
  label,
  onClose,
}) => {
  const { isCallSaveOrUpdate } = useSaveOrUpdate();
  const { formData, handleInputChange, prefilledFormData } =
    useFormData(initialFormData);

  const { errors } = useFormValidation();
  console.log(prefilledFormData);
  return (
    <FlexBoxContainer className="bg-white flex-col border rounded shadow-lg px-8 py-4 w-3/4 gap-y-8">
      <FlexBoxContainer className="justify-between">
        <FlexBoxContainer className="flex-col">
          <Heading
            className="w-full  font-semibold text-2xl"
            text={HeadingLabel}
          />
          <Paragraph
            className="text-gray-600  text-sm"
            text={SubHeadingLabel}
          />
        </FlexBoxContainer>
        <Button
          label={label}
          active={true}
          onClick={onClose}
          variant="none"
          className="self-end"
        >
          <XIcon className="w-12 h-12 text-red-500 cursor-pointer" />
        </Button>
      </FlexBoxContainer>

      <FlexBoxContainer className="flex-col gap-y-8">
        <FlexBoxContainer className="flex-col gap-y-2">
          <Label
            className="block text-gray-700 font-bold  text-xl"
            htmlFor="title"
            text="Title"
          />

          <Input
            type="text"
            className="shadow appearance-none border text-xl rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter title"
            value={label === "update" ? "custom title 1" : formData?.title}
            onChange={handleInputChange}
            name="title"
          />
          <Input
            type="hidden"
            className=""
            placeholder=""
            value={formData?.doc_id}
            onChange={() => {}}
            name="doc_id"
          />
          {errors.title && <ErrorMessage errorText={errors.title} />}
        </FlexBoxContainer>

        <FlexBoxContainer className="flex-col gap-y-2">
          <Label
            className="block text-gray-700 text-xl font-bold"
            htmlFor="title"
            text="Description"
          />

          <TextArea
            className="shadow appearance-none border text-xl rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter description"
            rows={8}
            cols={70}
            value={label === "update" ? "customDesc1" : formData?.description}
            name="description"
            onChange={handleInputChange}
          />
          {errors.description && (
            <ErrorMessage errorText={errors.description} />
          )}
        </FlexBoxContainer>

        <FlexBoxContainer className="flex-col gap-y-2">
          <Label
            className="block text-gray-700 text-xl font-bold"
            htmlFor="status"
            text="Select Status"
          />

          <Select
            options={statusOptions}
            className="shadow appearance-none border rounded w-full text-xl py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={label === "update" ? "pending" : formData?.status}
            name="status"
            onChange={handleInputChange}
          />
        </FlexBoxContainer>
        {errors.status && <ErrorMessage errorText={errors.status} />}
      </FlexBoxContainer>
      <Button
        label={label}
        active={true}
        onClick={() => isCallSaveOrUpdate(label, formData)}
        variant="primary"
        className={`w-1/3 bg-blue-500 self-end hover:bg-blue-700 text-xl text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
      >
        {ButtonLabel}
      </Button>
    </FlexBoxContainer>
  );
};
