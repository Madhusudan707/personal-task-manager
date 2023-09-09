import { TaskCard, FlexBoxContainer, Modal } from "@/components";
import {
  useTaskData,
  useFirestoreDataDelete,
  useModal,
  useTaskFilter,
} from "@/hooks";

import { TaskListProps, Task } from "@/types";

export const TaskList: React.FC<TaskListProps> = ({ filter }) => {
  const tasks = useTaskData();

  const { handleDelete } = useFirestoreDataDelete();
  const { isModalOpen, openModal, closeModal } = useModal();
  const { filteredTasks } = useTaskFilter(tasks, filter);

  return (
    <>
      <FlexBoxContainer className="w-full flex-col  gap-y-8 px-4 items-center py-8">
        {filteredTasks.map((task: Task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            status={task.status}
            onEdit={() => {
              openModal(task);
            }}
            onDelete={() => handleDelete(task.doc_id)}
          />
        ))}
      </FlexBoxContainer>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        HeadingLabel="Edit Task"
        SubHeadingLabel="Edit or Update Your Task here. Click save when you are done."
        ButtonLabel="Save Changes"
        label="update"
      />
    </>
  );
};
