import { FlexBoxContainer, Badge, Heading, Paragraph, Button } from ".";
import { TaskCardProps } from "@/types";
import { TrashIcon, PencilIcon } from "@heroicons/react/solid";
export const TaskCard: React.FC<TaskCardProps> = ({
  id,
  title,
  description,
  status,
  onEdit,
  onDelete,
}) => {
  const StatusStyle = new Map([
    ["completed", "bg-green-500"],
    ["progress", "bg-amber-500"],
    ["pending", "bg-red-500"],
  ]);
  return (
    <FlexBoxContainer className="bg-white p-4 rounded-lg shadow-md flex-col w-1/3 gap-y-8">
      <FlexBoxContainer className=" justify-between items-center gap-x-4">
        <FlexBoxContainer className="">
          <Badge
            className={`${StatusStyle.get(
              status
            )} text-xl px-4 py-0 text-white flex flex-col justify-center item-center h-8 w-36`}
          >
            {status}
          </Badge>
        </FlexBoxContainer>
        <FlexBoxContainer className=" self-end gap-x-4">
          <Button
            label="Edit"
            active={true}
            onClick={onEdit}
            variant="none"
            className={""}
          >
            <PencilIcon className="w-8 h-8 text-blue-500 " />
          </Button>
          <Button
            label="Delete"
            active={true}
            onClick={onDelete}
            variant="none"
            className={""}
          >
            <TrashIcon className="w-6 h-6 text-red-500" />
          </Button>
        </FlexBoxContainer>
      </FlexBoxContainer>

      <FlexBoxContainer className="flex-col gap-y-4 px-2">
        <Heading className="text-2x font-bold " text={title} />

        <Paragraph
          className="text-gray-600 text-2xl text-justify"
          text={description}
        />
      </FlexBoxContainer>
    </FlexBoxContainer>
  );
};
